var EisDealer;
(function (EisDealer) {
    EisDealer.eissorten = [
        { name: "Vanille", preis: 1, value: 0, type: "number" },
        { name: "Schokolade", preis: 0.8, value: 0, type: "number" },
        { name: "Erdbeere", preis: 1, value: 0, type: "number" },
        { name: "Banane", preis: 1, value: 0, type: "number" },
        { name: "Caramel", preis: 1.5, value: 0, type: "number" },
    ];
    EisDealer.topping = [
        { name: "Streusel", preis: 0.5, value: 0, type: "checkbox" },
        { name: "Soße", preis: 0.5, value: 0, type: "checkbox" },
        { name: "Raspeln", preis: 0.5, value: 0, type: "checkbox" }
    ];
    EisDealer.versand = [
        { name: "Standard", preis: 2, value: 0, type: "radio" },
        { name: "Express", preis: 5, value: 0, type: "radio" },
        { name: "Selbst", preis: 0, value: 0, type: "radio" }
    ];
    EisDealer.behaeltnis = [
        { name: "Waffel", preis: 0.6, value: 0, type: "radio" },
        { name: "Becher", preis: 0.6, value: 0, type: "radio" },
        { name: "Tube", preis: 0.6, value: 0, type: "radio" }
    ];
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=data.js.map