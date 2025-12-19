'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images from public folder
const images = [
    "/Images/fishing/Best-Fishing-Apparel-Factory-Offers-Advanced-Printing-Options1.jpg",
    "/Images/fishing/Best-Fishing-Apparel-Factory-Offers-Advanced-Printing-Options2.jpg",
    "/Images/fishing/Best-Fishing-Apparel-Factory-Offers-Advanced-Printing-Options3.jpg",
    "/Images/fishing/Best-Fishing-Apparel-Factory-Offers-Advanced-Printing-Options4.jpg"
];

const bgBack = "/Images/Sweatsuit/bgback.jpg";
const bgImage = "/Images/fishing/Combine-Innovation-with-Performance.jpg";
const Track = "/Images/fishing/Custom-fishing-Shirts-That-Are-Built-to-Last.jpg";
const Tracksuit = "/Images/fishing/bannew.jpg";

const Fishingshirtmanufacturer = () => {
    const slideStyle = (image) => ({
        height: "400px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        textAlign: "left",
        color: "white",
        transition: "background-image 1s ease-in-out",
    });

    const overlayStyle = {
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0,0,0,24%)",
        zIndex: 1,
    };

    const contentStyle = {
        position: "relative",
        zIndex: 2,
        maxWidth: "800px",
        padding: "0 15px",
    };

    const Arrow = ({ className, style, onClick, direction }) => (
        <div className={className} style={{ ...style, display: 'block', zIndex: 3 }} onClick={onClick}>
            <span>{direction === 'left' ? '‹' : '›'}</span>
        </div>
    );

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        prevArrow: <Arrow direction="left" />,
        nextArrow: <Arrow direction="right" />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="textile-services-page">
            <title>Fishing Shirt Manufacturers: Custom Fishing Shirts</title>
            <meta name="description" content="Top  fishing clothing manufacturers help you start your 
            clothing line and offer customization options, fast turnaround time, low MOQ, and competitive prices." />
            <link rel="canonical" href="/services/fishing-shirt-manufacturer"></link>
            {/* Hero Section */}
            <section>
                <div className='huntingapparel' style={slideStyle(Tracksuit)}>
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="fw-bold mb-3 display-5">Fishing Apparel Manufacturers</h1>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="upersectiontop bg-light">
                <Container>
                    <Row>
                        {/* LEFT SIDE - IMAGES */}
                        <Col md={6} className="position-relative">
                            <img
                                src={Track}
                                alt="Main Textile"
                                className="img-fluid rounded shadow"
                            />
                            <div className='uppersection'>
                                <FaTshirt />
                                <p className="textour">
                                    We are a trusted <strong className='linkbank'><a href='/'>sports apparel manufacturer</a></strong> that creates performance-driven custom
                                     fishing shirts tailored specifically for swimwear brands,
                                    professional anglers, retailers, and small- and large-scale private label clothing lines.
                                </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                            <p className="lead">
                                As your reliable fishing shirt supplier, it is our responsibility to provide you the best quality fishing shirts tailored according to your needs. With the help of our advanced materials, we feature the custom fishing shirts
                                with moisture-wicking, UV protection, breathable waders, water-resistant coatings, flexibility, and durability.
                            </p>
                            <button className='Breathable'>Get Started Now</button>

                            <h2 className="besthunting">Custom fishing Shirts That Are Built to Last</h2>

                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light'>Long Sleeve Performance Shirts</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Hoodies</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>T-Shirts</ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center text-center bg-light">
                <Container>
                    <h2 className="Customhunting">Manufacturing Capabilities & Customization Options</h2>
                    <p className="outdoor">
                       Our custom-made fishing shirts are tailored to provide you an edge in the competitive industry. From fabric selection and 
                       product designing to bulk production and quality assurance, we allow you full control. 
                    </p>
                    <button className='Breathable'>Start Your Custom Order</button>
                </Container>
            </section>

            {/* Image Carousel Section */}
            <div className="container carouselsec">
                <Row className="align-items-center">
                    {/* LEFT — IMAGE CAROUSEL */}
                    <Col xs={12} md={6}>
                        <div style={{ maxWidth: "900px", margin: "auto" }}>
                            <Slider {...settings}>
                                {images.map((src, i) => (
                                    <div key={i}>
                                        <img src={src} alt={`img-${i}`} style={{ padding: "0 10px", width: "100%", borderRadius: "8px" }} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>

                    {/* RIGHT — HEADING + DESCRIPTION + ICON LIST */}
                    <Col md={6} className="mt-4 mt-md-0">
                        <h2 className="fw-bold mb-3">Best Fishing Apparel Factory Offers Advanced Printing Options</h2>
                        <p className='trusted'>
                 We aspire to make your brand stand out in the market.
                  Our printing options are viable in terms of giving your fishing shirts a unique and aesthetic appearance. 
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Sublimation Printing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Heat Printing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Screen Printing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Vinyl Printing
                            </li>
                        </ul>

                        <button className='Breathable'>Get Started</button>
                    </Col>
                </Row>
            </div>

            {/* CTA Section */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">Private Labeling Solutions for Your Brand</h2>
                            <p className="lead mb-4">
                               Your brand requires custom shirts for fishing that resonate with your brand’s identity. Our private labeling solutions can help you do that.
                                With customized logos, designs, and tags, your products become unique and ready to enter the market. 
                            </p>
                            <button className='Breathable'>Start Your Brand with Us</button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sweat Section */}
            <div className="sweat-section" style={{ backgroundImage: `url(${bgImage})` }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='sweatsuit'>
                                <h2 className="sweat-title">Combine Innovation with Performance</h2>
                                <p className="sweat-desc">
                                We use high-performance materials to protect the wearer from harsh weather conditions. The added breathability and enhanced durability make the fishing shirts withstand tough usage. 
                                Our quality control measures ensure the custom fishing shirts can inspire your customers to perform well. 
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Last Section */}
            <div className="last-section" style={{ backgroundImage: `url(${bgBack})` }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='fishinguse'>
                                <h3 className="last-title">Why Choose Us?</h3>
                                <p className="success">
                               We are here to help you become a successful brand with our products and services. Our low MOQ of 35 to 50 pieces per color and design allows you to start either small or big. Our bulk order discounts help you start a wider product line.
                                We offer a fast turnaround time and doorstep delivery to strengthen our professional relationship. 
                                </p>
                                <button className='Brand-btn'>Start Building Your Brand</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Fishingshirtmanufacturer;
