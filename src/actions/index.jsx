export const fire = (player, i, j) => {
	return {
		type: 'fire',
		player: player,
		i: i,
		j: j
	};
};

export const resetBoard = () => {
	return {
		type: 'resetBoard'
	};
};

export const resetPlacement = () => {
	return {
		type: 'resetPlacement'
	};
};

export const rotate = () => {
	return {
		type: 'rotate'
	};
}; 
export const setBoard = (taken) => {
	return {
		type: 'setBoard',
		taken: taken
	};
};
export const closeLocalHint = () => {
	return {
		type: 'closeLocalHint',
	};
};

export const 
closeRotateHintWindow = () => {
	return {
		type: 'closeRotateHintWindow',
	};
};
