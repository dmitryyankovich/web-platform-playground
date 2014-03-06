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

        imageFromCanvas.src = canvas.toDataURL();
    });

})();