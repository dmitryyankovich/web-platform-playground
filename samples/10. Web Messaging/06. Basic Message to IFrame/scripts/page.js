(function () {
    'use strict';

    var button = document.querySelector('button');
    var text = document.querySelector('input');
    var iframe = document.querySelector('iframe');

    button.addEventListener('click', function () {
        iframe.contentWindow.postMessage(text.value, 'http://localhost:8080');
    });

})();