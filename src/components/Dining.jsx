import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload'; // Import LazyLoad
import one from '../images/home/D162.jpeg';
import two from '../images/home/D511.jpeg';
import three from '../images/home/D526.jpeg';
import four from '../images/home/D118.jpeg';
import five from '../images/home/D622.jpeg';
import six from '../images/home/D323.jpeg';
import seven from '../images/home/D1623.jpeg';

import './Styles.css'; // Import custom CSS

function Dining() {
    const [selectedImage, setSelectedImage] = useState(seven);

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
                            <Col xs={6} onClick={() => handleImageClick(one)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={one} alt="Dining Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(two)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={two} alt="Dining Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(three)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={three} alt="Dining Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(four)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={four} alt="Dining Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(five)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={five} alt="Dining Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(six)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={six} alt="Dining Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        {/* Content for the second half */}
                        <Row>
                            <Col xs={12} className="selected-image-col" style={{ marginTop: '10px' }}>
                                {/* Display the selected image */}
                                {selectedImage && <Image src={selectedImage} alt="Selected Image" className="img-fluid selected-image" />}
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
                                <h3 style={{ color: "#E17126", marginTop: '6px'}}>Dining</h3>
                                <p style={{ color: "#762A2B", fontSize: '13px'}}>From the farmhouses in northern Europe, to the penthouses overlooking a cityscape; these dining
                                    inspirations drive our designs at Avalon Furniture. Offerings include Dining height, Gathering
                                    height and correlated storage and accent pieces. Materials used include various solids and
                                    decorative veneers finished in multi steps. Upholstered in easy care fabrics for durability and
                                    longevity.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className="my-container-about">
                <Row className="mb-3 my-row">
                    <div className='three'style={{marginTop:'12px'}}></div>
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

export default Dining;
