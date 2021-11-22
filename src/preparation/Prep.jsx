import React from 'react';
import { useNavigate } from 'react-router-dom';
import Board from '../Board';
import Ship from '../Ship';
import {setBoard, resetBoard } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './Prep.css';
import { Button, Nav, Container, Card, Row, Col, Image } from 'react-bootstrap';

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
            <div class = "boardContainer-left">Place ships on your board:<Board/></div>
            
            
            <div class = "boardContainer-right">Your Remain Boats to set
            <div class = "shipBoard"> 
                <Ship shipId = "s1"/>
                <Ship shipId = "s2"/>
                <Ship shipId = "s3"/>
                <Ship shipId = "s4"/>
                <Ship shipId = "s5"/>
                {/* <Ship len = "3"/>
                <Ship len = "3"/>
                <Ship len = "4"/>
                <Ship len = "5"/> */}
            </div>
            </div>
        </div>
        <br/>
        <div class = "boardContainer-middle">
		<Button variant="outline-secondary" onClick={() => {
            if (valid){
                dispatch(setBoard({takenPlace:[...takenPlace]}));
            } else{
                alert("your placement is invalid! going to random placement for now");
            }
            navigate('/play?mode=user')}}>Start Game</Button>{' '}
		<Button variant="outline-secondary" >Rotate Your Ships</Button>{' '}
		<Button variant="outline-secondary" onClick={() => navigate('/play?mode=user')} >Random Placement</Button>{' '}
		<Button variant="outline-secondary" onClick={() => dispatch(resetBoard())}> reset </Button>
        </div>
        </>
	);
}
