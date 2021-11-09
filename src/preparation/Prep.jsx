import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Prep() {
	const navigate = useNavigate();
	return (
		<>
        <div>currently only start game-randomGen is implemented </div>
		<button  onClick={() => navigate('/play?mode=user')}>Start Game</button>
		<button >Rotate Your Ships</button>
		<button onClick={() => navigate('/play?mode=user')} >Random Placement</button>

		</>
	);
}
