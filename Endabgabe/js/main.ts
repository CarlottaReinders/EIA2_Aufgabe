namespace Fishies {

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyNotPressedAnymore);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let allFishArray: AllFish[]=[];
    let fps: number = 30;
    let imageData: ImageData;
    let player: MainFish;


    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        
        drawBackground();
        
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        

        generateBigFish();

        player = new MainFish();

        generateShark();

        generateSmallFish();

        update();
    }

    function deleteObject(object: AllFish) {
        for (let i: number = 0; i < allFishArray.length; i++) {
            if (allFishArray[i] == object) {
                allFishArray.splice(i, 1);
            }
        }
    }

    // Update Funktion
    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        player.update();

        for (let i: number = 0; i < allFishArray.length; i++) {
            allFishArray[i].update();
            if(player.checkCollision(allFishArray[i])) {
                deleteObject(allFishArray[i]);
            }
        }
        
    }

    function drawBackground(): void {
        //let canvas = document.getElementsByTagName("canvas")[0];
        //let crc = canvas.getContext("2d");

        //Wasser 
        //let wasser: Path2D = new Path2D();
        crc.rect(0, 0, 900, 500);
        crc.fillStyle = "#8fabdfef";
        crc.fill();
    

        //Boden
        let boden: Path2D = new Path2D();
        boden.rect(0, 400, 900, 100);
        crc.fillStyle = " #614f3fef";
        crc.fill(boden);


        //Steine
        for (let i: number = 0; i < 4000; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * 600 + 400;
            let steine: Path2D = new Path2D();
            steine.arc(x, y, 3, 0, 1 * Math.PI);
            crc.fillStyle = "#383532ef";
            crc.fill(steine);
        }

        //Felsen
        for (let i: number = 0; i<3; i++) { 
            let fels: Path2D = new Path2D();
            let x: number = Math.random() * 700;
            let y: number = Math.random() + 380;
            fels.moveTo(x + 70, y + 40);
            fels.bezierCurveTo(x + 300, y + 30, x + 300, y + 10, x + 100, y + 5);
            fels.bezierCurveTo(x + 5, y + 30, x + 95, y + 45, x + 60, y + 35);
            crc.strokeStyle = "#181818";
            crc.stroke(fels);
            crc.fillStyle = "#504f4f";
            crc.fill(fels);
        }

        // Pflanzen
        for (let i: number = 0; i < 30; i++) {;
            let _x: number = Math.random() * 450;
            let _y: number = Math.random() + 500;
            let pflanze1: Path2D = new Path2D();
            pflanze1.moveTo(_x - 40, _y + 60);
            pflanze1.lineTo(_x - 10, _y + 80);
            pflanze1.lineTo(_x - 90, _y - 300);
            pflanze1.closePath();
            crc.fillStyle = "#76b67fef";
            crc.fill(pflanze1);
            crc.strokeStyle = "#416345ef";
            crc.stroke(pflanze1);
        }
    }

    function generateSmallFish():void {
        for (let i: number = 0; i <= 3; i++) {
            let fisch: SmallFish = new SmallFish();
            allFishArray.push(fisch);
            fisch.draw();
        }
    }

    function generateBigFish(): void {
        for (let i: number = 0; i <= 5; i++) {
            let fisch: BigFish = new BigFish();
            allFishArray.push(fisch);
            fisch.draw();
        }
    }

    function generateShark(): void {
        for (let i: number = 0; i <= 2; i++) {
            let shark: Shark = new Shark();
            allFishArray.push(shark);
            shark.draw();
        }
    }

    function keyPressed(_e: KeyboardEvent): void {
        switch (_e.keyCode) {
            case 37:
                player.setDirection("left");
                break;
            case 38:
                player.setDirection("up");
                break;
            case 39:
                player.setDirection("right");
                break;
            case 40:
                player.setDirection("down");
                break;

        }
    }
    function keyNotPressedAnymore(_e: KeyboardEvent): void {
        switch (_e.keyCode) {
            case 37:
                player.setDirection("noneX");
                break;
            case 38:
                player.setDirection("noneY");
                break;
            case 39:
                player.setDirection("noneX");
                break;
            case 40:
                player.setDirection("noneY");
                break;

        }
    }

}

