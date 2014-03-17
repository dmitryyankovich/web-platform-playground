(function () {
    'use strict';

    var device = document.querySelector('device');
    var video = document.querySelector('video');

    device.addEventListener('change', function (stream) {
        video.src = stream.url;
    });

})();