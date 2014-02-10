(function() {
    'use strict';

    App.GitHub = {
        getRepositories: function(userId, callback) {
            var searchUrl = ('https://api.github.com/users/{userId}/repos')
                .replace('{userId}', userId);

            return $.getJSON(searchUrl);
        }
    };

})();