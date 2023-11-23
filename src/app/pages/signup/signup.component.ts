import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  justifyContent = 'space-between';

  setMarginBottom(shouldSetMargin: boolean) {
    this.justifyContent = shouldSetMargin ? 'flex-start' : 'space-between';
  }
}
