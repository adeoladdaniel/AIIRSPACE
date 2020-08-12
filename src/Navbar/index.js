import React from 'react';
import '../App.scss';
import { Link} from 'react-router-dom'
import {  Navbar, NavDropdown, Form, FormControl,Button,Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar className="nav_color" expand="lg">
    <Navbar.Brand href="#home" className="logo_img"><img className="logo-air" src="./img/Group 10.png"/></Navbar.Brand>
    <Navbar.Toggle className="tog but_tog"  aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto nav-link">
       
          <Link className="home_link" to="/home">
          Home
          </Link>
       
       
          <Link className="home_link" to="/about">
          About
          </Link>
       
        
          <Link className="home_link" to="/contact">
          Contact
          </Link>
         
        
      </Nav>
      <Form inline>
        <Link to="/quote">
        <Button className="nav_but">Get A Quote</Button>
        </Link>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Navigation;
