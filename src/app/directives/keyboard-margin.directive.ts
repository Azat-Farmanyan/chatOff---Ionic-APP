import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeyboardMargin]',
})
export class KeyboardMarginDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus', ['$event.target'])
  onFocus(target: any) {
    console.log(target);
    this.calculateAndSetMargin(target);
  }

  @HostListener('blur', ['$event.target'])
  onBlur(target: any) {
    console.log(target);
    this.renderer.setStyle(target, 'margin-bottom', '0');
  }

  private calculateAndSetMargin(target: any) {
    const keyboardHeight = 300; // You may need to adjust this value based on your app and device
    const marginBottom = keyboardHeight + 'px';
    this.renderer.setStyle(target, 'margin-bottom', marginBottom);
  }
}
