(function(storage) {
    'use strict';

    var totalAmountOfGarbage = 0;
    var garbageKey = 0;
    var garbageValue = Array(511).join('a'); // 1K string


    var body = document.querySelector('body');


    function putGarbage() {
        garbageKey++;

        try {
            storage.setItem(garbageKey, garbageValue);
        }
        catch (e) {
            localStorage.clear();
            body.innerHTML += '<br>' + 'LocalStorage is full!';
            return;
        }
        
        totalAmountOfGarbage += garbageValue.length * 2;

        body.innerHTML = totalAmountOfGarbage + ' Byte(s)';

        setTimeout(putGarbage, 0);
    }


    putGarbage();

})(window.localStorage);