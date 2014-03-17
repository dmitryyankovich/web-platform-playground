(function () {
    'use strict';

    var button = document.querySelector('button');
    var iframe = document.querySelector('iframe');

    button.addEventListener('click', function () {
        var text = iframe.contentWindow.text;

        var textNode = document.createTextNode(text);
        document.body.appendChild(textNode);
    });

})();