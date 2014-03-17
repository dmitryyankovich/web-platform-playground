(function(storage) {
    'use strict';

    var video = document.querySelector('video');
    
    video.addEventListener('play', function () {
        var playbackValue = new Date().getTime();
        storage.setItem('play', playbackValue);
    });


    window.addEventListener('storage', function (e) {
        if (e.key === 'play') {
            video.pause();
        }
    });

})(window.localStorage);