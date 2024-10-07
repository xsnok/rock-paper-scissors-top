let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function updateScoreboard(result) {
    const userScoreDiv = document.querySelector(".player-score");
    const computerScoreDiv = document.querySelector(".computer-score");
    const resultDiv = document.querySelector(".result");
    userScoreDiv.textContent = "Your score 😇: " + playerScore;
    resultDiv.textContent = "You " + result + "!"
    computerScoreDiv.textContent = "CPU score 😡: " + computerScore;
}

function updateImage(playerType, computerType) {
    const playerImage = document.querySelector("#player-image");
    const computerImage = document.querySelector("#computer-image");
    playerImage.src = `static/${playerType}.png`;
    computerImage.src = `static/${computerType}.png`;
}

function checkEndGame(playerScore, computerScore) {
    if (playerScore === 5) {
        winGame();
    }
    else if (computerScore === 5) {
        loseGame();
    }
}

function winGame() {
    const player = document.querySelector(".player");
    player.remove();
    const div = document.createElement("div");
    div.textContent = "You won!";
    div.setAttribute("style", "background-color: #379634; color: white; text-align: center; padding: 8px; font-weight: 900; font-size: 24px;");
    document.body.appendChild(div);
}

function loseGame() {
    const player = document.querySelector(".player");
    player.remove();
    const div = document.createElement("div");
    div.textContent = "You lost!";
    div.setAttribute("style", "background-color: red; color: white; text-align: center; padding: 8px; font-weight: 900; font-size: 24px;");
    document.body.appendChild(div);
}

function winCheck(userInput, computerChoice) {
    switch (userInput.toLowerCase()){
        case "rock":
            switch (computerChoice){
                case 'rock':
                    return "tie";
                case 'paper':
                    computerScore++;
                    return "lost";
                case 'scissors':
                    playerScore++;
                    return "won";
            }
            break;
        case "paper":
            switch (computerChoice){
                case 'rock':
                    playerScore++;
                    return "won";
                case 'paper':
                    return "tie";
                case 'scissors':
                    computerScore++;
                    return "lost";
            }
            break;
        case "scissors":
            switch (computerChoice){
                case 'rock':
                    computerScore++;
                    return "lost";
                case 'paper':
                    playerScore++;
                    return "won";
                case 'scissors':
                    return "tie";
            }
            break;
        default:
            console.log("incorrect input");
            break;
    }
}

function randChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

rock.addEventListener("click", function() {
    let cpu = randChoice();
    let result = winCheck("rock", cpu);
    updateScoreboard(result);
    updateImage("rock", cpu);
    checkEndGame(playerScore, computerScore)    
});
paper.addEventListener("click", function() {
    let cpu = randChoice();
    let result = winCheck("paper", cpu);
    updateScoreboard(result)
    updateImage("paper", cpu)
    checkEndGame(playerScore, computerScore)
});
scissors.addEventListener("click", function() {
    let cpu = randChoice();
    let result = winCheck("scissors", cpu);
    updateScoreboard(result)
    updateImage("scissors", cpu)
    checkEndGame(playerScore, computerScore)
});


