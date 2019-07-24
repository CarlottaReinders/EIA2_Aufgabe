var EisDealer;
(function (EisDealer) {
    window.addEventListener("DOMContentLoaded", init);
    //Hier werden die Funktionen zum zeichnen des HTML sowie die EventListener für die Input-Elemente zugewiesen.
    function init() {
        drawHTML();
        document.getElementById("fertigeBestellung").addEventListener("click", fertigeBestellung);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", bestellwert);
        }
    }
    //Die Felder für unsere vom Mitarbeiter eingepflegten Sorten wird hier erstellt.
    function drawHTML() {
        for (let key in EisDealer.eissorten) {
            let parent = document.getElementById("sorten");
            let input = "<input type='" + EisDealer.eissorten[key].type + "' name='" + key + "' value='" + EisDealer.eissorten[key].value + "' step='1' min='0' max='15'>";
            let label = "<label for='" + key + "'>" + key + "</label>";
            parent.innerHTML += input;
            parent.innerHTML += label;
        }
        for (let key in EisDealer.topping) {
            let input = "<input type='" + EisDealer.topping[key].type + "' name='" + key + "' value='" + EisDealer.topping[key].preis + "'>" + key;
            document.getElementById("toppings").innerHTML += input;
        }
        for (let key in EisDealer.behaeltnis) {
            let input = "<input type='" + EisDealer.behaeltnis[key].type + "' name='Behaeltnis' id='" + key + "' value='" + EisDealer.behaeltnis[key].preis + "'>" + key;
            document.getElementById("waffelOderBecher").innerHTML += input;
        }
        for (let key in EisDealer.versand) {
            let input = "<input type='" + EisDealer.versand[key].type + "' name='shipping' value='" + EisDealer.versand[key].preis + "' id='" + key + "'>" + key;
            document.getElementById("lieferoptionen").innerHTML += input;
        }
    }
    /**
     *  Hier wird die Bestellzusammenfassung erstellt.
     *  Bei einer Veränderung werden immer alle Zusammenfassungsfelder gelöscht und dann neu gefüllt.
     */
    function bestellung() {
        let bestellungsOptionen = document.getElementsByTagName("input");
        document.getElementById("endSorten").innerHTML = "Sorten: ";
        document.getElementById("endToppings").innerHTML = "Toppings: ";
        document.getElementById("endWaffelOderBecher").innerHTML = "Behälter: ";
        document.getElementById("endLieferoptionen").innerHTML = "Versandart: ";
        document.getElementById("endVersandinformationen").innerHTML = "Versandinformationen: ";
        for (let i = 0; i < bestellungsOptionen.length; i++) {
            //fügt alle checkboxen der Bestellungsübersicht hinzu
            if (bestellungsOptionen[i].checked == true) {
                for (let key in EisDealer.topping) {
                    if (bestellungsOptionen[i].name == key) {
                        let target = document.createElement("ul");
                        target.innerHTML = key;
                        document.getElementById("endToppings").appendChild(target);
                    }
                }
                for (let key in EisDealer.behaeltnis) {
                    if (bestellungsOptionen[i].id == key) {
                        let target = document.createElement("ul");
                        target.innerHTML = key;
                        document.getElementById("endWaffelOderBecher").appendChild(target);
                    }
                }
                for (let key in EisDealer.versand) {
                    if (bestellungsOptionen[i].id == key) {
                        let target = document.createElement("ul");
                        target.innerHTML = key;
                        document.getElementById("endLieferoptionen").appendChild(target);
                    }
                }
            }
            //fügt alle Eissorten der Bestellungsübersicht hinzu
            for (let key in EisDealer.eissorten) {
                if (bestellungsOptionen[i].name == key && Number(bestellungsOptionen[i].value) > 0) {
                    let target = document.createElement("ul");
                    target.innerHTML = bestellungsOptionen[i].value + " Kugel(n) " + key;
                    document.getElementById("endSorten").appendChild(target);
                }
            }
        }
    }
    //Hier wird die Summe über alle ausgewählten Produkte erstellt und dann Preis Element angezeigt.
    function bestellwert() {
        let orderSum = 0;
        let orderPrice = 0;
        let bestellungsOptionen = document.getElementsByTagName("input");
        for (let i = 0; i < bestellungsOptionen.length; i++) {
            for (let key in EisDealer.eissorten) {
                if (bestellungsOptionen[i].name == key && Number(bestellungsOptionen[i].value) > 0) {
                    orderPrice = Number(bestellungsOptionen[i].value) * EisDealer.eissorten[key].preis;
                    orderSum += orderPrice;
                }
            }
            if (bestellungsOptionen[i].checked == true) {
                orderPrice = Number(bestellungsOptionen[i].value);
                orderSum += orderPrice;
            }
            document.getElementById("price").innerHTML = "Preis: " + orderSum + "€";
        }
    }
    //Überprüfung der Bestellungsangaben nach klicken des Bestellung-Überprüfen Buttons
    function fertigeBestellung() {
        let deliveryStatus = false;
        let name = document.getElementById("name");
        let telefonnummer = document.getElementById("telefonnummer");
        let straße = document.getElementById("straße");
        let hausnummer = document.getElementById("hausnummer");
        let postleitzahl = document.getElementById("postleitzahl");
        let stadt = document.getElementById("stadt");
        let land = document.getElementById("land");
        let versandOptionen = document.getElementsByTagName("input");
        //check ob ein versand gewählt wurde.
        for (let i = 0; i < versandOptionen.length; i++) {
            if (versandOptionen[i].checked && versandOptionen[i].name == "shipping") {
                deliveryStatus = true;
            }
        }
        //check ob alle Felder Text enthalten.
        if (name.value == ""
            || telefonnummer.value == ""
            || straße.value == ""
            || hausnummer.value == ""
            || postleitzahl.value == ""
            || stadt.value == ""
            || land.value == ""
            || deliveryStatus == false) {
            alert("Die Felder müssen ausgefüllt werden");
        }
        else {
            alert("Ihre Bestellung wurde entgegen genommen");
        }
    }
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=main.js.map