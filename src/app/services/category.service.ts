import { environment } from './../../environments/environment';
import { Category } from './../core/models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: string = `${environment.apiUrl}categories`;

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<Category[]> {
    return this.httpClient
      .get<Category[]>(this.baseUrl);

  }
}
