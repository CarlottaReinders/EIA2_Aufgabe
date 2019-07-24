var Aquarium;
(function (Aquarium) {
    class FischeRechts {
        drawrechts() {
            let koerper = new Path2D();
            koerper.ellipse(this.x, this.y, 20, 35, 1.7, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#e27948ef";
            Aquarium.crc.fill(koerper);
            Aquarium.crc.strokeStyle = "#eca17fef";
            Aquarium.crc.stroke(koerper);
            let flosse = new Path2D();
            flosse.moveTo(this.x - 30, this.y + 0);
            flosse.lineTo(this.x - 75, this.y + 15);
            flosse.lineTo(this.x - 70, this.y - 10);
            Aquarium.crc.fillStyle = "#ffb731ef";
            Aquarium.crc.fill(flosse);
            Aquarium.crc.strokeStyle = "#ffd68bef";
            Aquarium.crc.stroke(flosse);
            let auge = new Path2D();
            auge.arc(this.x + 20, this.y - 1, 10, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#FFFFFF";
            Aquarium.crc.fill(auge);
            let pupille = new Path2D();
            pupille.arc(this.x + 24, this.y - 3, 6, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#000000";
            Aquarium.crc.fill(pupille);
        }
        update() {
            this.move();
            this.drawrechts();
        }
        move() {
            this.x = this.x + this.dx;
            this.y += this.dy;
            if (this.x > Aquarium.canvas.width + 100) {
                this.x = -50;
            }
            else if (this.x < -100) {
                this.x = Aquarium.canvas.width + 50;
            }
            if (this.y < -50) {
                this.y = Aquarium.canvas.height + 50;
            }
            else if (this.y > Aquarium.canvas.height + 50) {
                this.y = -50;
            }
        }
    }
    Aquarium.FischeRechts = FischeRechts;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=fischerechts.js.map