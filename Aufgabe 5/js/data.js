var EisDealer;
(function (EisDealer) {
    EisDealer.eissorten = [
        { name: "Vanille", preis: 1, type: "number" },
        { name: "Schokolade", preis: 1, type: "number" },
        { name: "Erdbeere", preis: 1, type: "number" }
    ];
    EisDealer.topping = [
        { name: "Streusel", preis: 0.5, type: "checkbox" },
        { name: "Soße", preis: 0.5, type: "checkbox" },
        { name: "Raspeln", preis: 0.5, type: "checkbox" }
    ];
    EisDealer.versand = [
        { name: "Standard", preis: 1, type: "radio" },
        { name: "Express", preis: 1, type: "radio" },
        { name: "Selbst", preis: 1, type: "radio" }
    ];
    EisDealer.behaeltnis = [
        { name: "Waffel", preis: 0.6, type: "radio" },
        { name: "Becher", preis: 0.6, type: "radio" },
        { name: "Tube", preis: 0.6, type: "radio" }
    ];
})(EisDealer || (EisDealer = {}));
//# sourceMappingURL=data.js.map