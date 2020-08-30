function Vote_Function() {
    var Height, Can_ride;
    Age = document.getElementById("Age").value;
    Can_ride = (Age < 18) ? "You are not old enough to vote":"You can vote"
    document.getElementById("Vote").innerHTML = Can_ride + " this year.";
}

function Species (Age, Weight, Diet, Color) {
    this.Animal_Age = Age;
    this.Animal_Weight = Weight;
    this.Animal_Diet = Diet;
    this.Animal_Color = Color;
}
var Bear = new Species(2, "Fifty pounds", "Berries", "Black");
var Wolf = new Species(5, "One Hundred pounds ", "Ox", "Grey");
var Hawk = new Species(10, "Twenty five pounds", "Fox", "Brown and Gold");

function eat_Function() {
    document.getElementById("New_and_This").innerHTML =
    "The Hawk is " + Hawk.Animal_Color + "-colored " + "He weighs " + Hawk.Animal_Weight +
    " and loves to eat " + Hawk.Animal_Diet;
}

function nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 100;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}