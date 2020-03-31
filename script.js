let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// MiguelPerez


const generateTarget = () => {
 return Math.floor(Math.random() * 10)
}

function compareGuesses(userGuess, computerGuess, targetNumber) {

  const humanDifference = Math.abs(targetNumber - userGuess)
  
  const computerDifference = Math.abs(targetNumber - computerGuess)
  
  return humanDifference <= computerDifference;
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  }
  
  else if (winner === 'computer') {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}