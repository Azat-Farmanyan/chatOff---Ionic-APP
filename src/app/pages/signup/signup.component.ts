import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  inputSelected: boolean = false;
  marginBottomVh: number = 70;

  form: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
  setMarginBottom(onFucus: boolean) {
    onFucus ? (this.inputSelected = true) : (this.inputSelected = false);
  }
}
