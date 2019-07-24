var Aquarium;
(function (Aquarium) {
    class fischeLinks extends Aquarium.CWorld {
        constructor() {
            super();
            this.x = Math.random() * Aquarium.canvas.width;
            this.y = Math.random() * Aquarium.canvas.height;
            this.dx = Math.random() * -5;
        }
        drawlinks() {
            let koerper = new Path2D();
            koerper.ellipse(this.x, this.y, 20, 35, 1.7, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#e27948ef";
            Aquarium.crc.fill(koerper);
            Aquarium.crc.strokeStyle = "#eca17fef";
            Aquarium.crc.stroke(koerper);
            let flosse = new Path2D();
            flosse.moveTo(this.x + 35, this.y + 3);
            flosse.lineTo(this.x + 75, this.y - 15);
            flosse.lineTo(this.x + 70, this.y + 30);
            Aquarium.crc.fillStyle = "#ffb731ef";
            Aquarium.crc.fill(flosse);
            Aquarium.crc.strokeStyle = "#ffd68bef";
            Aquarium.crc.stroke(flosse);
            let auge = new Path2D();
            auge.arc(this.x - 20, this.y - 3, 10, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#FFFFFF";
            Aquarium.crc.fill(auge);
            let pupille = new Path2D();
            pupille.arc(this.x - 24, this.y - 5, 6, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#000000";
            Aquarium.crc.fill(pupille);
        }
        update() {
            this.move();
            this.drawlinks();
        }
        move() {
            this.x += this.dx;
            if (this.x + 50 > Aquarium.canvas.width + 100) {
                this.x = 0;
            }
        }
    }
    Aquarium.fischeLinks = fischeLinks;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=fischelinks.js.map