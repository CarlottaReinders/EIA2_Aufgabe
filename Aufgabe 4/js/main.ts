namespace EisdDealer {

window.addEventListener("load", init);
document.getElementById("fertigeBestellung").addEventListener("click", fertigeBestellung);
}

    function init(_event: Event): void {

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", bestellwert);
            console.log(fieldset);
        }
    }

    function bestellwert(_event: Event): void { 
        let orderSum: number = 0;
        let orderPrice: number = 0;
        let bestellungsOptionen: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

        for (let i: number = 0; i < bestellungsOptionen.length; i++) {
            if (bestellungsOptionen[i].checked == true || bestellungsOptionen[i].name == "Schokolade" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Vanille" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Schokolade" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Erdbeere" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Waldmeister" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Cookies" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Joghurt" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Banane" && Number(bestellungsOptionen[i].value) > 0 ){
                orderPrice = Number(bestellungsOptionen[i].value);
                orderSum += orderPrice;
            console.log(orderSum);}
        }
        document.getElementById("bestellwert").innerHTML = `Bestellzusammenfassung:  ${orderSum} €`;
    }
    
    
    function bestellung(_event: Event): void { 
        let bestellungsOptionen: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("sorten").innerHTML = "Sorten: ";
        document.getElementById("toppings").innerHTML = "Toppingss: ";
        document.getElementById("waffelOderBecher").innerHTML = "Behälter: ";
        document.getElementById("lieferoptionen").innerHTML = "Versandart: ";
        document.getElementById("versandinformationen").innerHTML = "Versandinformationen: ";


        for (let i: number = 0; i < bestellungsOptionen.length; i++) {
            if (bestellungsOptionen[i].checked == true) {
                if (bestellungsOptionen[i].name == "Streusel Vollmilch" 
                || bestellungsOptionen[i].name == "Streusel weiß"
                || bestellungsOptionen[i].name == "Streusel zartbitter"
                || bestellungsOptionen[i].name == "Schokosoße"
                || bestellungsOptionen[i].name == "Erdbeersoße" 
                || bestellungsOptionen[i].name == "Sahne"
                || bestellungsOptionen[i].name == "Raspelschokolade weiß" 
                || bestellungsOptionen[i].name == "Raspelschokolade Vollmilch" ) {
                    let target = document.createElement("ul");
                    target.innerHTML = `${bestellungsOptionen[i].alt}, `;
                    document.getElementById("toppingauswahl").appendChild(target);

                } else if (bestellungsOptionen[i].name == "container") {
                    let target =document.createElement("ul");
                    target.innerHTML=`${bestellungsOptionen[i].alt}`;
                            document.getElementById("becherOderWaffel").appendChild(target);

                } else if (bestellungsOptionen[i].name == "shipping") {
                    let target =document.createElement("ul");
                    target.innerHTML=`${bestellungsOptionen[i].alt}`;
                            document.getElementById("versandoptionen").appendChild(target);
                }
            }

            if (bestellungsOptionen[i].name == "Vanille" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Schokolade" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Erdbeere" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Waldmeister" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Cookies" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "Joghurt" && Number(bestellungsOptionen[i].value) > 0 
            || bestellungsOptionen[i].name == "Banane" && Number(bestellungsOptionen[i].value) > 0 ){

                let target = document.createElement("li");
                target.innerHTML = `${bestellungsOptionen[i].value} Kugel (n) ${bestellungsOptionen[i].name}, `;
                document.getElementById("eissorten").appendChild(target);
            }
        }
    }

    function fertigeBestellung(): void {

        let deliveryStatus: number = 0;
        let standardversand: HTMLInputElement = <HTMLInputElement>document.getElementById("standard");
        let expressversand: HTMLInputElement = <HTMLInputElement>document.getElementById("express");
        let selbstabholung: HTMLInputElement = <HTMLInputElement>document.getElementById("selbst");
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let telefonnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("telefonnummer");
        let straße: HTMLInputElement = <HTMLInputElement>document.getElementById("straße");
        let hausnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("hausnummer");
        let postleitzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("postleitzahl");
        let stadt: HTMLInputElement = <HTMLInputElement>document.getElementById("stadt");
        let land: HTMLInputElement = <HTMLInputElement>document.getElementById("land");


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
