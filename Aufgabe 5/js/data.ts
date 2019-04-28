
namespace EisDealer {

    export interface shopItem {
        name: String,
        preis: number,
        value: number,
        type: String,
    }

    export let eissorten: shopItem[] = [
        {name: "Vanille", preis: 1, value: 0, type: "number"},
        {name: "Schokolade", preis: 0.8, value: 0, type: "number"},
        {name: "Erdbeere", preis: 1, value: 0, type: "number"},
        {name: "Banane", preis: 1, value: 0, type: "number"},
        {name: "Caramel", preis: 1.5, value: 0, type: "number"},
    ]

    export let topping: shopItem[] = [
        {name: "Streusel", preis: 0.5, value: 0, type: "checkbox"},
        {name: "Soße",preis: 0.5, value: 0, type: "checkbox"},
        {name: "Raspeln", preis: 0.5, value: 0, type: "checkbox"}
    ]

    export let versand: shopItem[] = [
        {name: "Standard", preis: 2, value: 0, type: "radio"},
        {name: "Express",preis: 5, value: 0, type: "radio"},
        {name: "Selbst", preis: 0, value: 0, type: "radio"}
    ]

    export let behaeltnis: shopItem[] = [
        {name: "Waffel", preis: 0.6, value: 0, type: "radio"},
        {name: "Becher",preis: 0.6, value: 0,type: "radio"},
        {name: "Tube", preis: 0.6, value: 0, type: "radio"}
    ]
}