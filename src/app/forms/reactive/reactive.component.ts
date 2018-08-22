import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  registration: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registration = new FormGroup(
      {
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
        'securityQ': new FormControl('choose', [Validators.required]),
        'securityA': new FormControl(null, [Validators.required]),
        'gender': new FormControl('male', [Validators.required]),
        'references': new FormArray([])
      }
    );

  }
onSubmit(){
  console.log(this.registration);
  
}
onAddRef() {
  (<FormArray>this.registration.get('references')).push(new FormControl(null, Validators.required));
}
}
