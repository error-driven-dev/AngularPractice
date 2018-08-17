import { Component, OnInit } from '@angular/core';
import { createWiresService } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-vador',
  templateUrl: './vador.component.html',
  styleUrls: ['./vador.component.css']
})
export class VadorComponent implements OnInit {
vadorSays = 'Component, I am your father!';
lukeSays = '';
  constructor() { }
  ngOnInit() {
  }

onListener({lPhrases}) {
  console.log(lPhrases);
  this.lukeSays = lPhrases;
}

}
