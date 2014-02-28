(function () {
    'use strict';

    var canvas = document.createElement('canvas');
    var video = document.querySelector('video');
    var screenshotContainer = document.getElementById('screenshots');

    function takeScreenshot() {
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        var screenshot = document.createElement('img');
        screenshot.src = canvas.toDataURL("image/png");

        screenshotContainer.appendChild(screenshot);
    }


    video.addEventListener('loadedmetadata', function () {
        canvas.height = video.videoHeight / 4;
        canvas.width = video.videoWidth / 4;
    });

    
    setInterval(function () {
        takeScreenshot();
    }, 2000);

})();