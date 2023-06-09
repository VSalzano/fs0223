import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IRegister } from '../Models/iregister';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, tap } from 'rxjs';
import { IAccessData } from '../Models/iaccess-data';
import { ILogin } from '../Models/ilogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  private authSubject = new BehaviorSubject<null | IAccessData>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((data) => Boolean(data)));
  constructor(private http: HttpClient) {}

  register(user: IRegister) {
    return this.http.post<IRegister>(environment.registerUrl, user);
  }

  login(user: ILogin) {
    return this.http.post<IAccessData>(environment.logUrl, user).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('user', JSON.stringify(data));

        const expDate = this.jwtHelper.getTokenExpirationDate(
          data.accessToken
        ) as Date;
      })
    );
  }

  restoreUser() {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      return;
    }
    const user: IAccessData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(user.accessToken)) {
      return;
    }
  }
}
