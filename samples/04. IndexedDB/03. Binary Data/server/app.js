var app = require('../../../../shared/server').app;
var http = require('http');

app.get('/proxy', function(request, response){
    var url = request.query.url;

    http.get(url, function(proxyResponse) {
        proxyResponse.pipe(response);
    });
});