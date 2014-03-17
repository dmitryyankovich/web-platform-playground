(function() {
    'use strict';

    App.Database = {
        init: function (callback) {
            var connection = indexedDB.open('GitHubDB', 1);

            connection.addEventListener('upgradeneeded', function (e) {
                var db = e.target.result;

                if (db.objectStoreNames.contains('repositories')) {
                    db.deleteObjectStore('repositories');
                }

                db.createObjectStore('repositories', {
                    keyPath: 'id'
                });
            });

            connection.addEventListener('success', function (e) {
                this.database = e.target.result;

                if (typeof callback === 'function') {
                    callback();
                }
            }.bind(this));
        },

        insert: function(objects, callback) {
            var transaction = this.database.transaction(['repositories'], 'readwrite');
            var store = transaction.objectStore('repositories');
            
            objects.forEach(function (object) {
                store.put(object);
            });

            transaction.addEventListener('complete', function () {
                if (typeof callback === 'function') {
                    callback();
                }
            })
        },

        select: function (callback) {
            var transaction = this.database.transaction(['repositories'], 'readonly');
            var store = transaction.objectStore('repositories');

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