var Fishies;
(function (Fishies) {
    class MainFish {
        constructor() {
            this.volume = 4;
            this.x = Fishies.canvas.width / 2;
            this.y = Fishies.canvas.height / 2;
            this.dx = 0;
            this.dy = 0;
        }
        draw() {
            let r;
            if (this.richtung) {
                r = -1;
            }
            else {
                r = 1;
            }
            let koerper = new Path2D();
            koerper.ellipse(this.x, this.y, 25, 32, 1.7, 0, 2 * Math.PI);
            Fishies.crc.fillStyle = "#db0420ff";
            Fishies.crc.fill(koerper);
            Fishies.crc.strokeStyle = "#eca17fef";
            Fishies.crc.stroke(koerper);
            let flosse = new Path2D();
            flosse.moveTo(this.x + r * 20, this.y + r * 3);
            flosse.lineTo(this.x + r * 75, this.y - r * 15);
            flosse.lineTo(this.x + r * 70, this.y + r * 30);
            Fishies.crc.fillStyle = "#ffb731ef";
            Fishies.crc.fill(flosse);
            Fishies.crc.strokeStyle = "#ffd68bef";
            Fishies.crc.stroke(flosse);
            let auge = new Path2D();
            auge.arc(this.x - r * 20, this.y - 3, 10, 0, 2 * Math.PI);
            Fishies.crc.fillStyle = "#FFFFFF";
            Fishies.crc.fill(auge);
            let pupille = new Path2D();
            pupille.arc(this.x - r * 24, this.y - 5, 6, 0, 2 * Math.PI);
            Fishies.crc.fillStyle = "#000000";
            Fishies.crc.fill(pupille);
        }
        update() {
            this.draw();
            this.move();
        }
        setDirection(_direction) {
            switch (_direction) {
                case "left":
                    this.dx = -5;
                    this.richtung = false;
                    break;
                case "right":
                    this.dx = 5;
                    this.richtung = true;
                    break;
                case "up":
                    this.dy = -5;
                    break;
                case "down":
                    this.dy = 5;
                    break;
                case "noneX":
                    this.dx = 0;
                    break;
                case "noneY":
                    this.dy = 0;
                    break;
            }
        }
        move() {
            if (!(this.x > Fishies.canvas.width) && !(this.x < 0)) {
                this.x += this.dx;
            }
            if (!(this.y > Fishies.canvas.height) && !(this.y < 0)) {
                this.y += this.dy;
            }
        }
        checkCollision(fish) {
            let xDistance = Math.abs(this.x - fish.x);
            let yDistance = Math.abs(this.y - fish.y);
            if (Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)) < 40) {
                if (fish.volume < this.volume) {
                    this.volume += 1;
                    console.log("addVolume");
                    return true;
                }
                else {
                    alert("Game Over!");
                    return false;
                }
            }
            return false;
        }
    }
    Fishies.MainFish = MainFish;
})(Fishies || (Fishies = {}));
//# sourceMappingURL=MainFish.js.map