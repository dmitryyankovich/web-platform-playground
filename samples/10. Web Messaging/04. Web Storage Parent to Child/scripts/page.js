(function () {
    'use strict';

    var button = document.querySelector('button');
    var iframe = document.querySelector('iframe');
    var input = document.querySelector('input');


    button.addEventListener('click', function () {
        sessionStorage.setItem('message', input.value);
    });

})();