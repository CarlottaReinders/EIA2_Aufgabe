namespace Fishies {

    export class MainFish {

        x: number;
        y: number;
        dx: number;
        dy: number;
        volume: number = 4;
        //true = rechts, false = left
        richtung: boolean;

        constructor() {
            this.x = canvas.width/2;
            this.y = canvas.height/2;
            this.dx = 0;
            this.dy = 0;
        }

        draw(): void {
            let r: number;
            if (this.richtung) {
                r = -1;
            } else {
                r = 1;
            }
            let koerper: Path2D = new Path2D();
            koerper.ellipse(this.x, this.y, (this.volume*25)/8, (this.volume*32)/8, 1.7, 0, 2 * Math.PI);
            crc.fillStyle = "#b11106";
            crc.fill(koerper);
            crc.strokeStyle = "#7a1a1a";
            crc.stroke(koerper);

            let flosse: Path2D = new Path2D();
            flosse.moveTo(this.x + r*(this.volume*30)/8, this.y + r*(this.volume*3)/8);
            flosse.lineTo(this.x + r*(this.volume*75)/8, this.y - r*(this.volume*15)/8);
            flosse.lineTo(this.x + r*(this.volume*70)/8, this.y + r*(this.volume*30)/8);
            crc.fillStyle = "#c71407";
            crc.fill(flosse);
            crc.strokeStyle = "#86332d";
            crc.stroke(flosse);

            let auge: Path2D = new Path2D();
            auge.arc(this.x - r*10, this.y - 3, (this.volume*11)/8, 0, 2 * Math.PI);
            crc.fillStyle = "#FFFFFF";
            crc.fill(auge);

            let pupille: Path2D = new Path2D();
            pupille.arc(this.x - r*12, this.y - 3, (this.volume*6)/8, 0, 2 * Math.PI);
            crc.fillStyle = "#000000";
            crc.fill(pupille);
        }

        update(): void {
            this.draw();
            this.move();
        }

        setDirection(_direction: string): void {
            switch(_direction) {
                
                case "left":
                    this.dx = -5;
                    this.richtung = false;
                    break;
                case "right":
                    this.dx = 5;
                    this.richtung = true;
                    break;
                case "up":
                    this.dy = -5;
                    break;
                case "down":
                    this.dy = 5;
                    break;
                case "noneX":
                    this.dx = 0;
                    break;
                case "noneY":
                    this.dy = 0;
                    break;
            }
        }

        move() {
            if(!(this.x > canvas.width) && !(this.x < 0)) {
                this.x += this.dx;
            }
            if(!(this.y > canvas.height) && !(this.y < 0)) {
                this.y += this.dy;
            }
        }


        checkCollision(fish: AllFish): boolean {
            let xDistance: number = Math.abs(this.x - fish.x);
            let yDistance: number = Math.abs(this.y - fish.y);
            if(Math.sqrt( Math.pow(xDistance, 2) + Math.pow(yDistance, 2) ) < 40) {
                if(fish.volume < this.volume) {
                    this.volume += 1;
                    score += 2;
                    console.log("addVolume");
                    return true;

                } else {
                    document.getElementById("gameOver").style.display = "block";
                    refresh();
                    
                    return false;
                }
                
            }
            return false;
        }
    }
}
