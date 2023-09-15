const RPS = ["rock", "paper", "scissors"] 

function getComputerChoice() {
    return RPS[Math.floor( Math.random() * 3)]
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == 'paper'){
        return 'You Lose! Paper beats Rock'
    }
    else if (playerSelection == "paper" && computerSelection == 'scissors'){
        return 'You Lose! Scissors beats Paper!'
    }
    else if (playerSelection == "scissors" && computerSelection == 'rock'){
        return 'You Lose! Rock beats Scissors!'
    }
    else if (playerSelection == computerSelection){
        return 'DRAW!'
    }
    else if (playerSelection == "rock" && computerSelection == 'scissors'){
        return 'You Win! Rock beats Scissors!'
    }
    else if (playerSelection == "paper" && computerSelection == 'rock'){
        return 'You Win! Paper beats Rock!'
    }
    else if (playerSelection == "scissors" && computerSelection == 'paper'){
        return 'You Win! Scissors beats Paper!'
    }
  }


  var Choice = prompt("Please enter your choice: ");

  const playerSelection = Choice.toLowerCase()

  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

