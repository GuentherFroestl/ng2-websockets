import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import {WebSocketService } from './websocket.service';

const CHAT_URL = 'ws://localhost:3005';

export interface Message {
	author: string,
	message: string,
	newDate?: string
}

@Injectable()
export class ChatService {
	public messages: Subject<Message>;

	constructor(wsService: WebSocketService) {
		this.messages = <Subject<Message>> wsService
			.connect(CHAT_URL)
			.map((response: MessageEvent): Message => {
				let msg : Message = JSON.parse(response.data);
				return {
					author: msg.author,
					message: msg.message,
					newDate : msg.newDate
				}
			});
	}
} // end class ChatService