import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {
  

  constructor(private elementref: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.elementref.nativeElement, 'backgroundColor', 'yellow');
  }
}
