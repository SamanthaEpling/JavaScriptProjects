function favpet_Function() {
    var Pet_Output;
    var Pets = document.getElementById("pet_input").value;
    var Pet_String =  " is an excellent pet!";
    switch(Pets) {
        case "Cat":
            Pet_Output = "A cat" + Pet_String;
        break;
        case "Dog":
            Pet_Output = "A dog" +  Pet_String;
        break;
        case "Horse":
            Pet_Output = "A horse" + Pet_String;
        break;
        case "Chinchilla":
            Pet_Output = "A chinchilla" + Pet_String;
        break;
        case "Guinea Pig":
            Pet_Output = "A guinea pig" + Pet_String;
        break;
        case "Hamster":
            Pet_Output = "A hamster" + Pet_String;
        break;
        default:
        Pet_Output = "Please enter your favorite pet exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Pet_Output;
}

//For getElementsByClassName() Method//
function Change_it_up_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML= "There's something going on here!";
}

//For using <canvas> element//
var c = document.getElementById("my_first_Canvas");
var ctx = c.getContext("2d");
ctx.font = "20px Arial";
ctx.fillText("This Is Amazing!",10,40);

//For using <canvas> element in JavaScript assignment//
var d = document.getElementById("canvas_2");
var dtx = d.getContext("2d");
dtx.font = "40px Arial";
dtx.strokeText("CHANGE", 55, 65)
         
function transform_canvas_Function() {
    var d = document.getElementById("canvas_2");
    var dtx = d.getContext("2d");
    dtx.font = "40px Arial";
    dtx.fillText("CHANGE", 55, 65)       
}

var t = document.getElementById("top_down_canvas");
var ttx = t.getContext("2d");
var gradient_1 = ttx.createLinearGradient(0,0,0,170);
gradient_1.addColorStop(0, "purple");
gradient_1.addColorStop(1, "white");
ttx.fillStyle = gradient_1;
ttx.fillRect(0, 0, 175, 60);