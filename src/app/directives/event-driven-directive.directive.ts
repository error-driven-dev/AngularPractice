import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appEventDrivenDirective]'
})
export class EventDrivenDirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

 @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
  }
  @HostListener('mouseleave') mouseaway(eventData: Event) {
     this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
     
   }

}
