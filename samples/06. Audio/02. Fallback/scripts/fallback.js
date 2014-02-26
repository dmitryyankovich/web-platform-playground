(function () {
    'use strict';


    var song = document.getElementById('song');

    var canPlay = song.canPlayType && 
        (song.canPlayType('audio/ogg') || 
         song.canPlayType('audio/mp3'));

    if (!canPlay) {
        AudioPlayer.setup('flash/player.swf', {
            width: 200
        });

        AudioPlayer.embed("song", {
            soundFile: 'http://images.apple.com/html5/showcase/audio/letsgosurfing-thedrums.mp3'
        });
    }

})();