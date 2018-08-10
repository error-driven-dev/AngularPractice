import { Directive, HostBinding, Input, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '../../../node_modules/@angular/compiler/testing';

@Directive({
  selector: '[appDynamicBindingDirective]'
})
export class DynamicBindingDirectiveDirective {
  @Input() defaultColor = 'purple';
  @Input() altColor = 'orange';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor() { }
  @HostListener('mouseenter') mouseover (eventData:Event){
    this.backgroundColor = this.altColor;
  }

  @HostListener('mouseleave') mouseoff(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
  

  }

