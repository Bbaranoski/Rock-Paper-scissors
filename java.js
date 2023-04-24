
let playerSelection = "";

let playerPoint = 0;

let computerPoint = 0;

const container = document.querySelector('.UI');

const pointP = document.createElement('h2');

pointP.textContent = 'Player Points: ' + playerPoint;

container.appendChild(pointP);

const pointC = document.createElement('h2');

pointC.textContent = "Computer Points: " + computerPoint;

container.appendChild(pointC);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {

        playerSelection = button.id;

        playerSelection = playerSelection.toLowerCase();

        game();

        getComputerChoice();

        pointP.textContent = 'Player Points: ' + playerPoint;

        pointC.textContent = "Computer Points: " + computerPoint;

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

                alert("Draw");

            break;

            case "rock":

                alert("You Win The Round");

                playerPoint++;

            break;

            case "scissors":

                alert("You Lose The Round");

                computerPoint++;

            break;

        }

    break;

    case "rock":

    switch(getComputerChoice()){

        case "paper":

            alert("You Lose The Round");

            computerPoint++;

        break;

        case "rock":

            alert("Draw");

        break;

        case "scissors":

            alert("You Win The Round");

            playerPoint++;

        break;

    }

    break;

    case "scissors":

        switch(getComputerChoice()){

        case "paper":

            alert("You Win The Round");

            playerPoint++;

        break;

        case "rock":

            alert("You Lose The Round");

            computerPoint++;

        break;

        case "scissors":

            alert("Draw");

        break;

    }

    break;

    }

    if(playerPoint >= 5){

        alert("The Game Is Over, You Win!!!!");
    
        playerPoint = 0;
    
        computerPoint = 0;
    
    }else if(computerPoint >= 5){
    
        alert("You Lost For a Computer?!?!");
    
        playerPoint = 0;
    
        computerPoint = 0;
        
    }

}

