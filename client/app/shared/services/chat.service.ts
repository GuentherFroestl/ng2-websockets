import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import {WebSocketService } from './websocket.service';

//const CHAT_URL = 'ws://172.27.15.128:8080/softwarecatalogmgmt-softwarespec/wx/v1/notifier';
//const CHAT_URL = 'ws://localhost:3005';
//const CHAT_URL = 'ws://echo.websocket.org';

//const CHAT_URL = 'ws://sapp-dev-02:8080/softwarecatalogmgmt-softwarespec/rs/v1/notifications';
const CHAT_URL = 'ws://sapp-dev-03:8080/softwarecatalogmgmt-softwarespec/rs/v1/notifications';

/*
 * ws://172.27.15.128:8080/softwarecatalogmgmt-softwarespec/wx/v1/notifier 

 */


@Injectable()
export class ChatService {
    public messages: Subject<any>;
    private wsService: WebSocketService;

    constructor(wsService: WebSocketService) {
        this.connect(wsService, CHAT_URL);
    }

    private connect(wsService: WebSocketService, url: String) {
        this.wsService = wsService;
        this.messages = <Subject<any>>wsService
            .connect(url)
            .map(res => res);
    }

    public changeUrl(url: String) {
        this.wsService.disconnect();
        this.connect(this.wsService, url);
    }
} // end class ChatService