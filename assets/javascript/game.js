//display a random number between 19 - 120 in the "number to get" section

//set up the balls with a random number between 1-12

//make images buttons with numbers

//make variable for the actual wins, losses, and the total score

//make number add to eachother upon click and display in final total

// add score to wins

//add score to losses

//reset function to clear total score and change the balls random number
var randomNumber = Math.floor(Math.random() * 120 + 19);
console.log(randomNumber);
$("#randomNumber").text(randomNumber);

var ballNumber = Math.floor(Math.random() * 12 + 1);
console.log(ballNumber);
// var ballTwo = Math.floor(Math.random() * 12 + 1);
// console.log(ballTwo);
// var ballThree = Math.floor(Math.random() * 12 + 1);
// console.log(ballThree);
// var ballFour = Math.floor(Math.random() * 12 + 1);
// console.log(ballFour);

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < ballNumber.length; i++) {
  // For each iteration, we will create an imageCrystal
  var ballImage = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  ballImage.addClass("ball-image");

  // Each imageCrystal will be given a src link to the crystal image
  ballImage.attr("src", "./assets/images/Soccer-Ball.png");

  // Each imageCrystal will be given a data attribute called data-crystalValue.
  // This data attribute will be set equal to the array value.
  ballImage.attr("data-ballValue", ballNumber[i]);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $(".balls").append(ballImage);
}
console.log(ballImage);
