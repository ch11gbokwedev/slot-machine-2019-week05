const reelOne = document.getElementById("reelPicOne")
const reelTwo = document.getElementById("reelPicTwo")
const reelThree = document.getElementById("reelPicThree")
document.getElementById("pressPlay").addEventListener("click", randomizeImages)
document.getElementById("minBet").addEventListener("click", minimumBet)
document.getElementById("midBet").addEventListener("click", middleBet)
document.getElementById("maxBet").addEventListener("click", maximumBet)
let initialAmount = 1000;
let bet = 0;
//let startDance = document.getElementById("lever");
//let initialAmount = document.getElementById("seeCurrentAmount").innerHTML
//let bet = document.getElementById("bet").innerHTML
let earnings = 0;
let images = ["images/earth2.png", "images/water.png", "images/fire.png", "images/wind2.png", "images/star.png"]


function startGame(){
  while (initialAmount >= 5){
    randomizeImages();
  }
}

function randomizeImages() {
  let displayRandom1 = Math.floor(Math.random()*images.length);
  let displayRandom2 = Math.floor(Math.random()*images.length);
  let displayRandom3 = Math.floor(Math.random()*images.length);

  document.getElementById("reelPicOne").src = images[displayRandom1]
  document.getElementById("reelPicTwo").src = images[displayRandom2]
  document.getElementById("reelPicThree").src = images[displayRandom3]

  if (displayRandom1===displayRandom2 && displayRandom2===displayRandom3) {
    youWin()
  }
}

function minimumBet(){
  console.log(initialAmount);
  if (initialAmount >= 5){
    bet += 5;
    initialAmount = initialAmount - 5;
    makeBet();
    myMoney();
  }
}

function middleBet(){
  if (initialAmount >= 50){
    bet += 50;
    initialAmount = initialAmount - 50;
    makeBet();
    myMoney();
  }
}

function maximumBet(){
  if (initialAmount >= 100){
    bet+=100;
    initialAmount = initialAmount -100;
    makeBet();
    myMoney();
  }
}

function makeBet(){
  document.getElementById("bet").innerHTML= `$${bet}`;
}

function myMoney(){
  document.getElementById('seeCurrentAmount').innerHTML= `$${initialAmount}`;
}


function youWin(){
    console.log("youWin");
  initialAmount += bet*10
  document.getElementById("seeCurrentAmount").innerHTML= initialAmount;
  document.getElementById("victoryLap").innerHTML= "YOU HIT THE JACKPOT!!!";
}
