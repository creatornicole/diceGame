
// dice generator
function dice() {
  var rndNumb1 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice-img1").src="dice" + rndNumb1 + ".png";

  var rndNumb2 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice-img2").src="dice" + rndNumb2 + ".png";

  if(rndNumb1 > rndNumb2){
    document.getElementById("big-heading").innerHTML="🚩 Player 1 Wins!";
  } else if (rndNumb1 < rndNumb2){
    document.getElementById("big-heading").innerHTML="Player 2 Wins 🚩";
  } else {
    document.getElementById("big-heading").innerHTML="Draw!";
  }
}

// onclick dice rotation
var rotation = 0;
var dice1 = document.getElementById("dice-img1");
var dice2 = document.getElementById("dice-img2");

function diceRotation1() {
  dice1.style.transform = "rotate(180deg)";
}

function diceRotation2() {
  dice2.style.transform = "rotate(180deg)";
}
