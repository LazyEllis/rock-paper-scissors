let getComputerChoice = () => {
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
};

let playRound = (playerSelection, computerSelection) => {
    // Assign variable "playerChoice" the lowercase version of string "playerSelection"
    playerChoice = playerSelection.toLowerCase();
    // Assign variable "" the lowercase version of string "playerSelection"
    computerChoice = computerSelection.toLowerCase();

    if (playerChoice === "rock" && computerChoice === "scissors") {
        // rock beats scissors
        console.log("You Win! Rock beats Scissors");
        return "W";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        // rock loses to paper
        console.log("You Lose! Rock loses to Paper");
        return "L";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        // paper beats rock
        console.log("You Win! Paper beats Rock");
        return "W";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        // paper loses to scissors
        console.log("You Lose! Paper loses to Scissors");
        return "L";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        // scissors beats paper
        console.log("You Win! Scissors beats Paper");
        return "W";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        // scissors loses to rock
        console.log("You Lose! Scissors loses to Rock");
        return "L";
    } else if (playerChoice === computerChoice) {
        // same choice ends in a draw
        console.log(
            `Draw ${computerSelection} and ${computerSelection} cancel out`
        );
        return "D";
    }
};

let game = () => {
    // assign variable "playerScore" an inital value of 0
    let playerScore = 0;
    // assign variable "computerScore" an inital value of 0
    let computerScore = 0;

    // loop the game 5 times
    for (let i = 1; i <= 5; i++) {
        // display the current score of the game
        console.log(`Player ${playerScore} - ${computerScore} Computer`);
        // ask the user to choose his weapon
        let choice = prompt("Choose your weapon. Rock, Paper or Scissors.");
        // play a round of rock paper scissors
        let roundResult = playRound(choice, getComputerChoice());

        if (roundResult === "W") {
            // if the round returns a "W" add a point to player
            ++playerScore;
        } else if (roundResult === "L") {
            // if the round returns a "L" add a point to computer
            ++computerScore;
        } else {
            // if the round returns a "D" don't add a point
            continue;
        }
    }

    // show game over screen
    console.log("\nGAME OVER!");
    // enter the final score of the match
    console.log(`Player ${playerScore} - ${computerScore} Computer`);

    if (playerScore > computerScore) {
        // if player has more points at the end declare them the winner
        console.log("Congratulations! You Win!");
    } else if (playerScore < computerScore) {
        // if computer has more points at the end declare them the winner
        console.log("You Lose! Better Luck Next Time.");
    } else {
        // if they have the same points declare a draw
        console.log("It's a Draw! Good Game.");
    }
};
