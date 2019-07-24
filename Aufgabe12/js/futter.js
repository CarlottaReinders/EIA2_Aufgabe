var Aquarium;
(function (Aquarium) {
    class futter extends Aquarium.CWorld {
        constructor(_x, _y) {
            super();
            this.radius = 3;
            this.dy = 6;
        }
        draw() {
            let food = new Path2D();
            food.moveTo(this.x, this.y);
            Aquarium.crc.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            food.closePath();
            Aquarium.crc.fillStyle = "#78ca90";
            Aquarium.crc.fill(food);
        }
        move() {
            if (this.y < 600) {
                this.y += this.dy;
            }
        }
    }
    Aquarium.futter = futter;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=futter.js.map