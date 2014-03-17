(function() {
    'use strict';

    App.Lorempixel = {
        getImage: function(imageOptions, callback) {
            var url = ('/lorempixel/{width}/{height}/{category}/?' + Date.now())
                .replace('{width}', imageOptions.width)
                .replace('{height}', imageOptions.height)
                .replace('{category}', imageOptions.category);


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

        renderImage: function(image) {
            var imageElement = new Image();
                            
            imageElement.addEventListener('load', function () {
                URL.revokeObjectURL(this.src);
            });
                            
            imageElement.src = URL.createObjectURL(image);
            document.body.appendChild(imageElement);
        },

        renderImages: function(images) {
            images.forEach(function(image) {
                this.renderImage(image);
            }.bind(this));
        }
    };

})();