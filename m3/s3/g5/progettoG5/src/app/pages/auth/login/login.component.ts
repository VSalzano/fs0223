import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAccessData } from 'src/app/Models/iaccess-data';
import { LogUser } from 'src/app/Models/log-user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authSvc: AuthService) {}

  sub(f: NgForm) {
    this.authSvc
      .login(new LogUser(f.value.email, f.value.password))
      .subscribe((data: IAccessData) => {
        console.log(data);
      });
  }
}
