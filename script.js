const RPS = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return RPS[Math.floor(Math.random() * 3)]
}


let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == 'paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock'
    }
    else if (playerSelection == "paper" && computerSelection == 'scissors') {
        computerScore++;
        return 'You Lose! Scissors beats Paper!'
    }
    else if (playerSelection == "scissors" && computerSelection == 'rock') {
        computerScore++;
        return 'You Lose! Rock beats Scissors!'
    }
    else if (playerSelection == computerSelection) {
        return 'DRAW!'
    }
    else if (playerSelection == "rock" && computerSelection == 'scissors') {
        playerScore++;
        return 'You Win! Rock beats Scissors!'
    }
    else if (playerSelection == "paper" && computerSelection == 'rock') {
        playerScore++;
        return 'You Win! Paper beats Rock!'
    }
    else if (playerSelection == "scissors" && computerSelection == 'paper') {
        playerScore++;
        return 'You Win! Scissors beats Paper!'
    }
}


function game() {
    for (let index = 0; index < 5; index++) {

        let Choice = prompt("Please enter your choice: ");

        const playerSelection = Choice.toLowerCase()

        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}

game();


if (playerScore > computerScore) {
    console.log("You won!")
} else if (computerScore > playerScore) {
    console.log("You Lost!")
} else {
    console.log("Tie!")
}

