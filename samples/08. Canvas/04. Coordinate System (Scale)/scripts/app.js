(function () {
    'use strict';

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    var draw = function () {
        context.strokeStyle = 'black';

        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(canvas.width - 1, canvas.height - 1);
        context.stroke();
    };


    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        draw();
    });


    draw();

})();