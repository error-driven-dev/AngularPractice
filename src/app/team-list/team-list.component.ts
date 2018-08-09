import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent  {
  // this property will get data as input from parent, binding item in team array to member object
  // any element hosting this component(injecting the selector into its html) will be able to bind to this property
  // using [member] = "some data from host" in the selector tag
@Input() member: { name: string, level: string};


}
