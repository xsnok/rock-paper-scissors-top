let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


function winCheck(userInput, computerChoice) {
    switch (userInput.toLowerCase()){
        case "rock":
            switch (computerChoice){
                case 'rock':
                    return "tie";
                case 'paper':
                    computerScore++;
                    return "won";
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
    console.log("test rock")
    const p = document.createElement("p");
    let cpu = randChoice();
    let result = winCheck("rock", cpu);
    p.text = `You ${result}`;
    document.body.appendChild(p);
});
// paper.addEventListener("click", winCheck("paper", randChoice()));
// scissors.addEventListener("click", winCheck("scissors", randChoice()));


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


