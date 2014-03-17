(function () {
    'use strict';

    var alice = document.getElementById('alice').contentWindow;
    var bob = document.getElementById('bob').contentWindow;


    window.addEventListener('message', function (e) {
        if (e.data === 'connect') {
            bob.postMessage('connect', 'http://127.0.0.2:8080', e.ports);
        }
    });

    window.addEventListener('load', function (e) {
        alice.postMessage('connect', 'http://127.0.0.1:8080');
    });

})();