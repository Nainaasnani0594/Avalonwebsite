import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import Bedroom from './components/Bedroom';
import Dining from './components/Dining'; // Import the Dining component if it exists
import ContactUs from './components/ContactUs';
import Upholstery from './components/Upholstery';
function App() {
  return (
    <>
    <div className='outerContainer'>
    <Router>
      <div className="container">
        <div className="custom-header">New Age Recall Information</div>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourproducts/bedroom" element={<Bedroom />} />
        <Route path="/ourproducts/dining" element={<Dining />} /> 
        <Route path="/ourproducts/upholstery" element={<Upholstery />} /> 
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
