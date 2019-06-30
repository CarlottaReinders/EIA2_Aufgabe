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
    var futter = /** @class */ (function (_super) {
        __extends(futter, _super);
        function futter(_x, _y) {
            var _this = _super.call(this) || this;
            _this.dy = 3;
            _this.x = _x;
            _this.y = _y;
            return _this;
        }
        futter.prototype.move = function () {
            if (this.y < 900) {
                this.y += this.dy;
            }
        };
        futter.prototype.draw = function () {
            var food = new Path2D();
            food.moveTo(this.x, this.y);
            food.lineTo(this.x + 10, this.y + 2);
            food.lineTo(this.x + 10, this.y + 12);
            food.lineTo(this.x, this.y + 10);
            food.closePath();
            Aquarium.crc.fillStyle = "#724039";
            Aquarium.crc.fill(food);
        };
        return futter;
    }(Aquarium.CWorld));
    Aquarium.futter = futter;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=futter.js.map