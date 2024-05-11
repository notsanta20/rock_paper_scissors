const buttons = document.querySelectorAll(`.rpsBtn`);
const playerText = document.querySelector(`.playerText`);
const computerText = document.querySelector(`.computerText`);
const resultText = document.querySelector(`.resultText`);
const playerScore = document.querySelector(`.playerScore`);
const computerScore = document.querySelector(`.computerScore`);
const restartBtn = document.querySelector(`.restart`);

let computerChoice;
let round = 0;
let userScore = 0;
let npcScore = 0;

function getComputerChoice() {
    const options = [`Rock`, `Paper`, `Scissors`];
    return computerChoice = options[Math.floor(Math.random() * 3)];
}

function playRound(computerChoice, userChoice){
    playerText.textContent = `Player Choice - ${userChoice}`;
    computerText.textContent = `Computer Choice - ${computerChoice}`;
    
    if(computerChoice === userChoice){
        resultText.textContent = `Its a Tie!!! play again`
    }
    else{
        round++;
        if((userChoice == `Rock` && computerChoice == `Scissors`) ||
           (userChoice == `Paper` && computerChoice == `Rock`) ||
           (userChoice == `Scissors` && computerChoice == `Paper`)){
           resultText.textContent = `Scissors beats Paper`;
           userScore++;
           playerScore.textContent = `Player : ${userScore}`; 
        }
        else{
            resultText.textContent = `${computerChoice} beats ${userChoice}`;
            npcScore++;
            computerScore.textContent = `Computer : ${npcScore}`; 
        }
    }
}

buttons.forEach(button=>{
    button.addEventListener(`click`, () => {
        if(round < 5){
            getComputerChoice();
            let userChoice = button.value;
            playRound(computerChoice, userChoice);

            if(round === 5){
                restartBtn.style.visibility = `visible`;
                if(userScore > npcScore){
                    resultText.textContent = `You Win! you beat computer by ${userScore} points`;
                }
                else{
                    resultText.textContent = `You Lose! :( Computer won by ${npcScore} points`;
                }
            }
        }
    })
})

restartBtn.style.visibility = `hidden`;
restartBtn.addEventListener(`click`, ()=>{
    round = 0;
    userScore = 0;
    npcScore = 0;
    playerScore.textContent = `Player : ${userScore}`;
    computerScore.textContent = `Computer : ${npcScore}`; 
    playerText.textContent = `Player Choice - `;
    computerText.textContent = `Computer Choice - `;
    resultText.textContent = `Result `;

    restartBtn.style.visibility = `hidden`;
})