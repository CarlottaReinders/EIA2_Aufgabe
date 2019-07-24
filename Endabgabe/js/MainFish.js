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
            koerper.ellipse(this.x, this.y, (this.volume * 25) / 8, (this.volume * 32) / 8, 1.7, 0, 2 * Math.PI);
            Fishies.crc.fillStyle = "#b11106";
            Fishies.crc.fill(koerper);
            Fishies.crc.strokeStyle = "#7a1a1a";
            Fishies.crc.stroke(koerper);
            let flosse = new Path2D();
            flosse.moveTo(this.x + r * (this.volume * 30) / 8, this.y + r * (this.volume * 3) / 8);
            flosse.lineTo(this.x + r * (this.volume * 75) / 8, this.y - r * (this.volume * 15) / 8);
            flosse.lineTo(this.x + r * (this.volume * 70) / 8, this.y + r * (this.volume * 30) / 8);
            Fishies.crc.fillStyle = "#c71407";
            Fishies.crc.fill(flosse);
            Fishies.crc.strokeStyle = "#86332d";
            Fishies.crc.stroke(flosse);
            let auge = new Path2D();
            auge.arc(this.x - r * 10, this.y - 3, (this.volume * 11) / 8, 0, 2 * Math.PI);
            Fishies.crc.fillStyle = "#FFFFFF";
            Fishies.crc.fill(auge);
            let pupille = new Path2D();
            pupille.arc(this.x - r * 12, this.y - 3, (this.volume * 6) / 8, 0, 2 * Math.PI);
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
                    Fishies.score += 2;
                    console.log("addVolume");
                    return true;
                }
                else {
                    document.getElementById("gameOver").style.display = "block";
                    return false;
                }
            }
            return false;
        }
    }
    Fishies.MainFish = MainFish;
})(Fishies || (Fishies = {}));
//# sourceMappingURL=MainFish.js.map