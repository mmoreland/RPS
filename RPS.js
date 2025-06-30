console.log("SUUUUUP");

function getComputerChoice(){
    num = Math.floor(Math.random() * 3)
    console.log(num);
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
    let user = prompt("Please enter (1) for Rock, (2) for Paper, or (3) Scissors")
    return user;
}

let puter = getComputerChoice();
console.log(puter);
const hum = getHumanChoice;
