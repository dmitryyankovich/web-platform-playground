(function () {
    'use strict';


    var audio = document.querySelector('audio');

    document.getElementById('play').addEventListener('click', function() {
        audio.play();
    });
    
    document.getElementById('pause').addEventListener('click', function () {
        audio.pause();
    });
    
    document.getElementById('stop').addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
    });

    document.getElementById('volume').addEventListener('change', function () {
        audio.volume = this.value;
    });
    
    document.getElementById('playbackRate').addEventListener('change', function () {
        audio.playbackRate = this.value;
    });

    document.getElementById('time').addEventListener('change', function () {
        audio.currentTime = this.value * audio.duration;
    });

})();