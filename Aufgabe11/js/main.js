var Aquarium;
(function (Aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    var fischrechtsArray = [];
    var fischlinksArray = [];
    var blasenArray = [];
    var fps = 35;
    var imageData;
    function init() {
        Aquarium.canvas = document.getElementsByTagName("canvas")[0];
        Aquarium.crc = Aquarium.canvas.getContext("2d");
        drawBackground();
        imageData = Aquarium.crc.getImageData(0, 0, Aquarium.canvas.width, Aquarium.canvas.height);
        for (var i = 0; i <= 3; i++) {
            var x = Math.random() * Aquarium.canvas.width;
            var y = Math.random() * Aquarium.canvas.height;
            var dx = Math.random() + 5;
            var dy = Math.random() - 3;
            var fisch = void 0;
            fisch = new Aquarium.FischeRechts();
            fisch.x = x;
            fisch.y = y;
            fisch.dx = dx;
            fisch.dy = dy;
            fischrechtsArray.push(fisch);
            fisch.drawrechts();
            for (var i_1 = 0; i_1 <= 1; i_1++) {
                var x_1 = Math.random() * Aquarium.canvas.width;
                var y_1 = Math.random() * Aquarium.canvas.height;
                var dx_1 = Math.random() - 5;
                var fisch_1 = void 0;
                fisch_1 = new Aquarium.FischeLinks();
                fisch_1.x = x_1;
                fisch_1.y = y_1;
                fisch_1.dx = dx_1;
                fischlinksArray.push(fisch_1);
                fisch_1.drawlinks();
            }
            for (var i_2 = 0; i_2 <= 20; i_2++) {
                var x_2 = Math.random() * Aquarium.canvas.width;
                var y_2 = Math.random() * Aquarium.canvas.height;
                var dy_1 = Math.random() * -1 - 1 - 1;
                var blase = void 0;
                blase = new Aquarium.Blasen();
                blase.x = x_2;
                blase.y = y_2;
                blase.dy = dy_1;
                blasenArray.push(blase);
                blase.draw();
            }
        }
        update();
    }
    // Update Funktion
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aquarium.crc.clearRect(0, 0, Aquarium.canvas.width, Aquarium.canvas.height);
        Aquarium.crc.putImageData(imageData, 0, 0);
        for (var i = 0; i < fischrechtsArray.length; i++) {
            fischrechtsArray[i].update();
        }
        for (var i = 0; i < fischlinksArray.length; i++) {
            fischlinksArray[i].update();
        }
        for (var i = 0; i < blasenArray.length; i++) {
            blasenArray[i].update();
        }
    }
})(Aquarium || (Aquarium = {}));
function drawBackground() {
    var canvas = document.getElementsByTagName("canvas")[0];
    var crc = canvas.getContext("2d");
    //Wasser 
    var wasser = new Path2D();
    crc.rect(0, 0, 900, 500);
    crc.fillStyle = "#8fabdfef";
    crc.fill();
    //Boden
    var boden = new Path2D();
    boden.rect(0, 400, 900, 100);
    crc.fillStyle = " #614f3fef";
    crc.fill(boden);
    //Steine
    for (var i = 0; i < 4000; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * 600 + 400;
        var steine = new Path2D();
        steine.arc(x, y, 3, 0, 1 * Math.PI);
        crc.fillStyle = "#383532ef";
        crc.fill(steine);
    }
    //Felsen
    for (var i = 0; i < 3; i++) {
        var fels = new Path2D();
        var x = Math.random() * 700;
        var y = Math.random() + 380;
        fels.moveTo(x + 70, y + 40);
        fels.bezierCurveTo(x + 300, y + 30, x + 300, y + 10, x + 100, y + 5);
        fels.bezierCurveTo(x + 5, y + 30, x + 95, y + 45, x + 60, y + 35);
        crc.strokeStyle = "#181818";
        crc.stroke(fels);
        crc.fillStyle = "#504f4f";
        crc.fill(fels);
    }
    // Pflanzen
    for (var i = 0; i < 30; i++) {
        ;
        var _x = Math.random() * 450;
        var _y = Math.random() + 500;
        var pflanze1 = new Path2D();
        pflanze1.moveTo(_x - 40, _y + 60);
        pflanze1.lineTo(_x - 10, _y + 80);
        pflanze1.lineTo(_x - 90, _y - 300);
        pflanze1.closePath();
        crc.fillStyle = "#76b67fef";
        crc.fill(pflanze1);
        crc.strokeStyle = "#416345ef";
        crc.stroke(pflanze1);
    }
}
//# sourceMappingURL=main.js.map