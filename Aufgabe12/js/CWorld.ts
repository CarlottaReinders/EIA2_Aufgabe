namespace Aquarium {
    
    export class CWorld {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor() {
        }

        move(): void {
        }

        draw(): void {
        }

        update(): void {
            this.move();
			this.draw();
        }
    }
}