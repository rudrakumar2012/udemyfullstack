var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level++;
  $("#level-title").text("Level"+ " "+ level);
  userClickedPattern = []; 
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $(`.${currentColor}`).addClass("pressed");
  setTimeout(function () {
    $(`.${currentColor}`).removeClass("pressed");
  });
}

$(document).keydown(function (e) {
  if (!gameStarted) {
    $("#level-title").text("Level"+" "+ level);
    nextSequence();
    gameStarted = true;
  }
});

$(".btn").click(function (e) {
  var userChosenColor = e.target.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000); 
    }
  } else {
    playSound("wrong"); 
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over"); 
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}