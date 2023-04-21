    for(i=1; i<=5; i++){

    function getComputerChoice(){
    
        let random = Math.floor(Math.random() * 3);

        if(random === 0){

            choice = "rock";

        }else if(random === 1){

            choice = "paper";

        }else{

            choice = "scissors";

        }
        console.log(choice);
        return choice;
    }

    function getPlayerChoice(){

        let playerChoice = prompt("A game of Rock, Paper, Scissors, whats your choice?");

        playerChoice = playerChoice.toLowerCase();

        if(playerChoice === "rock"){

            choice = "rock";

        }else if(playerChoice === "paper"){

            choice = "paper";

        }else if(playerChoice === "scissors"){

            choice = "scissors";

        }else{

            getPlayerChoice();
        }

        return choice;
        
    }

    function game(){

        switch(player){

        case "paper":

            switch(computer){

                case "paper":

                    ;

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

    const player = getPlayerChoice();

    let playerPoint

    game();

    }
