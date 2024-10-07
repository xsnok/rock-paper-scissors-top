let playerScore = 0;
let computerScore = 0;

function winCheck(userInput, computerChoice) {
    switch (userInput.toLowerCase()){
        case "rock":
            switch (computerChoice){
                case 'rock':
                    console.log("You tied");
                    break;
                case 'paper':
                    console.log("You lost!");
                    computerScore++;
                    break;
                case 'scissors':
                    console.log("You won!");
                    playerScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice){
                case 'rock':
                    console.log("You won");
                    playerScore++;
                    break;
                case 'paper':
                    console.log("You tied!");
                    break;
                case 'scissors':
                    console.log("You lost!");
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice){
                case 'rock':
                    console.log("You lost");
                    computerScore++;
                    break;
                case 'paper':
                    console.log("You won!");
                    playerScore++;
                    break;
                case 'scissors':
                    console.log("You tied!");
                    break;
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

console.log("Play rock, paper, scissors!");
let gamesAmount = parseInt(prompt("How many games you want to play? ", "0"));
for (let i = 0; i < gamesAmount; i++){
    let userInput = prompt("Pick one: ", "");
    let computerInput = randChoice();
    console.log("Computer: " + computerInput);
    winCheck(userInput, computerInput);
    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)
}


