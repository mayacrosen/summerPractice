let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return Math.floor((Math.random() * 3)) + 1;
}

function updateScore(humanMove, computerMove, winner) {
    scoreboard.textContent = "Player: " + humanScore + " Computer: " + computerScore;
    let aRound = document.createElement("li");
    aRound.textContent = "Human played " + choices[humanMove-1] + ". Computer played: " + choices[computerMove-1] + ". " + winner + " wins round";
    if (winner == "player") {
        aRound.style.color = "green";
    }
    rounds.appendChild(aRound);
}

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = choices.indexOf(this.id) + 1;
    const diff = humanChoice - computerChoice;

    if (computerChoice == humanChoice) {
        updateScore(humanChoice, computerChoice, "no one");
    }
    else if (diff == 1 || diff == -2) {
        humanScore++;
        updateScore(humanChoice, computerChoice, "human");
    }
    else if (diff == -1 || diff == 2) {
        computerScore++;
        updateScore(humanChoice, computerChoice, "computer");
    }
}

let scoreboard = document.querySelector("#scoreboard");
let spare = document.querySelector("#spare");
let rounds = document.querySelector("#rounds");

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", function(){
    spare.textContent = "rock";
});
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", function() {
    spare.textContent = "paper";
});
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", function() {
    spare.textContent = "scissors";
});
