import React from 'react'

export default function Rule() {
    return (
        <div>
            <h1>What is Battleship Game?</h1>
            <p>Battleship is a strategy type guessing game for two players. It is played on ruled grids (paper or board) on which each player's fleet of ships (including battleships) are marked. The locations of the fleets are concealed from the other player. Players alternate turns calling "shots" at the other player's ships, and the objective of the game is to destroy the opposing player's fleet.</p>
            <h1>Gameboard Rule</h1>
            <p>The board is made up of two 10X10 boards, one that represents the player’s board and one that represents the opponents.  At the start of the game, 5 ships are randomly placed on each board (one 5X1 ship, one 4X1 ship, two 3X1 ships, and one 2X1 ship).  Each ship should fit entirely on the board and they should not overlap any other ship on the board.
</p>
<p>During the game, you and an AI will take turns (the player always goes first).  On your turn, you will select a square on your opponent’s board.  On your opponent’s turn, the AI will randomly select a square on your grid.  If you or your opponent hit a ship, then mark that board with a color and symbol.  If you or your opponent miss, then mark a spot on the board to remind the players where on the board they have attempted.  The AI will not try to hit the same place more than once and the user should not be able to select the same spot more than once.</p>
        </div>
    )
}