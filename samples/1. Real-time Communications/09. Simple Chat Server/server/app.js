var httpServer = require('../../../../shared/server').httpServer;
var WebSocketServer = require('ws').Server;


var wss = new WebSocketServer({
    server: httpServer
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
