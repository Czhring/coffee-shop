import React from 'react';
import {Link}  from 'react-router-dom';
import  Navbar from 'react-bootstrap/Navbar';
import { Nav} from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import './Header.css'
function Header () {
    return (
<div className='nav-bar'>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className="nav-bar">
  <Link to ='/'><h1>Czhring's Coffee</h1></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Link to ='/hot'><h2>Hot Drink</h2></Link >
        <Link to ='/iced'><h2>Cold Drink</h2></Link >
        <Link to ='/cart'><h2>My Cart</h2></Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
)
}


export default Header