let winner = document.querySelector("h1");
let randomNumber1 = (Math.floor(Math.random()*6)+1);
let randomNumber2 = (Math.floor(Math.random()*6)+1);
let img1 = document.querySelector(".img1").setAttribute("src",`./images/dice${randomNumber1}.png`);
let img2 = document.querySelector(".img2").setAttribute("src",`./images/dice${randomNumber2}.png`);

if (randomNumber1 === randomNumber2){
    winner.textContent = "Draw!"
} else if(randomNumber1 > randomNumber2){
    winner.textContent = "Player 1 Wins!"
} else {
    winner.textContent = "Player 2 Wins!"
} 

