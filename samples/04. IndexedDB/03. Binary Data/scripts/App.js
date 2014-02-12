(function(window) {
    'use strict';

    window.App = {
        entryPoint: function () {
            App.Database.init(function() {
                var tileOptions = { 
                    zoom: 10, 
                    x: 590, 
                    y: 329 
                };

                App.OpenStreetMap.getTile(tileOptions, function(tile) {
                    App.Database.insert(tile, function() {
                        App.Database.select(function(tiles) {
                            App.OpenStreetMap.renderTiles(tiles);
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