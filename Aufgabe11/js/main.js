var Aquarium;
(function (Aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    let fischrechtsArray = [];
    let fischlinksArray = [];
    let blasenArray = [];
    let fps = 35;
    let imageData;
    function init() {
        Aquarium.canvas = document.getElementsByTagName("canvas")[0];
        Aquarium.crc = Aquarium.canvas.getContext("2d");
        drawBackground();
        imageData = Aquarium.crc.getImageData(0, 0, Aquarium.canvas.width, Aquarium.canvas.height);
        for (let i = 0; i <= 3; i++) {
            let x = Math.random() * Aquarium.canvas.width;
            let y = Math.random() * Aquarium.canvas.height;
            let dx = Math.random() + 5;
            let dy = Math.random() - 3;
            let fisch;
            fisch = new Aquarium.FischeRechts();
            fisch.x = x;
            fisch.y = y;
            fisch.dx = dx;
            fisch.dy = dy;
            fischrechtsArray.push(fisch);
            fisch.drawrechts();
            for (let i = 0; i <= 1; i++) {
                let x = Math.random() * Aquarium.canvas.width;
                let y = Math.random() * Aquarium.canvas.height;
                let dx = Math.random() - 5;
                let fisch;
                fisch = new Aquarium.FischeLinks();
                fisch.x = x;
                fisch.y = y;
                fisch.dx = dx;
                fischlinksArray.push(fisch);
                fisch.drawlinks();
            }
            for (let i = 0; i <= 20; i++) {
                let x = Math.random() * Aquarium.canvas.width;
                let y = Math.random() * Aquarium.canvas.height;
                let dy = Math.random() * -1 - 1 - 1;
                let blase;
                blase = new Aquarium.Blasen();
                blase.x = x;
                blase.y = y;
                blase.dy = dy;
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
        for (let i = 0; i < fischrechtsArray.length; i++) {
            fischrechtsArray[i].update();
        }
        for (let i = 0; i < fischlinksArray.length; i++) {
            fischlinksArray[i].update();
        }
        for (let i = 0; i < blasenArray.length; i++) {
            blasenArray[i].update();
        }
    }
})(Aquarium || (Aquarium = {}));
function drawBackground() {
    let canvas = document.getElementsByTagName("canvas")[0];
    let crc = canvas.getContext("2d");
    //Wasser 
    let wasser = new Path2D();
    crc.rect(0, 0, 900, 500);
    crc.fillStyle = "#8fabdfef";
    crc.fill();
    //Boden
    let boden = new Path2D();
    boden.rect(0, 400, 900, 100);
    crc.fillStyle = " #614f3fef";
    crc.fill(boden);
    //Steine
    for (let i = 0; i < 4000; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * 600 + 400;
        let steine = new Path2D();
        steine.arc(x, y, 3, 0, 1 * Math.PI);
        crc.fillStyle = "#383532ef";
        crc.fill(steine);
    }
    //Felsen
    for (let i = 0; i < 3; i++) {
        let fels = new Path2D();
        let x = Math.random() * 700;
        let y = Math.random() + 380;
        fels.moveTo(x + 70, y + 40);
        fels.bezierCurveTo(x + 300, y + 30, x + 300, y + 10, x + 100, y + 5);
        fels.bezierCurveTo(x + 5, y + 30, x + 95, y + 45, x + 60, y + 35);
        crc.strokeStyle = "#181818";
        crc.stroke(fels);
        crc.fillStyle = "#504f4f";
        crc.fill(fels);
    }
    // Pflanzen
    for (let i = 0; i < 30; i++) {
        ;
        let _x = Math.random() * 450;
        let _y = Math.random() + 500;
        let pflanze1 = new Path2D();
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