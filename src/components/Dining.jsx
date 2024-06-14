import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import one from '../images/dining/D118.jpg';
import two from '../images/dining/D162.jpg';
import three from '../images/dining/D323.jpg';
import four from '../images/dining/D511.jpg';
import five from '../images/dining/D526.jpg';
import six from '../images/dining/D622.jpg';
import './Styles.css'; // Import custom CSS

function Dining() {
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
                                <Image src={one} alt="Dining Furniture" className="img-fluid" />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(two)} className="image-container">
                                <Image src={two} alt="Dining Furniture" className="img-fluid" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(three)} className="image-container">
                                <Image src={three} alt="Dining Furniture" className="img-fluid" />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(four)} className="image-container">
                                <Image src={four} alt="Dining Furniture" className="img-fluid" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(five)} className="image-container">
                                <Image src={five} alt="Dining Furniture" className="img-fluid" />
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(six)} className="image-container">
                                <Image src={six} alt="Dining Furniture" className="img-fluid" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        {/* Content for the second half */}
                        <Row>
                            <Col xs={12} className="selected-image-col" style={{marginTop:'2px'}}>
                                {/* Display the selected image */}
                                {selectedImage && <Image src={selectedImage} alt="Selected Image" className="img-fluid selected-image" />}
                            </Col>
                        </Row>
                        <Row className="small-text">
                            <Col xs={12} className="text-container" style={{
                                fontSize: '13px',
                                color: '#762a2b',
                                marginTop: '35px',
                                left: '50%',
                                
                            }}>
                                <h3 style={{ color: "#E17126" }}>Dining</h3>
                                <p>Whether traditional, formal dining is your desire, with its flowing acanthus leaf adornments, and shapely serpentine tables, chairs and storage items; or if a more relaxed, casual and livable design fits your lifestyle; you can expect quality and sophistication to abound with Avalon dining products.</p>
                                <p>From the farmhouses in northern Europe, to the penthouses overlooking a cityscape; these inspirations drive our designs.</p>
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

export default Dining;
