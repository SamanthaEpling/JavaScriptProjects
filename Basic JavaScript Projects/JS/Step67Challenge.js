function toCelsius(f) {
    return (5/9) * (f-32);
}
document.getElementById("c_temp").innerHTML = "The temperature is " + toCelsius(104) + " Celsius.";

function ColorChangeFunction() {
    var x = document.getElementById("change_color");
    x.style.color = "purple";
}

function ChangeTextFunction() {
    document.getElementById("change_text").innerHTML = "Change is the only constant!";
}