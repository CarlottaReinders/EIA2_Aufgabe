var Fishies;
(function (Fishies) {
    let serverAddress = "https://server-eia2.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + Fishies.playerName + "&score=" + Fishies.score;
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
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let playerArray = JSON.parse(xhr.response);
            document.getElementById("server").innerHTML = "";
            for (let i = 0; i < 6; i++) {
                let newPlayer = document.createElement("div");
                document.getElementById("anzeige").appendChild(newPlayer);
                newPlayer.innerHTML = `<div>${playerArray[i].name} : ${playerArray[i].score}</div>`;
                console.log(playerArray[i].name);
            }
        }
    }
})(Fishies || (Fishies = {}));
//# sourceMappingURL=Client.js.map