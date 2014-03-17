(function () {
    'use strict';


    function Proxy() {

        var requestId = 0;

        var requests = {};

        var iframe = document.querySelector('iframe');


        var ajax = function (url, callback) {
            requestId++;
            
            requests[requestId] = callback;

            iframe.contentWindow.postMessage({
                url: url,
                requestId: requestId
            }, 'http://127.0.0.1:8080');
        };


        (function () {
            window.addEventListener('message', function (e) {
                if (e.source === iframe.contentWindow) {
                    var requestId = e.data.requestId;
                    var request = requests[requestId];

                    request(e.data.result);
                }
            });
        })();


        return {
            ajax: ajax
        };
    }

    window.Proxy = Proxy;

})();