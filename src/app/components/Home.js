'use client';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Card, Button, Badge } from 'react-bootstrap';
import { Telephone, Envelope, Calendar, Chat, ArrowRight } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faTags, faUserShield, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
// import ContactPopup from "../Contactpopup";
import './style.css';


// export const metadata = {
//   title: 'Leading Custom Clothing Manufacturers in USA - Mega Apparel',
//   description: 'Get high-quality customized sportswear from the best clothing manufacturer in USA at reasonable prices.',
//   alternates: {
//     canonical: '/',
//   },
// }
// Move ALL images to public/Images/Homeimages/
const images = {
  blog1: '/Images/Homeimages/Private-label.jpg',
  blog2: '/Images/Homeimages/cyliung.jpg',
  blog3: '/Images/Homeimages/gym-costume.jpg',
  rightImage: '/Images/highqulity.jpg',
  carousel1: '/Images/Homeimages/jacket.jpg',
  carousel2: '/Images/Homeimages/polo.jpg',
  carousel3: '/Images/Homeimages/fishing-costume.jpg',
  carousel4: '/Images/Homeimages/cyliung.jpg',
  carousel5: '/Images/Homeimages/gym-costume.jpg',
  carousel6: '/Images/Homeimages/polo.jpg',
  carousel7: '/Images/Homeimages/fishing-costume.jpg',
  carousel8: '/Images/Homeimages/cyliung.jpg',
  product1: '/Images/Homeimages/jacket.jpg',
  product2: '/Images/Homeimages/polo.jpg',
  product3: '/Images/Homeimages/fishing-costume.jpg',
  product4: '/Images/Homeimages/cyliung.jpg',
  image1: '/Images/Homeimages/1st.jpg',
  image2: '/Images/Homeimages/1st.jpg',
  image3: '/Images/Homeimages/1st.jpg',
  leftimg: '/Images/Homeimages/2nd.jpg'
};

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });

  // Hero slider images
  const heroImages = [images.image1, images.image2, images.image3];
  const getCurrentImage = () => heroImages[currentImageIndex];

  // Carousel images array
  const carouselImages = [
    images.carousel1, images.carousel2, images.carousel3, images.carousel4,
    images.carousel5, images.carousel6, images.carousel7, images.carousel8
  ];

  // Hero slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Carousel auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  const products = [
    { id: 1, image: images.product1, title: 'Jackets' },
    { id: 2, image: images.product2, title: 'Polo' },
    { id: 3, image: images.product3, title: 'Fishing' },
    { id: 4, image: images.product4, title: 'GYM' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const blogPosts = [
    {
      id: 1,
      image: images.blog1,
      category: "Technology",
      title: "The Future of Web Development in 2024",
      date: "December 15, 2024",
      comments: 12,
      excerpt: "Discover the latest trends and technologies shaping the future of web development and how they will impact your business."
    },
    {
      id: 2,
      image: images.blog2,
      category: "Design",
      title: "Minimalist Design Principles for Modern Websites",
      date: "December 12, 2024",
      comments: 8,
      excerpt: "Learn how minimalist design can improve user experience and create more effective digital products."
    },
    {
      id: 3,
      image: images.blog3,
      category: "Business",
      title: "How to Grow Your Online Business in 2024",
      date: "December 8, 2024",
      comments: 15,
      excerpt: "Essential strategies and tips to scale your online business and reach new customers in the coming year."
    }
  ];

  return (
    
    <>
  
      <Container fluid>
            <title>SPORTWEAR MANUFACTURING</title>
      <meta name="description"  content="Our professional sportswear manufacturing solutions blend technology, comfort, and style to deliver high-quality custom apparel, empowering sports clothing brands, teams, and athletes across the world.
                                                Our products are created for performance, endurance and movement. From sports apparel and team uniforms to fitness clothing, Sportswear Manufacturing offers solutions to help brands dominate in
                                                 the market." />  
  <link rel="canonical" href="/"></link>
        <Row>
          <Col md={6} lg={6} xl={6}>
            <div className='herosection'>
              <h1 className="main-heading">SPORTWEAR MANUFACTURING</h1>
              <div className='sportcloth'>
                <Row>
                  <Col md={6} lg={6} xl={6}>
                    <img
                      src={images.leftimg}
                      width={300}
                      height={350}
                      alt={`Slide ${currentImageIndex + 1}`}
                      className="leftsideimg"
                    />
                  </Col>
                  <Col>
                   <p className="description">
                      Our professional sportswear manufacturing solutions blend technology, comfort, and style to deliver
                      high-quality custom apparel, empowering sports clothing brands, teams, and athletes across the world.
                    </p>
                    <p className="description-bottom">
                      Our products are created for performance, endurance and movement. From sports apparel and team
                      uniforms to fitness clothing, Sportswear Manufacturing offers solutions to help brands dominate in the market.
                    </p>
                    <Button variant="Home-btn" onClick={() => setShow(true)}>
                      GET STRATED
                    </Button>
                    {/* <ContactPopup show={show} handleClose={() => setShow(false)} /> */}
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col>
            <div className="image-carousel">
              <img
                src={getCurrentImage()}
                alt={`Slide ${currentImageIndex + 1}`}
                className="carousel-image"
              />
            </div>
          </Col>
        </Row>

        <div className="marquee-wrap" aria-label="Scrolling text" role="marquee" tabIndex="0">
          <div className="marquee"> Custom Sportswear Manufacturer in the USA </div>
        </div>
      </Container>

      {/* Image Carousel Section */}
      <Container fluid className="align-items-center justify-content-center bg-light">
        {/* Desktop - 4 Images */}
        <div className="d-none d-xxl-block">
          <div className="d-flex gap-4 justify-content-center">
            {[0, 1, 2, 3].map((offset) => (
              <img
                key={offset}
                src={carouselImages[(activeIndex + offset) % carouselImages.length]}
                alt={`Slide ${offset + 1}`}
                className="rounded shadow transition-all"
                style={{
                  width: '360px',
                  height: '400px',
                  objectFit: 'cover',
                  opacity: offset === 0 ? 1 : 0.7,
                  transform: offset === 0 ? 'scale(1.05)' : 'scale(0.95)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Tablet - 2 Images */}
        <div className="d-none d-md-block d-xxl-none">
          <div className="d-flex gap-5 justify-content-center">
            {[0, 1].map((offset) => (
              <img
                key={offset}
                src={carouselImages[(activeIndex + offset) % carouselImages.length]}
                alt={`Slide ${offset + 1}`}
                className="rounded shadow transition-all"
                style={{
                  width: '280px',
                  height: '350px',
                  objectFit: 'cover',
                  opacity: offset === 0 ? 1 : 0.7,
                  transform: offset === 0 ? 'scale(1.05)' : 'scale(0.95)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Mobile - 1 Image */}
        <div className="d-block d-md-none text-center">
          <img
            src={carouselImages[activeIndex]}
            alt={`Slide ${activeIndex + 1}`}
            className="rounded shadow transition-all"
            style={{
              width: '300px',
              height: '400px',
              objectFit: 'cover'
            }}
          />
        </div>
      </Container>

      {/* About Section */}
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <div className="p-4 p-lg-5">
              <h1 className="display-4 fw-bold text-dark mb-4">
                High-Quality Men's & Women's Sportswear Manufacturer
              </h1>
              <p className="Trust-wear">
                Trust us as your athletic wear manufacturers to avail complete end-to-end production services,
                including design, customization, and packaging, under one roof. From premium quality training wear to
                <strong>custom golf apparel, </strong>
                football kits and basketball uniforms for men and women; we manufacture everything you desire.
              </p>
              <div className="d-flex gap-3">
                <button className="Home-btn">BEGIN NOW</button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={images.rightImage}
              alt="High quality sportswear"
              className="img-fluid rounded shadow"
              style={{ width: '100%', height: 'auto' }}
            />
            {/* Counter section */}
            <div className='counter'>
              <Row>
                <div className='collection col'>
                  <h2>Collection</h2>
                  <h6>200+</h6>
                  <p className="lead-collection">Explore our vast collection.</p>
                </div>
                <div className='brands col'>
                  <h2>BRANDS</h2>
                  <h6>100+</h6>
                  <p className="lead-Brand">Explore our vast collection.</p>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Icon Features */}
      <Container className="my-5">
        <Row className="g-4">
          <Col lg={3} md={6} className="text-center">
            <div className="icon-item p-4">
              <FontAwesomeIcon icon={faShippingFast} className="icon-feature mb-3" size="2x" />
              <h5 className="secure">FAST DELIVERY</h5>
            </div>
          </Col>
          <Col lg={3} md={6} className="text-center">
            <div className="icon-item p-4">
              <FontAwesomeIcon icon={faTags} className="icon-feature mb-3" size="2x" />
              <h5 className="secure">BEST PRICES</h5>
            </div>
          </Col>
          <Col lg={3} md={6} className="text-center">
            <div className="icon-item p-4">
              <FontAwesomeIcon icon={faUserShield} className="icon-feature mb-3" size="2x" />
              <h5 className="secure">BUYER PROTECTION</h5>
            </div>
          </Col>
          <Col lg={3} md={6} className="text-center">
            <div className="icon-item p-4">
              <FontAwesomeIcon icon={faCreditCard} className="icon-feature mb-3" size="2x" />
              <h5 className="secure">SECURE PAYMENT</h5>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Background Overlay Section */}
      <Container fluid className="background-overlay-section">
        <Row className="g-0">
          <Col lg={6} className="image-column">
            <div className="background-image left-image">
              <div className="image-overlay">
                <div className="overlay-content text-center">
                  <h2 className="overlay-title">
                    Private label Activewear<br /> Manufacturer: Production Solutions
                  </h2>
                  <p className="overlay-description">
                    As a private label <strong>activewear manufacturer,</strong> we offer apparel that resonates with modern
                    fitness and sports demands. With the help of our effective <strong>cut & sew garment production</strong> and private labeling
                    services, our products feature premium qualities and tags that enhance your brand’s identity.
                    making us one of the most reliable manufacturers of sportswear in the industry.</p>
                  <Button variant="light" size="lg" className="Explore-btn">EXPLORE CATALOG</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="image-column">
            <div className="background-image right-image">
              <div className="image-overlay">
                <div className="overlay-content text-center">
                  <h2 className="overlay-title">Custom Sportswear Production <br /> Company Offers Premium Fabrics</h2>
                  <p className="overlay-description">
                    Being a trusted sportswear supplier in the industry, we focus on innovations and advancements in clothing through fabric excellence. Our athletic and fitness clothing is crafted with premium materials like moisture-wicking polyester,
                    flexible spandex, breathable mesh, and more to provide you with optimal durability and comfort.
                  </p>
                  <Button variant="light" size="lg" className="Explore-btn">EXPLORE CATALOG</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Featured Products */}
      <Container className="my-5">
        <div className="text-center mb-5">
          <h2 className="section-title fw-bold">
            Customization And Printing for Custom Fitness & Sportswear...
          </h2>
          <p className="text-muted">
            You need a sports and <strong>fitness clothing manufacturer</strong> that can customize products to help your brand stand out in the market. We can be your trusted choice to bring your designs to life with advanced customization and printing methods. We offer limitless personalization options along with cutting-edge sublimation printing for vibrant full-color graphics, heat printing for
            detailed logos, screen printing for durable designs, embroidery for textured detailing, and much more.
          </p>
          <button className="Home-btn" onClick={handleButtonClick}>
            Learn More About Customization
          </button>
        </div>

        <Row className="g-4">
          {products.map((product) => (
            <Col lg={3} md={6} key={product.id}>
              <Card className="product-card h-100 border-0 shadow-sm">
                <div className="card-image-container">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    className="product-image"
                    alt={product.title}
                  />
                </div>
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title className="product-title fw-bold mb-2">
                    {product.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="outline-primary" size="lg" className="Home-btn">
            VIEW ALL ITEMS
          </Button>
        </div>
      </Container>

      {/* Contact Section */}
      <Container className="my-5 py-5">
        <Row className="g-5 align-items-start">
          <Col lg={6}>
            <div className="form-section">
              <h2 className="form-title mb-4">Get In Touch</h2>
              <p className="form-subtitle text-muted mb-4">
                Feel Free to get in touch! We're here to help and answer any questions you might have.
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="py-2 px-4"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Email Address *</Form.Label>
                  <div className="input-with-icon">
                    <Envelope className="input-icon" />
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className="py-2 px-4"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">How can we help you?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry or project..."
                    className="py-2 px-3"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    label="I agree that my data will be collected and stored according to the privacy policy"
                    required
                    className="agree-checkbox"
                  />
                </Form.Group>
                <Button variant="outline-primary" type="submit" className="Home-btn">
                  GET IN TOUCH <ArrowRight className="ms-2" />
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg={6}>
            <div className="contact-info-section">
              <p className="contact-title">Custom Sportswear Built for Performance and Designed for Endurance</p>
              <p className="contact-description">WellCome</p>
              <p className="contact-description">
                Our efficient performance features enhance compression support, ventilation, and quick-drying.
              </p>
              <Button className='Home-btn'>Get Your Production Started</Button>
              <Card className="contact-card mb-4 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center">
                    <div className="contact-icone-wrapper me-4">
                      <Telephone className="contact-icone" size={24} />
                    </div>
                    <div>
                      <h5 className="fw-bold mb-1">Phone Number</h5>
                      <p className="text-muted mb-1">Call us directly for immediate assistance</p>
                      <p className="contact-detail fw-semibold mb-0">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Blog Section */}
      <Container className="my-5 py-5">
        <Row className="mb-5">
          <Col lg={8}>
            <div className="section-header">
              <Badge bg="primary" className="section-badge mb-3">Our Posts</Badge>
              <h2 className="section-title mb-3">Latest Articles</h2>
              <p className="section-description text-muted">
                Stay updated with our latest insights, tips, and news about technology, design, and business growth.
              </p>
            </div>
          </Col>
          <Col lg={4} className="text-lg-end">
            <Button variant="outline-primary" size="lg" className="Home-btn">
              View All Articles <ArrowRight className="ms-2" />
            </Button>
          </Col>
        </Row>
        <Row className="g-4">
          {blogPosts.map((post) => (
            <Col lg={4} md={6} key={post.id}>
              <Card className="blog-card h-100 border-0 shadow-sm">
                <div className="blog-image-container">
                  <Card.Img
                    variant="top"
                    src={post.image}
                    className="blog-image"
                    alt={post.title}
                  />
                  <Badge bg="light" text="dark" className="category-badge">
                    {post.category}
                  </Badge>
                </div>
                <Card.Body className="p-4 d-flex flex-column">
                  <Card.Title className="blog-title mb-3">{post.title}</Card.Title>
                  <Card.Text className="blog-excerpt text-muted mb-4 flex-grow-1">
                    {post.excerpt}
                  </Card.Text>
                  <div className="blog-meta d-flex justify-content-between align-items-center">
                    <div className="date-info d-flex align-items-center">
                      <Calendar size={16} className="text-primary me-2" />
                      <small className="text-muted">{post.date}</small>
                    </div>
                    <div className="comments-info d-flex align-items-center">
                      <Chat size={16} className="text-primary me-2" />
                      <small className="text-muted">{post.comments} comments</small>
                    </div>
                  </div>
                  <Button variant="link" className="read-more-btn p-0 mt-3 text-decoration-none">
                    Read More <ArrowRight className="ms-1" size={14} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
