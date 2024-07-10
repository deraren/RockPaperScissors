let humanScore = 0;
let computerScore =0;
playGame();

function playGame() {
    let humanChoice;
    let computerChoice;
    let result;
    for(let i = 0; i<5; i++)
        {
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
            result = playRound(humanChoice, computerChoice)
            if (result == 1)
                {
                    humanScore++;
                    console.log(humanScore);
                    console.log(computerScore);
                }
            else if(result == -1){
                computerScore++;
                console.log(humanScore);
                console.log(computerScore);
            }
            else {
                console.log(humanScore);
                console.log(computerScore);
            }
        }
    if(humanScore>computerScore)
        {
            alert("YOU WON!");

        }
    else if(computerScore>humanScore)
        {
            alert("YOU LOSE!");

        }
        else{
            alert("DRAW");
        }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === "rock")
        {
            if (computerChoice === "rock")
                {
                    console.log("Draw!Rock and Rock");
                    return 0;
                }
            else if (computerChoice === "paper")
                {
                    console.log("You lose! Paper beats Rock");
                    return -1;
                }
            else {
                console.log("You win! Rock beats scissors");
                return 1;
            }
        }
    else if (humanChoice === "paper")
        {
            if (computerChoice === "rock")
                {
                    console.log("You win!Paper beats rock");
                    return 1;
                }
            else if (computerChoice === "paper")
                {
                    console.log("Draw! Paper and paper");
                    return 0;
                }
            else {
                console.log("You lose! Scissors beats paper");
                return -1;
            }
        }
    else {
        if (computerChoice === "rock")
            {
                console.log("You lose!Rock beats scissors");
                return -1;
            }
        else if (computerChoice === "paper")
            {
                console.log("You win! Scissors beats paper");
                return 1;
            }
        else {
            console.log("Draw ! scissors and scissors");
            return 0;
        }

    }

}

function getComputerChoice () {
    const random = Math.floor(Math.random()*3);
    if (random == 0)
        {
            return "rock";
        }
    else if (random == 1)
        {
            return "paper";
        }
    else 
    {
        return "scissors";
    }
}

function getHumanChoice () {
    const choice = window.prompt("Rock, Paper or Scissors???");
    if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors")
        {
            return choice;
        }
    else {
        alert("Error");
        return ;
    }
}




