(function() {
    'use strict';

    App.Database = {
        init: function (callback) {
            var self = this;
            

            var connection = indexedDB.open('GitHubDB', 1);

            connection.addEventListener('upgradeneeded', function (e) {
                var db = e.target.result;

                if (db.objectStoreNames.contains('Repositories')) {
                    db.deleteObjectStore('Repositories');
                }

                db.createObjectStore('Repositories', {
                    keyPath: 'id'
                });
            });

            connection.addEventListener('success', function (e) {
                self.database = e.target.result;

                if (typeof callback === 'function') {
                    callback();
                }
            });
        },

        insert: function(objects, callback) {
            var transaction = this.database.transaction(['Repositories'], 'readwrite');
            var store = transaction.objectStore('Repositories');
            
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
            var transaction = this.database.transaction(['Repositories'], 'readonly');
            var store = transaction.objectStore('Repositories');

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