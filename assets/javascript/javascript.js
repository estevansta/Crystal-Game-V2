// pseudocode notes
// four crystals with a Random Result (19-120)
// crystal values should be through 1-12
// each crystal needs to be assigned a new random number that is generated every game as well as a random result(win/loss)
// click fucntion on each crystal to display crystal number value that ADDS onto previous result (total score)
// if total score = random result, WIN that incriments a win counter + win message; if not then lose and restart


var randomResult;
var wins;
var losses;

//dynamically creating the crystal variables


for(var i = 0; i < 4; i++){
    var crystal = $("<div>");
    $(".crystals").append(crystal);
}
