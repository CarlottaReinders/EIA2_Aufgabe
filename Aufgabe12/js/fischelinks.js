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
    var fischeLinks = /** @class */ (function (_super) {
        __extends(fischeLinks, _super);
        function fischeLinks() {
            var _this = _super.call(this) || this;
            var x = Math.random() * Aquarium.canvas.width;
            var y = Math.random() * Aquarium.canvas.height;
            var dx = Math.random() - 5;
            return _this;
        }
        fischeLinks.prototype.drawlinks = function () {
            var koerper = new Path2D();
            koerper.ellipse(this.x, this.y, 20, 35, 1.7, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#e27948ef";
            Aquarium.crc.fill(koerper);
            Aquarium.crc.strokeStyle = "#eca17fef";
            Aquarium.crc.stroke(koerper);
            var flosse = new Path2D();
            flosse.moveTo(this.x + 35, this.y + 3);
            flosse.lineTo(this.x + 75, this.y - 15);
            flosse.lineTo(this.x + 70, this.y + 30);
            Aquarium.crc.fillStyle = "#ffb731ef";
            Aquarium.crc.fill(flosse);
            Aquarium.crc.strokeStyle = "#ffd68bef";
            Aquarium.crc.stroke(flosse);
            var auge = new Path2D();
            auge.arc(this.x - 20, this.y - 3, 10, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#FFFFFF";
            Aquarium.crc.fill(auge);
            var pupille = new Path2D();
            pupille.arc(this.x - 24, this.y - 5, 6, 0, 2 * Math.PI);
            Aquarium.crc.fillStyle = "#000000";
            Aquarium.crc.fill(pupille);
        };
        fischeLinks.prototype.update = function () {
            this.move();
            this.drawlinks();
        };
        fischeLinks.prototype.move = function () {
            this.x += this.dx;
            if (this.x + 50 > Aquarium.canvas.width + 100) {
                this.x = 0;
            }
        };
        return fischeLinks;
    }(Aquarium.CWorld));
    Aquarium.fischeLinks = fischeLinks;
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=fischelinks.js.map