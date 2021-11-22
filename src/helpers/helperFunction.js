export function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}


export function isOutOfboundary(start, spot, dir, rowLength=10) {
	if (spot >= 100) {
		return true;
	}
	if (dir === 1) {
		return Math.floor(start / rowLength) !== Math.floor(spot / rowLength);
	} else {
		return start % rowLength !== spot % rowLength;
	}
}