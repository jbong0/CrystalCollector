var wins = ''
var losses = ''
var totalScore = 0
var crystals = ["assets/images/red.png", "assets/images/white.png", "assets/images/blueGreen.png","assets/images/purple.png"];

$(document).ready(function() {


//Random Number Generator 
var randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Goal Number Value
var goalNumber = randomNumber(19,120);
$("#goalNumber").append(goalNumber);

// Crystals Value
var crystalValue1 = randomNumber(1,12);
var crystalValue2 = randomNumber(1,12);
var crystalValue3 = randomNumber(1,12);
var crystalValue4 = randomNumber(1,12);

// Crystals Image
$("#crystal-1").append("<img src=' " + crystals[0] + "' />")
$("#crystal-2").append("<img src=' " + crystals[1] + "' />")
$("#crystal-3").append("<img src=' " + crystals[2] + "' />")
$("#crystal-4").append("<img src=' " + crystals[3] + "' />")


// Set Crystal Click Values
$("#crystal-1").on("click", function(){
  console.log(crystalValue1);
  totalScore += crystalValue1;
  $("#totalScore").html(totalScore)
  checkWin();
});

$("#crystal-2").on("click", function(){
  console.log(crystalValue2);
  totalScore += crystalValue2;
  $("#totalScore").html(totalScore)
  checkWin();
});

$("#crystal-3").on("click", function(){
  console.log(crystalValue3);
  totalScore += crystalValue3;
  $("#totalScore").html(totalScore)
  checkWin();
});

$("#crystal-4").on("click", function(){
  console.log(crystalValue4);
  totalScore += crystalValue4;
  $("#totalScore").html(totalScore)
  checkWin();
});

var restartGame = function(){
  window.location.reload()
}

var gameReset = function(){
  goalNumber();
  crystalValue1();
  crystalValue2();
  crystalValue3();
  crystalValue4();
  totalScore = 0
}

// Win Checker
var checkWin = function (){
  if (totalScore === goalNumber){
    setTimeout(function(){ alert("Winner"); }, 1000);
    wins++;
    $("#totalWins").html(wins);
    gameReset()
    
    
  }else if(totalScore > goalNumber){
    setTimeout(function(){ alert("Loser!"); }, 1000);
    losses++;
    $("#totalLosses").html("<h4>" + losses + "</h4>")
    gameReset()
    
  }
}

//Reset Game 


});


