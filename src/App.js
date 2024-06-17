import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import Bedroom from './components/Bedroom';
import Dining from './components/Dining';
import ContactUs from './components/ContactUs';
import Upholstery from './components/Upholstery';
import ProductForm from './components/ProductForm';
import OurProducts from './components/OurProducts';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [showProductForm, setShowProductForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (showProductForm) {
      setSelectedProduct(location.pathname);
    }
  }, [showProductForm, location]);

  const handleProductsClick = () => {
    setFormSubmitted(false);
    setShowProductForm(true);
  };

  const handleFormSubmit = (formData) => {
    console.log(formData);
    setFormSubmitted(true);
    setShowProductForm(false);
    setMessage('');

    // Navigate to the selected product page
    navigate(`/${formData.requiredProduct.toLowerCase()}`);
  };

  const handleCloseForm = () => {
    setShowProductForm(false);
    if (!formSubmitted) {
      setMessage('Please select any product and fill out the form first.');
      navigate('/ourproducts'); // Redirect to OurProducts page
    } else {
      setMessage('');
      navigate(selectedProduct); // Redirect to the previously selected product page
    }
  };

  return (
    <>
      <div className='outerContainer'>
        <Header onProductClick={handleProductsClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/upholstery" element={<Upholstery />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/ourproducts" element={<OurProducts message={message} />} />
        </Routes>
      </div>
      {showProductForm && (
        <ProductForm onSubmit={handleFormSubmit} onClose={handleCloseForm} selectedProduct={selectedProduct} />
      )}
    </>
  );
}

export default App;
