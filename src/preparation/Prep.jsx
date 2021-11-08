import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Prepare() {
	const navigate = useNavigate();
	
	return (
		<>
		<button  onClick={() => navigate('/play?mode=user')}>Start Game</button>
		<button >Rotate Your Ships</button>
		<button >Random Place</button>
	
		</>
	);
}
