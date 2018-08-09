import { Directive, ElementRef, OnInit } from '@angular/core';

// CUSTOM DIRECTIVE THAT TURNS BACKGROUND OF ELEMENT GREEN
// IMPORTED AND DECLARE IN MODULE FILE
// SQUARE BRACKETS ARE INSTRUCTION TO ANGULAR ON HOW TO TREAT SELECTOR BUT IS NOT USED IN HTML
@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit{

  constructor(private elementRef: ElementRef) {  }
  
  // DIRECTIVES HAVE OnInit LIFECYCLE HOOK -- BUT NOT ALL OF THEM
  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';

  }

}
