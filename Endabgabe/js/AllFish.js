var Fishies;
(function (Fishies) {
    class AllFish {
        constructor() {
        }
        draw() {
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            /* this.x += this.dx;
            if (this.x + 50 > canvas.width + 100) {
                this.x = 0;
            } */
        }
    }
    Fishies.AllFish = AllFish;
})(Fishies || (Fishies = {}));
//# sourceMappingURL=AllFish.js.map