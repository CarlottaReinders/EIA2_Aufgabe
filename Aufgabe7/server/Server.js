"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http = require("http"); // Importiere alle Inhalte aus "http" als Typ Http.
var L05_Server;
(function (L05_Server) {
    console.log("Starting server"); // "Starting server" wird auf der Konsole ausgegeben.
    var port = Number(process.env.PORT); // Die Variable "port" vom typ number wird erstellt
    if (!port) // Wenn Port nicht der Fall ist, wird die nächste Zeile ausgeführt
        port = 8100; // Port wird zu 8100
    var server = Http.createServer(); // Die Variable "server" vom Typ Http.Server wird erstellt und dieser Variable wird die Funktion createServer() zugewiesen
    server.addListener("request", handleRequest); // "server" wird ein listener hinzugefügt. Der Listener hört auf einen request und führt handleRequest aus.
    server.addListener("listening", handleListen); // "server" wird ein listener hinzugefügt. Der Listener hört auf listening und führt handleListen aus.
    server.listen(port); // Ein Listener wird erstellt. Er hört auf die oben definierte Variable "port".
    function handleListen() {
        console.log("Listening"); // "Listening" wird an die Console ausgegeben
    } // Die Funktion handleListen wird geschlossen
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // In der Konsole wird "I hear voices!" ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Header-Werte für ein Header-Objekt wird festgelegt. Preexistierender Header-Wert wird ersetzt 
        _response.setHeader("Access-Control-Allow-Origin", "*"); // Header-Wert für Access Control wird festgelet. "*" lässt jeden Origin zu (anstelle von <origin> für spezifische Origins oder "null" für keinen möglichen Origin)
        _response.write(_request.url); // Vom Server wurde eine URL empfangen, die ins _response geschrieben wird 
        _response.end(); // Der Server erhält eine Bestätigung, dass der request vollständig ist.
    } // Funktion handleRequest wird geschlossen
})(L05_Server || (L05_Server = {})); // Namespace "L05 Server" wird geschlossen
//# sourceMappingURL=server.js.map