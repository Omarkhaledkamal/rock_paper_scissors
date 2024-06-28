// بسم الله الرحمن الرحيم

// first add the options
const a = 'rock', b = 'paper', c = 'scissors';

// get computer choice
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return a;
    case 1:
      return b;
    case 2:
      return c;
  }
}
let computerChoice = getComputerChoice();
// done

let humanScoreText = document.querySelector(".score-container .human-score");
let computerScoreText = document.querySelector(".score-container .computer-score");

// get human choice
let humanScore = 0;
let computerScore = 0;
let clickCounter = 0;
const buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener("click", (e) => {
  clickCounter++;
  let humanChoice, computerChoice = getComputerChoice();
  let target = e.target;
  switch (target.id) {
    case 'rock':
      humanChoice = a;
      break;
    case 'paper':
      humanChoice = b;
      break;
    case 'scissors':
      humanChoice = c;
      break;
  }
  // add a paragraph to display details of round
  const roundDetails = document.querySelector(".round-details");
  if (humanChoice == computerChoice)
    {
      let drawPara = document.createElement("p");
      drawPara.textContent = "Draw";
      roundDetails.appendChild(drawPara);
    }
  else if (humanChoice == a && computerChoice == c || humanChoice == c && computerChoice == b  || humanChoice == b && computerChoice == a) {
    let humanWinPara = document.createElement("p");
    humanWinPara.textContent = `You Win! Round ${clickCounter}`;
    roundDetails.appendChild(humanWinPara);
    humanScoreText.textContent = `${++humanScore}`
    console.log(humanChoice, computerChoice)
  }
  else {
    let computerWinPara = document.createElement("p");
    computerWinPara.textContent = `Computer Win! Round ${clickCounter}`;
    roundDetails.appendChild(computerWinPara);
    computerScoreText.textContent = `${++computerScore}`
    console.log(humanChoice, computerChoice)
  }

  // make buttons refrence to stop game after winner has been declared
  const buttons = document.querySelectorAll("button");
  // declare winner (first to 5)
  if (humanScore == 5 && computerScore < humanScore) {
    let gameOverParaHuman = document.createElement("p");
    gameOverParaHuman.textContent = `Game Over, You Win ! Refresh The Page To Play Again!`;
    roundDetails.appendChild(gameOverParaHuman);
    buttons.forEach((button) => {
      button.disabled = true;
    })
  }
  else if (computerScore == 5 && humanScore < computerScore) {
    let gameOverParaComputer = document.createElement("p");
    gameOverParaComputer.textContent = `Game Over, Computer Win ! Refresh The Page To Play Again!`;
    roundDetails.appendChild(gameOverParaComputer);
    buttons.forEach((button) => {
      button.disabled = true;
    })
  }
})