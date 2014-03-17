(function () {
    'use strict';


    var video = document.querySelector('video');

    video.addEventListener('loadedmetadata', function () {
        console.log('Video is now ready.');
    });



    if (!navigator.getUserMedia) {
        navigator.getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;
    }

    navigator.getUserMedia(
        {
            video: true
        },
        function (stream) {
            video.src = URL.createObjectURL(stream);
        },
        function (e) {
            console.log(e);
        }
    );

})();