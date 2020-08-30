var X = 45;
function Multiply_numbers_1() {
    var X = 34;
    console.log(563 * X);
}
function Divide_numbers_2() {
    console.log(X / 5);
}
Multiply_numbers_1();
Divide_numbers_2();

function luck_Function() {
    if (new Date().getHours() < 20) {
        document.getElementById("luck").innerHTML = "Its late, time for bed!"
    }
}

function luckless_Function() {
    if (new Date().getFullYear() > 5, 2) {
        document.getElementById("unluck").innerHTML = "Its my Birthday!"
    }
}

function weight_Function() {
    Weight = document.getElementById("Weight").value;
    if (Weight >= 200) {
        Scale = "You made weight!";
    }
    else {
        Scale = "You didn't make weight! Slacker!";
    }
    document.getElementById("How_much_did_you_weigh?").innerHTML = Scale;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "Its is the afternoon.";
    }
    else {
        Reply = "It is the evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}