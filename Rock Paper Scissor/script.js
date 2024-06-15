"use strict";

let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  Loss: 0,
  Tie: 0,
};
updateScore();

/* There we use a default || to reduce our code
if(!score){
 score={Wins: 0,
  Loss: 0,
  Tie: 0,
};
} */

let result = "";
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = `Tie.`;
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.Win += 1;
  } else if (result === "You lose.") {
    score.Loss += 1;
  } else if (result === "Tie.") {
    score.Tie += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));

  updateScore();

  document.querySelector(".js-result").innerHTML = `${result}`;

  document.querySelector(".js-moves").innerHTML = ` You picked
        
        <img src="Hand icons/${playerMove} Icon.png" class="move-icon">
        <br><br>
        Computer picked
        
        <img src="Hand icons/${computerMove} Icon.png" class="move-icon">`;
}

function updateScore() {
  document.querySelector(".js-score").innerHTML = ` Wins : ${score.Win},
  Loss : ${score.Loss},
  Tie : ${score.Tie}`;
}

document.querySelector(".js-score").innerHTML = ` Wins:${score.Win},
    Loss:${score.Loss},
    Tie:${score.Tie}`;

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
