var connect = require('connect')
var http = require('http');

var app = connect()
    .use(connect.static(__dirname + '/../samples'))
    .use(connect.directory(__dirname + '/../samples'))
    .use(connect.query())
    .use(connect.json());


exports.start = function (beforeStart, afterStart) {
    if (typeof beforeStart === 'function') {
        beforeStart(app, connect);
    }

    var server = http.createServer(app).listen(8080);

    if (typeof afterStart === 'function') {
        afterStart(server);
    }
};