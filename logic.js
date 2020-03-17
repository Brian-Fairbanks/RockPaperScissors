//instanciation game
var wins = 0;
var loses = 0;
var ties = 0;

// for up to 10 games

// rock - 0
// paper - 1
// scissors - 2

for(var gameNumber=0; gameNumber < 10; gameNumber++ ){
    // computer chooses rock paper or scissors - picks a random number between 0 and 2
    var compChoice = Math.floor(Math.random()*3)

    // player choosess rock paper or scissors, with error checking
    do{
        //take player input, and force it to lowercase for validity checking
        var playerText = prompt("Choose (R)ock, (P)aper, or (S)cissors");
        playerText=playerText.toLowerCase();

        // list of valid commands.  Not that they go in groups of 3 representing Rock then Paper then Scissors
        var choiceList = ["r","p","s","rock","paper","scissors"]

        /* check if their response is in the valid inputs.  mod by 3, so results will be:
            -1 - invalid
            0 - rock
            1 - paper
            2 - scissors  */
        var playerChoice = choiceList.indexOf(playerText)%3;
    }
    while( playerChoice == -1 )

    // testing code so far
    console.log("comp: "+ compChoice + " | user: "+ playerChoice );

    // user and play compare results - (If statement)

    //     if user.selection = computer.selection - do again
    if(compChoice === playerChoice){
        //tie game
        ties++;
    }
    //     if user.rock
    //         if computer.paper - user looses
    //         if computer.scissors - user wins

    else if (playerChoice == 0){
        if(compChoice == 1){
            loses++;
        }
        else{
            wins++;
        }
    }
    //     if user.paper
    //         if computer.scissors - user looses
    //         if computer.rock - user wins
    else if (playerChoice == 1){
        if(compChoice == 2){
            loses++;
        }
        else{
            wins++;
        }

    }
    //     if user.scissors
    //         if computer.rock - user looses
    //         if computer.paper - user wins
    else if (playerChoice == 2){
        if(compChoice == 0){
            loses++;
        }
        else{
            wins++;
        }

    }
}

// winner is decided
alert("wins: "+wins+"\nLosses:"+loses +"\nties: "+ties);
// if player.wins = 2 || computer.wins=2
// end the game/n