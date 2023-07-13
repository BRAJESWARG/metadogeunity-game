import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// https://static.wixstatic.com/shapes/ddd9af05961a402680f77cc4c129ba2f.svg

const Navpoint = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiar">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src='https://static.wixstatic.com/shapes/ddd9af05961a402680f77cc4c129ba2f.svg' alt='Logo' height='60px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                    </Nav>
                    <Nav>
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Portfolio</Nav.Link>
                        <Nav.Link href="#">News</Nav.Link>
                        <Button
                            // variant="primary"
                            // type="submit"
                        >
                            Contact Us
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navpoint;