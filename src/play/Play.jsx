import React from 'react';
import { fire, resetBoard } from '../actions';
import Square from '../Square';
import Board from '../Board';
import UserBoard from '../UserBoard';
import ComputerBoard from '../ComputerBoard';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomInt } from '../helpers/helperFunction';
import "./Play.css"
import { localStorageKey,stateMode } from '../helpers/constants'

export default function Play(props) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const mode = urlParams.get('mode');
	// const hasPreData = urlParams.get('prevData');
	localStorage.setItem(stateMode, JSON.stringify(mode));
	//let gameState =useSelector((state) => state.gameState);
	// const val = localStorage.getItem(localStorageKey);
	// if(val!==null){
	// 	console.log("youhave soem thing");
	// 	gameState=  {...JSON.parse(localStorage.getItem(localStorageKey))};
	// 	console.log("at here game state is ", gameState);
	// } 
	const dispatch = useDispatch();
	const gameState = useSelector((state) => state.gameState);

	return (
		<div>

			<button onClick={() => dispatch(resetBoard())}> Reset </button>
			<div class="playPageContainer">
				<div class="boardContainer">
					<div class>Component's board:</div>
						<UserBoard mode={mode} />
				</div>

				<div class="boardContainer">
					{mode === 'user' ? <div>Your board:</div> : ''}
					{mode === 'user' ? <ComputerBoard /> : ''}
				</div>
			</div>
			<div class="statusDisplay">
				<button onClick={() => dispatch(fire(mode, -1, -1))}> randomfire </button>
				{mode === 'user' ? (
					<div>Your percent boat Left: {(gameState.computerBoats.length * 100 / 17).toFixed(2)} %</div>
				) : (
					''
				)}
			</div> 
		</div>
	);
}
