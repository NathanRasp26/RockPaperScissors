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

let playerSelect;
while (true) {
    playerSelect = prompt("Make your move (rock, paper, or scissors):").toLowerCase();
    if (choice.includes(playerSelect)) {
        break;
    }   else {
        console.log("Invalid Input, select 'rock', 'paper', or 'scissors'.");
    }
}
const computerSelect = getcomputerchoice(choice);
console.log(`Computer Chose: ${computerSelect}`);
console.log(game(playerSelect , computerSelect));

    

