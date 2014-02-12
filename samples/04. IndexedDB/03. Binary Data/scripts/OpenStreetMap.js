(function() {
    'use strict';

    App.OpenStreetMap = {
        getTile: function(tileOptions, callback) {
            var url = ('http://tile.openstreetmap.org/{zoom}/{x}/{y}.png')
                .replace('{zoom}', tileOptions.zoom)
                .replace('{x}', tileOptions.x)
                .replace('{y}', tileOptions.y);

            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.responseType = 'blob';

            request.addEventListener('load', function () {
                var blob = this.response;

                if (typeof callback === 'function') {
                    callback(blob);
                }
            });

            request.send();
        },

        renderTile: function(tile) {
            var image = new Image();
                            
            image.addEventListener('load', function () {
                URL.revokeObjectURL(this.src);
            });
                            
            image.src = URL.createObjectURL(tile);
            document.body.appendChild(image);
        },

        renderTiles: function(tiles) {
            tiles.forEach(function(tile) {
                this.renderTile(tile);
            }.bind(this));
        }
    };

})();