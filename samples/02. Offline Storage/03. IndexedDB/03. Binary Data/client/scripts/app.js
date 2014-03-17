(function(window) {
    'use strict';

    window.App = {
        entryPoint: function () {
            App.Database.init(function() {
                var imageOptions = {
                    width: 400,
                    height: 400,
                    category: 'cats'
                };

                App.Lorempixel.getImage(imageOptions, function(image) {
                    App.Database.insert(image, function() {
                        App.Database.select(function(images) {
                            App.Lorempixel.renderImages(images);
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