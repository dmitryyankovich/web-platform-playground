var app = require('../../../../shared/server').app;
var proxy = require('proxy-middleware');
var url = require('url');

app.use('/lorempixel', proxy(url.parse('http://lorempixel.com')));