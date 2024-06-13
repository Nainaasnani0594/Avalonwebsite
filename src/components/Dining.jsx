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
                            <Col xs={6} onClick={() => handleImageClick(one)}>
                            <div className="image-container">
                                <Image src={one} alt="Bedroom Furniture" className="img-fluid" />
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(two)}>
                            <div className="image-container">
                                <Image src={two} alt="Bedroom Furniture" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(three)}>
                            <div className="image-container">
                                <Image src={three} alt="Bedroom Furniture" className="img-fluid" />
                                </div>                            
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(four)}>
                            <div className="image-container">
                                <Image src={four} alt="Bedroom Furniture" className="img-fluid" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(five)}>
                            <div className="image-container">
                                <Image src={five} alt="Bedroom Furniture" className="img-fluid"/>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(six)}>                           
                             <div className="image-container">
                                <Image src={six} alt="Bedroom Furniture" className="img-fluid"/>
                                </div>
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
                                <h3 style={{ color: "#E17126", paddingTop: "50px" }}>Dining</h3>
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