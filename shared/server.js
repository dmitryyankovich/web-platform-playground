var express = require('express');
var path = require('path');

var app = express()
    .use(express.static(path.join(__dirname, '..', 'samples')))
    .use(express.directory(path.join(__dirname, '..', 'samples')))
    .use(express.json());

var httpServer = app.listen(8080);

module.exports = {
    app: app,
    httpServer: httpServer
};