var app = require('../../../../shared/server').app;


app.set('data', { captures: [] });


app.get('/polling/captures', function(request, response){
    var captures = app.get('data').captures;
    var since = Number(request.query.since);

    var updatedCaptures = captures.filter(function (capture) {
        return (capture.timestamp > since);
    });

    response.json(updatedCaptures);
});


app.post('/polling/captures', function(request, response) {
    var captures = app.get('data').captures;
    captures.push(request.body);

    response.end();
});