import React from 'react';
import { useNavigate } from 'react-router-dom';
import { localStorageKey, stateMode } from './helpers/constants'
import "./App.css";
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Container, Card, Row, Col, Image, ListGroup } from 'react-bootstrap';
import Img from './battleShip.png'





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
      <div>
      <Card className="text-center">
        <Card.Body>         
          <Card.Text>
            <ListGroup>
              <ListGroup.Item>Welcome to BattleShip!</ListGroup.Item>
              <ListGroup.Item><Image width={500} src = {Img} rounded /></ListGroup.Item>
              <ListGroup.Item>Click the navBar to go to anywhere ;)</ListGroup.Item>
              
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
      

      {/* <Button variant="outline-secondary" onClick={() => navigate('/preparation')}>play with AI</Button>{' '}
      <Button variant="outline-secondary" onClick={() => navigate('/play?mode=single')}>free Play</Button>{' '}
      <Button variant="outline-secondary" onClick={() => navigate('/rule')}>Game Rule</Button>{' '} 
       */}
      </div>
    </>
  );
}

export default App;
