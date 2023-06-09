import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegUser } from 'src/app/Models/reg-user';
import { AuthService } from 'src/app/Services/auth.service';

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
      .subscribe((data: any) => console.log(data));
  }
}
