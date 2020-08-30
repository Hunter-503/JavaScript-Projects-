function full_Sentence() {
    var part_1 = "I am ";
    var part_2 = "very tried";
    var part_3 =", I would "
    var part_4 ="like to sleep. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("bump").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "You get a sticker on your window for driving on the sidewalk. ";
    var Section = Sentence.slice(26,33);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Method() {
    var str = "This is all uppercase!";
    var res = str.toUpperCase();
    document.getElementById("upper").innerHTML = res;
}

function search_Method() {
    var str = "Starter pokemon - Bulbasaur, Squirtle, Charmander.";
    var mon = str.search("Bulbasaur");
    document.getElementById("Pokemon").innerHTML = mon;
}

function string_Method() {
    var X =6438047643;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var Y = 12859.25373562435;
    document.getElementById("Precision").innerHTML = Y.toPrecision(7);
}

function fixed_Method() {
    var num = 63.734534;
    var p = num.toFixed(5);
    document.getElementById("Fixed").innerHTML = p; 
}

function value_Method() {
    var str = "I love coding!";
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res; 
}