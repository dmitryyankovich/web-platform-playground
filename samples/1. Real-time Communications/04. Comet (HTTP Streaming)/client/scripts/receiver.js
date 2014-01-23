(function () {
    'use strict';

    var lastUpdateTime = new Date();


    var poll = function () {

        var request = new XMLHttpRequest();
        request.open('GET', '/http-streaming/captures?since=' + lastUpdateTime.getTime(), true);
        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader('Content-Type', 'application/json');

        request.addEventListener('load', function () {
            var data = JSON.parse(this.responseText);

            callback(data);
        });

        request.send();

        return request;
    };

    var beginPolling = function (callback) {

        var pollingInterval = 500;
        var delimiter = '----';

        var request;
        var currentPosition = 0;

        request = poll();

        setInterval(function () {
            var updatedResponse = request.responseText.substr(currentPosition);
            var lastPositionOfDelimiter = updatedResponse.lastIndexOf(delimiter);

            if (lastPositionOfDelimiter > -1) {
                var parts = updatedResponse.substring(0, lastPositionOfDelimiter);
                var partsJson = parts.split(delimiter);

                for (var i = 0; i < partsJson.length; i++) {
                    var partJson = partsJson[i];
                    var partData = JSON.parse(partJson);

                    callback(partData);
                }

                currentPosition += (lastPositionOfDelimiter + delimiter.length);
            }

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