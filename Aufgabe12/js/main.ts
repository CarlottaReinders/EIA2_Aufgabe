namespace Aquarium {

    document.addEventListener("DOMContentLoaded", init);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let imageData: ImageData;
    let fps: number = 35;
    let cworldArray: CWorld[] = [];


    function init(): void {
        document.addEventListener("click", fütterung);
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];    
        crc = canvas.getContext("2d");

        drawBackground();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i <= 3; i++) {
            let fisch: fischeRechts = new fischeRechts;
            cworldArray.push(fisch);
            fisch.draw;
        }

        for (let i: number = 0; i <= 1; i++) {
            let fisch: fischeLinks = new fischeLinks;
            cworldArray.push(fisch);
            fisch.drawlinks;
        }

        for (let i: number = 0; i <= 1; i++) {
            let blase: blasen = new blasen;
            cworldArray.push(blase);
            blase.draw;
        }
        update();
    }

    // Update Funktion
    function update(): void {
        let imageData: ImageData;

        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < cworldArray.length; i++) {
            cworldArray[i].update();
        }
    }

    //Fütterung
    function fütterung(_event: MouseEvent) :void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let food: futter = new futter(x, y);
            food.x = x - 8;
		    food.y = y - 13;
            cworldArray.push(food);
        }
    

    function drawBackground(): void {
        let canvas = document.getElementsByTagName("canvas")[0];
        let crc = canvas.getContext("2d");

        //Wasser 
        let wasser: Path2D = new Path2D();
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
}
