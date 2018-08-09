import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';

//  1.LOOP THRU TEAM ARRAY AND DISPLAY EACH OBJECT AS A SEPARATE COMPONENT
// HOW (FORMATTING) THE DATA WILL BE DISPLAYED IS CAPTURED IN THE CHILD COMPONENT
  team = [{name: 'beth' , level: 'advanced'}, {name: 'Bruce', level: 'beginner'}];

  onMemberAdded({name, level}) {
        this.team.push({name: name, level: level});

  }
}
