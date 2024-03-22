var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`)
    .stop(true, true)
    .animate({ opacity: 0.1 }, 100)
    .delay(100)
    .animate({ opacity: 1 }, 100)
    .animate({ opacity: 0.1 }, 100)
    .delay(100)
    .animate({ opacity: 1 }, 100);

    playSound(randomChosenColor);
    console.log(randomChosenColor);
}

$(".btn").click(function(e){
    var userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
});

function playSound(name){
    switch (name) {
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;

        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;

       case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;

        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;   

        default:
        console.log(randomChosenColor);
    }
}
