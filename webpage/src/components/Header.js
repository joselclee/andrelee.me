import React from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <div class="top">
        <Navbar sticky="top" bg="secondary">
          <Container>
          <Navbar.Brand href="top">andrelee.dev</Navbar.Brand>
            <NavLink link = "/" >Home</NavLink>
            <NavLink link ="/games">Projects</NavLink>
            </Container>
        </Navbar>
        <p>
        I'm Andre, a software engineer from Los Angeles.
    </p>
    </div>
  )
}

export default Header