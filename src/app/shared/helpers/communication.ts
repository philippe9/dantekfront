/**
 * @classdesc Service for communication between components
 * @author Melo
 * @version 1.1.0
 * @copyright Melo 2020
 * @name RequestService
 */



import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class CommunicationService {
  private subject = new Subject<any>();


  sendMessage(message: any) {
    this.subject.next({ state: message });
    console.log(message);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    console.log(this.subject);
    return this.subject.asObservable();
  }
}
