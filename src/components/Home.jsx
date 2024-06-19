import React from 'react';
import './Styles.css'; // Import custom CSS
import Container from 'react-bootstrap/Container';
import { Row, Col, Image, Carousel } from 'react-bootstrap';
import slide from '../images/home/B299.jpeg';
import slide1 from '../images/home/B775.jpeg';
import slide2 from '../images/home/B913.jpeg';
import slide3 from '../images/home/B912.jpeg';
import slide4 from '../images/home/B162.jpeg';
import slide5 from '../images/home/B2122.jpeg';
import slide6 from '../images/home/B323.jpeg';

function Home() {
  return (
    <>
      <Container className="d-flex">
        {/* First section with images and carousel */}
        <Row className="mb-3 w-100">
          <Col md={5} className="d-flex flex-column">
            <Row className="flex-grow-1">
              <Col md={12} className="d-flex align-items-stretch">
                <Image
                  src={slide}
                  alt="Bedroom Furniture"
                  className="img-fluid"
                  style={{ width: '100%', height: '170px' }}
                />
              </Col>
            </Row>
            <Row className="mt-3 flex-grow-1">
              <Col md={6} className="one d-flex align-items-stretch">
                <Image
                  src={slide1}
                  alt="Bedroom Furniture"
                  className="img-fluid"
                  style={{ width: '100%' }}
                />
              </Col>
              <Col md={6} className="one d-flex align-items-stretch">
                <Image
                  src={slide2}
                  alt="Bedroom Furniture"
                  className="img-fluid"
                  style={{ width: '100%' }}
                />
              </Col>
            </Row>
          </Col>
          <Col md={7} className="two d-flex align-items-stretch" >
            <Carousel className="w-100">
              <Carousel.Item>
                <Image
                  src={slide3}
                  alt="Bedroom Furniture"
                  className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={slide4}
                  alt="Bedroom Furniture"
                  className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={slide5}
                  alt="Bedroom Furniture"
                  className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={slide6}
                  alt="Bedroom Furniture"
                  className="d-block w-100"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      {/* Second section with about us content */}
      <Container className="my-container">
        <Row className="mb-3 my-row">
          <div className='three'></div>
        </Row>
      </Container>

      {/* Third section with mission statement */}
      <Container className="my-container">
        <Row className='four' style={{ display: 'flex', alignItems: 'center' }}>
          <Col xs={6} style={{ textAlign: "center", paddingTop: "60px" }}>
            <h3 style={{ color: "#762A2B" }}>Furnishing your home</h3>
            <h2 style={{ color: "#E17126" }}>with style, sophistication, and value</h2>
          </Col>
          <Col xs={6} style={{ 
            fontSize: '13px', 
            color: '#762a2b', 
            position: 'relative', 
            paddingLeft: '20px', // Adjust padding as needed
          }}>
            <p style={{ paddingTop: "30px", textAlign: 'justify' }}>
              Avalon Furniture, an American-owned furniture supplier based in Houston, Texas, has enjoyed a rich heritage in furniture design and development for decades. We take pride in sophisticated design innovation, elegant wood finishes, product quality, and on delivering exceptional value in our price category.
            </p>
            <p style={{ textAlign: 'justify' }}>
              With a range of product categories from classic Traditional, to on-trend Transitional, or to the glitz and glam of Regency styling, Avalon Furniture offers the latest in fashion-forward designs with exquisite finishing. Our products attract appeal and excitement across a broad range of discerning consumers with an eye and appreciation for design and craftsmanship.
            </p>
          </Col>
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

export default Home;
