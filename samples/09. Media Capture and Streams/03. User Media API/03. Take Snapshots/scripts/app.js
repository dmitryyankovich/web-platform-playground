(function () {
    'use strict';


    var snapshotsContainer = document.getElementById('snapshots');
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');


    var video = document.querySelector('video');

    video.addEventListener('loadedmetadata', function () {
        canvas.width = this.videoWidth;
        canvas.height = this.videoHeight;
    });

    video.addEventListener('click', function () {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        var snapshot = document.createElement('img');
        snapshot.src = canvas.toDataURL();
        snapshotsContainer.appendChild(snapshot);
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