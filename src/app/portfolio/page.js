'use client';

import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';
import './style.css';

// Move ALL images to public/Images/portfolio/
const images = {
  img1: '/Images/portfolio/9.jpg',
  img2: '/Images/portfolio/10.jpg',
  img3: '/Images/portfolio/3.jpg',
  img4: '/Images/portfolio/5.jpg',
  img5: '/Images/portfolio/6.jpg',
  img6: '/Images/portfolio/2.jpg',
  img7: '/Images/portfolio/22.jpg'
};

function Portfolio() {
  return (
    <>
      {/* Hero Slider */}
      <Carousel controls indicators={false}>
        <Carousel.Item>


              <title>  Efficient and High-Quality Sportswear Manufacturing</title>
      <meta name="description"  content="    We are the leading sports apparel manufacturers, the one-stop solution for 
             clothing brands seeking premium-quality sports clothing. We have been working 
             closely with startups and established clothing lines for many years, helping them
              launch their brands and become recognized in the apparel industry. We have helped 
              numerous apparel brands and businesses
              form their unique identities by creating strong and attractive product lines for them." />  
  <link rel="canonical" href="/portfolio"></link>


          <div className="hero-slide">
            <div className="hero-overlay d-flex flex-column justify-content-end text-center text-white">
              <h1 className="fw-bold">
                Efficient and High-Quality Sportswear Manufacturing
              </h1>
              <p className="mt-3 leading-sports">
             We are the leading <strong className="linkbank"><a href="/">sports apparel manufacturers</a></strong>, the one-stop solution for 
             clothing brands seeking premium-quality sports clothing. We have been working 
             closely with startups and established clothing lines for many years, helping them
              launch their brands and become recognized in the apparel industry. We have helped 
              numerous apparel brands and businesses
              form their unique identities by creating strong and attractive product lines for them.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Products grid */}
      <div className="bg-black py-5">
        <Container className="imgslider">
          <Row className="g-4 justify-content-center">
            <Col md={4} xs={12}>
              <Image
                src={images.img1}
                width={400}
                height={300}
                className="img-fluid"
                alt="Hoodie"
              />
            </Col>
            <Col md={4} xs={12}>
              <Image
                src={images.img2}
                width={400}
                height={300}
                className="img-fluid"
                alt="Polo"
              />
            </Col>
            <Col md={4} xs={12}>
              <Image
                src={images.img3}
                width={400}
                height={300}
                className="img-fluid"
                alt="Sports Bra"
              />
            </Col>
            <Col md={4} xs={12}>
              <Image
                src={images.img4}
                width={400}
                height={300}
                className="img-fluid"
                alt="Shorts"
              />
            </Col>
            <Col md={4} xs={12}>
              <Image
                src={images.img5}
                width={400}
                height={300}
                className="img-fluid"
                alt="Tracksuit"
              />
            </Col>
            <Col md={4} xs={12}>
              <Image
                src={images.img6}
                width={400}
                height={300}
                className="img-fluid"
                alt="Leggings"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Services section */}
      <Container fluid className="bg-black text-white py-5 text-center">
        <h3 className="fw-bold oriented">
          Our Customer-Oriented Products and Services
        </h3>
        <p className="mt-3 mx-auto" style={{ maxWidth: "1140px" }}>
          We have built a strong reputation over the past years due to our exceptional customer service and outstanding products.
          Our craftsmanship is the reason why many brands stand firm in the clothing industry. We are the masters of creation,
          whether it's swimming apparel, <strong className="linkbank"><a href="/services/golf-apparel-manufacturer">golf clothing</a></strong>, <strong className="linkbank"><a href="/services/gym-clothing-manufacturer">gymwear</a></strong>, basketball uniforms, or any sports apparel category. We are 
          capable of meeting your requirements even if they are complex because we like taking challenges. Our aim is to deliver 
          the best products, competitive pricing, premium quality, low MOQs, sample production, unlimited bulk production, free shipment, and doorstep delivery.
        </p>

        <div className="mt-4">
          <Image
            src={images.img7}
            width={1200}
            height={600}
            alt="Product Process"
            className="img-fluid w-100"
          />
        </div>
      </Container>
    </>
  );
}

export default Portfolio;
