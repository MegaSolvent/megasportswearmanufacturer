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
  "/Images/pajama/Private-Label-Pajamas-and-OEM-Solutions1.jpg",
  "/Images/pajama/Private-Label-Pajamas-and-OEM-Solutions2.jpg",
  "/Images/pajama/Private-Label-Pajamas-and-OEM-Solutions3.jpg",
  "/Images/pajama/Private-Label-Pajamas-and-OEM-Solutions4.jpg"
];

const bgBack = "/Images/Sweatsuit/bgback.jpg";
const bgImage = "/Images/pajama/555.jpg";
const Track = "/Images/pajama/Sleepwear-Manufacturer-Unique-Pajama-Variety-for-Your-Brand.jpg";
const Tracksuit = "/Images/pajama/banneer.jpg";

const Custompajamamanufacturer = () => {
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
            {/* Hero Section */}
            <section>
                <div className='huntingapparel' style={slideStyle(Tracksuit)}>
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="fw-bold mb-3 display-5">Custom Pajama Manufacturers</h1>
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
                                    As a reliable pajama supplier, our aim is to provide brands with unmatched comfort, lightweight sleepwear, moisture control, and an amazing lounging experience in the form of our pajamas. With our all-season collection and customization methods, you can get a diverse pajama selection for various activities,
                                    including fitness, yoga, relaxing, and lounging.
                                </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                            <p className="lead">
                                We are your trusted custom pajama manufacturers, offering a perfect blend of comfort and style. We manufacture a vast variety of pajamas using eco-friendly and sustainable materials for fashion labels,
                                boutiques, e-commerce stores, clothing lines and brands that need <strong>custom loungewear.</strong>
                            </p>
                            <button className='Breathable'>Start Your Clothing Brand</button>

                            <h2 className="besthunting">Sleepwear Manufacturer: Unique Pajama Variety for Your Brand</h2>

                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light'>Lounge Pajamas</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Classic</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Yoga Pajamas</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Sleeping Pajamas</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Pajamas of kids</ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center text-center bg-light">
                <Container>
                    <h2 className="Customhunting">Our Pajama Manufacturing Services</h2>
                    <p className="outdoor">
                        We are the right sleepwear manufacturer for your loungewear brand. We offer a premium fabric selection with 100% cotton, satin, bamboo, modal, and blended materials. Our tailored fit options include various sizes for men, women, and kids, with diverse
                        designs and elastic waistbands. We deliver a full range of production services for your brand's success.
                    </p>
                    <button className='Breathable'>Launch Your Brand</button>
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
                        <h2 className="fw-bold mb-3">Private Label Pajamas and OEM Solutions</h2>
                        <p className='trusted'>
                            Our private label pajamas service allows you complete control over labeling and tags to make your brand unique in the competitive apparel industry.
                            From concept to delivery, we ensure your products stand out with a unique identity.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                OEM Solutions
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Logos
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Tags & Labels
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Sizes & Placements
                            </li>
                        </ul>

                        <button className='Breathable'>Request Quote</button>
                    </Col>
                </Row>
            </div>

            {/* CTA Section 1 */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">Limitless Customization Options</h2>
                            <p className="lead mb-4">
                                As your reliable <strong>sportswear clothing manufacturer</strong>, our company understands that style, comfort and performance are the key components for your imminent success. Therefore, we create your products using our most efficient and advanced customization options,
                                including printing options, embroidery, fabric dyeing, washing, and precise cut-and-sew.
                            </p>
                            <button className='Breathable'>Launch Your Brand Now</button>
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
                                <h1 className="sweat-title">Advanced Printing Techniques for Your Clothing Line</h1>
                                <p className="sweat-desc">
                                    We specialize in making your pajamas one of a kind using our advanced printing methods. Our screen printing is ideal for bulk orders and bold logos. We use sublimation printing for all-over prints, outstanding patterns, and vibrant prints. Our DTG (direct to garment) printing adds details and creates a variety of colors on small batches. We offer
                                    modern printing with durable designs on different fabrics using our efficient DTF (direct to fabric) printing.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* CTA Section 2 */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">Our Customer-Oriented Manufacturing Solutions</h2>
                            <p className="lead mb-4">
                                As your reliable <strong>sportswear clothing manufacturer</strong>, our company understands that style, comfort and performance are the key components for your imminent success. Therefore, we create your products using our most efficient and advanced customization options,
                                including printing options, embroidery, fabric dyeing, washing, and precise cut-and-sew.
                            </p>
                            <button className='Breathable'>Launch Your Brand Now</button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Last Section */}
            <div className="last-section" style={{ backgroundImage: `url(${bgBack})` }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='gymnactic'>
                                <h1 className="last-title">Become a Market Giant with Unique Pajama Collection?</h1>
                                <button className='Brand-btn'>Start Now</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Custompajamamanufacturer;
