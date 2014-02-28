(function () {
    'use strict';

    var video = document.querySelector('video');

    document.getElementById('rotation').addEventListener('change', function () {
        var transform = ["rotateY(", this.value, 'deg)'].join('');

        video.style.transform = transform;
        video.style.webkitTransform = transform;
        video.style.msTransform = transform;
    });
})();