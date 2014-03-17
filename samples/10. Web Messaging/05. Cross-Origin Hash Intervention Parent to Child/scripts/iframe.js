  (function () {
    'use strict';

    var baseLocation;

    var button = document.querySelector('button');
    var input = document.querySelector('input');

    button.addEventListener('click', function () {
        window.parent.location = baseLocation + '#' + input.value; 
    });

    window.addEventListener('hashchange', function () {
        baseLocation = decodeURIComponent(location.hash.substr(1));
    });

})();