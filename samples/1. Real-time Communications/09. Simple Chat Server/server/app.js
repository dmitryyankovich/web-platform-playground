var server = require('../../../../shared/server');
var WebSocketServer = require('ws').Server;

server.start(null, function (server) {
    var wss = new WebSocketServer({
	    server: server
    });

    wss.broadcast = function (data) {
        for(var i in this.clients) {
            this.clients[i].send(data);
        }
    };


    wss.on('connection', function (ws) {
        ws.on('message', function(message) {
            wss.broadcast(message);            
            console.log('received: %s', message);
        });
    });
});