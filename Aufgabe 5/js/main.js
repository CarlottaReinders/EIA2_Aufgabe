var EisDealer;
(function (EisDealer) {
    window.addEventListener("DOMContentLoaded", init);
    function init(_event) {
        drawHTML();
        document.getElementById("fertigeBestellung").addEventListener("click", fertigeBestellung);
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < fieldsets.length; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", bestellwert);
        }
    }
    function drawHTML() {
        var parent = document.getElementById("sorten");
        for (var i = 0; i < EisDealer.eissorten.length; i++) {
            var input = "<input type='" + EisDealer.eissorten[i].type + "' name='" + EisDealer.eissorten[i].name + "' value='" + EisDealer.eissorten[i].value + "' step='1' min='0' max='15'>";
            var label = "<label for='" + EisDealer.eissorten[i].name + "'>" + EisDealer.eissorten[i].name + "</label>";
            parent.innerHTML += input;
            parent.innerHTML += label;
        }
        for (var i = 0; i < EisDealer.topping.length; i++) {
            var input = "<input type='" + EisDealer.topping[i].type + "' name='" + EisDealer.topping[i].name + "' value='" + EisDealer.topping[i].preis + "'>" + EisDealer.topping[i].name;
            document.getElementById("toppings").innerHTML += input;
        }
        for (var i = 0; i < EisDealer.behaeltnis.length; i++) {
            var input = "<input type='" + EisDealer.behaeltnis[i].type + "' name='Behaeltnis' id='" + EisDealer.behaeltnis[i].name + "' value='" + EisDealer.behaeltnis[i].preis + "'>" + EisDealer.behaeltnis[i].name;
            document.getElementById("waffelOderBecher").innerHTML += input;
        }
        for (var i = 0; i < EisDealer.versand.length; i++) {
            var input = "<input type='" + EisDealer.versand[i].type + "' name='shipping' value='" + EisDealer.versand[i].preis + "' id='" + EisDealer.versand[i].name + "'>" + EisDealer.versand[i].name;
            document.getElementById("lieferoptionen").innerHTML += input;
        }
    }
    function bestellung(_event) {
        var bestellungsOptionen = document.getElementsByTagName("input");
        document.getElementById("endSorten").innerHTML = "Sorten: ";
        document.getElementById("endToppings").innerHTML = "Toppings: ";
        document.getElementById("endWaffelOderBecher").innerHTML = "Behälter: ";
        document.getElementById("endLieferoptionen").innerHTML = "Versandart: ";
        document.getElementById("endVersandinformationen").innerHTML = "Versandinformationen: ";
        for (var i = 0; i < bestellungsOptionen.length; i++) {
            if (bestellungsOptionen[i].checked == true) {
                for (var j = 0; j < EisDealer.topping.length; j++) {
                    if (bestellungsOptionen[i].name == EisDealer.topping[j].name) {
                        var target = document.createElement("ul");
                        target.innerHTML = "" + bestellungsOptionen[i].name;
                        document.getElementById("endToppings").appendChild(target);
                    }
                }
                for (var j = 0; j < EisDealer.behaeltnis.length; j++) {
                    if (bestellungsOptionen[i].id == EisDealer.behaeltnis[j].name) {
                        var target = document.createElement("ul");
                        target.innerHTML = "" + bestellungsOptionen[i].id;
                        document.getElementById("endWaffelOderBecher").appendChild(target);
                    }
                }
                for (var j = 0; j < EisDealer.versand.length; j++) {
                    if (bestellungsOptionen[i].id == EisDealer.versand[j].name) {
                        var target = document.createElement("ul");
                        target.innerHTML = "" + EisDealer.versand[j].name;
                        document.getElementById("endLieferoptionen").appendChild(target);
                    }
                }
            }
            for (var j = 0; j < EisDealer.eissorten.length; j++) {
                if (bestellungsOptionen[i].name == EisDealer.eissorten[j].name && Number(bestellungsOptionen[i].value) > 0) {
                    var target = document.createElement("ul");
                    target.innerHTML = bestellungsOptionen[i].value + " Kugel(n) " + bestellungsOptionen[i].name;
                    document.getElementById("endSorten").appendChild(target);
                }
            }
        }
    }
    function bestellwert(_event) {
        var orderSum = 0;
        var orderPrice = 0;
        var bestellungsOptionen = document.getElementsByTagName("input");
        for (var i = 0; i < bestellungsOptionen.length; i++) {
            for (var j = 0; j < EisDealer.eissorten.length; j++) {
                if (bestellungsOptionen[i].name == EisDealer.eissorten[j].name && Number(bestellungsOptionen[i].value) > 0) {
                    orderPrice = Number(bestellungsOptionen[i].value) * EisDealer.eissorten[j].preis;
                    orderSum += orderPrice;
                }
            }
            if (bestellungsOptionen[i].checked == true) {
                orderPrice = Number(bestellungsOptionen[i].value);
                orderSum += orderPrice;
            }
            document.getElementById("price").innerHTML = "Preis:  " + orderSum + " \u20AC";
        }
    }
    function fertigeBestellung() {
        var deliveryStatus = 0;
        var name = document.getElementById("name");
        var telefonnummer = document.getElementById("telefonnummer");
        var straße = document.getElementById("straße");
        var hausnummer = document.getElementById("hausnummer");
        var postleitzahl = document.getElementById("postleitzahl");
        var stadt = document.getElementById("stadt");
        var land = document.getElementById("land");
        var versandOptionen = document.getElementsByTagName("input");
        for (var i = 0; i < versandOptionen.length; i++) {
            if (versandOptionen[i].checked && versandOptionen[i].name == "shipping") {
                deliveryStatus = 1;
            }
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