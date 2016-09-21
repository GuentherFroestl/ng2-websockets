import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import {WebSocketService } from './websocket.service';

//const CHAT_URL = 'ws://172.27.15.128:8080/softwarecatalogmgmt-softwarespec/wx/v1/notifier';
//const CHAT_URL = 'ws://localhost:3005';

const CHAT_URL = 'ws://sapp-dev-02:8080/softwarecatalogmgmt-softwarespec/wx/v1/notifier';

/*
 * ws://172.27.15.128:8080/softwarecatalogmgmt-softwarespec/wx/v1/notifier 

 */


@Injectable()
export class ChatService {
    public messages: Subject<any>;

    constructor(wsService: WebSocketService) {
        this.messages = <Subject<any>>wsService
            .connect(CHAT_URL)
            .map(res => res);
    }
} // end class ChatService