import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegUser } from '../Models/reg-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authSvc: AuthService) {}

  sub(f: NgForm) {
    this.authSvc
      .register(
        new RegUser(
          f.value.name,
          f.value.surname,
          f.value.email,
          f.value.password
        )
      )
      .subscribe((data) => console.log(data));
  }
}
