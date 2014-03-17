var httpServer = require('../../../../shared/server').httpServer;
var WebSocketServer = require('ws').Server;


var wss = new WebSocketServer({
	server: httpServer
});


wss.on('connection', function (ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
    });

    ws.send('Hello to Web Socket client from Web Socket server!');
});
