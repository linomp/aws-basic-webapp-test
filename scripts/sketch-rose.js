// source: https://openprocessing.org/sketch/918684

let sketch = function (p) {

    var t;
    let a = 0.001
    let speed = 0.005

    let canvas;

    p.setup = function () {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.style('z-index', '-1')
        canvas.position(0, 0)
        p.frameRate(120)
        p.background(0);
        p.stroke(255, 0, 0, 200);
        p.noFill();
        t = 0;
    }

    p.keyPressed = function () {
        if (p.keyCode === 83) {
            p.saveCanvas(canvas, 'vmitp_' + p.hour() + p.minute() + p.millis(), 'jpg');
        }
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = function () {
        var x1 = p.width / 2 * p.noise(t + 15);
        var x2 = p.width / 2 * p.noise(t + 25);
        var x3 = p.width / 2 * p.noise(t + 35);
        var x4 = p.width / 2 * p.noise(t + 45);
        var y1 = p.height / 2 * p.noise(t + 55);
        var y2 = p.height / 2 * p.noise(t + 65);
        var y3 = p.height / 2 * p.noise(t + 75);
        var y4 = p.height / 2 * p.noise(t + 85);

        p.translate(p.width / 2, p.height / 2)
        p.rotate(p.frameCount / 100);

        if (a > 1.5 || a < 0.001) {
            speed *= -1
        }
        a += speed

        p.scale(a)
        a += speed;

        p.bezier(x1, y1, x2, y2, x3, y3, x4, y4);


        t += 0.005;
    }

}

new p5(sketch, 'container');