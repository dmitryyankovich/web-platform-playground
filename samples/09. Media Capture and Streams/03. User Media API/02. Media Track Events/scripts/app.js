(function () {
    'use strict';


    var video = document.getElementsByTagName('video')[0];

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


            stream.addEventListener('ended', function () {
                console.log('Stream has endeed');
            });

            stream.addEventListener('addtrack', function () {
                console.log('Track has been added');
            });

            stream.addEventListener('removetrack', function () {
                console.log('Track has been removed');
            });



            var tracks = stream.getVideoTracks();

            tracks.forEach(function (track) {
                console.log(track);

                track.addEventListener('started', function () {
                    console.log('Track has started');
                });

                track.addEventListener('muted', function () {
                    console.log('Track has been muted');
                });

                track.addEventListener('unmuted', function () {
                    console.log('Track has been muted');
                });

                track.addEventListener('overconstrained', function () {
                    console.log('Track is overconstrained');
                });

                track.addEventListener('ended', function () {
                    console.log('Track has ended');
                });
            });
        },
        function (e) {
            console.log(e);
        }
    );

})();