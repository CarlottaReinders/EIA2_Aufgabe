/* Array für das Kartendeck*/
let h7 = {
    bild: 1,
    value: 7,
};
let h8 = {
    bild: 1,
    value: 8,
};
let h9 = {
    bild: 1,
    value: 9,
};
let h10 = {
    bild: 1,
    value: 10,
};
let hB = {
    bild: 1,
    value: 11,
};
let hD = {
    bild: 1,
    value: 12,
};
let hK = {
    bild: 1,
    value: 13,
};
let hA = {
    bild: 1,
    value: 14,
};
let kr7 = {
    bild: 2,
    value: 7,
};
let kr8 = {
    bild: 2,
    value: 8,
};
let kr9 = {
    bild: 2,
    value: 9,
};
let kr10 = {
    bild: 2,
    value: 10,
};
let krB = {
    bild: 2,
    value: 11,
};
let krD = {
    bild: 2,
    value: 12,
};
let krK = {
    bild: 2,
    value: 13,
};
let krA = {
    bild: 2,
    value: 14,
};
let p7 = {
    bild: 3,
    value: 7,
};
let p8 = {
    bild: 3,
    value: 8,
};
let p9 = {
    bild: 3,
    value: 9,
};
let p10 = {
    bild: 3,
    value: 10,
};
let pB = {
    bild: 3,
    value: 11,
};
let pD = {
    bild: 3,
    value: 12,
};
let pK = {
    bild: 3,
    value: 13,
};
let pA = {
    bild: 3,
    value: 14,
};
let ka7 = {
    bild: 4,
    value: 7,
};
let ka8 = {
    bild: 4,
    value: 8,
};
let ka9 = {
    bild: 4,
    value: 9,
};
let ka10 = {
    bild: 4,
    value: 10,
};
let kaB = {
    bild: 4,
    value: 11,
};
let kaD = {
    bild: 4,
    value: 12,
};
let kaK = {
    bild: 4,
    value: 13,
};
let kaA = {
    bild: 4,
    value: 14,
};
let deck = [h7, h8, h9, h10, hB, hD, hK, hA, kr7, kr8, kr9, kr10, krB, krD, krK, krA, p7, p8, p9, p10, pB, pD, pK, pA, ka7, ka8, ka9, ka10, kaB, kaD, kaK, kaA];
/* Array für die Handkarten*/
let hand = [];
let obersteKarte;
/* Funktion für die Anzahl der Karten, die man bekommt*/
function ausgegebeneKarten() {
    let kartenanzahl;
    do {
        kartenanzahl = parseInt(prompt("Kartenanzahl angeben (Zahl von 1 bis 6 eingeben)"));
    } while (isNaN(kartenanzahl) || kartenanzahl > 6 || kartenanzahl < 1);
    console.log("kartenanzahl: " + kartenanzahl);
    for (let n = 0; n < kartenanzahl; n++) { /* solange die Variable n kleiner ist als die Anzahl der Karten, wird die Funktion "karteZiehen" ausgeführt */
        karteZiehen();
    }
    console.log(hand);
    kartenstapelGenerieren();
    deckGenerieren();
    handkarten();
}
/* Funktion zum Karte ziehen */
function karteZiehen() {
    let i = Math.floor(Math.random() * (deck.length));
    hand.push(deck[i]); /* Karte aus dem Deck wird den Handkarten hinzugefügt */
    deck.splice(i, 1);
}
/* Funktion für den Kartenstapel */
function kartenstapelGenerieren() {
    let i = Math.floor(Math.random() * (deck.length));
    obersteKarte = deck[i];
    deck.splice(i, 1);
    let write = "";
    write += `<div class="cards">`;
    switch (obersteKarte.bild) {
        case 1:
            write += `<img src="img/herz.jpeg" class="symbol" alt="♥">
                <div class="rot">`;
            break;
        case 2:
            write += `<img src="img/kreuz.jpeg" class="symbol" alt="♣" 
                <div class="schwarz">`;
            break;
        case 3:
            write += `<img src="img/pik.jpeg" class="symbol" alt="♠"
                <div class="schwarz">`;
            break;
        case 4:
            write += `<img src="img/karo.jpeg" class="symbol" alt="♦" 
                <div class="rot">`;
            break;
        default:
            console.log("Bild konnte nicht geladen werden");
    }
    switch (obersteKarte.value) {
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
            console.log("value konnte nicht geladen werden");
    }
    write += `</div>`;
    document.getElementById("Stapel").innerHTML = `${write}`;
}
function deckGenerieren() {
    document.getElementById("Deck").innerHTML = `<div class="cards">
    <img src="img/rückseite.jpeg" alt="MISSING TEXTURE" class="kartenrückseite">
    </div>`;
}
/* Funktion für die Handkarten */
function handkarten() {
    document.getElementById("kartenAufHand").innerHTML = "";
    for (var n = 0; n < hand.length; n++) {
        let write = `<div class="cards">`;
        switch (hand[n].bild) {
            case 1:
                write += `<img src="img/herz.jpeg" class="symbol" alt="♥">
                <div class="rot">`;
                break;
            case 2:
                write += `<img src="img/kreuz.jpeg" class="symbol" alt="♣" 
                <div class="schwarz">`;
                break;
            case 3:
                write += `<img src="img/pik.jpeg" class="symbol" alt="♠"
                <div class="schwarz">`;
                break;
            case 4:
                write += `<img src="img/karo.jpeg" class="symbol" alt="♦" 
                <div class="rot">`;
                break;
            default:
                console.log("Bild konnte nicht geladen werden");
        }
        switch (hand[n].value) {
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
                console.log("value konnte nicht geladen werden");
        }
        write += `</div>`;
        document.getElementById("kartenAufHand").innerHTML += `${write}`;
    }
}
function init() {
    ausgegebeneKarten();
}
document.addEventListener("DOMContentLoaded", init);
//# sourceMappingURL=main.js.map