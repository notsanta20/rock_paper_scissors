const roundText = document.querySelector(`#round`);
const userScoreText = document.querySelector(`#userScore`);
const computerScoreText = document.querySelector(`#computerScore`);
const buttons = document.querySelectorAll(`#buttons`);
const roundResult = document.querySelector(`#roundResult`);
const finalResult = document.querySelector(`#finalResult`);
const container = document.querySelector(`#container`);
const words = [`rock`, `paper`, `scissor`];
let userScore = 0;
let computerScore = 0;
let round = 0;

function getComputerSelection () {
    return words[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {
    round ++;
    
    if (playerSelection === computerSelection) {
        roundResult.textContent = `Its a TIE!!`;
    }
    else
        if (
        (playerSelection === `rock` && computerSelection === `scissor`) ||
        (playerSelection === `paper` && computerSelection === `rock`) ||
        (playerSelection === `scissor` && computerSelection === `paper`)
        ) {
            userScore ++;
            roundResult.textContent = `You Won!!! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            computerScore ++;
            roundResult.textContent = `You Lost! ${computerSelection} beats ${playerSelection}`;
        }
};

const disableButtons = () => {
    buttons.forEach(button => {
        button.disabled = true;
    });
};

const resetButton = document.createElement(`button`);
resetButton.textContent = `Reset`;
resetButton.addEventListener(`click`, ()=>{
    userScore = 0;
    computerScore = 0;
    round = 0;
    roundResult.textContent = ``;
    finalResult.textContent = ``;

    roundText.textContent = `Round - ${round}`;
    userScoreText.textContent = `Your Score - ${userScore}`;
    computerScoreText.textContent = `Computer Score - ${computerScore}`;

    buttons.forEach(button => {
        button.disabled = false;
    });

    resetButton.remove();
});

buttons.forEach(button =>{
    button.addEventListener(`click`, game => {
        if (round < 5) {
            playerSelection = game.target.id;
            computerSelection = getComputerSelection();
            playRound(playerSelection, computerSelection);

            roundText.textContent = `Round - ${round}`;
            userScoreText.textContent = `Your Score - ${userScore}`;
            computerScoreText.textContent = `Computer Score - ${computerScore}`;
            if (round === 5) {
                if (userScore > computerScore) {
                    finalResult.textContent = `You WON!!! you beat computer by ${userScore} points.`;
                }
                else {
                    finalResult.textContent = `You LOST! :( better luck next time.`;
                }
                container.appendChild(resetButton);
            }
            
        }
        
        
    });
});