(function () {
    'use strict';

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    var draw = function () {
        var width = 150;
        var height = 75;

        // save state 1
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);

        // save state 2
        context.save();
        context.rotate(Math.PI / 4);

        // save state 3
        context.save();
        context.scale(2, 2);

        context.fillStyle = 'blue';
        context.fillRect(width / -2, height / -2, width, height);

        // restore state 3
        context.restore();
        context.fillStyle = 'red';
        context.fillRect(width / -2, height / -2, width, height);

        // restore state 2
        context.restore();
        context.fillStyle = 'yellow';
        context.fillRect(width / -2, height / -2, width, height);

        // restore state 1
        context.restore();
        context.fillStyle = 'green';
        context.fillRect(width / -2, height / -2, width, height);
    };

    draw();

})();