var currentPlayer = 1;
var winner = null;

var playerOneOnHold = false;
var playerTwoOnHold = false;

var dice = {
  sides: 6,
  roll: function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

// All logics for player one
$(document).ready(function() {

  var totalScore1 = 0;
  var dice1 = 0;
  var scores = 0

  $("#player1-roll").click(function() {
    dice1 = dice.roll();
    if (dice1 === 1) {
      console.log("Player one on hold?: " + playerOneOnHold);

      scores += (totalScore1 + dice1);

      totalScore1 = 0;

      $("#total-score-1").text(totalScore1);
      currentPlayer = 2;
      $("#scores").text(scores);


      playerOneOnHold = true;
      playerTwoOnHold = false;

      $('#player1-roll').prop('disabled', playerOneOnHold);
      $('#player2-roll').prop('disabled', playerTwoOnHold);
    }

    if (totalScore1 + scores <= 100) {
      totalScore1 += dice1;
      $("#round-total-1").text(dice1);
      $("#total-score-1").text(totalScore1);
    } else {
      // Disable all buttons when the winner is declared
      $(':button').prop('disabled', true);
      winner = 1;

      $("#total-score-1").text(totalScore1);
      alert("Hooray! Player " + winner + " wins!");
    }
    console.log(totalScore1)
  });

  $("#player1-hold").click(function() {

    console.log("Player one on hold?: " + playerOneOnHold);
    if (!playerOneOnHold) {
      dice1 = dice
      scores += totalScore1;

      totalScore1 = 0;

      $("#total-score-1").text(totalScore1);
      currentPlayer = 2;
      $("#scores").text(scores);
    }
    playerOneOnHold = true;
    playerTwoOnHold = false;

    $('#player1-roll').prop('disabled', playerOneOnHold);
    $('#player2-roll').prop('disabled', playerTwoOnHold);
  });
});

var currentPlayer = 2;
var winner = null;
var number = {
  sides: 6,
  roll: function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}


$(document).ready(function() {
  var results = 0;
  var number1 = 0;
  var sum = 0

  $("#player2-roll").click(function() {
    number1 = number.roll();

    if (number1 === 1) {

      sum += results;
      results = 0;

      $("#total-score-2").text(results);
      console.log("player2-hold")
      currentPlayer = 1;
      $("#totalscores").text(sum);


      playerOneOnHold = false;
      playerTwoOnHold = true;
      $('#player2-roll').prop('disabled', playerTwoOnHold);
      $('#player1-roll').prop('disabled', playerOneOnHold);
    }

    if (results + sum <= 100) {
      results += number1;
      $("#round-total-2").text(number1);
      $("#total-score-2").text(results);
    } else {
      $(':button').prop('disabled', true);
      winner = 2;
      $("#total-score-2").text(results);
      alert("Hooray! Player " + winner + " wins!");
    }
    console.log(results)
  });

  $("#player2-hold").click(function() {
    console.log(playerTwoOnHold, playerOneOnHold)
    if (!playerTwoOnHold) {
      number1 = number
      sum += results;
      results = 0;

      $("#total-score-2").text(results);
      console.log("player2-hold")
      currentPlayer = 1;
      $("#totalscores").text(sum);
    }
    playerOneOnHold = false;
    playerTwoOnHold = true;

    $('#player2-roll').prop('disabled', playerTwoOnHold);
    $('#player1-roll').prop('disabled', playerOneOnHold);


  });
});
