import React from 'react';

export default function Result() {
	const queryString = window.location.search;
	console.log(queryString);
	const urlParams = new URLSearchParams(queryString);
	const winner = urlParams.get('winner');
	return <div>Winner is {winner}</div>;
}
