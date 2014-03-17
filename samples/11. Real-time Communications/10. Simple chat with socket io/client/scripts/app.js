(function () {
    'use strict';


    var socket = io.connect('http://localhost:8080');

    socket.on('said', function (message) {
        var paragraphNode = document.createElement('p');
        paragraphNode.innerHTML = message;

        document.body.appendChild(paragraphNode)
    });



    var button = document.getElementsByTagName('button')[0];
    var input = document.getElementsByTagName('input')[0];

    button.addEventListener('click', function () {
        var text = input.value;
        socket.emit('say', text);
    });

})();