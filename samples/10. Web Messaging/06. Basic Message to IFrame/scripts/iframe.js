(function () {
    'use strict';

    window.addEventListener('message', function (e) {
        if (e.origin === 'http://localhost:8080') {
            var textNode = document.createTextNode(e.data);
            document.body.appendChild(textNode);
        }
    });

})();