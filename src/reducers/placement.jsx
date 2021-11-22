const defaultPlacement = generateStartplacement;

function generateStartplacement() {
	return {
		dir:"hor",
		takenPlace:new Set(),
        finishedShip:0,
	};
}

function flipDir(dir){
    return "ver";
    if (dir === "hor"){
        dir = "ver";
    } else{
        dir = "hor";
    }
    return dir;
}
const placement = (placement = generateStartplacement(), action) => {
	// const val = localStorage.getItem(localStorageKey);
	// if(val!==null && val!==undefined){
	// 	game=  JSON.parse(localStorage.getItem(localStorageKey));
	// 	//console.log("in side game state is ", game);
	// }
	switch (action.type) {
        case 'rotate':
            placement.dir =flipDir( placement.dir);
			// const  res = generateDefaultGameSate(rowLength)
			// localStorage.setItem(localStorageKey, JSON.stringify(res));

			return {...placement};
		case 'resetPlacement':
			// const  res = generateDefaultGameSate(rowLength)
			// localStorage.setItem(localStorageKey, JSON.stringify(res));
			return generateStartplacement();
		default:
			//localStorage.setItem(localStorageKey, JSON.stringify(game));
			return placement;
	}
};
export default placement;
