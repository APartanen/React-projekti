import React from 'react';
import {Navbar, NavbarBrand, Nav, NavLink} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainNav extends React.Component {
  render() {
    return (

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">Etusivu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#asiakkaat">Asiakkaamme rekrytoivat</Nav.Link>
            <Nav.Link href="#lomakeinfo">Suunnittele rekrytointi ja jätä ilmoitus</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default MainNav;
