/* Rock paper scissors game */
const rock = "rock", paper = "paper", scissors = "scissors";

// get the computer choice 
function getComputerChoice() {
  let random =  Math.floor(Math.random() * 3);
  switch (random) {
    case 0: 
      return rock;
    case 1: 
      return paper;
    case 2: 
      return scissors;
  }
}
// --------------------------------------------

// get human choice 
function getHumanChoice() {
  let choice = '';
  do {
    choice = prompt("Enter Your Choice: ")
  } while (choice == '');
  return choice.toLowerCase();
}
// ---------------------------------------------

let humanScore = 0, computerScore = 0;
function playRound() {
  let humanChoice = getHumanChoice(), computerChoice = getComputerChoice();
  if (humanChoice == computerChoice) {
    console.log("Draw");
  } else if ( humanChoice == rock && computerChoice == scissors || humanChoice == scissors && computerChoice == paper  || humanChoice == paper && computerChoice == rock) { 
    console.log(`You Win! Your Score is ${++humanScore}, Computer Score is ${computerScore}`);
  }
  else {
    console.log(`You Lose! Your Score is ${humanScore}, Computer Score is ${++computerScore}`);
  }
}

function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    console.log(`Game Over, You Win! Your Total Score is ${humanScore}, Computer Total Score is ${computerScore}`);
  }
  else {
    console.log(`Game Over, Computer Wins! Your Total Score is ${humanScore}, Computer Total Score is ${computerScore}`);
  }
}