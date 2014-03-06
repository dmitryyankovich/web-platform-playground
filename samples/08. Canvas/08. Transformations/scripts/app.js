(function () {
    'use strict';

    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');


    var x = 10;
    var y = 10;
    var width = 100;
    var height = 100;


    var drawPrimitive = function (color) {
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
    };

    var transformPrimitive = function (transformation) {
        var cx = x + width / 2;
        var cy = y + height / 2;

        context.translate(cx, cy);
        transformation(context);
        context.translate(-cx, -cy);
    };


    var draw = function (transformation) {
        drawPrimitive('#ff0000');
        transformPrimitive(transformation);
        drawPrimitive('#0000ff');

        context.setTransform(1, 0, 0, 1, 0, 0);
        x += width * 2;
    };


    draw(function (context) {
        context.translate(50, 25);
    });

    draw(function (context) {
        var angleInRad = (Math.PI / 180) * 25;
        context.rotate(angleInRad);
    });

    draw(function (context) {
        context.scale(0.5, 0.5);
    });

})();