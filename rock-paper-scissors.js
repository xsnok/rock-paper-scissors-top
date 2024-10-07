let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

function updateScoreboard(result) {
    const userScoreDiv = document.querySelector(".player-score");
    const computerScoreDiv = document.querySelector(".computer-score");
    const resultDiv = document.querySelector(".result");
    userScoreDiv.textContent = "Your score 😇: " + playerScore;
    resultDiv.textContent = "You " + result + "!"
    computerScoreDiv.textContent = "CPU score 😡: " + computerScore;
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
    const div = document.createElement("div");
    let cpu = randChoice();
    let result = winCheck("rock", cpu);
    div.textContent = `You ${result}`;
    document.body.appendChild(div);
    updateScoreboard(result)
});
paper.addEventListener("click", function() {
    const div = document.createElement("div");
    let cpu = randChoice();
    let result = winCheck("paper", cpu);
    div.textContent = `You ${result}`;
    document.body.appendChild(div);
    updateScoreboard(result)
});
scissors.addEventListener("click", function() {
    const div = document.createElement("div");
    let cpu = randChoice();
    let result = winCheck("scissors", cpu);
    div.textContent = `You ${result}`;
    document.body.appendChild(div);
    updateScoreboard(result)
});

// console.log("Play rock, paper, scissors!");
// let gamesAmount = parseInt(prompt("How many games you want to play? ", "0"));
// for (let i = 0; i < gamesAmount; i++){
//     let userInput = prompt("Pick one: ", "");
//     let computerInput = randChoice();
//     console.log("Computer: " + computerInput);
//     winCheck(userInput, computerInput);
//     console.log(`Player score: ${playerScore}`)
//     console.log(`Computer score: ${computerScore}`)
// }


