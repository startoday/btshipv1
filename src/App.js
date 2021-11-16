import React from 'react';
import { useNavigate } from 'react-router-dom';
import { localStorageKey } from './helpers/constants'
import "./App.css";

import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Container, Card, Row, Col, Image } from 'react-bootstrap';
import Img from './battleShip.png'




function App() {
  const navigate = useNavigate();
  const value = localStorage.getItem(localStorageKey);
  return (
    <>
      <div>
      <Card className="text-left">
        <Card.Body>
          <Card.Title>Welcome to BattleShip!</Card.Title>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} sm={4} md={4}>
                <Image width={250} src = {Img} rounded />
              </Col>
            </Row>
          </Container>
          <Card.Text>
            Click the navBar to go to anywhere ;)
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
