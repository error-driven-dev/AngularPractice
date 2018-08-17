import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/log.service';

@Component({
  selector: 'app-service-producer',
  templateUrl: './service-producer.component.html',
  styleUrls: ['./service-producer.component.css']
})
export class ServiceProducerComponent implements OnInit {
  msg: string;
  constructor( private logger: LoggingService) { }

 
 
  ngOnInit() {
  }
  onSendMessage() {
    this.logger.addMessage(this.msg);
    this.msg = '';
  }
}
