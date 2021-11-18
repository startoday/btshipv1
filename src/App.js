import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { localStorageKey, stateMode } from './helpers/constants'
import "./App.css";
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Container, Card, Row, Col, Image, ListGroup } from 'react-bootstrap';
import Img from './battleShip.png'
import Popup from "./Popup"

function App() {
  const navigate = useNavigate();
  const value = localStorage.getItem(localStorageKey);
  console.log("value is ", value);
  let site = "/"
  let containsUnfinished = false;
  //maybe not to rerender stuff at home page.
  if(value !== null && value !== undefined){
    const mode = JSON.parse(localStorage.getItem(stateMode));
    containsUnfinished = true;
    console.log("mode is", mode);
    //const site = '/play?mode='+mode+'&&prevData=true';
    site = '/play?mode='+mode;
    //window.location.href =  site;
  }

  const [isOpen, setIsOpen] = useState(false);

  const cleanStorage = () => {
    localStorage.removeItem(localStorageKey);
    console.log("local storage cleaned")
    setIsOpen(!isOpen);
  }
  return (
    <>
      {containsUnfinished && <Popup
        content={<>
          <b>Detected unfinished game!</b>
          <p>You have unfinished game state, click button to re-enter or click close to ignore.</p>
          <button class = "goprev" onClick={() => navigate(site)}>Go to previous game</button>
        </>} handleClose={cleanStorage}
      />}
      <div>
        <Card className="text-center">
          <Card.Body>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>Welcome to BattleShip!</ListGroup.Item>
                <ListGroup.Item><Image width={500} src={Img} rounded /></ListGroup.Item>
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
