import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Ipost } from '../Models/ipost';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Ipost[]>(environment.postsUrl);
  }

  getSinglePost(id: number) {
    return this.http.get<Ipost>(`${environment.postsUrl}/${id}`);
  }

  sharePost(data: Partial<Ipost>) {
    return this.http.post<Ipost>(`${environment.postsUrl}`, data);
  }

  put(data: Partial<Ipost>) {
    return this.http.put<Ipost>(`${environment.postsUrl}/${data.id}`, data);
  }

  delete(id: number) {
    return this.http.delete<Ipost>(`${environment.postsUrl}/${id}`);
  }
}
