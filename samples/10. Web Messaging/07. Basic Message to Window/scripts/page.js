(function () {
    'use strict';

    var button = document.querySelector('button');
    var text = document.querySelector('input');
    var popup;

    button.addEventListener('click', function () {
        popup.postMessage(text.value, 'http://localhost:8080');
    });

    window.addEventListener('load', function () {
        popup = window.open('iframe.html');
    });

})();