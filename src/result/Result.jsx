import React from 'react';
import{localStorageKey} from '../helpers/constants'
import './Result.css';

export default function Result() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
    const winner = urlParams.get('winner');
    localStorage.removeItem(localStorageKey);
	return <div class ="result">Winner is {winner}!!!</div>;
}
