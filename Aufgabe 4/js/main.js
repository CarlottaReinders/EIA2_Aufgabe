var EisdDealer;
(function (EisdDealer) {
    window.addEventListener("load", init);
    function init(_event) {
        document.getElementById("fertigeBestellung").addEventListener("click", fertigeBestellung);
        console.log(document.getElementById("fertigeBestellung"));
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", bestellwert);
        }
    }
    function bestellung(_event) {
        let bestellungsOptionen = document.getElementsByTagName("input");
        console.log("war hier");
        document.getElementById("endSorten").innerHTML = "Sorten: ";
        document.getElementById("endToppings").innerHTML = "Toppings: ";
        document.getElementById("endWaffelOderBecher").innerHTML = "Behälter: ";
        document.getElementById("endLieferoptionen").innerHTML = "Versandart: ";
        document.getElementById("endVersandinformationen").innerHTML = "Versandinformationen: ";
        for (let i = 0; i < bestellungsOptionen.length; i++) {
            if (bestellungsOptionen[i].checked == true) {
                if (bestellungsOptionen[i].name == "Streusel Vollmilch"
                    || bestellungsOptionen[i].name == "Streusel weiß"
                    || bestellungsOptionen[i].name == "Streusel zartbitter"
                    || bestellungsOptionen[i].name == "Schokosoße"
                    || bestellungsOptionen[i].name == "Erdbeersoße"
                    || bestellungsOptionen[i].name == "Sahne"
                    || bestellungsOptionen[i].name == "Raspelschokolade weiß"
                    || bestellungsOptionen[i].name == "Raspelschokolade Vollmilch") {
                    let target = document.createElement("ul");
                    target.innerHTML = `${bestellungsOptionen[i].name}`;
                    document.getElementById("endToppings").appendChild(target);
                }
                else if (bestellungsOptionen[i].name == "Behaeltnis") {
                    let target = document.createElement("ul");
                    target.innerHTML = `${bestellungsOptionen[i].id}`;
                    document.getElementById("endWaffelOderBecher").appendChild(target);
                }
                else if (bestellungsOptionen[i].name == "shipping") {
                    let target = document.createElement("ul");
                    target.innerHTML = `${bestellungsOptionen[i].id}`;
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
                let target = document.createElement("ul");
                target.innerHTML = `${bestellungsOptionen[i].value} Kugel(n) ${bestellungsOptionen[i].name}`;
                document.getElementById("endSorten").appendChild(target);
            }
        }
    }
    function bestellwert(_event) {
        let orderSum = 0;
        let orderPrice = 0;
        let bestellungsOptionen = document.getElementsByTagName("input");
        for (let i = 0; i < bestellungsOptionen.length; i++) {
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
        document.getElementById("price").innerHTML = `Preis:  ${orderSum} €`;
    }
    function fertigeBestellung() {
        let deliveryStatus = 0;
        let standardversand = document.getElementById("standard");
        let expressversand = document.getElementById("express");
        let selbstabholung = document.getElementById("selbst");
        let name = document.getElementById("name");
        let telefonnummer = document.getElementById("telefonnummer");
        let straße = document.getElementById("straße");
        let hausnummer = document.getElementById("hausnummer");
        let postleitzahl = document.getElementById("postleitzahl");
        let stadt = document.getElementById("stadt");
        let land = document.getElementById("land");
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
})(EisdDealer || (EisdDealer = {}));
//# sourceMappingURL=main.js.map