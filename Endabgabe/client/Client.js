var Fishies;
(function (Fishies) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://server-eia2.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + enterName + "&Punkte=" + highscore;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    Fishies.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    Fishies.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    /*function handleFindeResponse(_event:ProgressEvent):void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }*/
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let SpielerKomplett = JSON.parse(xhr.response);
            for (let i = 0; i < SpielerKomplett.length; i++) {
                SpielerKomplett.sort(vergleicheEintraege);
                console.log(SpielerKomplett[i].punkt);
            }
            console.log(SpielerKomplett);
            for (let i = 0; i < 6; i++) {
                //Highscore erstellen
                let prodElement = document.createElement("div");
                document.getElementById("anzeige").appendChild(prodElement);
                prodElement.innerHTML = `<div>${SpielerKomplett[i].name} : ${SpielerKomplett[i].punkt}</div>`;
                console.log(SpielerKomplett[i].name);
            }
        }
    }
    function vergleicheEintraege(a, b) {
        let highscoreA = a.punkt;
        let highscoreB = b.punkt;
        if (highscoreA < highscoreB) {
            return 1;
        }
        if (highscoreA > highscoreB) {
            return -1;
        }
        return 0;
    }
})(Fishies || (Fishies = {}));
//# sourceMappingURL=Client.js.map