// 1. Interface Eissorten & Toppingsorten
// 2. Definitionen von Variablen
// 3. Funktion zur Berechnung des Gesamtpreises
// 4. Funktion zum Hinzufügen des Preises
// 5. Funktion zum Aktualisieren der Bestellung
// 6. Funktion zum prüfen der Bestellung


// 1. Interface Eissorten & Toppingsorten

interface options {
    name: string,
    price: number;
}
let sorte1: options = {
    name: "Vanille",
    price: 0.8,
}
let sorte2: options = {
    name: "Schokolade",
    price: 0.8,
}
let sorte3: options = {
    name: "Stracciatella",
    price: 0.8,
}
let sorte4: options = {
    name: "Cookies",
    price: 0.8,
}
let sorte5: options = {
    name: "Zitrone",
    price: 0.8,
}
let sorte6: options = {
    name: "Erdbeere",
    price: 0.8,
}
let sorte7: options = {
    name: "Joghurt",
    price: 0.8,
}
let sorte8: options = {
    name: "Mango",
    price: 0.8,
}
let sorte9: options = {
    name: "Haselnuss",
    price: 0.8,
}
let topping1: options = {
    name: "Streusel Vollmilch",
    price: 0.6,
}
let topping2: options = {
    name: "Streusel weiße Schokolade",
    price: 0.6,
}
let topping3: options = {
    name: "Streusel zartbitter",
    price: 0.6,
}
let topping4: options = {
    name: "Schokosoße",
    price: 1.0,
}
let topping5: options = {
    name: "Erdbeersoße",
    price: 1.0,
}
let topping6: options = {
    name: "Sahne",
    price: 1.0,
}
let topping7: options = {
    name: "Raspelschokolade weiß",
    price: 0.8,
}
let topping8: options = {
    name: "Raspelschokolade Vollmilch",
    price: 0.8,
}

let eissorten:options [] = [sorte1, sorte2, sorte3, sorte4, sorte5, sorte6, sorte7, sorte8, sorte9, topping1, topping2, topping3, topping4, topping5, topping6, topping7]



// 2. Definitionen von Variablen

let price:number = 0;

let order:options[]=[];


// 3. Funktion zum Berechnen des Gesamtpreises

function totalPrice(theproduct:options): void{

    order.push(theproduct);
    addPrice();
    updateOrder();
}


// 4. Funktion zum Hinzufügen des Preises
function addPrice():void { 
    let i:number = 0;
    let Summe:number = 0;

    for(i=0;i<order.length;i++) {
        Summe=Summe + order[i].price;
    }

    document.getElementById("price").innerHTML = ""+ Summe + " €";
    console.log("The total Price is ",Summe," €.");
    console.log(order);    
}  


// 5. Funktion zum Aktualisieren der Bestellung
function updateOrder():void {
    document.getElementById("Cart").innerHTML = ""+order.length;
}


function renderProducts (ThisProductArray :options[]): void{ 
    let i :number=0;

    while(i<ThisProductArray.length){ 
        writeHtml(ThisProductArray[i],i); 
        console.log(ThisProductArray[i].name);
        i++;
    } 
}

function init(){ 
    renderProducts(order); 
}
document.addEventListener('DOMContentLoaded', init); 

// 6. Funktion zum prüfen der Bestellung

function bestellungPrüfen():void {
    console.log("Die Bestellung wurde geprüft");
}

function bestellungErfolgt():void {
    console.log("Die Bestellung wurde durchgeführt");
}