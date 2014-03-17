(function() {
    'use strict';

    App.Database = {
        init: function () {
            var openOperation = db.open({
                server: 'GitHubDB',
                version: 1,
                schema: {
                    repositories: {
                        key: { keyPath: 'id' }
                    }
                }
            });

            openOperation.done(function(database) {
                this.database = database;
            }.bind(this));

            return openOperation;
        },

        insert: function(objects) {
            var store = this.database.repositories;
            var insertOperation = store.update.apply(store, objects);

            return insertOperation;
        },

        select: function () {
            var queryOperation = this.database.repositories
                .query()
                .all()
                .execute();

            return queryOperation;
        }
    };
    
})();