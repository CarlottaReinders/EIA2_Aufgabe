namespace Aquarium {

	export class Blasen {
		x: number;
		y: number;
		dy: number;

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