// Create game init function
var targetScore;
var wins;
var losses;
var redCrystal;
var blueCrystal;
var yellowCrystal;
var greenCrystal;
var score;
//set wins and losses on window load. set up display
gameStart()
window.onload = function(){
    wins = 0;
    losses = 0;
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    $("#targetscore").html("Target Score: " + targetScore);
    $("#score").html("Score: " + score);
}

//set up gameStart function. Initialize random values, reset score
function gameStart() {
    targetScore = (Math.floor(Math.random()*120)+19);
    redCrystal = (Math.floor(Math.random()*12)+1);
    blueCrystal = (Math.floor(Math.random()*12)+1);
    yellowCrystal = (Math.floor(Math.random()*12)+1);
    greenCrystal = (Math.floor(Math.random()*12)+1);
    score = 0;
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    $("#targetscore").html("Target Score: " + targetScore);
    $("#score").html("Score: " + score);
    console.log(targetScore)
    console.log(redCrystal)
    console.log(blueCrystal)
    console.log(yellowCrystal)
    console.log(greenCrystal)
}

// set up onclick functions for the crystals to add their value to the score

$("#redCrystal").click(function() {
    score = score+redCrystal;
    $("#score").html("Score: " + score);
    checkwin()
});

$("#blueCrystal").click(function() {
    score = score+blueCrystal;
    $("#score").html("Score: " + score);
    checkwin()
});

$("#yellowCrystal").click(function() {
    score = score+yellowCrystal;
    $("#score").html("Score: " + score);
    checkwin()
});

$("#greenCrystal").click(function() {
    score = score+greenCrystal;
    $("#score").html("Score: " + score);
    checkwin()
});

//setup win condition function
function checkwin() {
    if (score === targetScore) {
        wins++;
        alert("You Won!");
        gameStart()
    }
    if (score > targetScore){
        losses++;
        alert("You Lost!");
        gameStart()
    }
}