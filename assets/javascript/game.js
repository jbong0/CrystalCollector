var audio = new Audio("assets/audio/crystalCollector.mp3")
var crystalClick = new Audio("assets/audio/crystal.mp3")
var wins = ''
var losses = ''
var totalScore = 0
var crystals = ["assets/images/red.png", "assets/images/white.png", "assets/images/blueGreen.png","assets/images/purple.png"];


//Random Number Generator 
var randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var goalNumber = randomNumber(19,120);
var crystalValue1 = randomNumber(1,12);
var crystalValue2 = randomNumber(1,12);
var crystalValue3 = randomNumber(1,12);
var crystalValue4 = randomNumber(1,12);
$("#goalNumber").html(goalNumber);
$("#totalScore").html(totalScore);


$(document).ready(function() {

function setUp(){

//  Values
$("#crystal-1").on("click", function(){
  crystalClick.play()
  totalScore += crystalValue1;
  $("#totalScore").html(totalScore)
  checkWin();
})

$("#crystal-2").on("click", function(){
  crystalClick.play()
  totalScore += crystalValue2;
  $("#totalScore").html(totalScore)
  checkWin();
})

$("#crystal-3").on("click", function(){
  crystalClick.play()
  totalScore += crystalValue3;
  $("#totalScore").html(totalScore)
  checkWin();
})

$("#crystal-4").on("click", function(){
  crystalClick.play()
  totalScore += crystalValue4;
  $("#totalScore").html(totalScore)
  checkWin();
})

// Winner Check
function checkWin (){
  if (totalScore === goalNumber){
    setTimeout(function(){ alert("Winner"); }, 100);
    wins++;
    $("#totalWins").html("<h4>" + wins + "</h4>");
    setTimeout(resetGame, 500);
    
  }else if(totalScore > goalNumber){
    setTimeout(function(){ alert("Loser!"); }, 100);
    losses++;
    $("#totalLosses").html("<h4>" + losses + "</h4>");
    setTimeout(resetGame, 500);
  }
}


// Crystals Image
$("#crystal-1").html("<img src=' " + crystals[0] + "' />")
$("#crystal-2").html("<img src=' " + crystals[1] + "' />")
$("#crystal-3").html("<img src=' " + crystals[2] + "' />")
$("#crystal-4").html("<img src=' " + crystals[3] + "' />")
}


setUp();

function resetGame(){
  totalScore = 0 ;
  goalNumber = randomNumber(19,120);
  crystalValue1 = randomNumber(1,12);
  crystalValue2 = randomNumber(1,12);
  crystalValue3 = randomNumber(1,12);
  crystalValue4 = randomNumber(1,12);
  $("#goalNumber").html(goalNumber);
  $("#totalScore").html(totalScore);
 
}

// Reset Button
$("#restartGame").on("click", function(){
  location.reload();
 })
 


});

audio.play();

