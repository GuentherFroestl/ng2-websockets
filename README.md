# ng2.0-websockets
Example project of using WebSockets in an Angular 2 application.
The project is aimed to provide a playground for starting angular2 WebSocket features within a given project.

This project consists of two parts, a client (angular2 release and server part (Nodejs 4.x).

## Server
- Download or clone the repo and run `npm install` in the server directory to install server dependencies.
- Currently the server only has a dependency on js-websockets
- Run `node server.js` or `nodemon server.js` to start the server.
- The server is started on localhost:3005.

The only purpose of this simple server is to start a websocket server and accept incoming connections. Once a message is posted to the server, it is transformed by adding the local time to the incoming object and then echoed back to the client. 

## Client
- Download or clone the repo and run `npm install` to install dependencies.
- Make sure the server is already started before you try to start the client (as it is trying to connect to the ws-server on startup).
- run `npm start` to start the client.
- Typ a message in the messagebox. It should reappear in the list of messages.

Messages are always in the format of a Message-object in the following format:
```javascript
interface Message {
	author: string,
	message: string,
	newDate?: string
}
```
## Responses via WebSocket
The message send is 10 x send by the server via teh WebSocket (the field newDate is added and updated by the server).

## Credits
forked from PeterKassenaar/ng2-websockets
