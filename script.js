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

const updateScore = (roundResultCode) => {
    if (roundResultCode === "W") {
        playerScore++;
    } else if (roundResultCode === "L") {
        computerScore++;
    } else {
        return;
    }
};

const displayScore = () => {
    gameScore.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    scoreBoard.appendChild(gameScore);
};

const buttons = document.querySelectorAll("button");
let scoreBoard = document.querySelector("div");
let roundResult = document.createElement("p");
let gameScore = document.createElement("p");
let gameOver = document.createElement("p");
let gameResult = document.createElement("p");
let computerScore = 0;
let playerScore = 0;

displayScore();

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let roundResultCode = playRound(
            button.textContent,
            getComputerChoice()
        );

        updateScore(roundResultCode);
        displayScore();
    });
});
