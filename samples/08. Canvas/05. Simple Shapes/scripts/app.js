(function () {
    'use strict';

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    var drawRectangles = function () {
        // Draw black rect
        context.fillStyle = 'black';
        context.fillRect(50, 20, 145, 145);

        // Draw blue rect
        context.fillStyle = 'rgb(0, 162, 232)';
        context.fillRect(135, 85, 125, 125);

        // Set line width
        context.lineWidth = 5;

        // Draw black rect outline
        context.strokeStyle = 'rgb(0, 0, 0)';
        context.strokeRect(50, 335, 145, 145);

        // Draw blue rect outline
        context.strokeStyle = 'rgb(0, 162, 232)';
        context.strokeRect(135, 275, 125, 125);

        // Draw semi-transparent yellow rect
        context.fillStyle = 'rgba(255, 255, 0, 0.75)';
        context.fillRect(210, 180, 125, 125);
    };

    var drawCircles = function () {
        // Draw black circle
        context.beginPath();
        context.fillStyle = 'rgb(0 ,0 ,0)';
        context.arc(423, 93, 80, 0, 2 * Math.PI, true);
        context.fill();

        // Draw blue circle
        context.beginPath();
        context.fillStyle = 'rgb(0, 162, 232)';
        context.arc(498, 158, 70, 0, 2 * Math.PI, true);
        context.fill();

        // Increase line width
        context.lineWidth = 5;

        // Draw black stroke circle
        context.beginPath();
        context.strokeStyle = 'rgb(0, 0, 0)';
        context.arc(423, 408, 80, 0, 1.5 * Math.PI, false);
        context.stroke();

        // Draw partial blue stroke circle
        context.beginPath();
        context.strokeStyle = 'rgb(0, 162, 232)';
        context.arc(498, 328, 70, 0, 0.5 * Math.PI, true);
        context.stroke();

        // Draw transparent yellow circle
        context.beginPath();
        context.fillStyle = 'rgba(255, 255, 0, 0.75)';
        context.arc(573, 243, 70, 0, 2 * Math.PI, true);
        context.fill();
    };


    drawRectangles();
    drawCircles();

})();