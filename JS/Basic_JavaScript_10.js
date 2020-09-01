function call_Loop() {
    var n = "";
    var x = 1;
    while (x < 30) {
        n += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = n;
}

function str_Function() {
    var str = "Hello, I hate this!";
    var p = str.length;
    document.getElementById("string").innerHTML = p;
}

    var Instruments = ["Guitar", "Drums", "Triangle", "Bass", "Violin", "Flute", "Trumpet"];
    var Content = "";
    var Y;
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("list_Instruments").innerHTML = Content;
}

function array_Function() {
    var animals = ["Cat", "Tigers", "Bears", "Lions", "OhMy"];
    document.getElementById("Array").innerHTML = animals;
}


function constant_function() {
    const Cat_Species = {breed:"Bengal Tiger", age:"7 years old", color:"white and black", weight:"250 pounds"};
    Cat_Species.color = "orange and black";
    Cat_Species.breed = "Bengal Tiger";
    Cat_Species.weight = "250 pounds"
    document.getElementById("constant").innerHTML = "The age of the " +
        Cat_Species.breed + " was " + Cat_Species.age + " She also weighs " + Cat_Species.weight;
}

function anime_function() {
    var h = "Fire force is the best anime!";
    document.write(h);
    {
        let h = "Noooo Soul eater is better!";
        document.write("<br>" + h);
    }
    document.write("<br>" + h);
    document.getElementById("let").innerHTML = h;
}
function learn_Function() {
var x = learn_Function(55, 36);
function learn_Function(a, b) {
    return a * b;
}
document.getElementById("butts").innerHTML = x;
}

function soul_function() {
var person = {
    firstName: "Soul ",
    lastName: "Evans ",
    id: "Death scythe",
    fullName: function() {
        return "My name is " + this.firstName + this.lastName;
    }
}
document.getElementById("demon").innerHTML = person.fullName();  
}

function pump_function() {
var text = "";
var n;
    for (n = 0; n < 10; n++) {
        if (n === 3) { break; }
        text += "The number is " + n + "<br>";
        document.getElementById("pumpkin").innerHTML = text;
    }
}
