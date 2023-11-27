import React from 'react';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    // <div class="top">
    //     <Navbar sticky="top" bg="secondary" data-bs-theme="dark">
    //       <Container>
    //       <Navbar.Brand href="top">andrelee.dev</Navbar.Brand>
    //         </Container>
    //     </Navbar>
    //     <p>
    //     I'm Andre, a software engineer from Los Angeles.
    //     </p>
    // </div>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="home">andrelee.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#https://www.linkedin.com/in/jose-lee-748989183/">
              LinkedIn
            </Nav.Link>
            <Nav.Link href="#https://github.com/joselclee">
              Github
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header