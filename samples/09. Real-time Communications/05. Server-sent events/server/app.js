var app = require('../../../../shared/server').app;
var util = require('util');
var EventEmitter = require('events').EventEmitter;


app.set('data', { 
    captures: [],
    captureEvent: new EventEmitter()
});


app.get('/server-sent-events/captures', function(request, response){
    response.writeHead(200, {
        'Content-Type': 'text/event-stream'
    });


    var since = new Date().getTime();

    var onCapture = function () {
        var captures = app.get('data').captures;
        
        var updatedCaptures = captures.filter(function (capture) {
            return (capture.timestamp > since);
        });

        since = new Date().getTime();

        var data = JSON.stringify(updatedCaptures);
        response.write(util.format('data:%s\n\n', data));
    };

    var captureEvent = app.get('data').captureEvent;
    captureEvent.on('capture', onCapture);
});


app.post('/server-sent-events/captures', function(request, response) {
    var captures = app.get('data').captures;
    var captureEvent = app.get('data').captureEvent;

    captures.push(request.body);
    captureEvent.emit('capture');

    response.end();
});