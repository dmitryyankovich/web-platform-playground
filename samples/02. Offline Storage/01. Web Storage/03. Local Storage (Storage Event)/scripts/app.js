(function(storage) {
    'use strict';

    window.addEventListener('storage', function(e) {
        var valueText = document.createElement('p');
        valueText.textContent = e.newValue;

        var body = document.querySelector('body');
        body.appendChild(valueText);
    });


    var item = new Date().getTime();
    storage.setItem(item, item);

})(window.localStorage);