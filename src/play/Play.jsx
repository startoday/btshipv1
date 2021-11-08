import React from 'react';
import { fire } from '../actions';
import Square from '../Square';
import { useSelector, useDispatch } from 'react-redux';
import {getRandomInt} from '../helpers/helperFunction'

export default function Play(props) {
	const queryString = window.location.search;
	console.log(queryString);
	const urlParams = new URLSearchParams(queryString);
	const mode = urlParams.get('mode');
	const dispatch = useDispatch();
	const gameState = useSelector((state) => state.gameState);
	const boardState = gameState.board1;
	const boardComp = [];
	for (let i = 0; i < boardState.length; i++) {
		let row = boardState[i];
		for (let j = 0; j < row.length; j++) {
			boardComp.push(
				<div onClick={() => dispatch(fire(mode, i, j))}>
					<Square num={boardState[i][j]}> </Square>
				</div>
			);
		}
    }
    const boardState2 = gameState.board2;
	const boardComp2 = [];
	for (let i = 0; i < boardState2.length; i++) {
		let row = boardState2[i];
		for (let j = 0; j < row.length; j++) {
			boardComp2.push(
				<div onClick={() => dispatch(fire('user', i, j))}>
					<Square num={boardState2[i][j]}> </Square>
				</div>
			);
		}
	}
	return (
		<div>
			{/* <h3> reset </h3> */}
			<h3 onClick={() => dispatch(fire('user', getRandomInt(10), getRandomInt(10)))}> randomfire </h3>
			<div class="container">{boardComp}</div>
		
            <br/>
            <div class="container">{mode ==="user"? boardComp2 :""}</div> 
		</div>
	);
}