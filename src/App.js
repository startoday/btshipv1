import React from 'react';
import { useNavigate } from 'react-router-dom';
import { localStorageKey, stateMode } from './helpers/constants'
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buttom, Nav, Container } from 'react-bootstrap';





function App() {
  const navigate = useNavigate();
  const value = localStorage.getItem(localStorageKey);
  console.log("value is ", value);
  //maybe not to rerender stuff at home page.
  // if(value !== null && value !== undefined){
  //   const mode = localStorage.getItem(stateMode);
  //   alert("you have a previous state of game, will route to it");
  //   //const site = '/play?mode='+mode+'&&prevData=true';
  //   const site = '/play?mode='+mode;
  //   window.location.href =  site;
  // }
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
