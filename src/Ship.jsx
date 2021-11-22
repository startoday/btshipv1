import React from 'react';
import Square from './Square';
import {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

const shipShape = {
s1:2,
s2:3,
s3:3,
s4:4,
s5:5,
}

export default function Ship(prop) {

    //     const placement = useSelector((state) => state.placement);
    // const dir = placement.dir;
    const shipId = prop.shipId;
    console.log(shipId);
    let len = shipShape[shipId];
    //let len = parseInt(prop.len);
    console.log("len is ", len);
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(
				<div class="square shipColor" >
					{/* <Square num = {3}/>  */}
				</div>
			);
	}

//         // select the item element
// const item = document.querySelector('.shipContainer');
// console.log("item is  is ", item);

// // attach the dragstart event handler
// item.addEventListener('dragstart', dragStart);

// // handle the dragstart

// function dragStart(e) {
//    console.log('drag starts...');
// }
useEffect(() => {
    const ships = document.querySelectorAll('.shipContainer');
    ships.forEach(ship => ship.addEventListener('dragstart', dragStart))
    // const item=document.querySelector('.shipContainer')//To access the div with class slide track
    // console.log("ship  id  is ", item);
    // item.addEventListener('dragstart', dragStart);

// handle the dragstart

function dragStart(e) {
   console.log('drag starts...',  e.target.id);
   e.dataTransfer.setData('text/plain', e.target.id);
   
    // e.target.classList.add('hide');
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

});
// const dir = prop.dir;
// const dir = "ver";
// const cls= "shipContainer "+dir;
const cls= "shipContainer ";
    return (
        <div class = {cls} id ={shipId} draggable="true" >
            {arr}
        </div>
    )
}
