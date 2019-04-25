var EisdDealer;
(function (EisdDealer) {
    window.addEventListener("load", init);
    document.getElementById("fertigeBestellung").addEventListener("click", fertigeBestellung);
})(EisdDealer || (EisdDealer = {}));
function init(_event) {
    var fieldsets = document.getElementsByTagName("fieldset");
    for (var i = 0; i < fieldsets.length; i++) {
        var fieldset = fieldsets[i];
        fieldset.addEventListener("change", bestellung);
        fieldset.addEventListener("change", bestellwert);
        console.log(fieldset);
    }
}
function bestellwert(_event) {
    var orderSum = 0;
    var orderPrice = 0;
    var bestellungsOptionen = document.getElementsByTagName("input");
    for (var i = 0; i < bestellungsOptionen.length; i++) {
        if (bestellungsOptionen[i].checked == true
            || bestellungsOptionen[i].name == "Schokolade" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Vanille" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Schokolade" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Erdbeere" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Waldmeister" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Cookies" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Joghurt" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Banane" && Number(bestellungsOptionen[i].value) > 0) {
            orderPrice = Number(bestellungsOptionen[i].value);
            orderSum += orderPrice;
            console.log(orderSum);
        }
    }
    document.getElementById("price").innerHTML = "Bestellzusammenfassung:  " + orderSum + " \u20AC";
}
function bestellung(_event) {
    var bestellungsOptionen = document.getElementsByTagName("input");
    document.getElementById("sorten").innerHTML = "Sorten: ";
    document.getElementById("toppings").innerHTML = "Toppings: ";
    document.getElementById("waffelOderBecher").innerHTML = "Behälter: ";
    document.getElementById("lieferoptionen").innerHTML = "Versandart: ";
    document.getElementById("versandinformationen").innerHTML = "Versandinformationen: ";
    for (var i = 0; i < bestellungsOptionen.length; i++) {
        if (bestellungsOptionen[i].checked == true) {
            if (bestellungsOptionen[i].name == "Streusel Vollmilch"
                || bestellungsOptionen[i].name == "Streusel weiß"
                || bestellungsOptionen[i].name == "Streusel zartbitter"
                || bestellungsOptionen[i].name == "Schokosoße"
                || bestellungsOptionen[i].name == "Erdbeersoße"
                || bestellungsOptionen[i].name == "Sahne"
                || bestellungsOptionen[i].name == "Raspelschokolade weiß"
                || bestellungsOptionen[i].name == "Raspelschokolade Vollmilch") {
                var target = document.createElement("ul");
                target.innerHTML = bestellungsOptionen[i].alt + ", ";
                document.getElementById("toppings").appendChild(target);
            }
            else if (bestellungsOptionen[i].name == "container") {
                var target = document.createElement("ul");
                target.innerHTML = "" + bestellungsOptionen[i].alt;
                document.getElementById("waffelOderBecher").appendChild(target);
            }
            else if (bestellungsOptionen[i].name == "shipping") {
                var target = document.createElement("ul");
                target.innerHTML = "" + bestellungsOptionen[i].alt;
                document.getElementById("lieferoptionen").appendChild(target);
            }
        }
        if (bestellungsOptionen[i].name == "Vanille" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Schokolade" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Erdbeere" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Waldmeister" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Cookies" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Joghurt" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Banane" && Number(bestellungsOptionen[i].value) > 0) {
            var target = document.createElement("li");
            target.innerHTML = bestellungsOptionen[i].value + " Kugel (n) " + bestellungsOptionen[i].name + ", ";
            document.getElementById("eissorten").appendChild(target);
        }
    }
}
function fertigeBestellung() {
    var deliveryStatus = 0;
    var standardversand = document.getElementById("standard");
    var expressversand = document.getElementById("express");
    var selbstabholung = document.getElementById("selbst");
    var name = document.getElementById("name");
    var telefonnummer = document.getElementById("telefonnummer");
    var straße = document.getElementById("straße");
    var hausnummer = document.getElementById("hausnummer");
    var postleitzahl = document.getElementById("postleitzahl");
    var stadt = document.getElementById("stadt");
    var land = document.getElementById("land");
    if (standardversand.checked == true || expressversand.checked == true || selbstabholung.checked == true) {
        deliveryStatus = 1;
    }
    if (name.value == ""
        || telefonnummer.value == ""
        || straße.value == ""
        || hausnummer.value == ""
        || postleitzahl.value == ""
        || stadt.value == ""
        || land.value == ""
        || deliveryStatus == 0) {
        alert("Die Felder müssen ausgefüllt werden");
    }
}
//# sourceMappingURL=main.js.map