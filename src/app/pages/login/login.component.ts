import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  rememberMe: boolean = false;

  constructor(private el: ElementRef) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
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

  setRememberMe() {
    this.rememberMe = !this.rememberMe;
  }

  inputSelected: boolean = false;
  marginBottomVh: number = 70;
  setMarginBottom(onFucus: boolean) {
    onFucus ? (this.inputSelected = true) : (this.inputSelected = false);
  }
}
