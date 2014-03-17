(function () {
    'use strict';

    var port;


    function connect(p) {
        port = p;

        port.addEventListener('message', function (e) {
            handleMessage(e.data);
        });

        port.start();
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
        if (e.source === window.parent) {
            connect(e.ports[0]);
        }
    });


    var button = document.querySelector('button');
    button.addEventListener('click', sendMessage);

})();