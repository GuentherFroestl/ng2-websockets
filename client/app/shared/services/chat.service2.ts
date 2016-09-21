import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import {$WebSocket} from 'angular2-websocket/angular2-websocket'


@Injectable()
export class ChatService2 {
    public ws : $WebSocket;
    public open : boolean = false;

//    constructor(wsService: WebSocketService) {
//        this.messages = <Subject<any>>wsService
//            .connect(CHAT_URL)
//            .map(res => res);
//    }
//    
    public connect(url){
        this.ws = new $WebSocket(url);
        this.open = true;
        this.ws.getDataStream().subscribe(res =>{
            console.log("got response",res);
        });
    }
    
    public disconnect(){
        this.ws.close(true);
        this.open=false;
    }
} // end class ChatService