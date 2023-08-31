const buttons = document.querySelectorAll('.choice');
const scoreBoard = document.querySelector('.scoreboard');
const roundResult = document.createElement('p');
const gameScore = document.createElement('p');
const gameOver = document.createElement('p');
const gameResult = document.createElement('p');
const replayButton = document.createElement('button');

let computerScore = 0;
let playerScore = 0;
gameOver.textContent = 'GAME OVER!';
replayButton.textContent = 'Play Again';

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3) + 1; // assigns a random number between 1 and 3

  if (choice === 1) {
    return 'Rock';
  } else if (choice === 2) {
    return 'Paper';
  } else if (choice === 3) {
    return 'Scissors';
  }
};

const playRound = (playerSelection, computerSelection) => {
  let playerChoice = playerSelection.toLowerCase();
  let computerChoice = computerSelection.toLowerCase();

  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    roundResult.textContent = 'You Win! Rock beats Scissors';
    scoreBoard.appendChild(roundResult);
    return 'W';
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    roundResult.textContent = 'You Lose! Rock loses to Paper';
    scoreBoard.appendChild(roundResult);
    return 'L';
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    roundResult.textContent = 'You Win! Paper beats Rock';
    scoreBoard.appendChild(roundResult);
    return 'W';
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    roundResult.textContent = 'You Lose! Paper loses to Scissors';
    scoreBoard.appendChild(roundResult);
    return 'L';
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    roundResult.textContent = 'You Win! Scissors beats Paper';
    scoreBoard.appendChild(roundResult);
    return 'W';
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    roundResult.textContent = 'You Lose! Scissors loses to Rock';
    scoreBoard.appendChild(roundResult);
    return 'L';
  } else if (playerChoice === computerChoice) {
    roundResult.textContent = `Draw ${computerSelection} and ${computerSelection} cancel out`;
    scoreBoard.appendChild(roundResult);
    return 'D';
  }
};

const updateScore = (roundResultCode) => {
  if (roundResultCode === 'W') {
    playerScore++;
  } else if (roundResultCode === 'L') {
    computerScore++;
  } else {
    return;
  }
};

const displayScore = () => {
  gameScore.textContent = `Player ${playerScore} - ${computerScore} Computer`;
  scoreBoard.appendChild(gameScore);
};

const checkIfGameOver = () => {
  if (playerScore === 5 || computerScore === 5) {
    scoreBoard.appendChild(gameOver);

    if (playerScore > computerScore) {
      gameResult.textContent = 'Congratulations! You Win!';
    } else {
      gameResult.textContent = 'You Lose! Better Luck Next Time.';
    }

    scoreBoard.appendChild(gameResult);

    buttons.forEach((button) => {
      button.removeEventListener('click', playGame);
    });

    scoreBoard.appendChild(replayButton);
  } else {
    return;
  }
};

const playGame = (e) => {
  const roundResultCode = playRound(
    e.target.textContent.trim(),
    getComputerChoice()
  );

  updateScore(roundResultCode);
  displayScore();
  checkIfGameOver();
};

const replayGame = () => {
  playerScore = 0;
  computerScore = 0;
  scoreBoard.removeChild(roundResult);
  scoreBoard.removeChild(gameOver);
  scoreBoard.removeChild(gameResult);
  scoreBoard.removeChild(replayButton);
  displayScore();

  buttons.forEach((button) => {
    button.addEventListener('click', playGame);
  });
};

displayScore();

buttons.forEach((button) => {
  button.addEventListener('click', playGame);
});

replayButton.addEventListener('click', replayGame);
