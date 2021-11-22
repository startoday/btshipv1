import React from 'react';
import Square from './Square';
const shipId = {
s1:2,
s2:3,
s3:3,
s4:4,
s5:5,
}

export default function Ship(prop) {
    let len = parseInt(prop.len);
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(
				<div >
					<Square num = {3}/> 
				</div>
			);
	}

    // select the item element
const item = document.querySelector('.shipContainer');

// attach the dragstart event handler
item.addEventListener('dragstart', dragStart);

// handle the dragstart

function dragStart(e) {
   console.log('drag starts...');
}
    return (
        <div class = "shipContainer" draggable="true" >
            {arr}
        </div>
    )
}
