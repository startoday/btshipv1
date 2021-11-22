import React from 'react';
import{rowLength} from './helpers/constants';
import Square from './Square';

export default function Board(props) {
    const  board = new Array(rowLength);
    for (let i = 0; i < rowLength; i++) {
		for (let j = 0; j < rowLength; j++) {
			board.push(
				<div class="square" id ={i*10 +j }>
				
					{/* <Square/>  */}
				</div>
			);
		}
	}
    return (
        <div class ="container">
            {board}
        </div>
    )
}
