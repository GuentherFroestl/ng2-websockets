import { Component } from '@angular/core';
import { ChatService2 } from '../shared/services/chat.service2';

const CHAT_URL = 'ws://sapp-dev-02:8080/softwarecatalogmgmt-softwarespec/rs/v1/notifications';

@Component({
    selector: 'create-message',
    template: `
	<h3>message to be broadcasted</h3>	
		<form>
		  <div class="input-group col-xs-8">
                <input
                    [(ngModel)]="message"
                    name="msg"                    
                    type="text"
                    class="form-control"
                    placeholder="type in a message...">
                <span class="input-group-btn">
                    <button class="btn btn-secondary" (click)="sendMsg(message)">send</button>
                </span>
            </div>
		</form>\n\
<div class="messages">\n\
      <h3>Object: {{currentMsg}}</h3>
			<h4>Recieved messages:</h4>
			<p *ngFor="let msg of messages">{{msg}}</p>
		</div>
	`,
})
export class CreateMessage {
    btnDisabled: boolean = false;
    private message = "ping";


    constructor(private chatService: ChatService2) {

    }

    sendMsg(msg: String) {
        console.log("send message " + msg);
        if (!this.chatService.open) {
            this.chatService.connect(CHAT_URL);
            this.chatService.ws.getDataStream().subscribe(res => {
                console.log("got response", res);
            });
        }
        this.chatService.ws.send(msg).subscribe(res => {
            console.log("got response", res);
        });
    }
}