const buttons = document.querySelectorAll('.choices');
const displayPlayerScore = document.querySelector('#user-score');
const displayComputerScore = document.querySelector('#computer-score');
const scoreMessage = document.querySelector('#score-message');
const restartButton = document.querySelector('#restart');
let computerScore = 0;
let playerScore = 0;

//Play the Game
function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoosing = buttons[Math.floor(Math.random() * buttons.length)];
    const computerChoice = computerChoosing.id;
    playRound(computerChoice, playerChoice);
    updateScore(computerScore, playerScore);
}

// Event Listerners
buttons.forEach((button) => button.addEventListener('click', playGame));
restartButton.addEventListener('click', restartGame);

// play a round (determine winner)
function playRound(computerChoice, playerChoice) {
    if (computerChoice == "paper" && playerChoice == "rock") {
        scoreMessage.textContent = "You lose! Paper beats Rock";
    //    console.log("You lose! Paper beats Rock");
       return computerScore++;
   } else if (computerChoice == "paper" && playerChoice == "scissors") {
        scoreMessage.textContent = "You win! Scissors beats Paper";
    //    console.log("You win! Scissors beats Paper");
       return playerScore++;
   } else if (computerChoice == "rock" && playerChoice == "paper") {
        scoreMessage.textContent = "You win! Paper beats Rock";
    //    console.log("You win! Paper beats Rock");
       return playerScore++;
   } else if (computerChoice == "rock" && playerChoice == "scissors") {
        scoreMessage.textContent = "You lose! Rock beats Scissors";
    //    console.log("You lose! Rock beats Scissors");
       return computerScore++;
   } else if (computerChoice == "scissors" && playerChoice == "paper") {
        scoreMessage.textContent = "You lose! Scissors beats Paper";
    //    console.log("You lose! scissors beats Paper");
       return computerScore++;
   } else if (computerChoice == "scissors" && playerChoice == "rock") {
        scoreMessage.textContent = "You win! Rock beats Scissors";
    //    console.log("You win! Rock beats Scissors");
       return playerScore++;
   } else if (computerChoice === playerChoice) {
        scoreMessage.textContent = "It's a draw! Both of you picked " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    //    console.log("It's a draw! Both of you picked " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));
   } else {
       console.log("ERROR: There seems to be a mistake somewhere!!");
   }
}

//update score
function updateScore (computerScore, playerScore) {
    displayComputerScore.textContent = computerScore;
    displayPlayerScore.textContent = playerScore;
}

//restart the Game
function restartGame() {
location.reload();
}