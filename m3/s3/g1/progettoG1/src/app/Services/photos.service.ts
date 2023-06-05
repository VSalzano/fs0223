import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../Models/photo';
@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Photo[]>(this.apiUrl);
  }
}
