import React from 'react';
import Square from './Square';
import { useSelector, useDispatch } from 'react-redux';
import { localStorageKey,stateMode } from './helpers/constants'

export default function ComputerBoard() {
    const dispatch = useDispatch();
	//const gameState = useSelector((state) => state.gameState);

	let gameState = useSelector((state) => state.gameState);
	const val = localStorage.getItem(localStorageKey);
	if(val!==null && val!==undefined){

		gameState=  JSON.parse(localStorage.getItem(localStorageKey));
		console.log("at here game state is ", gameState);
	} 
    const boardState2 = gameState.board2;
	const boardComp2 = [];
	for (let i = 0; i < boardState2.length; i++) {
		let row = boardState2[i];
		for (let j = 0; j < row.length; j++) {
			boardComp2.push(
				<div>
					<Square num={boardState2[i][j]}> </Square>
				</div>
			);
		}
	}
    return (
        <div class = "container">
            {boardComp2}
        </div>
    )
}
