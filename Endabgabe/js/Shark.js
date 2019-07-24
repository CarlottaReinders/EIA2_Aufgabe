var Fishies;
(function (Fishies) {
    class Shark extends Fishies.AllFish {
        constructor() {
            super();
            this.volume = 9;
            this.dx = -(Math.random() * 10);
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
            koerper.ellipse(this.x, this.y, 30, 60, 1.7, 0, 2 * Math.PI);
            Fishies.crc.fillStyle = "#7f95a1";
            Fishies.crc.fill(koerper);
            Fishies.crc.strokeStyle = "#67757c";
            Fishies.crc.stroke(koerper);
            let flosse = new Path2D();
            flosse.moveTo(this.x + r * 58, this.y + r * 5);
            flosse.lineTo(this.x + r * 90, this.y - r * 30);
            flosse.lineTo(this.x + r * 90, this.y + r * 40);
            Fishies.crc.fillStyle = "#7f95a1";
            Fishies.crc.fill(flosse);
            Fishies.crc.strokeStyle = "#67757c";
            Fishies.crc.stroke(flosse);
            let auge = new Path2D();
            auge.arc(this.x - r * 30, this.y - 10, 10, -0.7, 1 * Math.PI);
            Fishies.crc.fillStyle = "#FFFFFF";
            Fishies.crc.fill(auge);
            let pupille = new Path2D();
            pupille.arc(this.x - r * 34, this.y - 10, 6, -0.7, 1 * Math.PI);
            Fishies.crc.fillStyle = "#000000";
            Fishies.crc.fill(pupille);
            let kiemen = new Path2D();
            kiemen.moveTo(this.x, this.y);
            kiemen.lineTo(this.x, this.y - r * 20);
            kiemen.moveTo(this.x + 10, this.y);
            kiemen.lineTo(this.x + 10, this.y - r * 20);
            kiemen.moveTo(this.x + 20, this.y);
            kiemen.lineTo(this.x + 20, this.y - r * 20);
            Fishies.crc.strokeStyle = "#000000";
            Fishies.crc.stroke(kiemen);
            let mund = new Path2D();
            mund.arc(this.x - r * 15, this.y + 20, 6, 3, 1.5 * Math.PI);
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
                this.x = -50;
            }
            if (this.x < -50) {
                this.x = Fishies.canvas.width + 50;
            }
        }
    }
    Fishies.Shark = Shark;
})(Fishies || (Fishies = {}));
//# sourceMappingURL=Shark.js.map