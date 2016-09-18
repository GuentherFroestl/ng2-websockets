import { ChatService, Message  } from '../shared/services/chat.service';
import { Component, ElementRef  } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'chat-component',
  template: `
		<div class="messages">\n\
      <h3>Object: {{currentMsg.author}} sayed: "{{currentMsg.message}}" last braodcast at: {{currentMsg.newDate}}</h3>
			<h4>Recieved messages:</h4>
			<p *ngFor="let msg of messages">{{msg.author}} sayed: "{{msg.message}}" send at: {{msg.newDate}}</p>
		</div>
	`
})
export class ChatComponent {
  private messages: Message[] = [];
  private currentMsg: Message =
  {
    author: "",
    message: "",
    newDate: ""
  };
  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      this.messages.push(msg);
      this.currentMsg = msg;
    });
  }
}