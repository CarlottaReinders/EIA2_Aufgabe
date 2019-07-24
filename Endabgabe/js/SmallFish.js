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
            Fishies.crc.fillStyle = "#ffa33b";
            Fishies.crc.fill(koerper);
            Fishies.crc.strokeStyle = "#bd7d35";
            Fishies.crc.stroke(koerper);
            let flosse = new Path2D();
            flosse.moveTo(this.x + r * 22, this.y + r * 2);
            flosse.lineTo(this.x + r * 40, this.y - r * 10);
            flosse.lineTo(this.x + r * 40, this.y + r * 20);
            Fishies.crc.fillStyle = "#ffdc3e";
            Fishies.crc.fill(flosse);
            Fishies.crc.strokeStyle = "#ccb23f";
            Fishies.crc.stroke(flosse);
            let auge = new Path2D();
            auge.arc(this.x - r * 10, this.y - 3, 6, -1.5, 1 * Math.PI);
            Fishies.crc.fillStyle = "#FFFFFF";
            Fishies.crc.fill(auge);
            let pupille = new Path2D();
            pupille.arc(this.x - r * 12, this.y - 5, 3, 0, 2 * Math.PI);
            Fishies.crc.fillStyle = "#000000";
            Fishies.crc.fill(pupille);
            let mund = new Path2D();
            mund.arc(this.x - r * 3, this.y + 15, 6, -1.5, -0.1 * Math.PI);
            Fishies.crc.strokeStyle = "#000000";
            Fishies.crc.stroke(mund);
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