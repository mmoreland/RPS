
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

function rounds(hum, puter){
        console.log(puter);
        console.log(hum);

        let winner = play(hum, puter);

        const result = document.getElementById("result");
        const score = document.getElementById("score");

        if(winner === 1){
            result.innerHTML = "You won! " + hum + " beats " + puter;
            humanScore++;
        }
        else if(winner === 0){
            result.innerHTML ="You lost! " + puter + " beats " hum;
            computerScore++;
        }
        else if(winner === 2){
            result.innerHTML= "Its a tie";
        }
        score.innerHTML = "You: " + humanScore + " Computer: " + computerScore;
    }


//rounds(0); //sets the amoutn of rounds that you play against computer



const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const sci = document.getElementById("Scissors");

rock.addEventListener("click", () => {
        let comp = getComputerChoice();
        rounds("rock", comp);
    });

paper.addEventListener("click", () => {
        let comp = getComputerChoice();
        rounds("paper", comp);
    });
sci.addEventListener("click", () => {
        let comp = getComputerChoice();
        rounds("scissors", comp);
    });





