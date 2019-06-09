var Aquarium;
(function (Aquarium) {
    var Blasen = /** @class */ (function () {
        function Blasen() {
        }
        Blasen.prototype.draw = function () {
            var blasen = new Path2D();
            blasen.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Aquarium.crc.strokeStyle = "#bfecffef";
            Aquarium.crc.stroke(blasen);
            Aquarium.crc.fillStyle = "#b9dfffb4";
            Aquarium.crc.fill(blasen);
        };
        Blasen.prototype.update = function () {
            this.move();
            this.draw();
        };
        Blasen.prototype.move = function () {
            this.y += this.dy;
            if (this.y < 0)
                this.y = Aquarium.canvas.height;
        };
        return Blasen;
    }());
    Aquarium.Blasen = Blasen;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=blasen.js.map