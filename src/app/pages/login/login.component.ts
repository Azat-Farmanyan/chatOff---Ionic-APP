import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  rememberMe: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log('Login page');
  }

  setRememberMe() {
    this.rememberMe = !this.rememberMe;
  }
  justifyContent = 'space-between';

  setMarginBottom(shouldSetMargin: boolean) {
    this.justifyContent = shouldSetMargin ? 'flex-start' : 'space-between';
  }
}
