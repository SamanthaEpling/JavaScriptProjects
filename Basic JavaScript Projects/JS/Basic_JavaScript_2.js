var A = "Caution! Student learning JavaScript here!";
window.alert(A);
var B = "This student has way too many pets as well!";
var B = B.fontcolor("purple");
document.write(B)

function FunctionPets() {
    var str = "There are 8 pets currently!";
    var result = str.fontcolor("purple");
    document.getElementById("Number_Pets").innerHTML = result;
}

function DisplayPets() {
    var str = "Romani, Lionel, Mr. Bubbles, Fiona, Mister, Hermione, Love Bug, & Rosie Tinkerbell";
    var result = str.fontcolor("purple");
    document.getElementById("Pet_Names").innerHTML = result;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this course on JavaScript!";
    document.getElementById("concatenate_2").innerHTML = sentence;
}