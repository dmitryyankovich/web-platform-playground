(function () {
    'use strict';

    function get(url, callback) {
        var request = new XMLHttpRequest();

        request.addEventListener('load', function (e) {
            var result = JSON.parse(request.responseText);
            callback(result);
        });

        request.open('GET', url, true);
        request.send();
    };


    window.addEventListener('message', function (e) {
        get(e.data.url, function (result) {
            var response = {
                requestId: e.data.requestId,
                result: result
            };

            window.parent.postMessage(response, e.origin);
        });
    });

})();