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

// get human choice

const buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener("click", (e) => {
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
})