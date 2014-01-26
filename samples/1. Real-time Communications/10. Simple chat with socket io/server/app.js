var httpServer = require('../../../../shared/server').httpServer;
var io = require('socket.io').listen(httpServer);


io.sockets.on('connection', function (socket) {
    socket.on('say', function (message) {
        io.sockets.emit('said', message);
    });

    socket.on('disconnect', function () {
        io.sockets.emit('User disconnected');
    });
});