import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

export class Communication {
    private subject = new Subject<any>();
    constructor() {

    }

    sendMessage(message: any) {
        this.subject.next({ state: message });
        // console.log(message);
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        console.log(this.subject);
        return this.subject.asObservable();
    }
}
