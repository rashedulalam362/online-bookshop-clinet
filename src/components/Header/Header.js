import React from 'react';
import {  Nav, Navbar, } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import icon from '../../icons/Logo.png'
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"> <img src={icon} alt="" style={{width:150, marginTop: -7}}/> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
      <Nav.Link as={Link} to="/addBook">Admin</Nav.Link>
      <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
      <Nav.Link as={Link}  to="/login" >  Login</Nav.Link>
      <Nav.Link as={Link} to="/manageOrder">ManageOrder</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    );
};

export default Header;