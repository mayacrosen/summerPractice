let scoreboard = document.querySelector("#scoreboard");
let spare = document.querySelector("#spare");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor((Math.random() * 3))]
}

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = this.id;

    
}