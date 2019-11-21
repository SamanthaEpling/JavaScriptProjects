
function full_sentence() {
    var part_1 = "I think that \"concatenate\" is the funniest ";
    var part_2 = "word I have ever heard, ";
    var part_3 = "for having nothing ";
    var part_4 = "whatsoever to do with cats!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All I can think about are mint Oreos!";
    var Section = Sentence.slice(26,36);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_Function() {
    var text = document.getElementById("upper_text").innerHTML;
    document.getElementById("upper_text").innerHTML = text.toUpperCase();
}

function search_Function() {
    var sentence = "Lionel barks at all other barking dogs!";
    var position = sentence.search("barking");
    document.getElementById("barking_term").innerHTML = position;
}

function string_Method() {
    var X = 611;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 23049.4123098487223;
    document.getElementById("Precision").innerHTML = X.toPrecision(11);
}

function fixed_Method() {
    var X = 6.323;
    document.getElementById("result").innerHTML =
    X.toFixed(0) + "<br>" +
    X.toFixed(4) + "<br>" +
    X.toFixed(8);
}

function value_Function() {
    document.getElementById("result_2").innerHTML = 
    (611).valueOf() + "<br>" +
    (600+10+1).valueOf();
}