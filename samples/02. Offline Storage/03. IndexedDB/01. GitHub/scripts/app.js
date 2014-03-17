(function(window) {
    'use strict';

    window.App = {
        entryPoint: function () {
            App.Database.init(function() {
                App.GitHub.getRepositories('alexeiskachykhin', function(repositories) {
                    App.Database.insert(repositories, function () {
                        App.Database.select(function(repositories) {
                            console.log(repositories);
                        });
                    });
                });
            });
        }
    };


    window.addEventListener('load', function() {
        App.entryPoint();
    });

})(window);