import { ChatService  } from '../shared/services/chat.service';
import { Component, ElementRef  } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
    selector: 'chat-component',
    template: `
		<div class="messages">\n\
      <h3>Object: {{currentMsg}}</h3>
			<h4>Recieved messages:</h4>
			<p *ngFor="let msg of messages">{{msg}}</p>
		</div>
	`
})
export class ChatComponent {
    private messages: any[] = [];
    private currentMsg: any = "";
    constructor(private chatService: ChatService) {
        this.subscribe(this.chatService);
    }

    private subscribe(chatService: ChatService) {
        chatService.messages.subscribe(msg => {
            let text: String = "origin: " + msg.origin + " data:" + msg.data;
            this.messages.push(text);
            this.currentMsg = text;
        });
    }
}