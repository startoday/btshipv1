import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Prep from './preparation/Prep';
import Play from './play/Play';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
		<>
				<div>Welcome to BattleShip!</div>
                <button onClick={() => navigate('/preparation')}>play with AI</button>
                <button onClick={() => navigate('/play?mode=single')}>free Play</button>
                <button onClick={() => navigate('/rule')}>Game Rule</button>
</>
  );
}

export default App;
