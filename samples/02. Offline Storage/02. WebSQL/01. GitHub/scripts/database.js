(function() {
    'use strict';

    App.Database = {
        init: function(callback) {
            var databaseName = 'GitHub';
            var version = '';
            var displayName = 'Database for handling GitHub repositories';
            var estimatedSize = 5 * 1024 * 1024;

            this.database = openDatabase(databaseName, version, displayName, estimatedSize);

            if (this.database.version === '') {
                this.database.changeVersion('', '1', function (tx) {
                    tx.executeSql('CREATE TABLE Repositories (Id INT, Name TEXT, FullName TEXT)');
                });
            }

            callback();
        },

        insert: function(object) {
            this.database.transaction(function(tx) {
                tx.executeSql('INSERT INTO Repositories VALUES(?, ?, ?)', [object.id, object.name, object.full_name]);
            });
        },

        select: function(callback) {
            this.database.transaction(function(tx) {
                tx.executeSql('SELECT Id, Name, FullName FROM Repositories', [], function(tx, results) {
                    var entities = [];
                    var rows = results.rows;

                    for (var i = 0, length = rows.length; i < length; i++) {
                        var row = rows.item(i);

                        var entity = {
                            id: row.Id,
                            name: row.Name,
                            full_name: row.FullName
                        };

                        entities.push(entity);
                    }


                    if (typeof callback === 'function') {
                        callback(entities);
                    }
                });
            });
        }
    };
    
})();