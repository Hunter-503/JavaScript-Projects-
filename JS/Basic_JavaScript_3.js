function myFun() {
    var x = 10;
    var y = 21;
    var z = (x) + (y);
    document.getElementById('cap').innerHTML = "10 + 21 =" + z;
}

function sub_Fun() {
    var Subtraction = 10 - 21;
    document.getElementById('math').innerHTML = "10 - 21 =" + Subtraction;
}

function multiplication() {
    var simp_Math = 17 * 29;
    document.getElementById("mult").innerHTML = "17 x 29 = " + simp_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("divi").innerHTML = "48 / 6 = " + simple_Math;
}

function long_Math() {
    var easy_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("long").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + easy_Math; 
}

function modulus_Operator() {
    var sim_Math = 25 % 6;
    document.getElementById("operator").innerHTML = "When you divided 25 by 6 you have a remainder of: " + sim_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("neg").innerHTML = -x;
}

function decrement_Operator() {
    var F = 5.25;
    F--;
    document.write(F);
}

function increment_Operator() {
    var M = 10;
    M++;
    document.write(M);
}

function mixed_Math() {
    window.alert(Math.random() * 100)
}

function square_Math() {
    document.getElementById("square").innerHTML = Math.sqrt(96875);
}