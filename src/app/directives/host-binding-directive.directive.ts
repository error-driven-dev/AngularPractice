import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBindingDirective]'
})
export class HostBindingDirectiveDirective {
  @HostBinding('style.color') textColor = 'blue';
  constructor() { }

  @HostListener('click') mouseclick(eventData: Event) {
    this.textColor = 'red';
  }
}
