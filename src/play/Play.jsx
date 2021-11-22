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
import { Button, ListGroup, Container, Card, Row, Col, Image } from 'react-bootstrap';
import Popup from "../Popup"
import { closeLocalHint } from '../actions';
import { useNavigate} from 'react-router-dom';


export default function Play(props) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const mode = urlParams.get('mode');
	const navigate = useNavigate();
	const stored = localStorage.getItem(stateMode)
	// console.log("sm is ", stored);
	// if(stored === undefined || stored ===null ){
	// 	window.location.href = '/preparation';
	// }
	const storedMode = JSON.parse(stored);

	let site = "/"
	let confilctGameType = false;
	
	console.log("m,sm ", mode, storedMode);
	if(storedMode !== undefined && storedMode !==null && storedMode!== mode) {
		confilctGameType = true;
		site = '/play?mode='+storedMode;
		//trigger popped window
	}

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
	const isOpen = useSelector((state) => state.localStorageOpen);
	return (

		
		<div>


{confilctGameType && <Popup
        content={<>
          <b>detect changing mode type!!</b>
          <p>Due to switch to a different mode of game, your previous game state will be cleared.</p>
          {/* <button class = "goprev" onClick={() => {

			  navigate(site)
		}}>Go to previous game</button> */}
        </>
		
	} handleClose={
          () => {dispatch(closeLocalHint());
			dispatch(resetBoard());
		}
        }
      />}
			<div class="playPageContainer">
				<div class="boardContainer-left">
					<div >Component's board:</div>
						<UserBoard mode={mode} />
				</div>

				<div class="boardContainer-right">
					{mode === 'user' ? <div>Your board:</div> : ''}
					{mode === 'user' ? <ComputerBoard />: ''}
				</div>
			</div>
			{/* <div class="statusDisplay">
				<button onClick={() => dispatch(fire(mode, -1, -1))}> randomfire </button>
				{mode === 'user' ? (
					<div>Your percent boat Left: {(gameState.computerBoats.length * 100 / 17).toFixed(2)} %</div>
				) : (
					''
				)}
			</div>  */}
			<div class="playPageContainer">
				<div class="buttom-middle">
					<Button variant="outline-secondary" onClick={() => dispatch(fire(mode, -1, -1))}> Random Fire </Button>
				
					<Button variant="outline-secondary" onClick={() => dispatch(resetBoard())}> Reset </Button>
				</div>
			</div>
			
			<Card className="text-center">
        <Card.Body>         
          <Card.Text>
            <ListGroup>
              <ListGroup.Item>{mode === 'user' ? (
					<div>Your percent boat Left: {(gameState.computerBoats.length * 100 / 17).toFixed(2)} %</div>
				) : (
					''
				)}</ListGroup.Item>
              
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>

			
		</div>
	);
}
