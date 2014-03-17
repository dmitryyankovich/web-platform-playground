(function(storage) {
    'use strict';

    var video = document.querySelector('video');

    var playbackValue;
    

    video.addEventListener('play', function () {
        playbackValue = new Date().getTime();
        storage.setItem('play', playbackValue);
    });


    window.addEventListener('storage', function (e) {
        if ((e.key === 'play') && (e.newValue != playbackValue)) {
            video.pause();
        }
    });

})(window.localStorage);