//Write a global variable.
var R = 1;
function Add_pets_1() {
    document.getElementById("global_1").innerHTML = 6 + R;
}
//Write a local variable.
function Add_pets_2() {
    var H = 1;
    document.getElementById("local_1").innerHTML = 6 + H;
}
//Intentionally write a function with an error in it and use console.log() method to debug it within the console in Chrom Dev Tools.
function Add_pets_3() {
    var E = 1;
    document.getElementById("error_absent").innerHTML = 6 + E;
}
function Add_pets_4() {
    document.getElementById("error_present").innerHTML = 6 + E;
}

function determine_greeting_Function() {
    if (new Date().getHours() > 12) {
    document.getElementById("response").innerHTML = "How are you this fine day?";
    }
    else {
        document.getElementById("response").innerHTML = "Hope you have a wonderful, fun-filled day!";
    }
}

function get_Age_Function() {
    Age = document.getElementById("years").value;
    if (Age >= 5) {
        Attempt = "He is younger than that!";
    }
    else {
        Attempt = "He is at least that old!";
    }
    document.getElementById("responses").innerHTML = Attempt;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}