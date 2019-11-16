function addition_Function() {
    var addition = 4 + 4;
    document.getElementById("Math").innerHTML = "4 + 4 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 8 - 5;
    document.getElementById("Math_sub").innerHTML= " 8 - 5 = " + Subtraction;
}

function multiply_Function() {
    var multiply = 6 * 8;
    document.getElementById("Math_Mult").innerHTML= "6 x 8 = " + multiply;
}

function div_Function() {
    var division = 9 / 5;
    document.getElementById("Math_div").innerHTML= "9 / 5 = " + division;
}

function compounded_Function() {
    var Math_compounded = (10 + 20) * 10 / 3 -50;
    document.getElementById("Math_alldemo").innerHTML = " Ten plus twenty, multiplied by ten, divided in thirds and then subtracted by fifty equals " + Math_compounded;
}

function modulus_Operator() {
    var modulus = 50 % 7;
    document.getElementById("Math_modulus").innerHTML = "When you divide 50 by 7 you have a remainder of: " + modulus;
}

function Unary_Op_Function() {
    var x = 25;
    document.getElementById("math_unary").innerHTML = -x;
}
function Incre_Op_Function() { 
    var X_incr = 10;
    document.getElementById("X_incr").innerHTML = X_incr++ + " is one whole number more than ten.";
}

function Decre_Op_Function() {
    var X_dec = 37.65;
    document.getElementById("X_dec").innerHTML = X_dec-- + " is one whole number less than 37.65.";
}

function Random_to_One_Function() {
    document.getElementById("chaos_one").innerHTML = Math.random();
}

function Random_to_C_Function() {
    document.getElementById("chaos_hundred").innerHTML = Math.random()*100;
}

function Pi_Function() {
    document.getElementById("pi").innerHTML = Math.PI;
}

addition_Function();
subtraction_Function();
multiply_Function();
div_Function();
compounded_Function();
modulus_Operator();
Unary_Op_Function();
Incre_Op_Function();
Decre_Op_Function();
Random_to_One_Function();
Random_to_C_Function();
Pi_Function();