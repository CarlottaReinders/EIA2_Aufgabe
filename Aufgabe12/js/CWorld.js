var Aquarium;
(function (Aquarium) {
    var CWorld = /** @class */ (function () {
        function CWorld() {
        }
        CWorld.prototype.move = function () {
        };
        CWorld.prototype.draw = function () {
        };
        CWorld.prototype.update = function () {
            this.move();
            this.draw();
        };
        return CWorld;
    }());
    Aquarium.CWorld = CWorld;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=CWorld.js.map