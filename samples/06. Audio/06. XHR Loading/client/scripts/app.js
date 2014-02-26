(function () {
    'use strict';

    var urls = {
        'audio/mp3': '/audio/mp3/letsgosurfing-thedrums.mp3',
        'audio/ogg': '/audio/ogg/letsgosurfing-thedrums.ogg',
        'audio/mp4': '/audio/mp4/mzm.ubzkrulq.aac.p.m4a',
    };


    function fetchBlob(url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'blob';

        request.addEventListener('load', function () {
            var url = URL.createObjectURL(this.response);
            callback(url);
        });

        request.send();
    }

    function loadAudio() {
        var audio = document.querySelector('audio');

        for (var mimeType in urls) {
            if (urls.hasOwnProperty(mimeType)) {
                if (audio.canPlayType(mimeType)) {
                    var url = urls[mimeType];

                    fetchBlob(url, function (blobUrl) {
                        audio.src = blobUrl;

                        audio.load();
                        audio.play();
                    });

                    break;
                }
            }
        }
    }


    document.getElementById('load-audio-button').addEventListener('click', function () {
        loadAudio();
    });

})();