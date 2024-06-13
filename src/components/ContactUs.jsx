import React, { useState } from 'react';
import './Style.css'; // Import custom CSS
import { Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function ContactUs() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [question, setQuestion] = useState('');

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = 'First Name is required';
        }
        if (!lastName.trim()) {
            newErrors.lastName = 'Last Name is required';
        }
        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email is not valid';
        }
        if (!confirmEmail.trim()) {
            newErrors.confirmEmail = 'Confirm Email is required';
        } else if (email !== confirmEmail) {
            newErrors.confirmEmail = 'Emails do not match';
        }
        if (!question.trim()) {
            newErrors.question = 'Question or Comment is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const templateParams = {
                firstName,
                lastName,
                companyName,
                title,
                email,
                question,
                to_name: 'Recipient Name', // Replace with recipient name or remove if not needed
                from_name: `${firstName} ${lastName}`, // Combine first and last name for sender's name
            };

            emailjs.send('service_1iep1ug', 'template_ns93s8n', templateParams, '1vBtAVcD7Pf8_0UUG')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                }, (error) => {
                    console.error('FAILED...', error);
                });
        }
    };

    return (
        <div className="container">
            <div className="row" style={{ backgroundColor: "#E7E7E7" }}>
                <h1 style={{ backgroundColor: "#e17126", color: "white", padding: "5px 10px", margin: 0 }}>Contact Us</h1>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                required
                                style={{ fontSize: "14px" }}
                            />
                            {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                required
                                style={{ fontSize: "14px" }}
                            />
                            {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="companyName"
                                value={companyName}
                                onChange={(event) => setCompanyName(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-Mail Address:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmEmail">Confirm E-Mail Address:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="confirmEmail"
                                value={confirmEmail}
                                onChange={(event) => setConfirmEmail(event.target.value)}
                                required
                            />
                            {errors.confirmEmail && <small className="text-danger">{errors.confirmEmail}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="question">Your Question or Comment:</label>
                            <textarea
                                className="form-control"
                                id="question"
                                value={question}
                                onChange={(event) => setQuestion(event.target.value)}
                                required
                            />
                            {errors.question && <small className="text-danger">{errors.question}</small>}
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ fontSize: "14px", padding: "8px 16px" }}>
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="locations">
                        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Locations</h2>
                        <div className="location">
                            <h3>Houston</h3>
                            <p style={{ fontSize: "14px", marginBottom: "5px" }}>6900 Overmyer Dr.</p>
                            <p style={{ fontSize: "14px", marginBottom: "5px" }}>Houston, TX 77008</p>
                            <p style={{ fontSize: "14px", marginBottom: "5px" }}>713-747-1167</p>
                        </div>
                        <div className="location">
                            <h3>High Point Showroom</h3>
                            <p style={{ fontSize: "14px", marginBottom: "5px" }}>The Atrium - Suite 100,</p>
                            <p style={{ fontSize: "14px", marginBottom: "5px" }}>430 South Main St.</p>
                            <p style={{ fontSize: "14px", marginBottom: "5px" }}>High Point, NC 27260</p>
                        </div>
                        <p className="recall-notice" style={{ fontSize: "14px", fontWeight: "bold", color: "red", marginTop: "20px" }}>
                            Please click here for important safety information about the
                            Cottage Town Bedroom Furniture Recall.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
