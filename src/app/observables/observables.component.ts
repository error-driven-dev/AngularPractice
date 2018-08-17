import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription } from 'rxjs';
import { ObservablesService } from './observables.service';
import { CustomObservablesService } from './observables.service.1';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
  providers:[ObservablesService, CustomObservablesService]
})
export class ObservablesComponent implements OnInit, OnDestroy {
  needACounter: Subscription;
  needAMessage: Subscription;

  constructor(private obsService: ObservablesService, private customObs: CustomObservablesService) { }

  ngOnInit() {
    this.needACounter = this.obsService.counter.subscribe(
      number => console.log(number)
    );
    this.needAMessage = this.customObs.customObservable.subscribe(
      data => console.log(data), error =>console.log(error), ()=> console.log('The fun ends after 10 seconds')
    );
  }
    
    ngOnDestroy() {
      this.needACounter.unsubscribe();

    
    }
  


}
