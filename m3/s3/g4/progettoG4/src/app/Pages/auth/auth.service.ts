import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iregister } from './Models/iregister';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: Iregister) {
    return this.http.post<Iregister>(environment.registerUrl, user);
  }
}
