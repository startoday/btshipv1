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

export const setBoard = (taken) => {
	return {
		type: 'setBoard',
		taken: taken
	};
};
