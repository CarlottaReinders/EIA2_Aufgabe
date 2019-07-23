var Fishies;
(function (Fishies) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyNotPressedAnymore);
    let allFishArray = [];
    let fps = 30;
    let imageData;
    let player;
    function init() {
        Fishies.canvas = document.getElementsByTagName("canvas")[0];
        Fishies.crc = Fishies.canvas.getContext("2d");
        drawBackground();
        imageData = Fishies.crc.getImageData(0, 0, Fishies.canvas.width, Fishies.canvas.height);
        generateBigFish();
        player = new Fishies.MainFish();
        generateShark();
        generateSmallFish();
        update();
    }
    function deleteObject(object) {
        for (let i = 0; i < allFishArray.length; i++) {
            if (allFishArray[i] == object) {
                allFishArray.splice(i, 1);
            }
        }
    }
    // Update Funktion
    function update() {
        window.setTimeout(update, 1000 / fps);
        Fishies.crc.clearRect(0, 0, Fishies.canvas.width, Fishies.canvas.height);
        Fishies.crc.putImageData(imageData, 0, 0);
        player.update();
        for (let i = 0; i < allFishArray.length; i++) {
            allFishArray[i].update();
            if (player.checkCollision(allFishArray[i])) {
                deleteObject(allFishArray[i]);
            }
        }
    }
    function drawBackground() {
        //let canvas = document.getElementsByTagName("canvas")[0];
        //let crc = canvas.getContext("2d");
        //Wasser 
        //let wasser: Path2D = new Path2D();
        Fishies.crc.rect(0, 0, 900, 500);
        Fishies.crc.fillStyle = "#8fabdfef";
        Fishies.crc.fill();
        //Boden
        let boden = new Path2D();
        boden.rect(0, 400, 900, 100);
        Fishies.crc.fillStyle = " #614f3fef";
        Fishies.crc.fill(boden);
        //Steine
        for (let i = 0; i < 4000; i++) {
            let x = Math.random() * Fishies.canvas.width;
            let y = Math.random() * 600 + 400;
            let steine = new Path2D();
            steine.arc(x, y, 3, 0, 1 * Math.PI);
            Fishies.crc.fillStyle = "#383532ef";
            Fishies.crc.fill(steine);
        }
        //Felsen
        for (let i = 0; i < 3; i++) {
            let fels = new Path2D();
            let x = Math.random() * 700;
            let y = Math.random() + 380;
            fels.moveTo(x + 70, y + 40);
            fels.bezierCurveTo(x + 300, y + 30, x + 300, y + 10, x + 100, y + 5);
            fels.bezierCurveTo(x + 5, y + 30, x + 95, y + 45, x + 60, y + 35);
            Fishies.crc.strokeStyle = "#181818";
            Fishies.crc.stroke(fels);
            Fishies.crc.fillStyle = "#504f4f";
            Fishies.crc.fill(fels);
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
            Fishies.crc.fillStyle = "#76b67fef";
            Fishies.crc.fill(pflanze1);
            Fishies.crc.strokeStyle = "#416345ef";
            Fishies.crc.stroke(pflanze1);
        }
    }
    function generateSmallFish() {
        for (let i = 0; i <= 3; i++) {
            let fisch = new Fishies.SmallFish();
            allFishArray.push(fisch);
            fisch.draw();
        }
    }
    function generateBigFish() {
        for (let i = 0; i <= 5; i++) {
            let fisch = new Fishies.BigFish();
            allFishArray.push(fisch);
            fisch.draw();
        }
    }
    function generateShark() {
        for (let i = 0; i <= 2; i++) {
            let shark = new Fishies.Shark();
            allFishArray.push(shark);
            shark.draw();
        }
    }
    function keyPressed(_e) {
        switch (_e.keyCode) {
            case 37:
                player.setDirection("left");
                break;
            case 38:
                player.setDirection("up");
                break;
            case 39:
                player.setDirection("right");
                break;
            case 40:
                player.setDirection("down");
                break;
        }
    }
    function keyNotPressedAnymore(_e) {
        switch (_e.keyCode) {
            case 37:
                player.setDirection("noneX");
                break;
            case 38:
                player.setDirection("noneY");
                break;
            case 39:
                player.setDirection("noneX");
                break;
            case 40:
                player.setDirection("noneY");
                break;
        }
    }
})(Fishies || (Fishies = {}));
//# sourceMappingURL=main.js.map