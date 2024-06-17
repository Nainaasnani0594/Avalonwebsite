import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload'; // Import LazyLoad
import one from '../images/u1.jpg';
import two from '../images/u7.jpg';
import three from '../images/u3.jpg';
import four from '../images/u4.jpg';
import five from '../images/u5.jpg';
import six from '../images/u7.jpg';
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
                            <Col xs={6} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image
                                        src={one}
                                        alt="Upholstery Furniture"
                                        className="img-fluid"
                                        onClick={() => handleImageClick(one)}
                                    />
                                </LazyLoad>
                            </Col>
                            <Col xs={6} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image
                                        src={two}
                                        alt="Upholstery Furniture"
                                        className="img-fluid"
                                        onClick={() => handleImageClick(two)}
                                    />
                                </LazyLoad>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image
                                        src={three}
                                        alt="Upholstery Furniture"
                                        className="img-fluid"
                                        onClick={() => handleImageClick(three)}
                                    />
                                </LazyLoad>
                            </Col>
                            <Col xs={6} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image
                                        src={four}
                                        alt="Upholstery Furniture"
                                        className="img-fluid"
                                        onClick={() => handleImageClick(four)}
                                    />
                                </LazyLoad>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image
                                        src={five}
                                        alt="Upholstery Furniture"
                                        className="img-fluid"
                                        onClick={() => handleImageClick(five)}
                                    />
                                </LazyLoad>
                            </Col>
                            <Col xs={6} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image
                                        src={six}
                                        alt="Upholstery Furniture"
                                        className="img-fluid"
                                        onClick={() => handleImageClick(six)}
                                    />
                                </LazyLoad>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        {/* Content for the second half */}
                        <Row>
                            <Col xs={12} className="selected-image-col" style={{ marginTop: '2px' }}>
                                {/* Display the selected image */}
                                {selectedImage && (
                                    <Image
                                        src={selectedImage}
                                        alt="Selected Image"
                                        className="img-fluid selected-image"
                                    />
                                )}
                            </Col>
                        </Row>
                        <Row className="small-text">
                            <Col xs={12} style={{ fontSize: '13px', color: '#762a2b', marginTop: '35px' }}>
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
