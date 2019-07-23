namespace Fishies {

    export class AllFish {
        volume: number
        x: number;
        y: number;
        dx: number;
        dy: number;
    
        constructor() {

        }

        draw(): void {

        }

        update(): void {
            this.move();
            this.draw();
		}

        move(): void {
            /* this.x += this.dx;
            if (this.x + 50 > canvas.width + 100) {
                this.x = 0;
            } */
        }
    }
}
