import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload'; // Import LazyLoad
import one from '../images/home/D118.jpeg';
import two from '../images/home/B2404.jpeg';
import three from '../images/home/B362.jpeg';
import four from '../images/home/D253.jpeg';
import five from '../images/home/D162.jpeg';
import six from '../images/home/B1550.jpeg';
import seven from '../images/home/B518.jpeg';
import './Styles.css'; // Import custom CSS

function AboutUs() {
    const [selectedImage, setSelectedImage] = useState(seven); // Initialize with seven image

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    return (
        <>
            <Container className='my-container-about'>
                <Row>
                    <Col xs={6} style={{ marginTop: '5px' }}>
                        {/* Content for the first half */}
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(one)}>
                                <div className="image-container">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={one} alt="About Us" className="img-fluid" />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(two)}>
                                <div className="image-container">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={two} alt="About Us" className="img-fluid" />
                                    </LazyLoad>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(three)}>
                                <div className="image-container">
                                    <LazyLoad height={190} offset={100}>
                                        <Image src={three} alt="About Us" className="img-fluid" />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(four)}>
                                <div className="image-container">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={four} alt="About Us" className="img-fluid" />
                                    </LazyLoad>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(five)}>
                                <div className="image-container">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={five} alt="About Us" className="img-fluid" />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(six)}>
                                <div className="image-container">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={six} alt="About Us" className="img-fluid" />
                                    </LazyLoad>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        {/* Content for the second half */}
                        <Row>
                            <Col xs={12} className="selected-image-col" style={{ marginTop: '-3px' }}>
                                {/* Display the selected image */}
                                {selectedImage && (
                                    <Image src={selectedImage} alt="Selected Image" className="img-fluid selected-image" />
                                )}
                            </Col>
                        </Row>
                        <Row className="small-text">
                            <Col xs={12} style={{
                                fontSize: '13px',
                                color: '#762a2b',
                                marginTop: '-3px',
                                left: '50%',
                                top: '20px',
                            }}>
                                <h3 style={{ color: "#E17126" }}>About Us</h3>
                                <p style={{ color: "#762A2B" }}>With style, quality and value at its core, Avalon Furniture is well positioned to deliver on the aspirations of discerning consumers. Our tasteful, sophisticated designs, with attention to detail found only above our price point, delivers incomparable value.</p>
                                <p style={{ color: "#762A2B" }}>Retailers carrying Avalon Furniture do so with value and quality in mind for their consumers. Our products proudly carry a manufacturers warranty to our retailers (see your local Avalon retailer for more details) to ensure satisfaction.</p>
                                <p style={{ color: "#762A2B" }}>Avalon Furniture sources its products from high quality factories in Southeast Asia and offers its retailers purchasing options by full container; from our well-stocked mixing warehouse in Vietnam; or from our U.S. Warehouse, located in Houston, Texas.</p>
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

export default AboutUs;
