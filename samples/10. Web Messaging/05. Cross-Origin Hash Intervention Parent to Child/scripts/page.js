(function () {
    'use strict';

    var iframe = document.querySelector('iframe');


    window.addEventListener('hashchange', function () {
        var textNode = document.createTextNode(location.hash);
        document.body.appendChild(textNode);
    });


    window.addEventListener('load', function () {
        var location = iframe.src + '#' + encodeURIComponent(window.location);
        iframe.contentWindow.location = location;
    });

})();