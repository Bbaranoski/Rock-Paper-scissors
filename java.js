    let playerSelection = "";

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
    
        button.addEventListener('click', () => {

            playerSelection = button.id;

            playerSelection = playerSelection.toLowerCase();

        }); 
    });

    buttons.forEach((button) => {button.textContent = button.id});

    function getComputerChoice(){
    
        let random = Math.floor(Math.random() * 3);
        
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

        switch(player){

        case "paper":

            switch(computer){

                case "paper":

                    console.log("draw");

                break;

                case "rock":

                    console.log("win");

                break;

                case "scissors":

                    console.log("lose");

                break;

            }

        break;

        case "rock":

        switch(computer){

            case "paper":

                console.log("lose");

            break;

            case "rock":

                console.log("draw");

            break;

            case "scissors":

                console.log("win");

            break;

        }

        break;

        case "scissors":

            switch(computer){

            case "paper":

                console.log("win");

            break;

            case "rock":

                console.log("lose");

            break;

            case "scissors":

                console.log("draw");

            break;

        }

        break;

        }

    }

    const computer = getComputerChoice();

    const player = playerSelection;



