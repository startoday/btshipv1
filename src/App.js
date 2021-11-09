import React from 'react';
import { useNavigate } from 'react-router-dom';
import{localStorageKey} from './helpers/constants'
function App() {
  const navigate = useNavigate();
  
  const value  = localStorage.getItem(localStorageKey);
  console.log("v is ", value);
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
