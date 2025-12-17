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
    "/Images/hoodie/Premium-Customization-and-Printing-Options1.jpg",
    "/Images/hoodie/Premium-Customization-and-Printing-Options12.jpg",
    "/Images/hoodie/Premium-Customization-and-Printing-Options13.jpg",
    "/Images/hoodie/Premium-Customization-and-Printing-Options14.jpg"
];

const bgBack = "/Images/Sweatsuit/bgback.jpg";
const bgImage = "/Images/hoodie/Private-label-Hoodies-for-Your-Brand.jpg";
const Track = "/Images/hoodie/Custom-Hoodie-Manufacturing-for-Your-Product-Line.jpg";
const Tracksuit = "/Images/hoodie/banner.jpg";

const Customhoodiemanufacturer = () => {
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
            <title>Custom Hoodie Manufacturer in the USA</title>
            <meta name="description" content=" We help you create a unique product line with the help of our products and customization options.
                                    We offer a vast range of hoodies and sweatshirts that can make your brand 
                                    a market giant." />
            <link rel="canonical" href="/services/custom-hoodie-manufacturer"></link>
            {/* Hero Section */}
            <section>
                <div className='huntingapparel' style={slideStyle(Tracksuit)}>
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="fw-bold mb-3 display-5">Custom Hoodie Manufacturer in the USA</h1>
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
                                    We help you create a unique product line with the help of our products and customization options.
                                    We offer a vast range of hoodies and sweatshirts that can make your brand
                                    a market giant.
                                </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                            <p className="lead">
                                As your reliable custom hoodie manufacturer in the USA, we deliver the fully customized hoodies to meet your specific needs. From precise
                                stitching to premium fabrics, we bring your designs to life, making hoodies with unmatched craftsmanship.
                            </p>
                            <button className='Breathable'>Create Your Own Products</button>

                            <h2 className="besthunting">Custom Hoodie Manufacturing for Your Product Line</h2>

                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light'>Pullover Hoodies</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Zip-Up Hoodies</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Oversized Hoodies</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Sports & Athleisure</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Hoodies Fleece Hoodies</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Fashion Streetwear Hoodies</ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center text-center bg-light">
                <Container>
                    <h2 className="Customhunting">Cut and Sew Hoodie Manufacturing</h2>
                    <p className="outdoor">
                        We are the expert <strong>sports clothing manufacturer</strong> offering fine craftsmanship, precise cut and sew, and bulk hoodie production for your clothing line. Our skilled workforce incorporates premium fabrics
                        like <strong>100% cotton, fleece, leather, wool, polyester, spandex,</strong> and more to craft stylish and
                        durable hoodies and sweatshirts that can withstand multiple washes, harsh weather, and regular use.
                    </p>
                    <button className='Breathable'>Inquire Now</button>
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
                        <h2 className="fw-bold mb-3">Premium Customization and Printing Options</h2>
                        <p className='trusted'>
                            Our customization capabilities give your hoodies a premium
                            edge by unlocking endless possibilities for unmatched branding.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Embroidery (Logos, patches, custom artwork)
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Screen Printing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom DTF & DTG Printing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Sublimation
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Heat Transfer
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Vinyl Printing
                            </li>
                        </ul>

                        <button className='Breathable'>Request Quote</button>
                    </Col>
                </Row>
            </div>

            {/* CTA Section */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">Hoodie & Sweatshirt Manufacturer: All Production Solutions</h2>
                            <p className="lead mb-4">
                                We offer complete production solutions, including a low MOQ of 35 to 50 pieces, tech packs and digital mockups, sample manufacturing, quick turnaround time, bulk production, personalization, private labeling,
                                and doorstep delivery. Our services can help you start your brand faster and better.
                            </p>
                            <button className='Breathable'>Learn More</button>
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
                                <h2 className="sweat-title">Private label Hoodies for Your Brand</h2>
                                <p className="sweat-desc">
                                    You can start your unique hoodie line with the help of our private labeling services. From OEM and logo placements to custom labels and tags, we deliver informative
                                    and fully personalized private labels to give your brand an identity that prevails in the competitive market.
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
                            <div className='gymnactic'>
                                <h3 className="last-title">Launch and Scale Your Hoodie Brand with US?</h3>
                                <button className='Brand-btn'>Begin Now</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Customhoodiemanufacturer;
