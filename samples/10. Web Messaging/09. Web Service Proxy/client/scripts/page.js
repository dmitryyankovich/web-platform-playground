(function () {
    'use strict';


    var proxy = new Proxy();

    var button = document.querySelector('button');

    button.addEventListener('click', function () {
        proxy.ajax('http://127.0.0.1:8080/random', function (result) {
            var textNode = document.createTextNode(result.number);
            document.body.appendChild(textNode);
        });
    });

})();