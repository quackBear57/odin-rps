console.log('Hello World!');

function getComputerChoice() {
    let numberChoice = Math.random() * 3;
    let computerChoice = "TBD";
    if (numberChoice < 1) {
        computerChoice = "Rock";
    } else if (numberChoice < 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let input = parseInt(prompt("Enter 1 for Paper, 2 for Rock, or 3 for Scissors: "));
    // console.log(input);
    let humanChoice = "TBD";
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

console.log(getComputerChoice());
console.log(getHumanChoice());