/* Die Karten initialisieren */
interface karten {
    kartendeck: boolean;
    bild: number;
    value: number;
}

/* Array für das Kartendeck*/ 
let deck:karten[]=[h7, h8, h9, h10, hB, hD, hK, hA, kr7, kr8, kr9, kr10, krB, krD, krK, krA, p7, p8, p9, p10, pB, pD, pK, pA, ka7, ka8, ka9, ka10, kaB, kaD, kaK, kaA];

let h7:karten={
    kartendeck: true,
    bild:1,
    value:7,
}

let h8:karten={
    kartendeck: true,
    bild: 1,
    value: 8,
}

let h9:karten={
    kartendeck: true,
    bild: 1,
    value: 9,
}

let h10:karten={
    kartendeck: true,
    bild: 1,
    value: 10,
}

let hB:karten={
    kartendeck: true,
    bild: 1,
    value: 11,
}

let hD:karten={
    kartendeck: true,
    bild: 1,
    value: 12,
}

let hK:karten={
    kartendeck: true,
    bild: 1,
    value: 13,
}

let hA:karten={
    kartendeck: true,
    bild: 1,
    value: 14,
}

let kr7:karten={
    kartendeck: true,
    bild: 2,
    value: 7,
}

let kr8:karten={
    kartendeck: true,
    bild: 2,
    value: 8,
}

let kr9:karten={
    kartendeck: true,
    bild: 2,
    value: 9,
}

let kr10:karten={
    kartendeck: true,
    bild: 2,
    value: 10,
}

let krB:karten={
    kartendeck: true,
    bild: 2,
    value: 11,
}

let krD:karten={
    kartendeck: true,
    bild: 2,
    value: 12,
}

let krK:karten={
    kartendeck: true,
    bild: 2,
    value: 13,
}

let krA:karten={
    kartendeck: true,
    bild: 2,
    value: 14,
}

let p7:karten={
    kartendeck: true,
    bild: 3,
    value: 7,
}

let p8:karten={
    kartendeck: true,
    bild: 3,
    value: 8,
}

let p9:karten={
    kartendeck: true,
    bild: 3,
    value: 9,
}

let p10:karten={
    kartendeck: true,
    bild: 3,
    value: 10,
}

let pB:karten={
    kartendeck: true,
    bild: 3,
    value: 11,
}

let pD:karten={
    kartendeck: true,
    bild: 3,
    value: 12,
}

let pK:karten={
    kartendeck: true,
    bild: 3,
    value: 13,
}

let pA:karten={
    kartendeck: true,
    bild: 3,
    value: 14,
}

let ka7:karten={
    kartendeck: true,
    bild: 4,
    value: 7,
}

let ka8:karten={
    kartendeck: true,
    bild: 4,
    value: 8,
}

let ka9:karten={
    kartendeck: true,
    bild: 4,
    value: 9,
}

let ka10:karten={
    kartendeck: true,
    bild: 4,
    value: 10,
}

let kaB:karten={
    kartendeck: true,
    bild: 4,
    value: 11,
}

let kaD:karten={
    kartendeck: true,
    bild: 4,
    value: 12,
}

let kaK:karten={
    kartendeck: true,
    bild: 4,
    value: 13,
}

let kaA:karten={
    kartendeck: true,
    bild: 4,
    value: 14,
}



/* Array für die Handkarten*/
let hand:karten[]=[];

let topCard:karten[]=[];


/* Funktion für die Anzahl der Karten, die man bekommt*/
function ausgegebeneKarten() {
    let kartenanzahl: number = 0;

    do { 
        kartenanzahl = parseInt(prompt("Kartenanzahl angeben (Zahl zwischen 5 und 7 eingeben"));
        }
    
    while(isNaN(kartenanzahl) || kartenanzahl > 7 || kartenanzahl < 5);

    console.log("kartenanzahl: " +kartenanzahl);

    for(let n:number=0; n<kartenanzahl; n++){
        karteZiehen();
    }

    console.log(hand);

    kartenstapelGenerieren();
    deckGenerieren();
    handkarten();
}

/* Funktion zum Karte ziehen */
function karteZiehen() {
    let i:number = Math.floor(Math.random() * 31);

    while (deck[i].kartendeck==false)
        {
            i = Math.floor(Math.random() * 31);
        }
    hand[hand.length]=deck[i]; 
    deck[i].kartendeck = false;
}


/* Funktion für den Kartenstapel */
function kartenstapelGenerieren() {
    let i:number = Math.floor(Math.random() * 31);

    while (deck[i].kartendeck==false) {
        i = Math.floor(Math.random() * 31);
    }

    topCard=deck[i];
    deck[i].kartendeck = false;

    let write:string = "";
        write += `<div class="cards">`;

        switch (topCard.bild) {
            case 1:
                write += `<img src="img/herz.jpg" class="symbol" alt="♥">
                <div class="rot">`;
                break;
            case 2:
                write += `<img src="img/kreuz.jpg" class="symbol" alt="♣" 
                <div class="black">`;
                break;
            case 3:
                write += `<img src="img/pik.jpg" class="symbol" alt="♠"
                <div class="schwarz">`;
                break;
            case 4:
                write += `<img src="img/karo.jpg" class="symbol" alt="♦" 
                <div class="rot">`;
                break;
            default:
                console.log("Bild konnte nicht geladen werden")  
        }

        switch (topCard.value) {
            case 7:
            write += `7</div>`;
            break;
        case 8:
            write += `8</div>`;
            break;
        case 9:
            write += `9</div>`;
            break;
        case 10:
            write += `10</div>`;
            break;        
        case 11:
            write += `B</div>`; 
            break;  
        case 12:
            write += `D</div>`; 
            break;          
        case 13:
            write += `K</div>`; 
            break;          
        case 14:
            write += `A</div>`; 
            break;
        default:
            console.log("value konnte nicht geladen werden")
        }
        write += `</div>`
document.getElementById("Stapel").innerHTML = `${write}`;
        }
}


function deckGenerieren(){
    document.getElementById("Deck").innerHTML = `<div class="cards">
    <img src="img/rückseite.jpeg" alt="MISSING TEXTURE" class="kartenrückseite">
    </div>`;     
}

/* Funktion für die Handkarten */
function handkarten() {
    document.getElementById("kartenAufHand").innerHTML = "";

    for (var n:number = 0; n<hand.length; n++){
        let write:string = "";
        write += `<div class="cards"`;

        switch (hand[n].bild){
            case 1:
                write += `<img src="img/herz.jpg" class="Symbol" alt="♥">
                <div class="rot">`; 
                break;
            case 2:
                write += `<img src="img/kreuz.jpg" class="Symbol" alt="♣">
                <div class="schwarz">`;
                break;
            case 3:
                write += `<img src="img/pik.jpg" class="Symbol" alt="♠">
                <div class="schwarz">`; 
                break;
            case 4:
                write += `<img src="img/karo.jpg" class="Symbol" alt="♦">
                <div class="rot">`;
                break;        
            default:
                console.log("Symbol konnte nicht geladen werden")
            }

        switch (hand[n].value){
            case 7:
                write += `7</div>`;
                break;
            case 8:
                write += `8</div>`;
                break;
            case 9:
                write += `9</div>`;
                break;
            case 10:
                write += `10</div>`;
                break;        
            case 11:
                write += `B</div>`; 
                break;  
            case 12:
                write += `D</div>`; 
                break;          
            case 13:
                write += `K</div>`;
                break;          
            case 14:
                write += `A</div>`;
                break;
            default:
                console.log("value konnte nicht geladen werden")
            }
            write += `</div>`
        document.getElementById("kartenAufHand").innerHTML += `${write}`;        
    }
}


function init() {
    ausgegebeneKarten();
}

document.addEventListener("DOMContentLoaded", init);