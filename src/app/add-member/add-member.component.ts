import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})

// INPUTS FROM HTML WILL BIND TO PROPERTIES
export class AddMemberComponent  {
newTeamMember = '';
newLevel = '';
@Output() memberCreated = new EventEmitter<{name: string, level: string}>();


// TODO: THIS WILL PUSH NEW INPUT INTO PARENT COMP MEMBER ARRAY
onAddMember(data) {

 this.memberCreated.emit({
   name: this.newTeamMember,
   level: this.newLevel
 });


}


}
