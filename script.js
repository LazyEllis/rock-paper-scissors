function getComputerChoice() {
    // assign variable "choice" a random number between 1 and 3
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        // if choice = 1, return "rock"
        return "Rock";
    } else if (choice === 2) {
        // if choice = 2, return "paper"
        return "Paper";
    } else if (choice === 3) {
        // if choice = 3, return "scissors"
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // Assign variable "playerChoice" the lowercase version of string "playerSelection"
    playerChoice = playerSelection.toLowerCase();
    // Assign variable "" the lowercase version of string "playerSelection"
    computerChoice = computerSelection.toLowerCase();

    if (playerChoice === "rock" && computerChoice === "scissors") {
        // rock beats scissors
        return "You Win! Rock beats Scissors";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        // rock loses to paper
        return "You Lose! Rock loses to Paper";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        // paper beats rock
        return "You Win! Paper beats Rock";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        // paper loses to scissors
        return "You Lose! Paper loses to Scissors";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        // scissors beats paper
        return "You Win! Scissors beats Paper";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        // scissors loses to rock
        return "You Lose! Scissors loses to Rock";
    } else if (playerChoice === computerChoice) {
        // same choice ends in a draw
        return `Draw ${computerSelection} and ${computerSelection} cancel out`;
    } else {
        // for invalid inputs
        return "Your choice must be either Rock, Paper or Scissors";
    }
}
