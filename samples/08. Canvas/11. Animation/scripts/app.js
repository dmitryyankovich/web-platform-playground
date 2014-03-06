(function () {
    'use strict';

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    var draw = function () {
        var lastX = canvas.width * Math.random();
        var lastY = canvas.height * Math.random();

        function line() {
            context.save();
            context.beginPath();
            context.lineWidth = 5 + Math.random() * 10;
            context.moveTo(lastX, lastY);

            lastX = canvas.width * Math.random();
            lastY = canvas.height * Math.random();


            context.bezierCurveTo(
                canvas.width * Math.random(),
                canvas.height * Math.random(),
                canvas.width * Math.random(),
                canvas.height * Math.random(),
                lastX,
                lastY);


            var r = Math.floor(Math.random() * 255) + 70;
            var g = Math.floor(Math.random() * 255) + 70;
            var b = Math.floor(Math.random() * 255) + 70;

            var strokeColor = 'rgba(' + r + ',' + g + ',' + b + ', 1.0)';
            context.shadowColor = 'white';
            context.shadowBlur = 10;
            context.strokeStyle = strokeColor;
            context.stroke();
            context.restore();
        };

        function blank() {
            context.fillStyle = 'rgba(0,0,0,0.1)';
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        };


        setInterval(line, 50);
        setInterval(blank, 40);
    };

    draw();

})();