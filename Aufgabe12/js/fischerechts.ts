namespace Aquarium {

    export class fischeRechts extends CWorld {
        
    constructor() {
        super();
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.dx = Math.random() + 5;
        this.dy = Math.random() - 3;
}

        draw(): void {

            let koerper: Path2D = new Path2D();
            koerper.ellipse(this.x, this.y, 20, 35, 1.7, 0, 2 * Math.PI);
            crc.fillStyle = "#e27948ef";
            crc.fill(koerper);
            crc.strokeStyle = "#eca17fef";
            crc.stroke(koerper);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x - 30, this.y + 0);
            flosse.lineTo(this.x - 75, this.y + 15);
            flosse.lineTo(this.x - 70, this.y - 10);
            crc.fillStyle = "#ffb731ef";
            crc.fill(flosse);
            crc.strokeStyle = "#ffd68bef";
            crc.stroke(flosse);

            let auge: Path2D = new Path2D();
            auge.arc(this.x + 20, this.y - 1, 10, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill(auge);

            let pupille: Path2D = new Path2D();
            pupille.arc(this.x + 24, this.y - 3, 6, 0, 2 * Math.PI);
            crc.fillStyle = "#000000";
            crc.fill(pupille);

            super.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x + 50 > canvas.width + 100) {
                this.x = 0;
            }

			if (this.y < 0) { 
                this.y = canvas.height;
            }
        }
    }
}