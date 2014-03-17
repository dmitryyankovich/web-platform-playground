(function() {
    'use strict';

    App.GitHub = {
        getRepositories: function(userId, callback) {
            var searchUrl = ('https://api.github.com/users/{userId}/repos')
                .replace('{userId}', userId);

            var request = new XMLHttpRequest();
            request.open('GET', searchUrl, true);
            request.setRequestHeader('Accept', 'application/json');

            request.addEventListener('load', function () {
                var data = JSON.parse(this.responseText);

                callback(data);
            });

            request.send();
        }
    };

})();