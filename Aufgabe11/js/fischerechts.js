var Aquarium;
(function (Aquarium) {
    var FischeRechts = /** @class */ (function () {
        function FischeRechts() {
        }
        FischeRechts.prototype.drawrechts = function () {
            var koerper = new Path2D();
            koerper.ellipse(this.x, this.y, 20, 35, 1.7, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#e27948ef";
            Aquarium.crc.fill(koerper);
            Aquarium.crc.strokeStyle = "#eca17fef";
            Aquarium.crc.stroke(koerper);
            var flosse = new Path2D();
            flosse.moveTo(this.x - 30, this.y + 0);
            flosse.lineTo(this.x - 75, this.y + 15);
            flosse.lineTo(this.x - 70, this.y - 10);
            Aquarium.crc.fillStyle = "#ffb731ef";
            Aquarium.crc.fill(flosse);
            Aquarium.crc.strokeStyle = "#ffd68bef";
            Aquarium.crc.stroke(flosse);
            var auge = new Path2D();
            auge.arc(this.x + 20, this.y - 1, 10, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#FFFFFF";
            Aquarium.crc.fill(auge);
            var pupille = new Path2D();
            pupille.arc(this.x + 24, this.y - 3, 6, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#000000";
            Aquarium.crc.fill(pupille);
        };
        FischeRechts.prototype.update = function () {
            this.move();
            this.drawrechts();
        };
        FischeRechts.prototype.move = function () {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x + 50 > Aquarium.canvas.width + 100) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = Aquarium.canvas.height;
            }
        };
        return FischeRechts;
    }());
    Aquarium.FischeRechts = FischeRechts;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=fischerechts.js.map