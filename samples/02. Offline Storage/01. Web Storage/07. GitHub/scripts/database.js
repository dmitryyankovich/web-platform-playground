(function() {
    'use strict';

    var storageKey = 'items';

    App.Database = {
        init: function(callback) {
            sessionStorage.setItem(storageKey, JSON.stringify([]));
            
            if (typeof callback === 'function') {
                callback();
            }
        },

        insert: function(object) {
            var items = JSON.parse(sessionStorage.getItem(storageKey));
            items.push(object);

            sessionStorage.setItem(storageKey, JSON.stringify(items));
        },

        select: function(callback) {
            var items = JSON.parse(sessionStorage.getItem(storageKey));
            
            if (typeof callback === 'function') {
                callback(items);
            }
        }
    };
    
})();