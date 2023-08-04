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
        console.log("You Win! Rock beats Scissors");
        return "W";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Rock loses to Paper");
        return "L";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock");
        return "W";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Paper loses to Scissors");
        return "L";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper");
        return "W";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Scissors loses to Rock");
        return "L";
    } else if (playerChoice === computerChoice) {
        console.log(
            `Draw ${computerSelection} and ${computerSelection} cancel out`
        );
        return "D";
    }
};

const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    // loops the game 5 times
    for (let i = 1; i <= 5; i++) {
        console.log(`Player ${playerScore} - ${computerScore} Computer`);

        let choice = prompt("Choose your weapon. Rock, Paper or Scissors.");
        let roundResult = playRound(choice, getComputerChoice());

        if (roundResult === "W") {
            ++playerScore;
        } else if (roundResult === "L") {
            ++computerScore;
        } else {
            continue;
        }
    }

    console.log("\nGAME OVER!");
    console.log(`Player ${playerScore} - ${computerScore} Computer`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You Win!");
    } else if (playerScore < computerScore) {
        console.log("You Lose! Better Luck Next Time.");
    } else {
        console.log("It's a Draw! Good Game.");
    }
};
