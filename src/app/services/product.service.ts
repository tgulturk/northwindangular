import { Product } from './../core/models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = `${environment.apiUrl}products`;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.baseUrl);

  }

  getListByCategoryId(categoryId: number): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(`${this.baseUrl}?categoryId=${categoryId}`);

  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product);
  }

}
