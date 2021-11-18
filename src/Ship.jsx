import React from 'react';
import Square from './Square';

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
    return (
        <div class = "shipContainer" draggable="true" >
            {arr}
        </div>
    )
}
