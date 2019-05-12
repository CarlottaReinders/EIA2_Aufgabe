import * as Http from "http"; // Importiere alle Inhalte aus "http" als Typ Http.
import * as Url from "url";

namespace L05_Server {										// Erstelle Namespace "L05 Server"
	console.log("Starting server");							// "Starting server" wird auf der Konsole ausgegeben.
	let port: number = Number(process.env.PORT);			// Die Variable "port" vom typ number wird erstellt
	if (!port)												// Wenn Port nicht der Fall ist, wird die nächste Zeile ausgeführt
		port = 8100;										// Port wird zu 8100

	let server: Http.Server = Http.createServer();			// Die Variable "server" vom Typ Http.Server wird erstellt und dieser Variable wird die Funktion createServer() zugewiesen
	server.addListener("request", handleRequest);			// "server" wird ein listener hinzugefügt. Der Listener hört auf einen request und führt handleRequest aus.
	server.addListener("listening", handleListen);			// "server" wird ein listener hinzugefügt. Der Listener hört auf listening und führt handleListen aus.
	server.listen(port);									// Ein Listener wird erstellt. Er hört auf die oben definierte Variable "port".

	function handleListen(): void {							// Die Funktion handleListen wird definiert
		console.log("Listening");							// "Listening" wird an die Console ausgegeben
	}														// Die Funktion handleListen wird geschlossen

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { 	// Funktion handleRequest wird definiert. Übergabeparameter: _request und _response. Rückgabewert: None. 
		console.log("I hear voices!"); 						// In der Konsole wird "I hear voices!" ausgegeben

		_response.setHeader("content-type", "text/html; charset=utf-8");    // Header-Werte für ein Header-Objekt wird festgelegt. Preexistierender Header-Wert wird ersetzt 
		_response.setHeader("Access-Control-Allow-Origin", "*");			// Header-Wert für Access Control wird festgelet. "*" lässt jeden Origin zu (anstelle von <origin> für spezifische Origins oder "null" für keinen möglichen Origin)

		//_response.write(_request.url);
		//console.log(_request.url);							// Vom Server wurde eine URL empfangen, die ins _response geschrieben wird 

		_response.write("Deine Bestellung wurde entgegen genommen!");
		let url:Url.UrlWithParsedQuery = Url.parse(_request.url, true);

		for (let key in url.query) { 
			_response.write("p" + key + ":" + url.query[key] + "</p>");
			console.log(key);
			console.log(url.query[key]);
		}
		
		console.log(_request.url);

		_response.end();									// Der Server erhält eine Bestätigung, dass der request vollständig ist.
	}														// Funktion handleRequest wird geschlossen
}															// Namespace "L05 Server" wird geschlossen