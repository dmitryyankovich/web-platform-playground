var app = require('../../../../shared/server').app;
var EventEmitter = require('events').EventEmitter;


app.set('data', { 
    captures: [],
    captureEvent: new EventEmitter()
});


app.get('/http-streaming/captures', function(request, response){
    response.writeHead(200, {
        'Content-Type': 'multipart/x-mixed-replace'
    });


    var onCapture = function () {
        var captures = app.get('data').captures;
        var since = Number(request.query.since);

        var updatedCaptures = captures.filter(function (capture) {
            return (capture.timestamp > since);
        });

        response.write(JSON.stringify(updatedCaptures));
        response.write('----');
    };

    var captureEvent = app.get('data').captureEvent;
    captureEvent.on('capture', onCapture);
});


app.post('/http-streaming/captures', function(request, response) {
    var captures = app.get('data').captures;
    var captureEvent = app.get('data').captureEvent;

    captures.push(request.body);
    captureEvent.emit('capture');

    response.end();
});