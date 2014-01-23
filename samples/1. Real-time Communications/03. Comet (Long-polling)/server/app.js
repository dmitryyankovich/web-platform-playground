var server = require('../../../../shared/server');
var EventEmitter = require('events').EventEmitter;

var captures = [];
var captureEvent = new EventEmitter();

server.start(function (app, connect) {
    app.use('/long-polling/captures', function(request, response) {
        if (request.method === 'POST') {
            captures.push(request.body);
            response.end();

            captureEvent.emit('capture');
        }

        if (request.method === 'GET') {
            captureEvent.once('capture', function () {
                var since = Number(request.query.since);

                var updatedCaptures = captures.filter(function (capture) {
                    return (capture.timestamp > since);
                });

                response.setHeader('Content-Type', 'application/json');
                response.end(JSON.stringify(updatedCaptures));
            });
        }
    });
});