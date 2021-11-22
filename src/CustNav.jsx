import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function CustNav() {
    //const navigate = useNavigate();
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">BattleShip</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/preparation'>Play with AI</Nav.Link>
                        {/* <Nav.Link href='/play?mode=user'>Play with AI</Nav.Link> */}
                        <Nav.Link href='/play?mode=single'>Free Play</Nav.Link>
                        <Nav.Link href='/rule'>Game Rule</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </>
    )
}



