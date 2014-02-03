var express = require('express');
var path = require('path');
var open = require('open');
var url = require('url');

var app = express()
    .use(express.static(path.join(__dirname, '..', 'samples')))
    .use(express.directory(path.join(__dirname, '..', 'samples')))
    .use(express.json());

var httpServer = app.listen(8080, function () {
    var startPageUrl = url.format({
        protocol: 'http:',
        hostname: 'localhost',
        port: httpServer.address().port
    });

    open(startPageUrl);
});


module.exports = {
    app: app,
    httpServer: httpServer
};