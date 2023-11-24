import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  rememberMe: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log('Login page');
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
