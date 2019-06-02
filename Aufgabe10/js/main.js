document.addEventListener("DOMContentLoaded", init);
var crc;
var canvas;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    wasser();
    boden();
    felsen(100, 420);
    felsen(500, 380);
    //random steine
    for (var i = 0; i < 2000; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * 600 + 400;
        steine(x, y);
    }
    pflanzen(250, 500);
    pflanzen(800, 500);
    pflanzen(400, 550);
    pflanzen(750, 480);
    pflanzen(140, 600);
    //random fische schwimmen nach rechts
    for (var i = 0; i < 5; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        fische1(x, y);
    }
    //random fische schwimmen nach links
    for (var i = 0; i < 5; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        fische2(x, y);
    }
    //random luftblasen
    for (var i = 0; i < 15; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        luftblasen(x, y);
    }
    pflanzen(700, 500);
    pflanzen(500, 480);
    pflanzen(350, 500);
    pflanzen(420, 480);
    pflanzen(220, 500);
    pflanzen(780, 480);
    pflanzen(880, 480);
    pflanzen(100, 500);
}
function steine(_x, _y) {
    var steine = new Path2D();
    steine.arc(_x, _y, 5, 0, 1 * Math.PI);
    crc.fillStyle = "#383532ef";
    crc.fill(steine);
}
function pflanzen(_x, _y) {
    var pflanze1 = new Path2D();
    pflanze1.moveTo(_x - 40, _y + 80);
    pflanze1.lineTo(_x - 20, _y + 40);
    pflanze1.lineTo(_x - 90, _y - 250);
    pflanze1.closePath();
    crc.fillStyle = "#76b67fef";
    crc.fill(pflanze1);
    crc.strokeStyle = "#416345ef";
    crc.stroke(pflanze1);
}
function wasser() {
    var wasser = new Path2D();
    crc.rect(0, 0, 900, 500);
    crc.fillStyle = "#8fabdfef";
    crc.fill();
}
function boden() {
    var boden = new Path2D();
    boden.rect(0, 400, 900, 100);
    crc.fillStyle = " #614f3fef";
    crc.fill(boden);
}
function luftblasen(_x, _y) {
    var blasen = new Path2D();
    blasen.arc(_x, _y, 10, 0, 2 * Math.PI);
    crc.strokeStyle = "#bfecffef";
    crc.stroke(blasen);
    crc.fillStyle = "#b9dfffb4";
    crc.fill(blasen);
}
function felsen(_x, _y) {
    var fels = new Path2D();
    fels.moveTo(_x + 80, _y + 35);
    fels.bezierCurveTo(_x + 300, _y + 30, _x + 300, _y + 10, _x + 100, _y + 5);
    fels.bezierCurveTo(_x + 5, _y + 30, _x + 95, _y + 45, _x + 60, _y + 35);
    crc.strokeStyle = "#181818";
    crc.stroke(fels);
    crc.fillStyle = "#504f4f";
    crc.fill(fels);
}
function fische1(_x, _y) {
    var koerper = new Path2D();
    koerper.ellipse(_x, _y, 20, 35, 1.7, 0, 2 * Math.PI);
    crc.fillStyle = "#e27948ef";
    crc.fill(koerper);
    crc.strokeStyle = "#eca17fef";
    crc.stroke(koerper);
    var flosse = new Path2D();
    flosse.moveTo(_x - 30, _y + 0);
    flosse.lineTo(_x - 75, _y + 15);
    flosse.lineTo(_x - 70, _y - 10);
    crc.fillStyle = "#ffb731ef";
    crc.fill(flosse);
    crc.strokeStyle = "#ffd68bef";
    crc.stroke(flosse);
    var auge = new Path2D();
    auge.arc(_x + 20, _y - 1, 10, 0, 2 * Math.PI);
    crc.fillStyle = "#FFFFFF";
    crc.fill(auge);
    var pupille = new Path2D();
    pupille.arc(_x + 24, _y - 3, 6, 0, 2 * Math.PI);
    crc.fillStyle = "#000000";
    crc.fill(pupille);
}
function fische2(_x, _y) {
    var koerper = new Path2D();
    koerper.ellipse(_x, _y, 20, 35, 1.7, 0, 2 * Math.PI);
    crc.fillStyle = "#e27948ef";
    crc.fill(koerper);
    crc.strokeStyle = "#eca17fef";
    crc.stroke(koerper);
    var flosse = new Path2D();
    flosse.moveTo(_x + 35, _y + 3);
    flosse.lineTo(_x + 75, _y - 15);
    flosse.lineTo(_x + 70, _y + 30);
    crc.fillStyle = "#ffb731ef";
    crc.fill(flosse);
    crc.strokeStyle = "#ffd68bef";
    crc.stroke(flosse);
    var auge = new Path2D();
    auge.arc(_x - 20, _y - 3, 10, 0, 2 * Math.PI);
    crc.fillStyle = "#FFFFFF";
    crc.fill(auge);
    var pupille = new Path2D();
    pupille.arc(_x - 24, _y - 5, 6, 0, 2 * Math.PI);
    crc.fillStyle = "#000000";
    crc.fill(pupille);
}
//# sourceMappingURL=main.js.map