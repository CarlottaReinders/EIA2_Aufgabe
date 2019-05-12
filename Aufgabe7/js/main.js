var EisDealer;
(function (EisDealer) {
    window.addEventListener("DOMContentLoaded", init);
    //Hier werden die Funktionen zum zeichnen des HTML sowie die EventListener für die Input-Elemente zugewiesen.
    function init() {
        drawHTML();
        document.getElementById("fertigeBestellung").addEventListener("click", fertigeBestellung);
        document.getElementById("fertigeBestellung").addEventListener("click", WriteURL);
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < fieldsets.length; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", bestellwert);
        }
    }
    //Die Felder für unsere vom Mitarbeiter eingepflegten Sorten wird hier erstellt.
    function drawHTML() {
        var parent = document.getElementById("sorten");
        for (var key in EisDealer.eissorten) {
            var input = "<input type='" + EisDealer.eissorten[key].type + "' name='" + EisDealer.eissorten[key].name + "' value='" + EisDealer.eissorten[key].value + "' step='1' min='0' max='15'>";
            var label = "<label for='" + EisDealer.eissorten[key].name + "'>" + EisDealer.eissorten[key].name + "</label>";
            parent.innerHTML += input;
            parent.innerHTML += label;
        }
        for (var key in EisDealer.topping) {
            var input = "<input type='" + EisDealer.topping[key].type + "' name='" + EisDealer.topping[key].name + "' value='" + EisDealer.topping[key].preis + "'>" + EisDealer.topping[key].name;
            document.getElementById("toppings").innerHTML += input;
        }
        for (var key in EisDealer.behaeltnis) {
            var input = "<input type='" + EisDealer.behaeltnis[key].type + "' name='Behaeltnis' id='" + EisDealer.behaeltnis[key].name + "' value='" + EisDealer.behaeltnis[key].preis + "'>" + EisDealer.behaeltnis[key].name;
            document.getElementById("waffelOderBecher").innerHTML += input;
        }
        for (var key in EisDealer.versand) {
            var input = "<input type='" + EisDealer.versand[key].type + "' name='shipping' value='" + EisDealer.versand[key].preis + "' id='" + EisDealer.versand[key].name + "'>" + EisDealer.versand[key].name;
            document.getElementById("lieferoptionen").innerHTML += input;
        }
    }
    /**
     *  Hier wird die Bestellzusammenfassung erstellt.
     *  Bei einer Veränderung werden immer alle Zusammenfassungsfelder gelöscht und dann neu gefüllt.
     */
    function bestellung() {
        var bestellungsOptionen = document.getElementsByTagName("input");
        document.getElementById("endSorten").innerHTML = "Sorten: ";
        document.getElementById("endToppings").innerHTML = "Toppings: ";
        document.getElementById("endWaffelOderBecher").innerHTML = "Behälter: ";
        document.getElementById("endLieferoptionen").innerHTML = "Versandart: ";
        document.getElementById("endVersandinformationen").innerHTML = "Versandinformationen: ";
        for (var i = 0; i < bestellungsOptionen.length; i++) {
            if (bestellungsOptionen[i].checked == true) {
                for (var key in EisDealer.topping) {
                    if (bestellungsOptionen[i].name == key) {
                        var target = document.createElement("ul");
                        target.innerHTML = "" + key;
                        document.getElementById("endToppings").appendChild(target);
                    }
                }
                for (var key in EisDealer.behaeltnis) {
                    if (bestellungsOptionen[i].id == key) {
                        var target = document.createElement("ul");
                        target.innerHTML = "" + bestellungsOptionen[i].id;
                        document.getElementById("endWaffelOderBecher").appendChild(target);
                    }
                }
                for (var key in EisDealer.versand) {
                    if (bestellungsOptionen[i].id == key) {
                        var target = document.createElement("ul");
                        target.innerHTML = "" + key;
                        document.getElementById("endLieferoptionen").appendChild(target);
                    }
                }
            }
            for (var key in EisDealer.eissorten) {
                if (bestellungsOptionen[i].name == key && Number(bestellungsOptionen[i].value) > 0) {
                    var target = document.createElement("ul");
                    target.innerHTML = bestellungsOptionen[i].value + " Kugel(n) " + key;
                    document.getElementById("endSorten").appendChild(target);
                }
            }
            if (bestellungsOptionen[i].name == "Name" || bestellungsOptionen[i].name == "Telefonnummer" || bestellungsOptionen[i].name == "Straße" || bestellungsOptionen[i].name == "Hausnummer" || bestellungsOptionen[i].name == "PLZ" || bestellungsOptionen[i].name == "Stadt" || bestellungsOptionen[i].name == "Land" && bestellungsOptionen[i].value != "") {
                var target = document.createElement("ul");
                target.innerHTML = bestellungsOptionen[i].name + " : " + bestellungsOptionen[i].value;
                document.getElementById("endVersandinformationen").appendChild(target);
            }
        }
    }
    //Hier wird die Summe über alle ausgewählten Produkte erstellt und dann Preis Element angezeigt.
    function bestellwert() {
        var orderSum = 0;
        var orderPrice = 0;
        var bestellungsOptionen = document.getElementsByTagName("input");
        for (var i = 0; i < bestellungsOptionen.length; i++) {
            for (var key in EisDealer.eissorten) {
                if (bestellungsOptionen[i].name == key && Number(bestellungsOptionen[i].value) > 0) {
                    orderPrice = Number(bestellungsOptionen[i].value) * EisDealer.eissorten[key].preis;
                    orderSum += orderPrice;
                }
            }
            if (bestellungsOptionen[i].checked == true) {
                orderPrice = Number(bestellungsOptionen[i].value);
                orderSum += orderPrice;
            }
            document.getElementById("price").innerHTML = String(orderSum.toFixed(2)) + " €";
        }
    }
    //Überprüfung der Bestellungsangaben nach klicken des Bestellung-Überprüfen Buttons
    function fertigeBestellung() {
        var deliveryStatus = false;
        var name = document.getElementById("name");
        var telefonnummer = document.getElementById("telefonnummer");
        var straße = document.getElementById("straße");
        var hausnummer = document.getElementById("hausnummer");
        var postleitzahl = document.getElementById("postleitzahl");
        var stadt = document.getElementById("stadt");
        var land = document.getElementById("land");
        var versandOptionen = document.getElementsByTagName("input");
        //check ob ein versand gewählt wurde.
        for (var i = 0; i < versandOptionen.length; i++) {
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
    // Aufgabe 7
    function WriteURL() {
        var bestellung = document.getElementsByTagName("input");
        var url = "https://server-eia2.herokuapp.com/?";
        for (var i = 0; i < bestellung.length; i++) {
            if (bestellung[i].name == "eissorten" && bestellung[i].checked == true) {
                url += bestellung[i].name + ":" + bestellung[i].value + "&";
            }
            if (bestellung[i].name == "topping" && bestellung[i].checked == true) {
                url += bestellung[i].name + ":" + bestellung[i].value + "&";
            }
            if (bestellung[i].type == "number" && Number(bestellung[i].value) > 0) {
                url += bestellung[i].name + ":" + bestellung[i].value + "&";
            }
            if (bestellung[i].type == "checkbox" && bestellung[i].checked == true) {
                url += bestellung[i].name + ":" + bestellung[i].value + "&";
            }
        }
        sendRequest(url);
    }
    function sendRequest(_url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", _url, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("server").innerHTML = xhr.response;
        }
    }
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=main.js.map