namespace Aquarium {


    document.addEventListener("DOMContentLoaded", init);

    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let fischrechtsArray: FischeRechts[] = [];
    let fischlinksArray: FischeLinks[] = [];
    let blasenArray: Blasen[] = [];
    let fps: number = 35;
    let imageData: ImageData;



    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        drawBackground();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i <= 3; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = Math.random() + 5;
            let dy: number = Math.random() - 3;
            let fisch: FischeRechts;
            fisch = new FischeRechts();
            fisch.x = x;
            fisch.y = y;
            fisch.dx = dx;
            fisch.dy = dy;
            fischrechtsArray.push(fisch);
            fisch.drawrechts();

        
        for (let i: number = 0; i <= 1; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dx: number = Math.random() - 5;
            let fisch: FischeLinks;
            fisch = new FischeLinks();
            fisch.x = x;
            fisch.y = y;
            fisch.dx = dx;
            fischlinksArray.push(fisch);
            fisch.drawlinks();
        }

        for (let i: number = 0; i <= 20; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dy: number = Math.random() * -1 -1 -1;
            let blase: Blasen;
            blase = new Blasen();
            blase.x = x;
            blase.y = y;
            blase.dy = dy;
            blasenArray.push(blase);
            blase.draw();
        }
    }
        update();
    }

    // Update Funktion
    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < fischrechtsArray.length; i++) {
            fischrechtsArray[i].update();
        }

       for (let i: number = 0; i < fischlinksArray.length; i++) {
            fischlinksArray[i].update();
        }

        for (let i: number = 0; i < blasenArray.length; i++) {
            blasenArray[i].update();
        }
    }
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
