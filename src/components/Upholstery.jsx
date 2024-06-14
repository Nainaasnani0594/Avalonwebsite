import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import one from '../images/upholstery/u1.jpg';
import two from '../images/upholstery/u7.jpg';
import three from '../images/upholstery/u3.jpg';
import four from '../images/upholstery/u4.jpg';
import five from '../images/upholstery/u5.jpg';
import six from '../images/upholstery/u7.jpg';
import './Styles.css'; // Import custom CSS

function Upholstery() {
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
                                <Image src={one} alt="Upholstery Furniture" className="img-fluid" />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(two)} className="image-container">
                                <Image src={two} alt="Upholstery Furniture" className="img-fluid" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(three)} className="image-container">
                                <Image src={three} alt="Upholstery Furniture" className="img-fluid" />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(four)} className="image-container">
                                <Image src={four} alt="Upholstery Furniture" className="img-fluid" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(five)} className="image-container">
                                <Image src={five} alt="Upholstery Furniture" className="img-fluid" />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(six)} className="image-container">
                                <Image src={six} alt="Upholstery Furniture" className="img-fluid" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        {/* Content for the second half */}
                        <Row>
                            <Col xs={12} className="selected-image-col"style={{marginTop:'2px'}}>
                                {/* Display the selected image */}
                                {selectedImage && <Image src={selectedImage} alt="Selected Image" className="img-fluid selected-image" />}
                            </Col>
                        </Row>
                        <Row className="small-text">
                            <Col xs={12} className="text-container" style={{
                                fontSize: '13px',
                                color: '#762a2b',
                                marginTop: '25px',
                                left: '50%',
                                
                            }}>
                                <h3 style={{ color: "#E17126" }}>Upholstery</h3>
                                <p>Avalon Upholstery is Houston, Texas based upholstery manufacturer, designing and building upholstery for both residential and commercial market.</p>
                                <p>Avalon Upholstery is part of the Dickson Furniture and Avalon Furniture family, taking pride in manufacturing high quality product at exceptional value.</p>
                                <p>Avalon Upholstery is part of the Dickson Furniture and Avalon Furniture family, taking pride in manufacturing high quality product at exceptional value.</p>
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

export default Upholstery;
