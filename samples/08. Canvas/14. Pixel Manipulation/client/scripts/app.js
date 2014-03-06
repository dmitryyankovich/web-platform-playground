(function () {
    'use strict';

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    var image = document.querySelector('.source-image');
    var imageFromCanvas = document.querySelector('.destination-image');

    image.addEventListener('load', function () {
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;

        context.drawImage(this, 0, 0);


        var pixelData = context.getImageData(0, 0, canvas.width, canvas.height);
        pixelData = invertColors(pixelData);
        context.putImageData(pixelData, 0, 0);


        imageFromCanvas.src = canvas.toDataURL();
    });


    var invertColors = function (pixelData) {
        var pixels = pixelData.data;

        for (var i = 0; i < pixels.length; i += 4) {
            pixels[i + 0] = 255 - pixels[i + 0];
            pixels[i + 1] = 255 - pixels[i + 1];
            pixels[i + 2] = 255 - pixels[i + 2];
        }

        return pixelData;
    };

})();