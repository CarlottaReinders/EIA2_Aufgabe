document.addEventListener("DOMContentLoaded", Begruesung);

function Begruesung() {

    var name:string = prompt("Please enter your name.");

    if (name != null) {
        document.getElementById("Hello").innerHTML =
            "Hello " + name + ".";
    }

    console.info("Hello " + name + ".");
}
