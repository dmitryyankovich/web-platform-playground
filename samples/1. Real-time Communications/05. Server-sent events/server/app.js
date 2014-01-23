var server = require('../../../../shared/server');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var captures = [];
var captureEvent = new EventEmitter();

server.start(function (app, connect) {
    app.use('/server-sent-events/captures', function(request, response) {
        if (request.method === 'POST') {
            captures.push(request.body);
            response.end();

            captureEvent.emit('capture');
        }

        if (request.method === 'GET') {
            response.writeHead(200, {
                'Content-Type': 'text/event-stream'
            });


            var since = new Date().getTime();

            captureEvent.on('capture', function () {
                var updatedCaptures = captures.filter(function (capture) {
                    return (capture.timestamp > since);
                });

                since = new Date().getTime();

                var data = JSON.stringify(updatedCaptures);
                response.write(util.format('data:%s\n\n', data));
            });
        }
    });
});