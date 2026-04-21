/*  
    set humanScore to 0
    set computerScore to 0

    function play round (humanChoice, computerChoice)
        if choices are the same → tie
        else if human beats computer → win
        else → lose

    function getComputerChoice
        set choices to ["rock", "paper", "scissors"]
        set randomIndex to a random number between 0 and length of choices - 1
        return choices[randomIndex]
    end function

    funtion getHumanChoice
        repeat
            ask user to enter "rock", "paper", or "scissors"
            set choice to user input
        until choice is "rock" OR "paper" OR "scissors"
        return choice
    end function

    function  scores (one,two)
        if play round equal to YOU WIN
        increase humanScore by 1
        if play round equal to YOU LOST
        increase computerScore by 1

    display playround
    display humanScore
    display computerScore

*/

function getHumanChoice () {
    let choice;  
    do {
        let input = prompt("Choose rock, paper or scissors:");
        if (input === null) {
            continue;
        }
        choice = input.toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    return choice;
}

function getComputerChoice () {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice ) {
        return "YOU TIED!"
    } 
    const win = 
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissors" && computerChoice === "paper");
    return win ? "YOU WIN!!!" : "YOU LOSE...";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let x = 0; x < 5; x++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        if (result === "YOU WIN!!!") {
            humanScore++;
        } else if (result === "YOU LOSE...") {
            computerScore++;
        }
    console.log(result);
    }

    console.log(`And the final score is!!!!! dumdumdumdumdum (this are supposed to be drums).`);
    console.log(`Hooman: ${humanScore}   -   Soon to be Overlord!! I mean... Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("YOU WON THE GAME!!!! =D");
    } else if (humanScore < computerScore) {
        console.log("Mr. Overlord WON THE GAME!!!!");
    } else {
        console.log("It was a tie LMAO!");
    }
}

playGame();