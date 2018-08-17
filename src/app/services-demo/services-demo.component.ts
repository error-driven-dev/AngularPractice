import { Component, OnInit } from '@angular/core';
import { LoggingService } from './services/log.service';

@Component({
  selector: 'app-services-demo',
  templateUrl: './services-demo.component.html',
  styleUrls: ['./services-demo.component.css'],
  providers: [LoggingService]
})
export class ServicesDemoComponent implements OnInit {
  msg: string; constructor(private logger: LoggingService) { }

  ngOnInit() {
    
  }


}
