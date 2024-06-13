import React, { useState } from 'react';
import './Styles.css'; 
import emailjs from 'emailjs-com';

const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requiredProduct: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
    onSubmit(formData); 
  };

  const sendEmail = (formData) => {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      requiredProduct: formData.requiredProduct
    };

    emailjs.send('service_1iep1ug', 'template_46rn9ze', templateParams, '1vBtAVcD7Pf8_0UUG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.error('FAILED...', error);
      });
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Request Product</h5>
            {/* Removed close button */}
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="Phone" required />
              </div>
              <div className="form-group">
                <select name="requiredProduct" value={formData.requiredProduct} onChange={handleChange} className="form-control" required>
                  <option value="">Select your Interest</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Dining">Dining</option>
                  <option value="Upholstery">Upholstery</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
