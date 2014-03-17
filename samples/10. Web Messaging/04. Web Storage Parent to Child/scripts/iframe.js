(function () {
    'use strict';

    window.addEventListener('storage', function (e) {
        var text = e.newValue;

        var textNode = document.createTextNode(text);
        document.body.appendChild(textNode);
    });

})();