(function () {
    'use strict';

    var button = document.querySelector('button');
    var input = document.querySelector('input');

    button.addEventListener('click', function () {
        window.text = input.value;
    });

})();