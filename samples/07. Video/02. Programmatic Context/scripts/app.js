(function () {
    'use strict';


    var video = document.querySelector('video');

    document.getElementById('play').addEventListener('click', function() {
        video.play();
    });
    
    document.getElementById('pause').addEventListener('click', function () {
        video.pause();
    });
    
    document.getElementById('stop').addEventListener('click', function () {
        video.pause();
        video.currentTime = 0;
    });

    document.getElementById('fullscreen').addEventListener('click', function () {
        var requestFullScreen = 
            video.requestFullScreen ||
            video.webkitRequestFullscreen ||
            video.mozRequestFullScreen;

        requestFullScreen.apply(video);
    });

})();