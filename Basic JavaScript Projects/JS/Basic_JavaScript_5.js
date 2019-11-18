//Step 93
//document.write(typeof "Lionel");
//Step 96: display NaN, utilize isNaN() function to display true and false:
//function my_Function() {
    //document.getElementById("Test").innerHTML = 0/0;
    //displays NaN
    //document.getElementById("Test").innerHTML = isNaN('Lionel');
    // displays true
    //document.getElementById("Test").innerHTML = isNaN('018');
    // displays false
//}
//Step 97: Display Infinity
//function inf_Function() {
    //document.getElementById("posinf").innerHTML = 8E310;
//}

//function inf_neg_Function() {
    //document.getElementById("neginf").innerHTML = -6E310;
//}
//Displaying Boolean Logic:
//document.write(10>3);
//document.write(10<3);
//Illutrate the console.log method: within developer tools
//console.log(2+2);
//Illustrate type coercion:
//document.write("101" + 1);
//Display false using console.log() method/Boolean logic
//console.log(Boolean(0));
//Step107: Double Equal Sign Comparison
//document.write( (6+7)==3);
//Return true by ensuring to match the data type and value:
//X=10;//returned false when changed to X="11" or X="10";
//Y=10;//return false when changed to Y=1;
//document.write(X===Y);
//document.write(6>4 && 4>1);//true
//document.write(4>6 && 4>1);//false
//document.write(4>6 || 1>4);//false

function not_Function() {
    document.getElementById("Not").innerHTML =!(6>1);
}
function not_Function_n() {
    document.getElementById("Not_n").innerHTML =!(1>6);
}