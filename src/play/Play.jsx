import React from 'react';
import { fire, resetBoard } from '../actions';
import Square from '../Square';
import Board from '../Board';
import UserBoard from '../UserBoard';
import ComputerBoard from '../ComputerBoard';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomInt } from '../helpers/helperFunction';
import "./Play.css"
import { Button, Nav, Container, Card, Row, Col, Image } from 'react-bootstrap';


export default function Play(props) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const mode = urlParams.get('mode');
	const dispatch = useDispatch();
	const gameState = useSelector((state) => state.gameState);
	return (
		<div>
			<div class="playPageContainer">
				<div class="boardContainer-left">
					<div class>Component's board:</div>
						<UserBoard mode={mode} />
				</div>

				<div class="boardContainer-right">
					{mode === 'user' ? <div>Your board:</div> : ''}
					{mode === 'user' ? <ComputerBoard />: ''}
				</div>
			</div>
			
			{' '}
			<Button variant="outline-secondary" onClick={() => dispatch(fire(mode, getRandomInt(10), getRandomInt(10)))}> Random Fire </Button>{' '}
			<Button variant="outline-secondary" onClick={() => dispatch(resetBoard())}> Reset </Button>
			<div class="statusDisplay">
				
				{mode === 'user' ? (
					<div>Your percent boat Left: {(gameState.computerBoats.size * 100 / 17).toFixed(2)} %</div>
				) : (
					''
				)}
			</div>
		</div>
	);
}
