import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

// if condition is false then the element that this directive lives in will be created and added to DOM
@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {

  constructor(private template: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  @Input() set appStructural(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.template);
    }
  }
}
