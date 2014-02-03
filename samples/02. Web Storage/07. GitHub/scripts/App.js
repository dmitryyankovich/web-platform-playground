(function(window) {
    'use strict';

    window.App = {
        entryPoint: function () {
            App.Database.init(function() {
                App.GitHub.getRepositories('alexeiskachykhin', function(repositories) {
                    repositories.forEach(function(repository) {
                        App.Database.insert(repository);
                    });

                    App.Database.select(function(repository) {
                        console.log(repository);
                    });
                });
            });
        }
    };


    window.addEventListener('load', function() {
        App.entryPoint();
    });

})(window);