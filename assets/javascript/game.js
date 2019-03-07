//display a random number between 19 - 120 in the "number to get" section

//set up the balls with a random number between 1-12
//make images buttons with numbers

//make number add to eachother upon click and display in final total

//make variable for the actual wins, losses, and the total score

// add score to wins

//add score to losses

var soccerBall = {
  ballOne: {
    name: "ballOne",
    value: 0
  },
  ballTwo: {
    name: "ballTwo",
    value: 0
  },
  ballThree: {
    name: "ballThree",
    value: 0
  },
  ballFour: {
    name: "ballFour",
    value: 0
  }
};
// console.log(soccerBall.ballOne);

var winCount = 0;
var lossCount = 0;
var currentScore = 0;

var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// console.log(getRandom(5, 20));

var startGame = function() {
  currentScore = 0;
  numberToGet = getRandom(19, 120);
  soccerBall.ballOne.value = getRandom(1, 12);
  soccerBall.ballTwo.value = getRandom(1, 12);
  soccerBall.ballThree.value = getRandom(1, 12);
  soccerBall.ballFour.value = getRandom(1, 12);

  $("#finalScore").text(currentScore);
  $("#numberToGet").text(numberToGet);

  //printed out the numbers on each ball so i know for later
  console.log("ball one", soccerBall.ballOne.value);
  console.log("ball two", soccerBall.ballTwo.value);
  console.log("ball three", soccerBall.ballThree.value);
  console.log("ball four", soccerBall.ballFour.value);
  console.log("random target number", numberToGet);
};

var checkToWin = function() {
  //comparing numberToGet to finalScore
  if (currentScore > numberToGet) {
    $("#finalScore").text(currentScore);
    alert(
      currentScore +
        " " +
        "Is greater than" +
        " " +
        numberToGet +
        " " +
        "You Lose!"
    );
    lossCount++;
    $("#numberLosses").text(lossCount);
    startGame();
  } else if (currentScore === numberToGet) {
    alert(currentScore + " " + "Matches The Number To Get You Win");
    winCount++;
    $("#numberWins").text(winCount);
    startGame();
  }
};

var addClick = function(clickBall) {
  currentScore += clickBall.value;
  $("#finalScore").text(currentScore);
  checkToWin();
  // console.log(currentScore);
};

//Main Process

startGame();

$("#ballOne").click(function() {
  addClick(soccerBall.ballOne);
});
$("#ballTwo").click(function() {
  addClick(soccerBall.ballTwo);
});
$("#ballThree").click(function() {
  addClick(soccerBall.ballThree);
});
$("#ballFour").click(function() {
  addClick(soccerBall.ballFour);
});
