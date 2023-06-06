import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss'],
})
export class TdFormComponent {
  @ViewChild('f', { static: true }) form!: NgForm;

  submit(form: NgForm) {
    console.log(form);
    console.log(form.form.value);
    this.form.reset();
  }
}
