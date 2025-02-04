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

console.log(getComputerChoice());