(function () {
    'use strict';

    var port;


    function connect() {
        var messageChannel = new MessageChannel();

        messageChannel.port1.addEventListener('message', function (e) {
            handleMessage(e.data);
        });

        messageChannel.port1.start();


        port = messageChannel.port1;


        window.parent.postMessage('connect', 'http://localhost:8080', [messageChannel.port2]);
    };

    function handleMessage(m) {
        var textNode = document.createTextNode(m);
        document.body.appendChild(textNode);
    };

    function sendMessage() {
        var input = document.querySelector('input');
        var text = input.value;

        port.postMessage(text);
    };



    window.addEventListener('message', function (e) {
        if (e.data === 'connect') {
            connect();
        }
    });


    var button = document.querySelector('button');
    button.addEventListener('click', sendMessage);

})();