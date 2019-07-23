var Fishies;
(function (Fishies) {
    class SmallFish extends Fishies.AllFish {
        constructor() {
            super();
            this.volume = 3;
            this.dx = Math.random() * 10;
            this.dy = Math.random() * 10;
            this.x = Math.random() * Fishies.canvas.width;
            this.y = Math.random() * Fishies.canvas.height;
        }
        draw() {
            let r;
            if (this.dx < 0) {
                r = 1;
            }
            else {
                r = -1;
            }
            let koerper = new Path2D();
            koerper.ellipse(this.x, this.y, 15, 22, 1.7, 0, 2 * Math.PI);
            Fishies.crc.fillStyle = "#e27948ef";
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
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 50 > Fishies.canvas.width + 100) {
                this.x = 0;
            }
            else if (this.x < -50) {
                this.x = Fishies.canvas.width + 50;
            }
        }
    }
    Fishies.SmallFish = SmallFish;
})(Fishies || (Fishies = {}));
//# sourceMappingURL=SmallFish.js.map