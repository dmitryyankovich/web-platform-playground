var app = require('../../../../shared/server').app;
var EventEmitter = require('events').EventEmitter;


app.set('data', { 
    captures: [],
    captureEvent: new EventEmitter()
});


app.get('/long-polling/captures', function(request, response){
    var captures = app.get('data').captures;
    var captureEvent = app.get('data').captureEvent;

    var onCapture = function () {
        var since = Number(request.query.since);

        var updatedCaptures = captures.filter(function (capture) {
            return (capture.timestamp > since);
        });

        response.json(updatedCaptures);
    };

    captureEvent.once('capture', onCapture);
});


app.post('/long-polling/captures', function(request, response) {
    var captures = app.get('data').captures;
    var captureEvent = app.get('data').captureEvent;

    captures.push(request.body);
    captureEvent.emit('capture');

    response.end();
});