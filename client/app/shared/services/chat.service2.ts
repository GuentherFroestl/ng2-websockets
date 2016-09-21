import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
//import {WebSocketService } from './websocket.service';

import {$WebSocket} from 'angular2-websocket/angular2-websocket'

//const CHAT_URL = 'ws://172.27.15.128:8080/softwarecatalogmgmt-softwarespec/wx/v1/notifier';
//const CHAT_URL = 'ws://localhost:3005';

const CHAT_URL = 'ws://sapp-dev-02:8080/softwarecatalogmgmt-softwarespec/wx/v1/notifier';

/*
 * ws://172.27.15.128:8080/softwarecatalogmgmt-softwarespec/wx/v1/notifier 

 */


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