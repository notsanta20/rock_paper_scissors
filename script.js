let playerSelection;
let computerSelection;
let words = [`rock`, `paper`, `scissor`];

let userScore = 0;
let npcScore = 0;
let round = 0;

function choice(){
    playerSelection = prompt(`Welcome, Choose Rock, Paper or Scissor ?`);
    playerSelection = playerSelection.toLowerCase();

    computerSelection = Math.floor(Math.random() * 3);
    computerSelection = words[computerSelection];

}

function playRound() {
    round++;
    choice();

    if (playerSelection === computerSelection) {
        alert(`Tied. Choose Rock, Paper or Scissor ? `);
        playRound();
    }else if (playerSelection === `rock`) {
        console.log(`Computer Selection - ` + computerSelection);
        console.log(`Your Selection - ` + playerSelection);
        if (computerSelection === `paper`) {
            npcScore ++;
            return console.log(`You Lose! Paper beats Rock`);
        }
        else (computerSelection === `scissor`)
            userScore ++;
            return console.log(`You WON!!! Rock beats Scissor`);
    }else if (playerSelection === `paper`) {
        console.log(`Computer Selection - ` + computerSelection);
        console.log(`Your Selection - ` + playerSelection);
        if (computerSelection === `scissor`) {
            npcScore ++;
            console.log(`You Lose! Scissor beats Paper`);
        }
        else (computerSelection === `rock`)
            userScore ++;
            console.log(`You WON!!! Paper beats Rock`);
    }else if (playerSelection === `scissor`) {
        console.log(`Computer Selection - ` + computerSelection);
        console.log(`Your Selection - ` + playerSelection);
        if (computerSelection === `rock`) {
            npcScore ++;
            console.log(`You Lose! Rock beats Scissor`);
        }
        else (computerSelection === `paper`)
            userScore ++;
            console.log(`You WON!!! Scissor beats paper`);
    }else
        alert(`Wrong word, Choose the word from the list`);
        
}

function game(){
    while (round != 5) {
        playRound();
    }

    if (userScore > npcScore) {
        console.log(`YOU WON THE GAME!!! You Scored ` + userScore + ` out of 5.`);
    }
    else
        console.log(`YOU LOST:( Computer Scored ${npcScore} out of 5. TRY AGAIN!`);
}

game();

