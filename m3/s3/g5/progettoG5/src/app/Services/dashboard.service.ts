import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<IProduct[]>(environment.productsUrl);
  }

  getSinglePost(id: number) {
    return this.http.get<IProduct>(`${environment.productsUrl}/${id}`);
  }

  newProduct(data: Partial<IProduct>) {
    return this.http.post<IProduct>(`${environment.productsUrl}`, data);
  }

  put(data: Partial<IProduct>) {
    return this.http.put<IProduct>(
      `${environment.productsUrl}/${data.id}`,
      data
    );
  }

  delete(id: number | undefined) {
    return this.http.delete<IProduct>(`${environment.productsUrl}/${id}`);
  }
}
