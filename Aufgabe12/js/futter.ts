namespace Aquarium {
    export class futter extends CWorld {

        radius: number;

        constructor(_x: number, _y: number) {
            super();
            this.radius = 3;
            this.dy = 6;
        }

        draw(): void {
            let food: Path2D = new Path2D();
            food.moveTo(this.x, this.y);
            crc.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            food.closePath();
            crc.fillStyle = "#78ca90";
            crc.fill(food);
        }

        move(): void {
            if (this.y < 600) {
                this.y += this.dy;
            }
        }
    }
}