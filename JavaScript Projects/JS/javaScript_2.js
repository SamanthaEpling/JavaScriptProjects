function validateForm() {
    var x = document.forms["Form_1"]["fname"].value;
    if(x=="") {
        alert("Name must be filled out");
        return false;
    }
}