var app = require('../../../../shared/server').app;

app.get('/random', function(request, response){
    var result = {
        number: Math.random()
    };

    response.json(result);
});