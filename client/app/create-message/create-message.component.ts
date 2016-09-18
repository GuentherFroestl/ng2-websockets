import { Component } from '@angular/core';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'create-message',
  template: `
	<h3>message to be broadcasted</h3>	
		<form>
		  <div class="input-group col-xs-8">
                <input
                    [(ngModel)]="message.message"
                    name="msg"                    
                    type="text"
                    class="form-control"
                    placeholder="type in message...">
                <span class="input-group-btn">
                    <button class="btn btn-secondary" (click)="sendMsg()">send</button>
                </span>
            </div>
		</form>
	`,
})
export class CreateMessage {
  btnDisabled: boolean = false;
  private message = {
    author: 'Testuser',
    message: ''
  }
  constructor(private chatService: ChatService) {

  }

  sendMsg() {
    // console.log('new message from client: ', this.message);
    this.chatService.messages.next(this.message);
    this.message.message = '';
  }
}