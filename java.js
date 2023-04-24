
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

            break;

            case "scissors":

                alert("lose");

            break;

        }

    break;

    case "rock":

    switch(getComputerChoice()){

        case "paper":

            alert("Lose");

        break;

        case "rock":

            alert("Draw");

        break;

        case "scissors":

            alert("Win");

        break;

    }

    break;

    case "scissors":

        switch(getComputerChoice()){

        case "paper":

            alert("Win");

        break;

        case "rock":

            alert("Lose");

        break;

        case "scissors":

            alert("Draw");

        break;

    }

    break;

    }

}
