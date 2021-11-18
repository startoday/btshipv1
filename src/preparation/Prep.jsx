import React from 'react';
import { useNavigate } from 'react-router-dom';
import Board from '../Board';
import Ship from '../Ship';
import {setBoard, resetBoard } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './Prep.css';
export default function Prep() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let valid = true;
    const takenPlace = new Set();
    const ship1 = [0,1];
    ship1.forEach((b) => takenPlace.add(b));

	return (
		<>
        
        <div class = "prepareBoard">
            <Board/>
            <div class = "shipBoard">
                <Ship len = "2"/>
                <Ship len = "3"/>
                <Ship len = "3"/>
                <Ship len = "4"/>
                <Ship len = "5"/>
            </div>
        </div>
        <br/>
		<button  onClick={() => {
            if (valid){
                dispatch(setBoard({takenPlace:[...takenPlace]}));
            } else{
                alert("your placement is invalid! going to random placement for now");
            }
            navigate('/play?mode=user')}}>Start Game</button>
		<button >Rotate Your Ships</button>
		<button onClick={() => navigate('/play?mode=user')} >Random Placement</button>
		<button onClick={() => dispatch(resetBoard())}> reset </button>
        </>
	);
}
