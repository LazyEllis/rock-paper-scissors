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
