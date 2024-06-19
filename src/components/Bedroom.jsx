import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload'; // Import LazyLoad
import one from '../images/home/B961.jpeg';
import two from '../images/home/B1495.jpeg';
import three from '../images/home/B1209.jpeg';
import four from '../images/home/B1623.jpeg';
import five from '../images/home/B193.jpeg';
import six from '../images/home/B566.jpeg';
import seven from '../images/home/B226.jpeg';
import './Styles.css'; // Import custom CSS

function Bedroom() {
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
                            <Col xs={6} onClick={() => handleImageClick(one)} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image src={one} alt="Bedroom Furniture" className="img-fluid" />
                                </LazyLoad>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(two)} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image src={two} alt="Bedroom Furniture" className="img-fluid" />
                                </LazyLoad>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(three)} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image src={three} alt="Bedroom Furniture" className="img-fluid" />
                                </LazyLoad>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(four)} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image src={four} alt="Bedroom Furniture" className="img-fluid" />
                                </LazyLoad>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(five)} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image src={five} alt="Bedroom Furniture" className="img-fluid" />
                                </LazyLoad>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(six)} className="image-container">
                                <LazyLoad height={200} offset={100}>
                                    <Image src={six} alt="Bedroom Furniture" className="img-fluid" />
                                </LazyLoad>
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
                            <Col xs={12}  style={{
                                fontSize: '13px',
                                color: '#762a2b',
                                marginTop: '15px',
                                left: '50%',
                                
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
