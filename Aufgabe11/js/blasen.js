var Aquarium;
(function (Aquarium) {
    class Blasen {
        draw() {
            let blasen = new Path2D();
            blasen.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Aquarium.crc.strokeStyle = "#bfecffef";
            Aquarium.crc.stroke(blasen);
            Aquarium.crc.fillStyle = "#b9dfffb4";
            Aquarium.crc.fill(blasen);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y < 0)
                this.y = Aquarium.canvas.height;
        }
    }
    Aquarium.Blasen = Blasen;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=blasen.js.map