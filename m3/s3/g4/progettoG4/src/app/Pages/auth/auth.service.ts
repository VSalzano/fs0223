import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iregister } from './Models/iregister';
import { environment } from 'src/environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { IAccessData } from './Models/iaccess-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  private authSubject = new BehaviorSubject<null | IAccessData>(null);

  constructor(private http: HttpClient) {}

  register(user: Iregister) {
    return this.http.post<Iregister>(environment.registerUrl, user);
  }
}
