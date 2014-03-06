(function () {
    'use strict';

    var compositionTypes = [
      'source-over', 'source-in', 'source-out', 'source-atop',
      'destination-over', 'destination-in', 'destination-out',
      'destination-atop', 'lighter', 'darker', 'copy', 'xor'
    ];


    var drawComposition = function (compositionType, canvas) {
        var context = canvas.getContext('2d');

        // draw rectangle
        context.fillStyle = '#FF3366';
        context.fillRect(15, 15, 70, 70);

        // set composite property
        context.globalCompositeOperation = compositionType;

        // draw circle
        context.fillStyle = '#0066FF';
        context.beginPath();
        context.arc(75, 75, 35, 0, Math.PI * 2, true);
        context.fill();
    };

    var draw = function () {
        var compositionElements = document.querySelectorAll('td');

        for (var i = 0; i < compositionElements.length; i++) {
            var compositionType = compositionTypes[i];
            var compositionElement = compositionElements[i];

            var label = compositionElement.querySelector('label');
            label.textContent = compositionType;

            var canvas = compositionElement.querySelector('canvas');
            drawComposition(compositionType, canvas);
        }
    };

    draw();

})();