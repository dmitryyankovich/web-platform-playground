(function () {
    'use strict';

    var button = document.querySelector('button');

    button.addEventListener('click', function () {
        var text = window.parent.text;

        var textNode = document.createTextNode(text);
        document.body.appendChild(textNode);
    });

})();