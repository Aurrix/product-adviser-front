import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel } from '../dtos/customer.model';
import { environment } from 'src/environments/environment';
import { ProductDto } from 'src/app/products/dtos/product.dto';

@Injectable({ providedIn: 'root' })
export class RecommedationService {
    constructor(private http: HttpClient) { }
    public submitRequest(customer: CustomerModel) {
        return this.http.post<ProductDto[]>(environment.productServiceBaseUrl + "recommendations", customer);
    }
}