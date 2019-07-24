document.addEventListener("DOMContentLoaded", Begruesung);
function Begruesung() {
    var name = prompt("Please enter your name.");
    if (name != null) {
        document.getElementById("Hello").innerHTML =
            "Hello " + name + ".";
    }
    console.info("Hello " + name + ".");
}
//# sourceMappingURL=main.js.map