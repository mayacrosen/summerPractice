let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return Math.floor((Math.random() * 3)) + 1;
}

function updateScore(humanMove, computerMove, winner) {
    spare.textContent = choices[computerMove -1];
    scoreboard.textContent = "Player: " + humanScore + " Computer: " + computerScore;
    let aRound = document.createElement("li");
    aRound.textContent = "Human played " + choices[humanMove-1] + ". Computer played: " + choices[computerMove-1] + ". " + winner + " wins round";
    if (winner == "player") {
        aRound.style.color = "green";
        scoreboard.style.color = "green";
    }
    else {
        aRound.style.color = "black";
        scoreboard.style.color = "black";
    }
    rounds.appendChild(aRound);
}

function endGame(victor) {
    spare.textContent = victor + " won! Would you like to play again?";
    spare.style.fontSize = "150%";

    let yesBtn = document.createElement("button");
    yesBtn.addEventListener("click", startNewGame);
    spare.appendChild(yesBtn);

    while(rounds.children.length) {
        rounds.removeChild(rounds.firstChild);
    }
}

function startNewGame() {
    spare.style.fontSize = "100%";
    spare.textContent = "No moves have been played"
    scoreboard.textContent = "Human: 0. Computer: 0"
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
    console.log(humanScore);
    console.log(computerScore);
    if (humanScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

let scoreboard = document.querySelector("#scoreboard");
let spare = document.querySelector("#spare");
let rounds = document.querySelector("#rounds");

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", playRound);
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", playRound);
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", playRound);
