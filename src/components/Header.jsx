import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css'; // Import custom CSS
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; // Import NavDropdown
import logo1 from '../images/LOGO.png';

export const Header = ({ onProductClick }) => {
  const handleClick = () => {
    onProductClick();
  };

  return (
    <>
      <Navbar bg="light" expand="lg" style={{ marginTop: "-10px" }}>
        <Container style={{ marginTop: "-10px" }}>
          <Navbar.Brand as={Link} to="/">
            <img src={logo1} width="200" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
              <NavDropdown title="Our Products" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleClick} as={Link} to="/bedroom">Bedroom</NavDropdown.Item>
                <NavDropdown.Item onClick={handleClick} as={Link} to="/dining">Dining</NavDropdown.Item>
                <NavDropdown.Item onClick={handleClick} as={Link} to="/upholstery">Upholstery</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
