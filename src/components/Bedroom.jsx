import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import one from '../images/home/B9611.jpeg';
import two from '../images/home/B1495.jpeg';
import three from '../images/home/B1209.jpeg';
import four from '../images/home/B2261.jpeg';
import five from '../images/home/B1931.jpeg';
import six from '../images/home/B566.jpeg';
import seven from '../images/home/B16231.jpeg';
import './Styles.css';

function Bedroom() {
    const [selectedImage, setSelectedImage] = useState(seven);
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

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    return (
        <>
            <Container className='my-container-about'>
                <Row>
                    <Col xs={6}>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(one)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={one} alt="Bedroom Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(two)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={two} alt="Bedroom Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(three)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={three} alt="Bedroom Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(four)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={four} alt="Bedroom Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} onClick={() => handleImageClick(five)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={five} alt="Bedroom Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                            <Col xs={6} onClick={() => handleImageClick(six)}>
                                <div className="image-container fixed-height">
                                    <LazyLoad height={200} offset={100}>
                                        <Image src={six} alt="Bedroom Furniture" className="img-fluid fixed-image" />
                                    </LazyLoad>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        <Row>
                            <Col xs={12} className="selected-image-col" style={{ marginTop: '10px' }}>
                                {selectedImage && <Image src={selectedImage} alt="Selected Image" className="img-fluid selected-image" />}
                            </Col>
                        </Row>
                        <Row className="small-text">
                            <Col xs={12} style={{
                                fontSize: '11px',
                                color: '#762a2b',
                                marginTop: '1px',
                                left: '50%',
                                top: '20px',
                            }}>
                                <h3 style={{ color: "#E17126" }}>Bedroom</h3>
                                <p style={{ marginTop: '-4px', fontSize: '12px' }}>Our master bedroom line has exciting style, innovation, features and function. The impressive scale and focus on detail
                                    is what distinguishes the Avalon bedroom design. Quality materials and craftsmanship, along with natural, and clear,
                                    yet distinctive color and finish, provide a canvas for the many curves and lines of our storage pieces and beds.
                                </p>
                                {(!isMobile || showFullText) && (
                                    <p style={{ marginTop: '-4px', fontSize: '12px' }}>Whether it is the elegant look of quarter – sawn Ash, or brushed finishes on Cherry, Ash and Acacia. The beautiful
                                        clarity our master bedrooms delivers on your highest aspirations. Loaded with high end features typically found in
                                        much more expensive goods. Most collections offer 5-piece, dovetailed drawers that are sanded, stained to match and
                                        sealed. Velvet lined with jewelry trays and bonus drawers in most collections. Cedar lined bottom drawers for storage
                                        of seasonal items. Some of our more popular sets also feature solid wood edges around each case for extra strength
                                        and durability.</p>
                                )}
                                {showFullText && (
                                    <p style={{ marginTop: '-4px', fontSize: '12px' }}>Our nightstands offer power charging for your devices atop your nightstand. Wireless rapid charging and two USB ports mounted on the back of each nightstand to charge additional devices. Some models have a low voltage, cool to the touch LED night light that illuminates your late-night pathway to safely reach your destination without stepping on pets or toys on your way. Coming soon is our new “Tech - stand” &#8482; that features charging of your phone, air pods and watch simultaneously and safely.</p>
                                )}
                                <button onClick={toggleText} style={{ color: '#E17126', border: 'none', padding: '5px 10px', cursor: 'pointer', fontSize:'13px' }}>
                                    {showFullText ? 'Read Less' : 'Read More'}
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="my-container-about">
                <Row className="mb-3 my-row">
                    <div className='three' style={{ marginTop: '12px' }}></div>
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
