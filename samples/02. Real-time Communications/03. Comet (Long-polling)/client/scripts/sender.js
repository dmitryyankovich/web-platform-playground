(function () {
    'use strict';

    function notifyServer(e) {

        var data = {
            x: e.x,
            y: e.y,
            timestamp: new Date().getTime()
        };

        var dataJson = JSON.stringify(data);


        var request = new XMLHttpRequest();
        request.open('POST', '/long-polling/captures', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(dataJson);
    };


    function throttle(f, period) {

        var throttlingTimeout;

        var throttled = function () {
            if (throttlingTimeout) {
                return;
            }

            throttlingTimeout = setTimeout(function () {
                throttlingTimeout = null;
            }, period);

            return f.apply(this, arguments);
        };


        return throttled;
    };



    document.addEventListener('mousemove', throttle(notifyServer, 250));

})();