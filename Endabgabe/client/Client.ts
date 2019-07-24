namespace Fishies {

    let serverAddress: string = "https://server-eia2.herokuapp.com/";

    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + playerName + "&score=" + score;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);

        if (xhr.readyState == XMLHttpRequest.DONE) {
            let playerArray: Player[] = JSON.parse(xhr.response);

            document.getElementById("server").innerHTML = "";

            for (let i: number = 0; i < 6; i++) {

                let newPlayer = document.createElement("div");
                document.getElementById("anzeige").appendChild(newPlayer);
                newPlayer.innerHTML = `<div>${playerArray[i].name} : ${playerArray[i].punkt}</div>`;
                console.log(playerArray[i].name);
            }

        }
    }
}
