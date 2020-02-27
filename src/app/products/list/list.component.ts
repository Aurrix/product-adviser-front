import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';
import { ProductDto } from '../dtos/product.dto';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public products:ProductDto[];
  public isServiceAvalible:boolean=true;

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().toPromise().then(data=>{
      this.products = data;
    }).catch(error=>{
      if(error instanceof TimeoutError || error.name =="HttpErrorResponse") {
        this.isServiceAvalible = false;
      }
    });
  }

}
