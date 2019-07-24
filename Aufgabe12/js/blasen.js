var Aquarium;
(function (Aquarium) {
    class blasen extends Aquarium.CWorld {
        constructor() {
            super();
            this.x = Math.random() * Aquarium.canvas.width;
            this.y = Math.random() * Aquarium.canvas.height;
            this.dy = Math.random() * -1 - 1 - 1;
            this.radius = 6;
        }
        draw() {
            let blasen = new Path2D();
            blasen.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Aquarium.crc.strokeStyle = "#bfecffef";
            Aquarium.crc.stroke(blasen);
            Aquarium.crc.fillStyle = "#b9dfffb4";
            Aquarium.crc.fill(blasen);
            super.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y < 0)
                this.y = Aquarium.canvas.height;
        }
    }
    Aquarium.blasen = blasen;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=blasen.js.map