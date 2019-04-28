
namespace EisDealer {

    window.addEventListener("DOMContentLoaded", init);

    function init(_event: Event): void {
        console.log(eissorten);
        document.getElementById("fertigeBestellung").addEventListener("click", fertigeBestellung);
        console.log(document.getElementById("fertigeBestellung"));

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", bestellwert);
        }
    };
    
    function bestellung(_event: Event): void { 
        let bestellungsOptionen: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("endSorten").innerHTML = "Sorten: ";
        document.getElementById("endToppings").innerHTML = "Toppings: ";
        document.getElementById("endWaffelOderBecher").innerHTML = "Behälter: ";
        document.getElementById("endLieferoptionen").innerHTML = "Versandart: ";
        document.getElementById("endVersandinformationen").innerHTML = "Versandinformationen: ";


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
                    target.innerHTML = `${bestellungsOptionen[i].name}`;
                    document.getElementById("endToppings").appendChild(target);

                } else if (bestellungsOptionen[i].name == "Behaeltnis") {
                    let target = document.createElement("ul");
                    target.innerHTML=`${bestellungsOptionen[i].id}`;
                    document.getElementById("endWaffelOderBecher").appendChild(target);

                } else if (bestellungsOptionen[i].name == "shipping") {
                    let target =document.createElement("ul");
                    target.innerHTML=`${bestellungsOptionen[i].id}`;
                            document.getElementById("endLieferoptionen").appendChild(target);
                }
            }

            if (bestellungsOptionen[i].name == "vanille" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "schokolade" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "erdbeere" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "waldmeister" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "cookies" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "joghurt" && Number(bestellungsOptionen[i].value) > 0 
            || bestellungsOptionen[i].name == "banane" && Number(bestellungsOptionen[i].value) > 0 ){

                let target = document.createElement("ul");
                target.innerHTML = `${bestellungsOptionen[i].value} Kugel(n) ${bestellungsOptionen[i].name}`;
                document.getElementById("endSorten").appendChild(target);
            }
        }
    }

    function bestellwert(_event: Event): void { 
        let orderSum: number = 0;
        let orderPrice: number = 0;
        let bestellungsOptionen: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

        for (let i: number = 0; i < bestellungsOptionen.length; i++) {
            if (bestellungsOptionen[i].checked == true
            || bestellungsOptionen[i].name == "schokolade" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "vanille" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "schokolade" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "erdbeere" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "waldmeister" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "cookies" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "joghurt" && Number(bestellungsOptionen[i].value) > 0
            || bestellungsOptionen[i].name == "banane" && Number(bestellungsOptionen[i].value) > 0 ){
                orderPrice = Number(bestellungsOptionen[i].value);
                orderSum += orderPrice;
            console.log(orderSum);}
        }
        document.getElementById("price").innerHTML = `Preis:  ${orderSum} €`;
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
}
