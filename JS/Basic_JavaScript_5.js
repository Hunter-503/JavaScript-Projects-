function best_Function() {
    document.write(typeof "++");
}

function number_Function() {
    document.getElementById("zero").innerHTML = 0 / 0;
}

function first_Function() {
    document.getElementById("Seven").innerHTML = isNaN('James bond is the best!')
}

function second_Function() {
    document.getElementById("Eight").innerHTML = isNaN('008')
}

function infinity_Function() {
    document.getElementById("woody").innerHTML = (-6E420)
}

function beyond_Function() {
    document.getElementById("buzz").innerHTML = (6E420)
}

function true_Function() {
    document.getElementById("true").innerHTML = (123 > 32)
}

function false_Function() {
    document.getElementById("false").innerHTML = (123 < 32)
}

function math_Function() {
    document.getElementById("math").innerHTML = console.log(32 * 12)
}

function type_Function() {
    document.getElementById("type").innerHTML = ("1000" + 58)
}
//with console comand F12 to see the command 
function wrong_Function() {
    document.getElementById("wrong").innerHTML = console.log(32 < 10)
}
//this is to compare 
function bean_Function() {
    document.getElementById("bean").innerHTML = (12359785 == 12)
}

function frijoles_Function() {
    document.getElementById("frijoles").innerHTML = (12 == 12)
}
// This is to make sure something is absolute
function cool_Function() {
    var x = 10;
    document.getElementById("cool").innerHTML = (x === 10);
}

function lame_Function() {
    var x = 10;
    document.getElementById("lame").innerHTML = (x === "10");
}

function awesome_Function() {
    var x = 10;
    document.getElementById("awesome").innerHTML = (x === "ten");
}

function lost_Function() {
    var y = 10;
    document.getElementById("lost").innerHTML = (y === "lost");
}

function rock_Function() {
    document.getElementById("rock").innerHTML = (55 > 33 && 12 > 3); // boolean AND - true 
}

function rock1_Function() {
    document.getElementById("rock1").innerHTML = (55 < 33 && 12 < 3); // boolean AND  - false 
}

function grass_Function() {
    document.getElementById("grass").innerHTML = (55 > 33 || 12 > 3); // boolean or - true 
}

function grass1_Function() {
    document.getElementById("grass1").innerHTML = (55 < 33 || 12 < 3); // boolean or - false
}

function not_Function() {
    document.getElementById("not").innerHTML = !(5 > 10); // boolean not - true 
}

function not1_Function() {
    document.getElementById("not1").innerHTML = !(5 < 10); // boolean not - false
}