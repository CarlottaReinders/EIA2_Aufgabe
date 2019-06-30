var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Aquarium;
(function (Aquarium) {
    var blasen = /** @class */ (function (_super) {
        __extends(blasen, _super);
        function blasen() {
            var _this = _super.call(this) || this;
            _this.x = Math.random() * Aquarium.canvas.width;
            _this.y = Math.random() * Aquarium.canvas.height;
            _this.dy = Math.random() * -1 - 1 - 1;
            _this.radius = 6;
            return _this;
        }
        blasen.prototype.draw = function () {
            var blasen = new Path2D();
            blasen.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Aquarium.crc.strokeStyle = "#bfecffef";
            Aquarium.crc.stroke(blasen);
            Aquarium.crc.fillStyle = "#b9dfffb4";
            Aquarium.crc.fill(blasen);
            _super.prototype.draw.call(this);
        };
        blasen.prototype.move = function () {
            this.y += this.dy;
            if (this.y < 0)
                this.y = Aquarium.canvas.height;
        };
        return blasen;
    }(Aquarium.CWorld));
    Aquarium.blasen = blasen;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=blasen.js.map