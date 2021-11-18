import { getRandomInt } from '../helpers/helperFunction';
import { localStorageKey } from '../helpers/constants'


const rowLength = 10;
const ships = [ 2, 3, 3, 4, 5 ];

function generateBoard(rows) {
	let arr = [];
	for (let i = 0; i < rows; i++) {
		arr.push(new Array(rows).fill(0));
	}
	return arr;
}
function isOutOfboundary(start, spot, dir, rowLength) {
	if (spot >= 100) {
		return true;
	}
	if (dir === 1) {
		return Math.floor(start / rowLength) !== Math.floor(spot / rowLength);
	} else {
		return start % rowLength !== spot % rowLength;
	}
}
// dir is 1 as horizental and 10 as vertical
function generateBoat(size, dir, takenPlace, rowLength) {
	let start = getRandomInt(100);
	let arr = [];
	for (let i = 0; i < size; i++) {
		let spot = start + i * dir;
		if (takenPlace.has(spot) || isOutOfboundary(start, spot, dir, 10)) {
			return generateBoat(size, dir, takenPlace, rowLength);
		}
		arr.push(spot);
	}
	return arr;
}
function generateBoats() {
	const takenPlace = new Set();
	let dir;
	ships.forEach((shipSize) => {
		dir = 1 + getRandomInt(2) * 9;
		const boat = generateBoat(shipSize, dir, takenPlace);
		boat.forEach((b) => takenPlace.add(b));
	});

	return [...takenPlace];
}

function generateDefaultGameSate(rowLength, userBoats= generateBoats()) {
	const board1 = generateBoard(rowLength);
	const board2 = generateBoard(rowLength);
	console.log("in generate default game state, userboat is ", userBoats)
	userBoats.forEach((v) => {
		board1[Math.floor(v / rowLength)][v % rowLength] = 2;
	});
	const computerBoats = generateBoats();
	computerBoats.forEach((v) => {
		board2[Math.floor(v / rowLength)][v % rowLength] = 2;
	});
	return {
		board1: board1,
		board2: board2,
		userBoats: userBoats,
		computerBoats: computerBoats
	};
}
const defaultGameState = generateDefaultGameSate(rowLength);

function validateFire(board, i, j) {
	return board[i][j] === 0 || board[i][j] === 2;
}

function findAValidMove(board) {
	let i = getRandomInt(10);
	let j = getRandomInt(10);
	while (!validateFire(board, i, j)) {
		i = getRandomInt(10);
		j = getRandomInt(10);
	}
	console.log("find a valid move", i, j);
	return { i, j };
}

const gameState = (game = defaultGameState, action) => {
	const val = localStorage.getItem(localStorageKey);
	if(val!==null && val!==undefined){
		game=  JSON.parse(localStorage.getItem(localStorageKey));
		console.log("in side game state is ", game);
	} 
	switch (action.type) {
		case 'fire':
			// indicating a random fire, we want it to be always valid
			if( action.i === -1) {
				const {i,  j} = findAValidMove(game.board1);
				action.i = i;
				action.j = j;
				console.log("action i, j is",i, j, action.i, action.j);
			}
			else if (!validateFire(game.board1, action.i, action.j)) {
				alert("You can't refire a place already been fired, please choose a different place");
				return game;
			}
			//game.userBoats.delete(action.i * 10 + action.j);
			game.userBoats = game.userBoats.filter(item=>
				item !== action.i * 10 + action.j
			)
			game.board1[action.i][action.j] = game.board1[action.i][action.j] - 1;
			if (game.userBoats.length === 0) {
				alert('Game End!');
				window.location.href = '/result?winner=user';
			}
			if (action.player === 'user') {
				// TODO: improve computer move with better choice,
				// such as when a hit comes, only hit around!
				const { i, j } = findAValidMove(game.board2);
				//game.computerBoats.delete(i * 10 + j);
				game.computerBoats = game.computerBoats.filter(item=>
					item !== i * 10 + j
				)
				game.board2[i][j] = game.board2[i][j] - 1;
				if (game.computerBoats.length === 0) {
					alert('Game End!');
					window.location.href = '/result?winner=pc';
				}
			}
			localStorage.setItem(localStorageKey, JSON.stringify(game));
			return { ...game };
		case 'resetBoard':
			const  res = generateDefaultGameSate(rowLength)
			localStorage.setItem(localStorageKey, JSON.stringify(res));
			return res;
		case 'setBoard':
			console.log("set board takenplace is ", action.taken["takenPlace"])
			const  res2 =generateDefaultGameSate(rowLength, action.taken["takenPlace"]);
			
			localStorage.setItem(localStorageKey, JSON.stringify(res2));
				return res2;
		default:
			//localStorage.setItem(localStorageKey, JSON.stringify(game));
			return game;
	}
};
export default gameState;
