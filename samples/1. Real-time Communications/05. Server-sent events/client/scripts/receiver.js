(function () {
    'use strict';


    var beginPolling = function (callback) {

        var source = new EventSource("/server-sent-events/captures");
        
        source.addEventListener('message', function (e) {
            var dataJson = e.data;
            var data = JSON.parse(dataJson);

            callback(data);
        })

    };


    window.addEventListener('load', function () {
        beginPolling(function (data) {
            for (var i = 0; i < data.length; i++) {
                var captureDataString = JSON.stringify(data[i]);
                console.log(captureDataString);
            }
        });
    });

})();