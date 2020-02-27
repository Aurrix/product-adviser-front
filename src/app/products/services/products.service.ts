import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDto } from '../dtos/product.dto';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class ProductService {

    constructor(private http: HttpClient) { }
    public getAll() {
        return this.http.get<ProductDto[]>(environment.productServiceBaseUrl + "products");
    }
}