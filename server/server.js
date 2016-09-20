// Very simple websocket server: echo incoming message to all connected clients
var ws = require('nodejs-websocket');
var server = ws.createServer(socketConnection).listen(3005);
function socketConnection(conn) {


  console.log(new Date().toLocaleTimeString(), 'New connection establishe at', "\n", conn.headers,
    "-------------------------------------------------------------------------------------------");

  conn.on('text', function (msg) {
    console.log(new Date().toLocaleTimeString(), 'connection received message', "\n", msg);
    // simple object transformation (= add current time)
    var msgObj = JSON.parse(msg);
    var myRepeater = startRepeater(msgObj); //schedule for repeating
    watchDog(myRepeater);

  });

  function broadcast(msgObj) {
    return function () {
      console.log(new Date().toLocaleTimeString(), "upadte and broadcast this object", msgObj);
      // echo message including the new field to all connected clients
      server.connections.forEach(function (conn) {
        var returnMsg = msgObj+" "+new Date().toLocaleTimeString();
        conn.sendText(returnMsg);
        console.log(new Date().toLocaleTimeString(), "send to connection this text:\n" + returnMsg);
      });
    };
  }


  function startRepeater(pNewMsg) {
    console.log(new Date().toLocaleTimeString(), "start repeater with text:\n" + pNewMsg);
    return setInterval(broadcast(pNewMsg), 1000);
  }

  function watchDog(pRepeater) {
    console.log(new Date().toLocaleTimeString(), "start watchdog");
    return setTimeout(stopTimer(pRepeater), 10000);
  }


  function stopTimer(pRepeater) {
    return function () {
      console.log(new Date().toLocaleTimeString(), "repeater stopped");
      clearInterval(pRepeater);
    };
  }


  conn.on('close', function (code, reason) {
    console.log('Connection closed.', new Date().toLocaleTimeString(), code, reason);
  });
}