(function () {
    'use strict';

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    var draw = function () {
        context.beginPath();
        context.strokeStyle = 'red';
        context.moveTo(50, 100);
        context.lineTo(100, 150);
        context.lineTo(150, 100);
        context.closePath();
        context.lineTo(50, 50);
        context.stroke();

        context.translate(150, 0);
        context.beginPath();
        context.strokeStyle = 'blue';
        context.moveTo(50, 100);
        context.lineTo(100, 150);
        context.lineTo(150, 100);
        context.lineTo(50, 50);
        context.stroke();
    };

    draw();

})();