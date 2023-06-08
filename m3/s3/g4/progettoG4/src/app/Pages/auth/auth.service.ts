import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iregister } from './Models/iregister';
import { environment } from 'src/environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { IAccessData } from './Models/iaccess-data';
import { LoginUser } from './Models/login-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  private authSubject = new BehaviorSubject<null | IAccessData>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((data) => Boolean(data)));

  constructor(private http: HttpClient) {}

  register(user: Iregister) {
    return this.http.post<Iregister>(environment.registerUrl, user);
  }

  login(user: LoginUser) {
    return this.http
      .post<IAccessData>(environment.logUrl, user)
      .pipe(tap((data) => {}));
  }
}
