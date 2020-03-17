# Rock Paper Scissors Game
Created by Brian, Cynthia, Daniel, and Jumig

## Psudocode
    for up to 3 games
        computer chooses rock paper or scissors
        player choosess rock paper or scissors

        user and play compare results - (If statement)

            if user.selection = computer.selection - do again
                if user.rock and computer.rock - do again
                if user.paper and computer.paper - do again
                if user.scissors and computer.scissors - do again

            if user.rock
                if computer.paper - user looses
                if computer.scissors - user wins

            if user.paper
                if computer.rock - user wins
                if computer.scissors - user looses

            if user.scissors
                if computer.paper - user wins
                if computer.rock - user looses
        winner is decided
    if player.wins = 2 || computer.wins=2
    end the game
