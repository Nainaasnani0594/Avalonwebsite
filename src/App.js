import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  const [showProductForm, setShowProductForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const handleProductsClick = () => {
    if (!formSubmitted) {
      setShowProductForm(true);
    }
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    setFormSubmitted(true); // Mark form as submitted
  };

  return (
    <>
      <div className='outerContainer'>
        <Router>
          <Header onProductClick={handleProductsClick} />
          <Routes>
            <Route path="/Avalonwebsite" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/bedroom" element={<Bedroom />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/upholstery" element={<Upholstery />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>
      {showProductForm && !formSubmitted && <ProductForm onSubmit={handleFormSubmit} />}
    </>
  );
}

export default App;
