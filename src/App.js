import React from 'react';
import { useNavigate } from 'react-router-dom';
import { localStorageKey } from './helpers/constants'
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buttom, Nav, Container } from 'react-bootstrap';




function App() {
  const navigate = useNavigate();
  const value = localStorage.getItem(localStorageKey);
  return (
    <>
      <div>Welcome to BattleShip!</div>
      <button onClick={() => navigate('/preparation')}>play with AI</button>{' '}
      <button onClick={() => navigate('/play?mode=single')}>free Play</button>{' '}
      <button onClick={() => navigate('/rule')}>Game Rule</button>{' '}
    </>
  );
}

export default App;
