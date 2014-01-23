var server = require('../../../../shared/server');


var captures = [];

server.start(function (app, connect) {
    app.use('/polling/captures', function(request, response) {
        if (request.method === 'POST') {
            captures.push(request.body);
            response.end();
        }

        if (request.method === 'GET') {
            var since = Number(request.query.since);

            var updatedCaptures = captures.filter(function (capture) {
                return (capture.timestamp > since);
            });

            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify(updatedCaptures));
        }
    });
});