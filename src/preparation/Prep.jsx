import React from 'react';
import { useNavigate } from 'react-router-dom';
import Board from '../Board';
import Ship from '../Ship';
import {setBoard, resetBoard, resetPlacement, rotate, closeRotateHintWindow } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import './Prep.css';
import { Button, Nav, Container, Card, Row, Col, Image } from 'react-bootstrap';
import {useEffect} from "react";
import { isOutOfboundary } from '../helpers/helperFunction';
import {  shipShape } from '../helpers/constants';
import Popup from "../Popup"
import { localStorageKey,stateMode } from '../helpers/constants'

const dirMap= {
    "hor":1,
    "ver" :10,
}

export default function Prep() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const takenPlace = new Set();
    // let finishedShip = 0;
    // let dir = "hor";
    // const placement = useSelector((state) => state.placement);
    // const takenPlace = placement.takenPlace;
    // const dir = placement.dir;
    // let finishedShip = placement.finishedShip;
     const takenPlace = new Set();
    let finishedShip = 0;
    let dir = "hor";

    // const ship1 = [0,1];
    // ship1.forEach((b) => takenPlace.add(b));


//      // select the item element
// const item = document.querySelector('.shipContainer');
// console.log("item is  is ", item);

// // attach the dragstart event handler
// item.addEventListener('dragstart', dragStart);

// // handle the dragstart

// function dragStart(e) {
//    console.log('drag starts...');
//}
useEffect(() => {
//     const item=document.querySelector('.shipContainer')//To access the div with class slide track
//     console.log("ship  id  is ", item);
//     item.addEventListener('dragstart', dragStart);

// // handle the dragstart

// function dragStart(e) {
//    console.log('drag starts...',  e.target.id);
//    e.dataTransfer.setData('text/plain', e.target.id);
   
//     // e.target.classList.add('hide');
//     setTimeout(() => {
//         e.target.classList.add('hide');
//     }, 0);
// }



const boxes = document.querySelectorAll('.square');
//console.log("boxes is  is ", boxes);

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    
    console.log("darg enter",  e.target.id);
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    if(e.preventDefault) { e.preventDefault(); }
    if(e.stopPropagation) { e.stopPropagation(); }
    e.target.classList.remove('drag-over');
    const start = parseInt(e.target.id);
    console.log("drop end",  e.target.id);

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    console.log("drop id is ", id);
    
    const size =shipShape[id];
    const spots = [];
       let d = 10;
    	for (let i = 0; i < size; i++) {
		let spot = start + i * d;
        spots.push(spot);
    }
    for (let i = 0; i < size; i++) {
		let spot = spots[i];
		if (takenPlace.has(spot) || isOutOfboundary(start, spot, d, 10)) {
            console.log("taken is ",takenPlace );
            // console.log("other stuff ",start, spot, d, size);
			alert("it is an invalid placement");
            return;
		} 
    }
    spots.forEach((b) => takenPlace.add(b));
    finishedShip+=1;

    const draggable = document.getElementById(id);
    //console.log("target is ",  e.target);
    console.log("dragge is ",  draggable);
    // add it to the drop target
    e.target.appendChild(draggable);
    console.log("after append is ",   e.target);
    // display the draggable element
    draggable.classList.remove('hide');
}

  });


	return (
		<>
        <div class = "prepareBoard drop-targets">
            <div class = "boardContainer-left">Drag ships on this board:<Board/></div>
            
            <div class = "boardContainer-right">Your Remain Boats to set
            <div class = "shipBoard"> 
                <Ship dir = {dir} shipId = "s1"/>
                <Ship  dir = {dir} shipId = "s2"/>
                <Ship  dir = {dir} shipId = "s3"/>
                <Ship  dir = {dir} shipId = "s4"/>
                <Ship  dir = {dir} shipId = "s5"/>
            </div>
            </div>
        </div>
        <br/>
        <div class = "boardContainer-middle">
		<Button variant="outline-secondary" onClick={() => {
            if (finishedShip===5){
                dispatch(setBoard({takenPlace:[...takenPlace]}));
         
                localStorage.removeItem(localStorageKey);
                localStorage.removeItem(stateMode);
                
                navigate('/play?mode=user');
            } else{
                alert("your placement is invalid! Finish undone ship or try random placement");
                //alert("your placement is invalid! going to random placement for now");
                //navigate('/play?mode=user')
            }
            //navigate('/play?mode=user')
            }}>Start Game</Button>{' '}
		<Button variant="outline-secondary" onClick={() => {
          alert('Sorry we only have veritical ships for placement for now');
            }}>Rotate Ships</Button>{' '}
		<Button variant="outline-secondary" onClick={() => 
            {
                localStorage.removeItem(localStorageKey);
                localStorage.removeItem(stateMode);
                dispatch(resetBoard());
            navigate('/play?mode=user');

        }
            } >Random placement to start</Button>{' '}
		<Button variant="outline-secondary" onClick={() => window.location.reload()}> reset </Button>
        </div>
        </>
	);
}

