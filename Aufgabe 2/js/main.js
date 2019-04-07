/* Array für das Kartendeck*/
var h7 = {
    kartendeck: true,
    bild: 1,
    value: 7,
};
var h8 = {
    kartendeck: true,
    bild: 1,
    value: 8,
};
var h9 = {
    kartendeck: true,
    bild: 1,
    value: 9,
};
var h10 = {
    kartendeck: true,
    bild: 1,
    value: 10,
};
var hB = {
    kartendeck: true,
    bild: 1,
    value: 11,
};
var hD = {
    kartendeck: true,
    bild: 1,
    value: 12,
};
var hK = {
    kartendeck: true,
    bild: 1,
    value: 13,
};
var hA = {
    kartendeck: true,
    bild: 1,
    value: 14,
};
var kr7 = {
    kartendeck: true,
    bild: 2,
    value: 7,
};
var kr8 = {
    kartendeck: true,
    bild: 2,
    value: 8,
};
var kr9 = {
    kartendeck: true,
    bild: 2,
    value: 9,
};
var kr10 = {
    kartendeck: true,
    bild: 2,
    value: 10,
};
var krB = {
    kartendeck: true,
    bild: 2,
    value: 11,
};
var krD = {
    kartendeck: true,
    bild: 2,
    value: 12,
};
var krK = {
    kartendeck: true,
    bild: 2,
    value: 13,
};
var krA = {
    kartendeck: true,
    bild: 2,
    value: 14,
};
var p7 = {
    kartendeck: true,
    bild: 3,
    value: 7,
};
var p8 = {
    kartendeck: true,
    bild: 3,
    value: 8,
};
var p9 = {
    kartendeck: true,
    bild: 3,
    value: 9,
};
var p10 = {
    kartendeck: true,
    bild: 3,
    value: 10,
};
var pB = {
    kartendeck: true,
    bild: 3,
    value: 11,
};
var pD = {
    kartendeck: true,
    bild: 3,
    value: 12,
};
var pK = {
    kartendeck: true,
    bild: 3,
    value: 13,
};
var pA = {
    kartendeck: true,
    bild: 3,
    value: 14,
};
var ka7 = {
    kartendeck: true,
    bild: 4,
    value: 7,
};
var ka8 = {
    kartendeck: true,
    bild: 4,
    value: 8,
};
var ka9 = {
    kartendeck: true,
    bild: 4,
    value: 9,
};
var ka10 = {
    kartendeck: true,
    bild: 4,
    value: 10,
};
var kaB = {
    kartendeck: true,
    bild: 4,
    value: 11,
};
var kaD = {
    kartendeck: true,
    bild: 4,
    value: 12,
};
var kaK = {
    kartendeck: true,
    bild: 4,
    value: 13,
};
var kaA = {
    kartendeck: true,
    bild: 4,
    value: 14,
};
var deck = [h7, h8, h9, h10, hB, hD, hK, hA, kr7, kr8, kr9, kr10, krB, krD, krK, krA, p7, p8, p9, p10, pB, pD, pK, pA, ka7, ka8, ka9, ka10, kaB, kaD, kaK, kaA];
/* Array für die Handkarten*/
var hand = [];
var obersteKarte;
/* Funktion für die Anzahl der Karten, die man bekommt*/
function ausgegebeneKarten() {
    var kartenanzahl = 0;
    do {
        kartenanzahl = parseInt(prompt("Kartenanzahl angeben (Zahl zwischen 5 und 7 eingeben)"));
    } while (isNaN(kartenanzahl) || kartenanzahl > 7 || kartenanzahl < 5);
    console.log("kartenanzahl: " + kartenanzahl);
    for (var n = 0; n < kartenanzahl; n++) { /* solange die Variable n kleiner ist als die Anzahl der Karten, wird die Funktion "karteZiehen" ausgeführt */
        karteZiehen();
    }
    console.log(hand);
    kartenstapelGenerieren();
    deckGenerieren();
    handkarten();
}
/* Funktion zum Karte ziehen */
function karteZiehen() {
    var i = Math.floor(Math.random() * 31);
    while (deck[i].kartendeck == false) {
        i = Math.floor(Math.random() * 31); /* eine zufällige Karte von den Stellen 0 bis 31 im Array wird ausgegeben */
    }
    hand[hand.length] = deck[i];
    deck[i].kartendeck = false;
}
/* Funktion für den Kartenstapel */
function kartenstapelGenerieren() {
    var i = Math.floor(Math.random() * 31);
    while (deck[i].kartendeck == false) {
        i = Math.floor(Math.random() * 31);
    }
    obersteKarte = deck[i];
    deck[i].kartendeck = false;
    var write = "";
    write += "<div class=\"cards\">";
    switch (obersteKarte.bild) {
        case 1:
            write += "<img src=\"img/herz.jpg\" class=\"symbol\" alt=\"\u2665\">\n                <div class=\"rot\">";
            break;
        case 2:
            write += "<img src=\"img/kreuz.jpg\" class=\"symbol\" alt=\"\u2663\" \n                <div class=\"schwarz\">";
            break;
        case 3:
            write += "<img src=\"img/pik.jpg\" class=\"symbol\" alt=\"\u2660\"\n                <div class=\"schwarz\">";
            break;
        case 4:
            write += "<img src=\"img/karo.jpg\" class=\"symbol\" alt=\"\u2666\" \n                <div class=\"rot\">";
            break;
        default:
            console.log("Bild konnte nicht geladen werden");
    }
    switch (obersteKarte.value) {
        case 7:
            write += "7</div>";
            break;
        case 8:
            write += "8</div>";
            break;
        case 9:
            write += "9</div>";
            break;
        case 10:
            write += "10</div>";
            break;
        case 11:
            write += "B</div>";
            break;
        case 12:
            write += "D</div>";
            break;
        case 13:
            write += "K</div>";
            break;
        case 14:
            write += "A</div>";
            break;
        default:
            console.log("value konnte nicht geladen werden");
    }
    write += "</div>";
    document.getElementById("Stapel").innerHTML = "" + write;
}
function deckGenerieren() {
    document.getElementById("Deck").innerHTML = "<div class=\"cards\">\n    <img src=\"img/r\u00FCckseite.jpeg\" alt=\"MISSING TEXTURE\" class=\"kartenr\u00FCckseite\">\n    </div>";
}
/* Funktion für die Handkarten */
function handkarten() {
    document.getElementById("kartenAufHand").innerHTML = "";
    for (var n = 0; n < hand.length; n++) {
        var write = "<div class=\"cards\">";
        switch (hand[n].bild) {
            case 1:
                write += "<img src=\"img/herz.jpg\" class=\"symbol\" alt=\"\u2665\">\n                <div class=\"rot\">";
                break;
            case 2:
                write += "<img src=\"img/kreuz.jpg\" class=\"symbol\" alt=\"\u2663\" \n                <div class=\"schwarz\">";
                break;
            case 3:
                write += "<img src=\"img/pik.jpg\" class=\"symbol\" alt=\"\u2660\"\n                <div class=\"schwarz\">";
                break;
            case 4:
                write += "<img src=\"img/karo.jpg\" class=\"symbol\" alt=\"\u2666\" \n                <div class=\"rot\">";
                break;
            default:
                console.log("Bild konnte nicht geladen werden");
        }
        switch (hand[n].value) {
            case 7:
                write += "7</div>";
                break;
            case 8:
                write += "8</div>";
                break;
            case 9:
                write += "9</div>";
                break;
            case 10:
                write += "10</div>";
                break;
            case 11:
                write += "B</div>";
                break;
            case 12:
                write += "D</div>";
                break;
            case 13:
                write += "K</div>";
                break;
            case 14:
                write += "A</div>";
                break;
            default:
                console.log("value konnte nicht geladen werden");
        }
        write += "</div>";
        document.getElementById("kartenAufHand").innerHTML += "" + write;
    }
}
function init() {
    ausgegebeneKarten();
}
document.addEventListener("DOMContentLoaded", init);
