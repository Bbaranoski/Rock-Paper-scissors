
    function getComputerChoice(){
    
        let random = Math.floor(Math.random() * 3);

        if(random === 0){

            choice = "Rock";

        }else if(random === 1){

            choice = "Paper";

        }else{

            choice = "Scissors";

        }

        return choice;
}

    let playerChoice = prompt("A game of Rock, Paper, Scissor, whats your choice?");

  console.log(getComputerChoice());

  console.log(playerChoice);
