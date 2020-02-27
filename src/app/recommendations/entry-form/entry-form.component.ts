import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/products/dtos/product.dto';
import { RecommedationService } from '../services/recommendations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerModel } from '../dtos/customer.model';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  public results: ProductDto[];
  public showResults: boolean = false;
  public form: FormGroup;
  public isRequesting: boolean = false;
  public isServiceAvalible = true;

  constructor(private recommendationService: RecommedationService, private fBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fBuilder.group({
      age: ['', [Validators.required, Validators.max(120), Validators.min(16)]],
      student: [''],
      income: ['', [Validators.required, Validators.min(0)]]
    });
  }

  public submit() {
    if (this.form.valid) {
      this.showResults = !this.showResults;
      this.isRequesting = true;
      const customer: CustomerModel = {
        age: this.age.value,
        student: this.student.value,
        income: this.income.value
      };

      this.recommendationService.submitRequest(customer).toPromise().then(data => {
        this.results = data;
      }).catch(error=>{
        if(error instanceof TimeoutError || error.name =="HttpErrorResponse") {
          this.isServiceAvalible = false;
        }
        console.error(error);
      }).finally(() => {
          this.isRequesting = false;
        });
    }

    else {
      this.form.markAllAsTouched();
    }
  }

  public reset() {
    this.showResults = !this.showResults;
    this.form.reset();
  }

  get age() {
    return this.form.get('age');
  }

  get student() {
    return this.form.get('student');
  }

  get income() {
    return this.form.get('income');
  }
}


