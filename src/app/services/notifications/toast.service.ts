import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private messageSource = new BehaviorSubject('no message');
  constructor() { }

  /*
    Service method used to change the message in the toast
  */
  newMessage(message: string) {
    this.messageSource.next(message);
  }
}
