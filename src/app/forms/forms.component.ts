import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  defaultQuestion = 'choose';
  radioOptions = ['male', 'female'];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formRef: NgForm){
    console.log(formRef);
    console.log(formRef.value.username);
 
  }
}
