var server = require('../../../../shared/server');
var io = require('socket.io');

server.start(null, function (server) {
    var ioServer = io.listen(server)

    ioServer.sockets.on('connection', function (socket) {
        socket.on('say', function (message) {
            ioServer.sockets.emit('said', message);
        });

        socket.on('disconnect', function () {
            ioServer.sockets.emit('User disconnected');
        });
    });
});