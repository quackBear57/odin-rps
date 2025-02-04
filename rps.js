// console.log('Hello World!');

// Initialize variables
let computerChoice = "TBD";
let humanChoice = "TBD";
let humanScore = 0;
let computerScore = 0;

// Random function to get computer choice
function getComputerChoice() {
    let numberChoice = Math.random() * 3;
    if (numberChoice < 1) {
        computerChoice = "Rock";
    } else if (numberChoice < 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

// function to prompt user for their choice (using 1, 2, or 3)
function getHumanChoice() {
    let input = parseInt(prompt("Enter 1 for Paper, 2 for Rock, or 3 for Scissors: "));
    // console.log(input);
    if (input == 1) {
        humanChoice = "Rock";
    } else if (input == 2) {
        humanChoice = "Paper";
    } else if (input == 3) {
        humanChoice = "Scissors";
    } else {
        console.log("Invalid input (not 1, 2 or 3).");
    }
    return humanChoice;
}

// Logic for one round
function playRound(computerChoice, humanChoice) {
    if (computerChoice == "Rock") {
        if (humanChoice == "Rock") {
            console.log("Tie! Rock v. Rock");
        }
        if (humanChoice == "Paper") {
            console.log("You WIN! Paper beats Rock");
            humanScore = humanScore + 1;
        }
        if (humanChoice == "Scissors") {
            console.log("You LOSE! Scissors loses to Rock");
            computerScore = computerScore + 1;
        }
    }
    if (computerChoice == "Paper") {
        if (humanChoice == "Rock") {
            console.log("You LOSE! Rock loses to Paper");
            computerScore = computerScore + 1;
        }
        if (humanChoice == "Paper") {
            console.log("Tie! Paper v. Paper");
        }
        if (humanChoice == "Scissors") {
            console.log("You WIN! Scissors beats Paper");
            humanScore = humanScore+ + 1;
        }
    }
    if (computerChoice == "Scissors") {
        if (humanChoice == "Rock") {
            console.log("You WIN! Rock beats Scissors");
            humanScore = humanScore + 1;
        }
        if (humanChoice == "Paper") {
            console.log("You LOSE! Paper loses to Scissors");
            computerScore = computerScore + 1;
        }
        if (humanChoice == "Scissors") {
            console.log("Tie! Scissors v. Scissors");
        }
    }
    console.log("Current Score: You: " + humanScore + "  //  Computer: " + computerScore);
}

// logic for one game consisting of 5 rounds
function playGame() {
    computerScore = 0;
    humanScore = 0;
    for (let i = 1; i <= 5; i++) {
        console.log("Round: " + i);
        playRound(getComputerChoice(), getHumanChoice())
    }
    console.log("Final Score: ");
    console.log("You: " + humanScore + "  //  Computer: " + computerScore);
}

// call the game

playGame();