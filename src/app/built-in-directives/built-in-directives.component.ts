import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directives',
  templateUrl: './built-in-directives.component.html',
  styleUrls: ['./built-in-directives.component.css']
})
export class BuiltInDirectivesComponent implements OnInit {
 numbers = [1, 2, 3, 4, 5];
 odd = [1, 3, 5];
 even = [ 2,  4];
 onlyOdd = false;

 
  constructor() { }

  ngOnInit() {
  }

}
