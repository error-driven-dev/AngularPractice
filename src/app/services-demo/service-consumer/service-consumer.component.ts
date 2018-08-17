import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/log.service';

@Component({
  selector: 'app-service-consumer',
  templateUrl: './service-consumer.component.html',
  styleUrls: ['./service-consumer.component.css']
})
export class ServiceConsumerComponent implements OnInit {
  cMessages: string[];
  constructor( private logger: LoggingService) { }

  ngOnInit() {
    this.cMessages = this.logger.getMessages();
    // subscribing to changes in the messages array in the service
    this.logger.msgAdded.subscribe(
      (messages => this.cMessages = messages)
    );
    
  }

}
