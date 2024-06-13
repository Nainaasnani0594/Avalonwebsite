import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import one from '../images/bedroom/B193.jpg';
import two from '../images/bedroom/B226.jpg';
import three from '../images/bedroom/B566.jpg';
import four from '../images/bedroom/B961.jpg';
import five from '../images/bedroom/B1209.jpg';
import six from '../images/bedroom/B1495.jpg';
import './Styles.css'; // Import custom CSS

function Bedroom() {
    const [selectedImage, setSelectedImage] = useState(one);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    return (
        <>
            <Container className='my-container-about'>
                <Row>
                    <Col xs={6}>
                        {/* Content for the first half */}
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(one)} className="image-container">
                                <Image src={one} alt="Bedroom Furniture" className="img-fluid" />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(two)} className="image-container">
                                <Image src={two} alt="Bedroom Furniture" className="img-fluid" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(three)} className="image-container">
                                <Image src={three} alt="Bedroom Furniture" className="img-fluid" />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(four)} className="image-container">
                                <Image src={four} alt="Bedroom Furniture" className="img-fluid" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(five)} className="image-container">
                                <Image src={five} alt="Bedroom Furniture" className="img-fluid" />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(six)} className="image-container">
                                <Image src={six} alt="Bedroom Furniture" className="img-fluid" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        {/* Content for the second half */}
                        <Row>
                            <Col xs={12}>
                                {/* Display the selected image */}
                                {selectedImage && <Image src={selectedImage} alt="Selected Image" className="img-fluid" style={{ width: '100%', height: "80%" }} />}
                            </Col>
                        </Row>
                        <Row className="small-text">
                            <Col xs={12} style={{
                                fontSize: '13px',
                                color: '#762a2b',
                                left: '50%',
                                top: '20px',
                            }}>
                                <h3 style={{ color: "#E17126" }}>Bedroom</h3>
                                <p>Our master bedroom line is replete with exciting style, innovation, and function.</p>
                                <p>Impressive scale and focus on detail is what distinguishes an Avalon bedroom design. Quality materials and craftsmanship, along with natural, yet distinctive color and finish, provide a canvas for the flowing curves and lines of our storage pieces and beds.</p>
                                <p>Whether it is the elegant draw of rich mahogany, the beautiful clarity of American cherry, or an on-trend mirrored design or painted Regency finish; our master bedroom offering delivers on your highest aspiration.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className="my-container-about">
                <Row className="mb-3 my-row">
                    <div className='three'></div>
                </Row>
            </Container>
            <Container className="my-container-about">
                <Row className="mb-3 my-row">
                    <div className='five'></div>
                </Row>
            </Container>
        </>
    );
}
export default Bedroom;