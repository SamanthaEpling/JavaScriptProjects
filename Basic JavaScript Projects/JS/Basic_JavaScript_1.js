var A = "This is fun, this JavaScript business!";
window.alert(A);
var B = "Sam says, " 
    + "\"You couldn\'t have all the fun writing just HTML\\CSS, " 
    + "now could you!\"";
var Family = "The Eplings", Dad = "Christopher", Mom = "Samantha", Horse = "Romani", Dog = "Lionel";
var Dad = Dad.fontcolor("red");
var Horse = Horse.fontcolor("purple");
var Dog = Dog.fontcolor("blue");
document.write(B);
document.write("Supported by:");
document.write(Dog, Horse, Dad);
document.write(6 + 1 + 1 + 2);

function My_First_Function() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

function displayDate() {
    document.getElementbyId("demo").innerHTML = Date();
}