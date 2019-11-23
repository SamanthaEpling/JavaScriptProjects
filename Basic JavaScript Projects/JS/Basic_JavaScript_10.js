function Call_Loop() {
    var text = "";
    var i = 0;
    while (i <10) {
        text += "<br>The number is " + i + ".";
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

function charstring_Function() {
    var str = "Lionel is the cutest dog you ever did see!";
    var n = str.length;
    document.getElementById("characters_L").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute", "Oboe"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Lionel_Barking = [];
    Lionel_Barking[0] = "softly";
    Lionel_Barking[1] = "normally";
    Lionel_Barking[2] = "playfully";
    Lionel_Barking[3] = "alerted";
    Lionel_Barking[4] = "danger approaches";
    document.getElementById("Array").innerHTML = "This is the sound of Lionel barking with the following intention: " +
        Lionel_Barking[1] + ".";
}

function constant_function() {
    const Epling_Pet = {species:"Equine", breed:"Arabian", color:"grey"};
    Epling_Pet.color = "mud-brown";
    Epling_Pet.sex = "gelding";
    document.getElementById("Constant").innerHTML = "Romani is of the " + Epling_Pet.species + " species and is a " + Epling_Pet.color + " colored, " + Epling_Pet.breed + " " + Epling_Pet.sex + ".";
}

function let_function() {
    var H = 1;
    document.getElementById("let_keyword").innerHTML = "Total number of horses= " + H;
    {
        let H = 2;
        document.getElementById("let_keyword_1").innerHTML = "<br>Just supposing my husband let me have another horse..., total horses = " + H;
    }
    document.getElementById("let_keyword_2").innerHTML = "<br>What do you mean, this is the number of horses we have now = " + H;
}
//Had much difficult referring to seperate js file for this assignment:
document.getElementById("sqrt_pi_result").innerHTML = return_function();
    function return_function() {
            return Math.sqrt(Math.PI);    
    }

//Had much difficult referring to seperate js file for this assignment:
    
let pet = {
    species: "Equine ",
    breed: "Halflinger ",
    age: "10 ",
    color: "chesnut ",
    sex: "gelding ",
    description: function() {
        return "For my next pet, it is reasonable to consider the " + this.species + this.breed + this.sex + " which would likely be " + this.color + "-colored.";
    }
};
document.getElementById("next_pet_object").innerHTML = pet.description();


var text_2 = "";
var k;
for (k = 0; k < 10; k++) {
    if (k === 6) {break;}
    text_2 += "The number is " + k + ".<br>";
}
document.getElementById("breakingit_down").innerHTML = text_2;

var text_1 = "";
var j;
for (j = 0; j < 20; j++) {
    if (j === 10) {continue;}
    text_1 += "The number is " + j + ".<br>";
}
document.getElementById("continue_on").innerHTML = text_1;