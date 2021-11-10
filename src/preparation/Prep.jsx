import React from 'react';
import { useNavigate } from 'react-router-dom';
import Board from '../Board';
import Ship from '../Ship';
import './Prep.css';
export default function Prep() {
    const navigate = useNavigate();
    
	return (
		<>
        <div>currently only start game-randomGen is implemented </div>
        <div class = "prepareBoard">
            <Board/>
            <div class = "shipBoard">
                <Ship len = "3"/>
                <Ship len = "4"/>
            </div>
        </div>
        <br/>
		<button  onClick={() => {navigate('/play?mode=user')}}>Start Game</button>
		<button >Rotate Your Ships</button>
		<button onClick={() => navigate('/play?mode=user')} >Random Placement</button>
		</>
	);
}
