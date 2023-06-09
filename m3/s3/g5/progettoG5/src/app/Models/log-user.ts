import { ILogin } from './ilogin';

export class LogUser implements ILogin {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
