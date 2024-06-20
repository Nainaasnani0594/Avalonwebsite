import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload'; // Import LazyLoad
import one from '../images/home/U6051.png';
import two from '../images/home/U1080.jpeg';
import three from '../images/home/U6020.png';
import four from '../images/home/U3090.jpeg';
import five from '../images/home/U1280.jpeg';
import six from '../images/home/U3075.jpeg';
import seven from '../images/home/U6080.jpeg';
import './Styles.css'; // Import custom CSS

function Upholstery() {
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
                                        <Image
                                            src={one}
                                            alt="Upholstery Furniture"
                                            className="img-fluid fixed-image"

                                        />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(two)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image
                                            src={two}
                                            alt="Upholstery Furniture"
                                            className="img-fluid fixed-image"

                                        />
                                    </LazyLoad>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(three)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image
                                            src={three}
                                            alt="Upholstery Furniture"
                                            className="img-fluid fixed-image"

                                        />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(four)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image
                                            src={four}
                                            alt="Upholstery Furniture"
                                            className="img-fluid fixed-image"

                                        />
                                    </LazyLoad>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(five)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image
                                            src={five}
                                            alt="Upholstery Furniture"
                                            className="img-fluid fixed-image"

                                        />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(six)}>
                                <div className="image-container fixed-height">                                <LazyLoad height={200} offset={100}>
                                    <Image
                                        src={six}
                                        alt="Upholstery Furniture"
                                        className="img-fluid fixed-image"

                                    />
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
                            <Col xs={12} style={{ fontSize: '13px', color: '#762a2b', marginTop: '3px', left: '50%', top: '20px' }}>
                                <h3 style={{ color: "#E17126", marginTop: '6px' }}>Upholstery</h3>
                                <p style={{ color: "#762A2B",fontSize: '13px' }}>Proudly bench made in Texas with more than 15 different styles of sectionals, sofa – loves, chairs
                                    and chaises. Deep plush seating abounds throughout the collections of oversized, comfortable
                                    models covered in rich serviceable chenille, woven and damask fabrics. Frames constructed of
                                    select hardwoods, plywoods and furniture board. All frames use sinuous spring system for
                                    optimum ride and comfort. Incorporating our 1.8 pound density or dual density cushions wrapped
                                    in fiber for a down like feel…</p>
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
