namespace Fishies {

    export class Shark extends AllFish {

        constructor() {
            super();
            this.volume = 9;
            this.dx = -(Math.random() * 10);
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
            koerper.ellipse(this.x, this.y, 30, 60, 1.7, 0, 2 * Math.PI);
            crc.fillStyle = "#7f95a1";
            crc.fill(koerper);
            crc.strokeStyle = "#67757c";
            crc.stroke(koerper);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + r*58, this.y + r*5);
            flosse.lineTo(this.x + r*90, this.y - r*30);
            flosse.lineTo(this.x + r*90, this.y + r*40);
            crc.fillStyle = "#7f95a1";
            crc.fill(flosse);
            crc.strokeStyle = "#67757c";
            crc.stroke(flosse);

            let auge: Path2D = new Path2D();
            auge.arc(this.x - r*30, this.y - 10, 10, -0.7, 1 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill(auge);

            let pupille: Path2D = new Path2D();
            pupille.arc(this.x - r*34, this.y - 10, 6, -0.7, 1 * Math.PI);
            crc.fillStyle = "#000000";
            crc.fill(pupille);

            let kiemen: Path2D = new Path2D();
            kiemen.moveTo(this.x, this.y);
            kiemen.lineTo(this.x,this.y - r*20);
            kiemen.moveTo(this.x+10, this.y);
            kiemen.lineTo(this.x+10,this.y - r*20);
            kiemen.moveTo(this.x+20, this.y);
            kiemen.lineTo(this.x+20,this.y - r*20);
            crc.strokeStyle = "#000000";
            crc.stroke(kiemen);

            let mund: Path2D = new Path2D();
            mund.arc(this.x - r*15, this.y + 20, 6, 3, 1.5 * Math.PI);
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
                this.x = -50;
            }
            if (this.x < -50) {
                this.x = canvas.width + 50;
            }
        }
    }
}
