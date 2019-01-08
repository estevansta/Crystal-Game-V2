// pseudocode notes
// four crystals with a Random Result (19-120) done
// crystal values should be through 1-12 done
// each crystal needs to be assigned a new random number that is generated every game as well as a random result done
// click fucntion on each crystal to display crystal number value that ADDS onto previous result (total score)
// if total score = random result, WIN that incriments a win counter + win message; if not then lose and restart


var randomResult;
var wins = 0;
var losses = 0;
var previous = 0;

var startGame = function () {
for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1; //assigning random number to crystals do not = 0 
    var crystal = $("<div>");  //dynamically creating the crystal variables
        crystal.attr({ // assigning a class and random number 
        "class": "crystal",
        "random-number": random
        });
    $(".crystals").append(crystal); 
    
    //displaying crystal images from assets as well as assigning images to the dynamically generated div
    var images = ["assets/images/crystal_1.jpg", "assets/images/crystal_2.jpg", "assets/images/crystal_3.jpg", "assets/images/crystal_4.jpg"]

    crystal.css({
        "background-image":"url('" + (images[i]) + "')",
        "background-size":"cover"
    });
    $(".crystals").append(crystal); 

    // random number result generator
    randomResult = Math.floor(Math.random() * 101) + 19;
    $("#result").html("<h1>Random Number:" + randomResult + "</h1>");

}}



startGame(); {
    //onclick function and adding random number value to "your score"/previous
    $(".crystals").on("click",".crystal", function () {
        var num = parseInt($(this).attr('data-random'));
        previous += num;
        $("#previous").html("<h1>Your total score is: " + previous + "</h1>");
        console.log(previous);
    });
}
