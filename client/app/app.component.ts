import {Component} from '@angular/core';

@Component({
	selector: 'ws-app',
	template:`
		<h1>Angular 2 (ts) WebSockets example</h1>		
		<create-message></create-message>
		<hr />	
		<chat-component></chat-component>						
	`	
})
export class AppComponent{
	
}