var choices = ["R", "P", "S"]
var wins = 0;
var losses = 0;
var draws = 0;
var userChoice;
var computerChoice


function PlayGame() {

    //Ask User for choice of R, P or S
    userChoice = window.prompt("Please enter R, P or S");

    //If User hits cancel
    if (!userChoice) {
        return;
    }

    //Make userChoice Upper Case to make comparing choices easier
    userChoice = userChoice.toUpperCase();
    console.log(userChoice);

    //Get the computer's choice
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    window.alert("The computer chose " + computerChoice);

    //Compare choices
    if (userChoice === computerChoice) {
        window.alert("It's a draw!");
        draws++;
    }
    //Check all conditions of user wins
    else if ((userChoice === "R" && computerChoice === "S") || 
             (userChoice === "P" && computerChoice === "R") || 
             (userChoice === "S" && computerChoice === "P")) {
            window.alert("You win!");
            wins++;
    }
    //Otherwise the user loses
    else {
        window.alert("You Lose!");
        losses++
    }

    //Display the wins, losses and draws
    window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nDraws: " + draws
    );

    //Ask user if they want to play again
    var playAgain = window.confirm("Play again?");

    //If the user presses ok, play again
    if (playAgain) {
    PlayGame();
    }

}//END PLAYGAME()

PlayGame();