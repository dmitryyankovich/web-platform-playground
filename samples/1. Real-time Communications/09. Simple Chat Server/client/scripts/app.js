(function () {
    'use strict';

    var socket = new WebSocket("ws://localhost:8080");

    socket.addEventListener('open', function () {
        console.log('Connected');
    });

    socket.addEventListener('close', function () {
        console.log('Closed');
    });

    socket.addEventListener('error', function () {
        console.log('Error');
    });

    socket.addEventListener('message', function (e) {
        var message = e.data;

        var paragraphNode = document.createElement('p');
        paragraphNode.innerHTML = message;

        document.body.appendChild(paragraphNode);
    });




    var button = document.getElementsByTagName('button')[0];
    var input = document.getElementsByTagName('input')[0];

    button.addEventListener('click', function () {
        var text = input.value;
        socket.send(text);
    });

})();