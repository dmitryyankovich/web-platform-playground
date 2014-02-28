var app = require('../../../../shared/server').app;
var proxy = require('proxy-middleware');
var url = require('url');

app.use('/video', proxy(url.parse('http://movies.apple.com/media/us/html5/showcase/2011/demos/')));