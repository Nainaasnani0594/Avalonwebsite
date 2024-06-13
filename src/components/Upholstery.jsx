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
                            <Col xs={6} onClick={() => handleImageClick(one)}>
                                <Image src={one} alt="Upholstery Furniture" className="img-fluid" style={{ width: '100%' }} />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(two)}>
                                <Image src={two} alt="Upholstery Furniture" className="img-fluid" style={{ width: '100%' }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(three)}>
                                <Image src={three} alt="Upholstery Furniture" className="img-fluid" style={{ width: '100%' }} />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(four)}>
                                <Image src={four} alt="Upholstery Furniture" className="img-fluid" style={{ width: '100%' }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(five)}>
                                <Image src={five} alt="Upholstery Furniture" className="img-fluid" style={{ width: '100%' }} />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(six)}>
                                <Image src={six} alt="Upholstery Furniture" className="img-fluid" style={{ width: '100%' }} />
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
                            <Col xs={12}>
                                <h3 style={{ color: "#E17126" }}>Upholstery</h3>
                                <p>Avalon Upholstery is Houston, Texas based upholstery manufacturer, designing and building upholstery for both residential and commercial market.</p>
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
