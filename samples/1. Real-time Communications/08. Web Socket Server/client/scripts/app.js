(function (window, undefined) {
    'use strict';


    var printMessage = function (message) {
        var p = document.createElement('p');
        p.textContent = message;

        document.body.appendChild(p);
    };


    var socket = new WebSocket("ws://localhost:8080");

    socket.addEventListener('open', function () {
        printMessage('Connected to Web Socket server!');
    });

    socket.addEventListener('message', function (e) {
        printMessage(e.data);
        socket.send('Hello back from Web browser!');
    });

})(window);