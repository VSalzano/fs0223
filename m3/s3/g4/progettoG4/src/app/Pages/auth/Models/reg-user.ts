import { Iregister } from './iregister';

export class RegUser implements Iregister {
  name: string;
  surname: string;
  email: string;
  password: string;

  constructor(name: string, surname: string, email: string, password: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
  }
}
