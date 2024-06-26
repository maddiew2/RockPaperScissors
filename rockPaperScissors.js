
function getComputerChoice() {
    let comChoice;
    let num = Math.floor((Math.random() * 3) + 1);

    switch(num) {
        case 1:
            comChoice = "rock";
            break;
        case 2:
            comChoice = "paper";
            break;
        case 3: 
            comChoice = "scissors";
            break;
    }
    // console.log("Computer: " + comChoice);
    
    return comChoice;
}

function getHumanChoice() {
    let humanChoice;

    do {
        humanChoice = prompt("Enter rock, paper, or scissors");
        if (humanChoice !== null) {
            humanChoice = humanChoice.toLowerCase();
        }
    } while (humanChoice != "rock" && 
             humanChoice != "paper" && 
             humanChoice != "scissors");

    // console.log("Human: " + humanChoice);
    return humanChoice;
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return "tie";
    }
    else if (humanSelection === "rock" && computerSelection === "paper" ||
             humanSelection === "paper" && computerSelection === "scissors" ||
             humanSelection === "scissors" && computerSelection === "rock") {
        return "comp";
    }
    else { 
        return "player";
    }
}

function playGame() {
    const numOfRounds = 5;
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < numOfRounds; i++) {
        let humanSelection = getHumanChoice(); 
        let computerSelection = getComputerChoice(); 
        let winner = playRound(humanSelection, computerSelection);

        // console.log("Winner: " + winner);
        // console.log("\n");

        if (winner === "comp") {
            computerScore++;
        }
        else if (winner === "player") {
            humanScore++;
        }
    }

    if (humanScore === computerScore) {
        console.log("Tie!");
    }
    else if (humanScore > computerScore) {
        console.log("Player wins!");
    }
    else {
        console.log("Computer wins!");
    }
}

playGame();