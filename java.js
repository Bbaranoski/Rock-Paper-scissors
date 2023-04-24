
let playerSelection = "";

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        playerSelection = button.id;

        playerSelection = playerSelection.toLowerCase();

        game();

        getComputerChoice();

    }); 
});

buttons.forEach((button) => {button.textContent = button.id});

function getComputerChoice(){
    
    random = Math.floor(Math.random() * 3);
        
    if(random === 0){

        choice = "rock";

    }else if(random === 1){

        choice = "paper";

    }else{

        choice = "scissors";

    }

    return choice;
}

function game(){

    switch(playerSelection){

    case "paper":

        switch(getComputerChoice()){

            case "paper":

                alert("draw");

            break;

            case "rock":

                alert("win");

                playerPoint++;

            break;

            case "scissors":

                alert("lose");

                computerPoint++;

            break;

        }

    break;

    case "rock":

    switch(getComputerChoice()){

        case "paper":

            alert("Lose");

            computerPoint++;

        break;

        case "rock":

            alert("Draw");

        break;

        case "scissors":

            alert("Win");

            playerPoint++;

        break;

    }

    break;

    case "scissors":

        switch(getComputerChoice()){

        case "paper":

            alert("Win");

            playerPoint++;

        break;

        case "rock":

            alert("Lose");

            computerPoint++;

        break;

        case "scissors":

            alert("Draw");

        break;

    }

    break;

    }

    if(playerPoint >= 5){

        alert("You Win");
    
        playerPoint = 0;
    
        computerPoint = 0;
    
    }else if(computerPoint >= 5){
    
        alert("You Lose");
    
        playerPoint = 0;
    
        computerPoint = 0;
        
    }
    
}

let playerPoint = 0;

let computerPoint = 0;
