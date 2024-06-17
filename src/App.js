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
import ProductForm from './components/ProductForm'; // Import ProductForm component

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [showProductForm, setShowProductForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const [prevUrl, setPrevUrl] = useState(""); // State to keep track of previous URL
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (showProductForm) {
      setPrevUrl(location.pathname);
    }
  }, [showProductForm, location]);

  const handleProductsClick = () => {
    if (!formSubmitted) {
      setShowProductForm(true);
    }
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    setFormSubmitted(true); // Mark form as submitted
    setShowProductForm(false); // Close the modal after submission
  };

  const handleCloseForm = () => {
    setShowProductForm(false); // Close the modal
    if (prevUrl) {
      navigate(prevUrl); // Navigate back to the previous URL
    }
  };

  return (
    <>
      <div className='outerContainer'>
        <Header onProductClick={handleProductsClick} />
        <Routes>
          <Route path="/Avalonwebsite" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/upholstery" element={<Upholstery />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
      {showProductForm && (
        <ProductForm onSubmit={handleFormSubmit} onClose={handleCloseForm} />
      )}
    </>
  );
}

export default App;
