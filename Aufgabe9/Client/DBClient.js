var DBClient;
(function (DBClient) {
    window.addEventListener("load", init);
    var serverAddress = "https://server-eia2.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        var insertButton = document.getElementById("insert");
        var refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        document.getElementById("matrikelnummer").addEventListener("click", search);
    }
    function search(_event) {
        var inputs = document.getElementsByTagName("input");
        var query = "command=search";
        query += "&matrikel=" + inputs[3].value;
        console.log(query);
        sendRequest(query, handleFindResponse);
    }
    function insert(_event) {
        var inputs = document.getElementsByTagName("input");
        var query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        var query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            var responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(DBClient || (DBClient = {}));
//# sourceMappingURL=DBClient.js.map