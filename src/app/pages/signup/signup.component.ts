import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  justifyContent = 'space-between';

  inputSelected: boolean = false;
  marginBottomVh: number = 70;
  setMarginBottom(onFucus: boolean) {
    onFucus ? (this.inputSelected = true) : (this.inputSelected = false);
  }
}
