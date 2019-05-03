
namespace EisDealer {

    window.addEventListener("DOMContentLoaded", init);

    //Hier werden die Funktionen zum zeichnen des HTML sowie die EventListener für die Input-Elemente zugewiesen.
    function init(): void {

        drawHTML();
        document.getElementById("fertigeBestellung").addEventListener("click", fertigeBestellung);

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", bestellwert);
        }
    }

    //Die Felder für unsere vom Mitarbeiter eingepflegten Sorten wird hier erstellt.
    function drawHTML() {
        
        for (let key in eissorten) {
            let parent: HTMLElement = document.getElementById("sorten");
            let input: String = "<input type='" + eissorten[key].type + "' name='" + key + "' value='" + eissorten[key].value + "' step='1' min='0' max='15'>";
            let label: String = "<label for='" + key + "'>" + key + "</label>";
            parent.innerHTML += input;
            parent.innerHTML += label;
        }
        for (let key in topping) {
            let input: String = "<input type='" + topping[key].type + "' name='" + key + "' value='" + topping[key].preis + "'>" + key;
            document.getElementById("toppings").innerHTML += input;
        }
        for (let key in behaeltnis) {
            let input: String = "<input type='" + behaeltnis[key].type + "' name='Behaeltnis' id='" + key + "' value='" + behaeltnis[key].preis + "'>" + key; 
            document.getElementById("waffelOderBecher").innerHTML += input;
        }
        for (let key in versand) {
            let input: String = "<input type='" + versand[key].type + "' name='shipping' value='" + versand[key].preis + "' id='" + key + "'>" + key; 
            document.getElementById("lieferoptionen").innerHTML += input;
        }
    }
    
    /**
     *  Hier wird die Bestellzusammenfassung erstellt. 
     *  Bei einer Veränderung werden immer alle Zusammenfassungsfelder gelöscht und dann neu gefüllt.
     */
    function bestellung(): void { 
        let bestellungsOptionen: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("endSorten").innerHTML = "Sorten: ";
        document.getElementById("endToppings").innerHTML = "Toppings: ";
        document.getElementById("endWaffelOderBecher").innerHTML = "Behälter: ";
        document.getElementById("endLieferoptionen").innerHTML = "Versandart: ";
        document.getElementById("endVersandinformationen").innerHTML = "Versandinformationen: ";


        for (let i: number = 0; i < bestellungsOptionen.length; i++) {

            //fügt alle checkboxen der Bestellungsübersicht hinzu
            if (bestellungsOptionen[i].checked == true) {
                for(let key in topping) {
                    if (bestellungsOptionen[i].name == key) {
                        let target = document.createElement("ul");
                        target.innerHTML = key;
                        document.getElementById("endToppings").appendChild(target);
                    }
                } 
                for(let key in behaeltnis) {
                    if (bestellungsOptionen[i].id == key) {
                        let target = document.createElement("ul");
                        target.innerHTML= key;
                        document.getElementById("endWaffelOderBecher").appendChild(target);

                    }
                 }
                 for(let key in versand) {
                    if (bestellungsOptionen[i].id == key) {
                        let target =document.createElement("ul");
                        target.innerHTML= key;
                        document.getElementById("endLieferoptionen").appendChild(target);
                    }
                }
            }

            //fügt alle Eissorten der Bestellungsübersicht hinzu
            for(let key in eissorten) {
               if (bestellungsOptionen[i].name == key && Number(bestellungsOptionen[i].value) > 0){
                    let target = document.createElement("ul");
                    target.innerHTML = bestellungsOptionen[i].value + " Kugel(n) " + key;
                    document.getElementById("endSorten").appendChild(target);
                }
            }
            
        }
    }

    //Hier wird die Summe über alle ausgewählten Produkte erstellt und dann Preis Element angezeigt.
    function bestellwert(): void { 
        let orderSum: number = 0;
        let orderPrice: number = 0;
        let bestellungsOptionen: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

        for (let i: number = 0; i < bestellungsOptionen.length; i++) {
            for (let key in eissorten) {
                if (bestellungsOptionen[i].name == key && Number(bestellungsOptionen[i].value) > 0){
                    orderPrice = Number(bestellungsOptionen[i].value) * eissorten[key].preis;
                    orderSum += orderPrice;
                }
            }
            if (bestellungsOptionen[i].checked == true) {
                orderPrice = Number(bestellungsOptionen[i].value);
                orderSum += orderPrice;
            }
            document.getElementById("price").innerHTML = "Preis: " + orderSum +"€";
        }
    }

    //Überprüfung der Bestellungsangaben nach klicken des Bestellung-Überprüfen Buttons
    function fertigeBestellung(): void {

        let deliveryStatus: boolean = false;
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let telefonnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("telefonnummer");
        let straße: HTMLInputElement = <HTMLInputElement>document.getElementById("straße");
        let hausnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("hausnummer");
        let postleitzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("postleitzahl");
        let stadt: HTMLInputElement = <HTMLInputElement>document.getElementById("stadt");
        let land: HTMLInputElement = <HTMLInputElement>document.getElementById("land");

        let versandOptionen: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        
        //check ob ein versand gewählt wurde.
        for(let i: number = 0; i< versandOptionen.length; i++) {
            if(versandOptionen[i].checked && versandOptionen[i].name == "shipping") {
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
        } else {
            alert("Ihre Bestellung wurde entgegen genommen");
        }
    }
}