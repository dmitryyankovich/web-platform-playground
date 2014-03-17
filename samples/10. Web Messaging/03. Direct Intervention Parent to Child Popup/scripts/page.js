(function () {
    'use strict';

    var openPopupButton = document.getElementById('open-popup-button');
    var getDataButton = document.getElementById('get-data-button');

    var iframe = document.querySelector('iframe');
    var popup;

    getDataButton.addEventListener('click', function () {
        if (!popup) {
            return;
        }

        var text = popup.text;
        
        var textNode = document.createTextNode(text);
        document.body.appendChild(textNode);
    });

    openPopupButton.addEventListener('click', function () {
        popup = window.open('iframe.html');
    });

})();