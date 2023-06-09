import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IRegister } from '../Models/iregister';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { IAccessData } from '../Models/iaccess-data';
import { ILogin } from '../Models/ilogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  private authSubject = new BehaviorSubject<null | IAccessData>(null);
  authLogoutTimer: any;

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((data) => Boolean(data)));
  constructor(private http: HttpClient, private router: Router) {}

  register(user: IRegister) {
    return this.http
      .post<IRegister>(environment.registerUrl, user)
      .pipe(catchError(this.errors));
  }

  login(user: ILogin) {
    return this.http.post<IAccessData>(environment.logUrl, user).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('user', JSON.stringify(data));

        const expDate = this.jwtHelper.getTokenExpirationDate(
          data.accessToken
        ) as Date;
        this.autoLogout(expDate);
      }),
      catchError(this.errors)
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

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    if (this.authLogoutTimer) {
      clearTimeout(this.authLogoutTimer);
    }
  }

  autoLogout(expDate: Date) {
    const expMs = expDate.getTime() - new Date().getTime();
    this.authLogoutTimer = setTimeout(() => {
      this.logout();
    }, expMs);
  }

  errors(err: any) {
    switch (err.error) {
      case 'Email and Password are required':
        return throwError('Email e password obbligatorie');
        break;
      case 'Email already exists':
        return throwError('Utente esistente');
        break;
      case 'Email format is invalid':
        return throwError('Email scritta male');
        break;
      case 'Cannot find user':
        return throwError('utente inesistente');
        break;
      default:
        return throwError('Errore');
        break;
    }
  }
}
