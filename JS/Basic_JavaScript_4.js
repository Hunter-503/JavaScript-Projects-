function my_Team() {
    var Sport = {
        Soccer:"Portland Timbers",
        Football:"Seattle Seahawks",
        Basketball:"Portland Trailblazers",
        Baseball:"Boston Redsox",
        Hockey:"Pittsburgh Penguins"
    } ;
    delete Sport.Hockey;
    document.getElementById("Team").innerHTML = Sport.Hockey;
}