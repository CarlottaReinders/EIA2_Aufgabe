var EisDealer;
(function (EisDealer) {
    window.addEventListener("DOMContentLoaded", init);
    function init(_event) {
        console.log(EisDealer.eissorten);
        document.getElementById("fertigeBestellung").addEventListener("click", fertigeBestellung);
        console.log(document.getElementById("fertigeBestellung"));
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < fieldsets.length; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", bestellwert);
        }
    }
    ;
    function bestellung(_event) {
        var bestellungsOptionen = document.getElementsByTagName("input");
        console.log("war hier");
        document.getElementById("endSorten").innerHTML = "Sorten: ";
        document.getElementById("endToppings").innerHTML = "Toppings: ";
        document.getElementById("endWaffelOderBecher").innerHTML = "Behälter: ";
        document.getElementById("endLieferoptionen").innerHTML = "Versandart: ";
        document.getElementById("endVersandinformationen").innerHTML = "Versandinformationen: ";
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
                    target.innerHTML = "" + bestellungsOptionen[i].name;
                    document.getElementById("endToppings").appendChild(target);
                }
                else if (bestellungsOptionen[i].name == "Behaeltnis") {
                    var target = document.createElement("ul");
                    target.innerHTML = "" + bestellungsOptionen[i].id;
                    document.getElementById("endWaffelOderBecher").appendChild(target);
                }
                else if (bestellungsOptionen[i].name == "shipping") {
                    var target = document.createElement("ul");
                    target.innerHTML = "" + bestellungsOptionen[i].id;
                    document.getElementById("endLieferoptionen").appendChild(target);
                }
            }
            if (bestellungsOptionen[i].name == "vanille" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "schokolade" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "erdbeere" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "waldmeister" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "cookies" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "joghurt" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "banane" && Number(bestellungsOptionen[i].value) > 0) {
                console.log("vanillaja");
                var target = document.createElement("ul");
                target.innerHTML = bestellungsOptionen[i].value + " Kugel(n) " + bestellungsOptionen[i].name;
                document.getElementById("endSorten").appendChild(target);
            }
        }
    }
    function bestellwert(_event) {
        var orderSum = 0;
        var orderPrice = 0;
        var bestellungsOptionen = document.getElementsByTagName("input");
        for (var i = 0; i < bestellungsOptionen.length; i++) {
            if (bestellungsOptionen[i].checked == true
                || bestellungsOptionen[i].name == "schokolade" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "vanille" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "schokolade" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "erdbeere" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "waldmeister" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "cookies" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "joghurt" && Number(bestellungsOptionen[i].value) > 0
                || bestellungsOptionen[i].name == "banane" && Number(bestellungsOptionen[i].value) > 0) {
                orderPrice = Number(bestellungsOptionen[i].value);
                orderSum += orderPrice;
                console.log(orderSum);
            }
        }
        document.getElementById("price").innerHTML = "Preis:  " + orderSum + " \u20AC";
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
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=main.js.map