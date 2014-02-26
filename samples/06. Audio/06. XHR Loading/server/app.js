var app = require('../../../../shared/server').app;
var proxy = require('proxy-middleware');
var url = require('url');

app.use('/audio/mp3', proxy(url.parse('http://images.apple.com/html5/showcase/audio/')));
app.use('/audio/mp4', proxy(url.parse('http://a1.phobos.apple.com/us/r1000/011/Music/12/14/7f/')));
app.use('/audio/ogg', proxy(url.parse('http://www.apple.com/html5/showcase/audio/')));