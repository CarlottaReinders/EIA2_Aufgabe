namespace Fishies {

    export class SmallFish extends AllFish {

        constructor() {
            super();
            this.volume = 3;
            this.dx = Math.random() * 10;
            this.dy = Math.random() * 10;
            this.x = Math.random()* canvas.width;
            this.y = Math.random()* canvas.height;
        }

        draw(): void {
            let r: number;
            if (this.dx < 0) {
                r = 1;
            } else {
                r = -1;
            }
            let koerper: Path2D = new Path2D();
            koerper.ellipse(this.x, this.y, 15, 22, 1.7, 0, 2 * Math.PI);
            crc.fillStyle = "#e27948ef";
            crc.fill(koerper);
            crc.strokeStyle = "#eca17fef";
            crc.stroke(koerper);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + r*20, this.y + r*3);
            flosse.lineTo(this.x + r*75, this.y - r*15);
            flosse.lineTo(this.x + r*70, this.y + r*30);
            crc.fillStyle = "#ffb731ef";
            crc.fill(flosse);
            crc.strokeStyle = "#ffd68bef";
            crc.stroke(flosse);

            let auge: Path2D = new Path2D();
            auge.arc(this.x - r*20, this.y - 3, 10, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill(auge);

            let pupille: Path2D = new Path2D();
            pupille.arc(this.x - r*24, this.y - 5, 6, 0, 2 * Math.PI);
            crc.fillStyle = "#000000";
            crc.fill(pupille);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            if (this.x + 50 > canvas.width + 100) {
                this.x = 0;
            }
            else if (this.x < -50) {
                this.x = canvas.width + 50;
            }
        }
    }
}