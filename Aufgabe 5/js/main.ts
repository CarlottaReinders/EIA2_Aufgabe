
namespace EisDealer {

    window.addEventListener("DOMContentLoaded", init);

    function init(_event: Event): void {
        drawHTML();
        document.getElementById("fertigeBestellung").addEventListener("click", fertigeBestellung);

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", bestellung);
            fieldset.addEventListener("change", bestellwert);
        }
    }

    function drawHTML() {
        let parent: HTMLElement = document.getElementById("sorten");
        for (let i:number = 0; i < eissorten.length; i++) {
            let input: String = "<input type='" + eissorten[i].type + "' name='" + eissorten[i].name + "' value='" + eissorten[i].value +"' step='1' min='0' max='15'>";
            let label: String = "<label for='" + eissorten[i].name + "'>" + eissorten[i].name + "</label>";
            parent.innerHTML += input;
            parent.innerHTML += label;
        }
        for (let i: number = 0; i<topping.length; i++) {
            let input: String = "<input type='" + topping[i].type + "' name='" + topping[i].name + "' value='" + topping[i].preis + "'>" + topping[i].name;
            document.getElementById("toppings").innerHTML += input;
        }
        for (let i: number = 0; i<behaeltnis.length; i++) {
            let input: String = "<input type='" + behaeltnis[i].type + "' name='Behaeltnis' id='" + behaeltnis[i].name + "' value='" + behaeltnis[i].preis + "'>" + behaeltnis[i].name; 
            document.getElementById("waffelOderBecher").innerHTML += input;
        }
        for (let i: number = 0; i<versand.length; i++) {
            let input: String = "<input type='" + versand[i].type + "' name='shipping' value='" + versand[i].preis + "' id='" + versand[i].name + "'>" + versand[i].name; 
            document.getElementById("lieferoptionen").innerHTML += input;
        }
    }
    
    function bestellung(_event: Event): void { 
        let bestellungsOptionen: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("endSorten").innerHTML = "Sorten: ";
        document.getElementById("endToppings").innerHTML = "Toppings: ";
        document.getElementById("endWaffelOderBecher").innerHTML = "Behälter: ";
        document.getElementById("endLieferoptionen").innerHTML = "Versandart: ";
        document.getElementById("endVersandinformationen").innerHTML = "Versandinformationen: ";


        for (let i: number = 0; i < bestellungsOptionen.length; i++) {
            if (bestellungsOptionen[i].checked == true) {
                for(let j: number = 0; j< topping.length; j++) {
                    if (bestellungsOptionen[i].name == topping[j].name) {
                        let target = document.createElement("ul");
                        target.innerHTML = `${bestellungsOptionen[i].name}`;
                        document.getElementById("endToppings").appendChild(target);
                    }
                } 
                for(let j: number = 0; j< behaeltnis.length; j++) {
                    if (bestellungsOptionen[i].id == behaeltnis[j].name) {
                        let target = document.createElement("ul");
                        target.innerHTML=`${bestellungsOptionen[i].id}`;
                        document.getElementById("endWaffelOderBecher").appendChild(target);

                    }
                 }
                 for(let j: number = 0; j< versand.length; j++) {
                     if (bestellungsOptionen[i].id == versand[j].name) {
                    let target =document.createElement("ul");
                    target.innerHTML=`${versand[j].name}`;
                    document.getElementById("endLieferoptionen").appendChild(target);
                    }
                }
            }
            for(let j: number = 0; j< eissorten.length; j++) {
               if (bestellungsOptionen[i].name == eissorten[j].name && Number(bestellungsOptionen[i].value) > 0){
                    let target = document.createElement("ul");
                    target.innerHTML = `${bestellungsOptionen[i].value} Kugel(n) ${bestellungsOptionen[i].name}`;
                    document.getElementById("endSorten").appendChild(target);
                } 
            }
            
        }
    }

    function bestellwert(_event: Event): void { 
        let orderSum: number = 0;
        let orderPrice: number = 0;
        let bestellungsOptionen: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

        for (let i: number = 0; i < bestellungsOptionen.length; i++) {
            for (let j: number = 0; j < eissorten.length; j++) {
                if (bestellungsOptionen[i].name == eissorten[j].name && Number(bestellungsOptionen[i].value) > 0){
                    orderPrice = Number(bestellungsOptionen[i].value) * eissorten[j].preis;
                    orderSum += orderPrice;
                }
            }
            if (bestellungsOptionen[i].checked == true) {
                orderPrice = Number(bestellungsOptionen[i].value);
                orderSum += orderPrice;
            }
            document.getElementById("price").innerHTML = `Preis:  ${orderSum} €`;
        }
    }

    function fertigeBestellung(): void {

        let deliveryStatus: number = 0;
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let telefonnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("telefonnummer");
        let straße: HTMLInputElement = <HTMLInputElement>document.getElementById("straße");
        let hausnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("hausnummer");
        let postleitzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("postleitzahl");
        let stadt: HTMLInputElement = <HTMLInputElement>document.getElementById("stadt");
        let land: HTMLInputElement = <HTMLInputElement>document.getElementById("land");

        let versandOptionen: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        
        for(let i: number = 0; i< versandOptionen.length; i++) {
            if(versandOptionen[i].checked && versandOptionen[i].name == "shipping") {
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
}
