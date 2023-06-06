import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      authData: this.fb.control({
        name: this.fb.control(null, [Validators.required]),
        alterego: this.fb.control(null),
        enemy: this.fb.control(null),
        planet: this.fb.control(null, [Validators.required]),
        weakness: this.fb.control(null),
      }),
    });
  }

  addPower() {
    let control = new FormControl(null);
    (this.form.get('powers') as FormArray).push(control);
  }

  getPowers() {
    return (this.form.get('powers') as FormArray).controls;
  }
}
