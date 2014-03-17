(function(storage) {
    'use strict';

    debugger;

    var key = 'key-to-store';
    var value = 'value-to-store';

    var hasKey = storage.getItem(key);


    storage.setItem(key, value);

    var keyName = storage.key(0);
    var keyCount = storage.length;


    storage.removeItem(key);

    keyCount = storage.length;

})(window.localStorage);