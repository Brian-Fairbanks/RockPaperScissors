// for up to 3 games

// rock - 0
// paper - 1
// scissors - 2

// computer chooses rock paper or scissors
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
//         if user.rock and computer.rock - do again
//         if user.paper and computer.paper - do again
//         if user.scissors and computer.scissors - do again

//     if user.rock
//         if computer.paper - user looses
//         if computer.scissors - user wins

//     if user.paper
//         if computer.rock - user wins
//         if computer.scissors - user looses

//     if user.scissors
//         if computer.paper - user wins
//         if computer.rock - user looses
// winner is decided
// if player.wins = 2 || computer.wins=2
// end the game