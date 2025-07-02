let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    num = Math.floor(Math.random() * 3)
    if (num === 0){
        return "rock";
    }
    else if(num === 1){
        return "paper";
    }
    else if(num === 2){
        return "scissors";
    }
}

function getHumanChoice(){
    let user = prompt("Please enter Rock, Paper, Scissors");
    let lowerUser = user.toLowerCase();
    return lowerUser;
}

function play(hum, comp){
    if(hum === comp){
        return 2;
    }
    else if(hum === "rock" && comp === "paper"){
        return 0;
    }
    else if(hum === "rock" && comp === "scissors"){
        return 1;
    }
    else if(hum === "paper" && comp === "rock"){
        return 1;
    }
    else if(hum === "paper" && comp === "scissors"){
        return 0;
    }
    else if(hum === "scissors" && comp === "rock"){
        return 0;
    }
    else if(hum === "scissors" && comp === "paper"){
        return 1;
    }
}

function rounds(x){


    for(let i = 0; i < x; i++){

        let puter = getComputerChoice();
        console.log(puter);
        let hum = getHumanChoice();
        console.log(hum);
        let winner = play(hum, puter);

        if(winner === 1){
            console.log("You won!" ,hum, " beats", puter);
            humanScore++;
        }
        else if(winner === 0){
            console.log("You lost!", puter, " beats", hum);
            computerScore++;
        }
        else if(winner === 2){
            console.log("Its a tie");
        }
        console.log("You: ", humanScore, " Computer: ", computerScore);
    }
}

rounds(5);




