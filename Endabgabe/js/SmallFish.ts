namespace Fishies {

    export class SmallFish extends AllFish {

        constructor() {
            super();
            this.volume = 3;
            this.dx = Math.random() * 10;
            this.dy = Math.random() * 10;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
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
            crc.fillStyle = "#ffa33b";
            crc.fill(koerper);
            crc.strokeStyle = "#bd7d35";
            crc.stroke(koerper);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + r*22, this.y + r*2);
            flosse.lineTo(this.x + r*40, this.y - r*10);
            flosse.lineTo(this.x + r*40, this.y + r*20);
            crc.fillStyle = "#ffdc3e";
            crc.fill(flosse);
            crc.strokeStyle = "#ccb23f";
            crc.stroke(flosse);

            let auge: Path2D = new Path2D();
            auge.arc(this.x - r*10, this.y - 3, 6, -1.5, 1 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill(auge);

            let pupille: Path2D = new Path2D();
            pupille.arc(this.x - r*12, this.y - 5, 3, 0, 2 * Math.PI);
            crc.fillStyle = "#000000";
            crc.fill(pupille);

            let mund: Path2D = new Path2D();
            mund.arc(this.x - r*3, this.y + 15, 6, -1.5, -0.1 * Math.PI);
            crc.strokeStyle = "#000000";
            crc.stroke(mund);
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