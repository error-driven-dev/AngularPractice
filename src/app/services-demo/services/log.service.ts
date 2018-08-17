import {EventEmitter, Output} from '@angular/core';

// service can be data and methods


export class LoggingService {
private messages: string[] = ['seed message here'];
@Output() msgAdded = new EventEmitter<string[]>();

    addMessage(msg: string){
        console.log('MESSAGE: ' + msg);
        this.messages.push(msg);
        // emits a new copy when new message is added to array
        return this.msgAdded.emit(this.messages.slice());
               
    }

    getMessages() {
        return this.messages.slice();
    }

}