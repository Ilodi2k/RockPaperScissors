function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playerInput() {
    choice = prompt("Choose: Rock Paper or Scissors!");
    if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors") {
        return choice.toLowerCase();
    } else {
        alert("Look like you had a typo, try again. Either Rock, Paper or Scissors");
        return playerInput();
    }
}

function playRound(computerChoice, playerChoice) {
     if (computerChoice == "paper" && playerChoice == "rock") {
        console.log("You lose! Paper beats Rock");
        return computerScore++;
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        console.log("You win! Scissors beats Paper");
        return playerScore++;
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        console.log("You win! Paper beats Rock");
        return playerScore++;
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        console.log("You lose! Rock beats Scissors");
        return computerScore++;
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        console.log("You lose! scissors beats Paper");
        return computerScore++;
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        console.log("You win! Rock beats Scissors");
        return playerScore++;
    } else if (computerChoice == playerChoice) {
        console.log("It's a draw! Both of you picked " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));
    } else {
        console.log("iwo ist ein Fehler");
    }
}

function game(computerChoice, playerChoice) {
    console.log("\n \n \n \n \n \n \n \n \n \n \n \n \n");
    for (let i=0; i<5; i++) {
        let computerChoice = computerPlay();
        let playerChoice = playerInput();
        playRound(computerChoice, playerChoice);
        console.log("Score: Computer " + computerScore + "   ---   You: " + playerScore);
    }
    if (computerScore > playerScore){
        console.log("The computer has won this round. Press F5 to try again.")
    } else if (playerScore > computerScore){
        console.log("You won this Round! Press F5 to restart.")
    } else {
        console.log("It's a tie! Press F5 to try again.");
    }
}

game();