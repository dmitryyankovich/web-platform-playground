(function () {
    'use strict';

    var urls = {
        'audio/mp3': 'http://images.apple.com/html5/showcase/audio/letsgosurfing-thedrums.mp3',
        'audio/ogg': 'http://www.apple.com/html5/showcase/audio/letsgosurfing-thedrums.ogg',
        'audio/mp4': 'http://a1.phobos.apple.com/us/r1000/011/Music/12/14/7f/mzm.ubzkrulq.aac.p.m4a',
    };


    function loadAudio() {
        var audio = document.querySelector('audio');

        for (var mimeType in urls) {
            if (urls.hasOwnProperty(mimeType)) {
                var source = document.createElement('source');
                source.type = mimeType;
                source.src = urls[mimeType];

                audio.appendChild(source);
            }
        }

        audio.load();
        audio.play();
    }

    document.getElementById('load-audio-button').addEventListener('click', function () {
        loadAudio();
    });

})();