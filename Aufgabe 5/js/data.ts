
namespace EisDealer {

    export interface shopItem {
        name: String,
        preis: number,
        type: String,
    }

    export let eissorten: shopItem[] = [
        {name: "Vanille", preis: 1, type: "number"},
        {name: "Schokolade",preis: 1,type: "number"},
        {name: "Erdbeere", preis: 1, type: "number"}
    ]

    export let topping: shopItem[] = [
        {name: "Streusel", preis: 0.5, type: "checkbox"},
        {name: "Soße",preis: 0.5,type: "checkbox"},
        {name:"Raspeln", preis: 0.5, type: "checkbox"}
    ]

    export let versand: shopItem[] = [
        {name: "Standard", preis: 1, type: "radio"},
        {name: "Express",preis: 1,type: "radio"},
        {name:"Selbst", preis: 1, type: "radio"}
    ]

    export let behaeltnis: shopItem[] = [
        {name: "Waffel", preis: 0.6, type: "radio"},
        {name: "Becher",preis: 0.6,type: "radio"},
        {name:"Tube", preis: 0.6, type: "radio"}
    ]
}