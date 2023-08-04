const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1; // assigns a rondom number between 1 and 3

    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else if (choice === 3) {
        return "Scissors";
    }
};

const playRound = (playerSelection, computerSelection) => {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    if (playerChoice === "rock" && computerChoice === "scissors") {
        roundResult.textContent = "You Win! Rock beats Scissors";
        scoreBoard.appendChild(roundResult);
        return "W";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        roundResult.textContent = "You Lose! Rock loses to Paper";
        scoreBoard.appendChild(roundResult);
        return "L";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        roundResult.textContent = "You Win! Paper beats Rock";
        scoreBoard.appendChild(roundResult);
        return "W";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        roundResult.textContent = "You Lose! Paper loses to Scissors";
        scoreBoard.appendChild(roundResult);
        return "L";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        roundResult.textContent = "You Win! Scissors beats Paper";
        scoreBoard.appendChild(roundResult);
        return "W";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        roundResult.textContent = "You Lose! Scissors loses to Rock";
        scoreBoard.appendChild(roundResult);
        return "L";
    } else if (playerChoice === computerChoice) {
        roundResult.textContent = `Draw ${computerSelection} and ${computerSelection} cancel out`;
        scoreBoard.appendChild(roundResult);
        return "D";
    }
};

const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    gameOver.textContent = "GAME OVER!";
    scoreBoard.appendChild(gameOver);
    gameScore.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    scoreBoard.appendChild(gameScore);

    if (playerScore > computerScore) {
        gameResult.textContent = "Congratulations! You Win!";
        scoreBoard.appendChild(roundResult);
    } else if (playerScore < computerScore) {
        gameResult.textContent = "You Lose! Better Luck Next Time.";
        scoreBoard.appendChild(roundResult);
    } else {
        gameResult.textContent = "It's a Draw! Good Game.";
        scoreBoard.appendChild(roundResult);
    }
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () =>
        playRound(button.textContent, getComputerChoice())
    );
});

let scoreBoard = document.querySelector("div");
let roundResult = document.createElement("p");
let gameScore = document.createElement("p");
let gameOver = document.createElement("p");
let gameResult = document.createElement("p");
