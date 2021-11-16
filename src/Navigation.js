import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () =>{
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/preparation'>play with AI</Nav.Link>
                            <Nav.Link href='/play?mode=single'>free Play</Nav.Link>
                            <Nav.Link href='/rule'>Game Rule</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
