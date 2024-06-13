// Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Styles.css'; // Import custom CSS
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; // Import NavDropdown
import logo1 from '../images/LOGO.png';
import ProductForm from './ProductForm'; // Import PopupForm component

export const Header = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleProductsClick = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    // After form submission, navigate to the product page
    navigate(`/ourproducts/${selectedProduct.toLowerCase()}`);
    // Close the popup form
    setShowPopup(false);
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
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
              <NavDropdown title="Our Products" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => handleProductsClick('Bedroom')}>Bedroom</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleProductsClick('Dining')}>Dining</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleProductsClick('Upholstery')}>Upholstery</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showPopup && <ProductForm onSubmit={handleFormSubmit} />}
    </>
  );
};



