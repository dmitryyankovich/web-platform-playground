var server = require('../../../../shared/server');
var WebSocketServer = require('ws').Server;

server.start(null, function (server) {
    var wss = new WebSocketServer({
	    server: server
    });

    wss.on('connection', function (ws) {
        ws.on('message', function(message) {
            console.log('received: %s', message);
        });

        ws.send('Hello to Web Socket client from Web Socket server!');
    });
});