(function () {
    'use strict';

    var lastUpdateTime = new Date();


    var poll = function (callback) {
        var request = new XMLHttpRequest();
        request.open('GET', '/long-polling/captures?since=' + lastUpdateTime.getTime(), true);
        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader('Content-Type', 'application/json');

        request.addEventListener('load', function () {
            var data = JSON.parse(this.responseText);

            callback(data);
        });

        request.send();
    };

    var beginPolling = function (callback) {

        var pollingInterval = 500;

        setTimeout(function () {
            var pollTime = new Date();

            poll(function (data) {
                callback(data);

                lastUpdateTime = new Date(data[data.length - 1].timestamp);
                beginPolling(callback);
            });
        }, pollingInterval);
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