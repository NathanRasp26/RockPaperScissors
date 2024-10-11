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
    else if (playerSelect === "scissor" && computerSelect === "paper"){
        return "you win";
    }
    else{
        return "you lose"
    }
}

const playerSelect = prompt("Make your move").toLowerCase();
const computerSelect = getcomputerchoice(choice);
console.log(game(playerSelect , computerSelect));

    

