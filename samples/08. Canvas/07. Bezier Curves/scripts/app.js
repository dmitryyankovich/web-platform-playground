(function () {
    'use strict';

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    var draw = function () {
        // Draw eye
        context.lineWidth = 20;
        context.beginPath();
        context.moveTo(230, 130);
        context.bezierCurveTo(230, 130, 230, 130, 230, 210);
        context.stroke();

        // Draw eye
        context.beginPath();
        context.moveTo(170, 130);
        context.bezierCurveTo(170, 130, 170, 130, 170, 210);
        context.stroke();

        // Draw smile
        context.beginPath();
        context.moveTo(100, 230);
        context.bezierCurveTo(100, 230, 200, 380, 300, 230);
        context.stroke();

        // Draw tongue
        context.beginPath();
        context.moveTo(219, 298);
        context.bezierCurveTo(278, 351, 315, 315, 277, 258);
        context.stroke();
    };

    draw();

})();