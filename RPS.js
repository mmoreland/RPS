let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    num = Math.floor(Math.random() * 3)
    if (num === 0){
        return "Rock";
    }
    else if(num === 1){
        return "Paper";
    }
    else if(num === 2){
        return "Scissors";
    }
}

function getHumanChoice(){
    let user = prompt("Please enter Rock, Paper, Scissors");
    return user;
}

function play(hum, comp){
    if(hum === comp){
        return 2;
    }
    else if(hum === "Rock" && comp === "Paper"){
        return 0;
    }
    else if(hum === "Rock" && comp === "Scissors"){
        return 1;
    }
    else if(hum === "Paper" && comp === "Rock"){
        return 1;
    }
    else if(hum === "Paper" && comp === "Scissors"){
        return 0;
    }
    else if(hum === "Scissors" && comp === "Rock"){
        return 0;
    }
    else if(hum === "Scissors" && comp === "Paper"){
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




