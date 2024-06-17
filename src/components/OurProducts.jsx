import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const OurProducts = ({ message }) => {
  const [show, setShow] = useState(!!message);

  const handleClose = () => setShow(false);

  return (
    <div className="container">
      <h1>Our Products</h1>
      <p>Browse our product categories and select a product.</p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Opps!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OurProducts;
