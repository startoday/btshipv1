import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Prepare() {
	const navigate = useNavigate();
	
	return (
		<>
        <div>currently only start game-randomGen is implmented </div>
		<button  onClick={() => navigate('/play?mode=user')}>Start Game</button>
		<button >Rotate Your Ships</button>
		<button >Random Placement</button>

		</>
	);
}
