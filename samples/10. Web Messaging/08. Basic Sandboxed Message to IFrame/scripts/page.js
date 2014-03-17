(function () {
    'use strict';

    var button = document.getElementsByTagName('button')[0];
    var text = document.getElementsByTagName('input')[0];
    var iframe = document.getElementsByTagName('iframe')[0];

    button.addEventListener('click', function () {
        iframe.contentWindow.postMessage(text.value, 'http://localhost:8080');
    });

})();