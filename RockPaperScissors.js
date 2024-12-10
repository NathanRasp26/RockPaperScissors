//file to program a playabe rock paper scissors game
let choice = ['rock' , 'paper' , 'scissors']

function getcomputerchoice(choice){
    return choice[Math.floor(Math.random() * choice.length)];
}
console.log(getcomputerchoice(choice))

function game(playerSelect, computerSelect){
    if (playerSelect === computerSelect){
        return "tie"
    }
    else if (playerSelect === "rock" && computerSelect === "scissors"){
        return "you win";
    }
    else if (playerSelect === "paper" && computerSelect === "rock"){
        return "you win";
    }
    else if (playerSelect === "scissors" && computerSelect === "paper"){
        return "you win";
    }
    else{
        return "you lose"
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore <= 4 && computerScore <= 4) {
        let playerSelect;
        while (true) {
            playerSelect = prompt("Make your move (rock, paper, or scissors):").toLowerCase();
            if (choice.includes(playerSelect)) {
                break;
            } else {
                console.log("Invalid Input, select 'rock', 'paper', or 'scissors'.");
            }
        }

        const computerSelect = getcomputerchoice(choice);
        console.log(`Computer Chose: ${computerSelect}`);
        console.log(`You Chose: ${playerSelect}`);

        const result = game(playerSelect, computerSelect);
        console.log(result);

        if (result === "you win") {
            humanScore++;
        } else if (result === "you lose") {
            computerScore++;
        }

        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game! You don't win anyting though.");
    } else {
        console.log("Game over! The computer won, you should be ashamed of yourself.");
    }
}

playGame();
