import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class WebSocketService {
    private subject: Rx.Subject<any>;
    private  ws : WebSocket;

    public connect(url): Rx.Subject<any> {
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    }
    
    public disconnect(){
        this.ws.close();
    }

    private create(url): Rx.Subject<String> {
        this.ws = new WebSocket(url);

        let observable = Rx.Observable.create(
            (obs: Rx.Observer<any>) => {
                this.ws.onmessage = obs.next.bind(obs);
                this.ws.onerror = obs.error.bind(obs);
                this.ws.onclose = obs.complete.bind(obs);

                return this.ws.close.bind(this.ws);
            })

        let observer = {
            next: (data: Object) => {
                if (this.ws.readyState === WebSocket.OPEN) {
                    this.ws.send(JSON.stringify(data));
                }
            }
        }


        return Rx.Subject.create(observer, observable);
    }

} // end class WebSocketService