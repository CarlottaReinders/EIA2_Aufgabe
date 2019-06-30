namespace Aquarium {
	export class blasen extends CWorld {

		radius: number;

		constructor() {
			super();
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.dy = Math.random() * -1 -1 -1;
			this.radius = 6;
		}


		draw(): void {
            let blasen: Path2D = new Path2D();
            blasen.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc.strokeStyle = "#bfecffef";
            crc.stroke(blasen);
            crc.fillStyle = "#b9dfffb4";
            crc.fill(blasen);
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.y += this.dy;
			if (this.y < 0)
				this.y = canvas.height;
		}
	}
}