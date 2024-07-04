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
    const [showFullText, setShowFullText] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };
    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const updateMedia = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    return (
        <>
            <Container className='my-container-about'>
                <Row>
                    <Col xs={6}>
                        {/* Content for the first half */}
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(one)}>
                                <div loading="lazy" className="image-container fixed-height">
                                        <Image src={one} alt="About Us" className="img-fluid fixed-image" />
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(two)}>
                                <div loading="lazy" className="image-container fixed-height">
                                        <Image src={two} alt="About Us" className="img-fluid fixed-image" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(three)}>
                                <div loading="lazy" className="image-container fixed-height">
                                        <Image src={three} alt="About Us" className="img-fluid fixed-image" />
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(four)}>
                                <div loading="lazy" className="image-container fixed-height">
                                        <Image src={four} alt="About Us" className="img-fluid fixed-image" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(five)}>
                                <div loading="lazy" className="image-container fixed-height">
                                        <Image src={five} alt="About Us" className="img-fluid fixed-image" />
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(six)}>
                                <div loading="lazy" className="image-container fixed-height">
                                        <Image src={six} alt="About Us" className="img-fluid fixed-image" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        {/* Content for the second half */}
                        <Row>
                            <Col xs={12} className="selected-image-col" style={{ marginTop: '10px' }}>
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
                                marginTop: '3px',
                                left: '50%',
                                top: '20px',
                            }}>
                                <h3 style={{ color: "#E17126", marginTop: '6px' }}>About Us</h3>
                                <p style={{ color: "#762A2B",fontSize: '12px' }}>Avalon Furniture, an American-owned furniture supplier based in Houston, Texas has enjoyed a rich
                                    heritage in furniture design and development for decades. We take pride in sophisticated design innovation,
                                    elegant wood finishes, product quality, and on delivering exceptional value in our price category.</p>
                                    {(!isMobile || showFullText) && (
                                <p style={{ color: "#762A2B",fontSize: '12px' }}>With a range of product categories from on-trend Transitional, to Modern Farmhouse, Modern, Rustic and
                                    Glam. Avalon Furniture brings you the latest in fashion-forward designs with exquisite finishing. Our
                                    products offer appeal and excitement across a broad range of discerning consumers with an eye and
                                    appreciation for design and craftsmanship.</p>
                            )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className="my-container-about">
                <Row className="mb-3 my-row">
                    <div className='three' style={{marginTop:'10px'}}></div>
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
