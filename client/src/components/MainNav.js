import React from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "react-bootstrap";
import logo from '../logo.jpg';

class MainNav extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="mainnav">
        <Navbar.Brand href="/">Etusivu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="asiakkaat">Asiakkaamme rekrytoivat</Nav.Link>
            <Nav.Link href="lomakeinfo">Laadi perehdytysopas</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item><img alt="" src={logo} height="80px" /></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNav;
