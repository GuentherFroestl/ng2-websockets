// modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';

// services
import { ChatService2 } from './shared/services/chat.service2';
import { WebSocketService } from './shared/services/websocket.service';

// components
import { AppComponent } from './app.component';
import { CreateMessage } from './create-message/create-message.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, ChatComponent, CreateMessage],
	providers: [ChatService2, WebSocketService],
	bootstrap: [AppComponent]
})
export class AppModule { }
