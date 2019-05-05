
namespace EisDealer {

    export interface shopItem {
        name: String,
        preis: number,
        value: number,
        type: String,
    }

    export interface kategorie {
        [key: string]: shopItem;
    }

    export let eissorten: kategorie = {
        "Vanille": {name: "Vanille", preis: 1, value: 0, type: "number"},
        "Schokolade": {name: "Schokolade", preis: 0.8, value: 0, type: "number"},
        "Erdbeere": {name: "Erdbeere", preis: 1, value: 0, type: "number"},
        "Banane": {name: "Banane", preis: 1, value: 0, type: "number"},
        "SpecialGold": {name: "SpecialGold", preis: 3, value: 0, type: "number"},
    }

    export let topping: kategorie = {
        "Streusel": {name: "Streusel", preis: 0.5, value: 0, type: "checkbox"},
        "Soße": {name: "Soße",preis: 0.5, value: 0, type: "checkbox"},
        "Raspeln": {name: "Raspeln", preis: 0.5, value: 0, type: "checkbox"},
    }

    export let versand: kategorie = {
        "Standard": {name: "Standard", preis: 2, value: 0, type: "radio"},
        "Express": {name: "Express",preis: 5, value: 0, type: "radio"},
        "Selbst": {name: "Selbst", preis: 0, value: 0, type: "radio"},
    }

    export let behaeltnis: kategorie = {
        "Waffel": {name: "Waffel", preis: 0.6, value: 0, type: "radio"},
        "Becher": {name: "Becher",preis: 0.6, value: 0,type: "radio"},
        "Tube": {name: "Tube", preis: 0.6, value: 0, type: "radio"},
    }
}