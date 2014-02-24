(function() {
    'use strict';

    App.Database = {
        init: function (callback) {
            var connection = indexedDB.open('OpenStreetDB', 1);

            connection.addEventListener('upgradeneeded', function (e) {
                var db = e.target.result;

                if (db.objectStoreNames.contains('tiles')) {
                    db.deleteObjectStore('tiles');
                }

                db.createObjectStore('tiles', {
                    autoIncrement: true
                });
            });

            connection.addEventListener('success', function (e) {
                this.database = e.target.result;

                if (typeof callback === 'function') {
                    callback();
                }
            }.bind(this));
        },

        insert: function(object, callback) {
            var transaction = this.database.transaction(['tiles'], 'readwrite');
            var store = transaction.objectStore('tiles');
            
            store.put(object);

            transaction.addEventListener('complete', function () {
                if (typeof callback === 'function') {
                    callback();
                }
            })
        },

        select: function (callback) {
            var transaction = this.database.transaction(['tiles'], 'readonly');
            var store = transaction.objectStore('tiles');

            var results = [];
            var cursor = store.openCursor();

            cursor.addEventListener('success', function (e) {
                var cursor = e.target.result;

                if (!cursor) {
                    if (typeof callback === 'function') {
                        callback(results);
                    }

                    return;
                }

                results.push(cursor.value);
                cursor.continue();
            });
        }
    };
    
})();