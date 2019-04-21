// 1. Interface Eissorten & Toppingsorten
// 2. Definitionen von Variablen
// 3. Funktion zur Berechnung des Gesamtpreises
// 4. Funktion zum Hinzufügen des Preises
// 5. Funktion zum Aktualisieren der Bestellung
// 6. Funktion zum prüfen der Bestellung
var sorte1 = {
    name: "Vanille",
    price: 0.8,
};
var sorte2 = {
    name: "Schokolade",
    price: 0.8,
};
var sorte3 = {
    name: "Stracciatella",
    price: 0.8,
};
var sorte4 = {
    name: "Cookies",
    price: 0.8,
};
var sorte5 = {
    name: "Zitrone",
    price: 0.8,
};
var sorte6 = {
    name: "Erdbeere",
    price: 0.8,
};
var sorte7 = {
    name: "Joghurt",
    price: 0.8,
};
var sorte8 = {
    name: "Mango",
    price: 0.8,
};
var sorte9 = {
    name: "Haselnuss",
    price: 0.8,
};
var topping1 = {
    name: "Streusel Vollmilch",
    price: 0.6,
};
var topping2 = {
    name: "Streusel weiße Schokolade",
    price: 0.6,
};
var topping3 = {
    name: "Streusel zartbitter",
    price: 0.6,
};
var topping4 = {
    name: "Schokosoße",
    price: 1.0,
};
var topping5 = {
    name: "Erdbeersoße",
    price: 1.0,
};
var topping6 = {
    name: "Sahne",
    price: 1.0,
};
var topping7 = {
    name: "Raspelschokolade weiß",
    price: 0.8,
};
var topping8 = {
    name: "Raspelschokolade Vollmilch",
    price: 0.8,
};
var eissorten = [sorte1, sorte2, sorte3, sorte4, sorte5, sorte6, sorte7, sorte8, sorte9, topping1, topping2, topping3, topping4, topping5, topping6, topping7];
// 2. Definitionen von Variablen
var price = 0;
var order = [];
// 3. Funktion zum Berechnen des Gesamtpreises
function totalPrice(theproduct) {
    order.push(theproduct);
    addPrice();
    updateOrder();
}
// 4. Funktion zum Hinzufügen des Preises
function addPrice() {
    var i = 0;
    var Summe = 0;
    for (i = 0; i < order.length; i++) {
        Summe = Summe + order[i].price;
    }
    document.getElementById("price").innerHTML = "" + Summe + " €";
    console.log("The total Price is ", Summe, " €.");
    console.log(order);
}
// 5. Funktion zum Aktualisieren der Bestellung
function updateOrder() {
    document.getElementById("Cart").innerHTML = "" + order.length;
}
function renderProducts(ThisProductArray) {
    var i = 0;
    while (i < ThisProductArray.length) {
        writeHtml(ThisProductArray[i], i);
        console.log(ThisProductArray[i].name);
        i++;
    }
}
function init() {
    renderProducts(order);
}
document.addEventListener('DOMContentLoaded', init);
// 6. Funktion zum prüfen der Bestellung
function bestellungPrüfen() {
    console.log("Die Bestellung wurde geprüft");
}
function bestellungErfolgt() {
    console.log("Die Bestellung wurde durchgeführt");
}
//# sourceMappingURL=main.js.map