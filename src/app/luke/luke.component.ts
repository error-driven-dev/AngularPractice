import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-luke',
  templateUrl: './luke.component.html',
  styleUrls: ['./luke.component.css']
})
export class LukeComponent implements OnInit {
@Input() vWords: string;
 lWords: string;

 @Output() outData = new EventEmitter<{lPhrases: string}> ();





  constructor() { }

  ngOnInit() {
  
  }
 onSpeak(){
   this.outData.emit({lPhrases: this.lWords});
   console.log(this.lWords);
 }

}
