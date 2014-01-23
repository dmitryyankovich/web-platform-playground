var server = require('../../../../shared/server');
var EventEmitter = require('events').EventEmitter;

var captures = [];
var captureEvent = new EventEmitter();

server.start(function (app, connect) {
    app.use('/http-streaming/captures', function(request, response) {
        if (request.method === 'POST') {
            captures.push(request.body);
            response.end();

            captureEvent.emit('capture');
        }

        if (request.method === 'GET') {
            response.writeHead(200, {
                'Content-Type': 'multipart/x-mixed-replace'
            });

            captureEvent.on('capture', function () {
                var since = Number(request.query.since);

                var updatedCaptures = captures.filter(function (capture) {
                    return (capture.timestamp > since);
                });

                response.write(JSON.stringify(updatedCaptures));
                response.write('----');
            });
        }
    });
});