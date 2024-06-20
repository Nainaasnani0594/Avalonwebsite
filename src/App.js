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
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setFormSubmitted(false);
    setShowProductForm(true);
    setSelectedProduct(product);
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
    setMessage('');
    navigate('/'); // Redirect to Home page when form is closed
  };

  return (
    <>
      <div className='outerContainer'>
        <Header onProductClick={handleProductClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/upholstery" element={<Upholstery />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/" element={<Home message={message} />} />
        </Routes>
      </div>
      {showProductForm && (
        <ProductForm onSubmit={handleFormSubmit} onClose={handleCloseForm} selectedProduct={selectedProduct} />
      )}
    </>
  );
}

export default App;
