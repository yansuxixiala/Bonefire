import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../pages/CampIndex.css';

class MyNav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md" fixed="top" className="text-center">
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0 col-md-2 offset-md-2">
            <Nav.Link as={Link} to="/North" style={{ fontSize: '20px' }}>推薦露營區</Nav.Link>
          </Nav>
          <Nav className="me-auto mb-2 mb-lg-0 col-md-2">
            <Nav.Link as={Link} to="/food1" style={{ fontSize: '20px' }}>精選菜單</Nav.Link>
          </Nav>
          <Nav className="me-auto mb-2 mb-lg-0 col-md-2">
            <Nav.Link as={Link} to="/appointment" style={{ fontSize: '20px' }}>線上預約</Nav.Link>
          </Nav>
          <Nav className="me-auto mb-2 mb-lg-0 col-md-2">
            <Nav.Link as={Link} to="/product" style={{ fontSize: '20px' }}>周邊購買</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNav;
