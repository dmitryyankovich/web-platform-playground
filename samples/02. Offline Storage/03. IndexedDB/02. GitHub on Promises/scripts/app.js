(function(window) {
    'use strict';

    window.App = {
        entryPoint: function () {

            App.Database.init()
                .then(function (server) {
                    return App.GitHub.getRepositories('alexeiskachykhin')
                })
                .then(function (repositories) {
                    return App.Database.insert(repositories);
                })
                .then(function () {
                    return App.Database.select();
                })
                .then(function (repositories) {
                    console.log(repositories);
                });
        }
    };


    window.addEventListener('load', function() {
        App.entryPoint();
    });

})(window);