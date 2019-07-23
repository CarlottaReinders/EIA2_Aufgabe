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
            koerper.ellipse(this.x, this.y, 25, 32, 1.7, 0, 2 * Math.PI);
            crc.fillStyle = "#db0420ff";
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
                    console.log("addVolume");
                    return true;
                } else {
                    alert("Game Over!");
                    return false;
                }
                
            }
            return false;
        }
        }
    }
