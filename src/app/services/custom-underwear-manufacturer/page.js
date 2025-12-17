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
  "/Images/underwear/limitless-customization1.jpg",
  "/Images/underwear/limitless-customization3.jpg",
  "/Images/underwear/limitless-customization5.jpg",
  "/Images/underwear/4.jpg"
];

const bgBack = "/Images/Sweatsuit/bgback.jpg";
const bgImage = "/Images/underwear/Seamless-&-Sustainable-Underwear-Production.jpg";
const Track = "/Images/underwear/Custom-Men’s-&-Women’s-Underwear.jpg";
const Tracksuit = "/Images/underwear/banner.jpg";

const Customunderwearmanufacturer = () => {
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
             <title> Underwear Manufacturer in the USA</title>
            <meta name="description" content="     As a leading underwear manufacturer in the USA, we specialize in crafting 
                                    premium-quality, soft, comfortable, and durable underwear for your clothing brand. We cater to fitness labels and businesses of all sizes, delivering the underwear that resonates with your brand's requirements.
                                    Seamless sustainable underwear production." />
            <link rel="canonical" href="/services/custom-underwear-manufacturer"></link>
            {/* Hero Section */}
            <section>
                <div className='huntingapparel' style={slideStyle(Tracksuit)}>
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="fw-bold mb-3 display-5">Underwear Manufacturer in the USA</h1>
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
                                    As a leading underwear manufacturer in the USA, we specialize in crafting 
                                    premium-quality, soft, comfortable, and durable underwear for your clothing brand. We cater to fitness labels and businesses of all sizes, delivering the underwear that resonates with your brand's requirements.
                                    Seamless sustainable underwear production.
                                </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                            <p className="lead">
                                As your trusted underwear and panty manufacturer, we combine excellent craftsmanship, comfort, and innovation to produce the finest undergarments for men and women.
                                Every stitch ensures quality. The precise construction enhances the support and movement.
                            </p>
                            <button className='Breathable'>Build Your Clothing Line</button>

                            <h2 className="besthunting">Custom Men's & Women's Underwear</h2>

                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light'>Briefs</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Boxers</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Bikinis</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Panties</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Boy Shorts</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Thongs</ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center text-center bg-light">
                <Container>
                    <h2 className="Customhunting">Trusted Custom Underwear Manufacturer for Private Label Brands</h2>
                    <p className="outdoor">
                        Every underwear product is accurately constructed. Our professionals carefully select the
                        fabrics to add flexibility, breathability, softness, and durability.
                        We work on additional features like custom colors and elastic branding to make 
                        your product market-ready.
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
                        <h2 className="fw-bold mb-3">Limitless Customization Options for You</h2>
                        <p className='trusted'>
                            As a reliable sports apparel manufacturer, we manufacture underwear
                            using modern customization techniques that make your products unique and exclusive to your brand.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Precise Cut and Sew Underwear Clothing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Color Selection
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Printing Options (DTF, DTG, Sublimation, Heat, and Vinyl)
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Fabric Selection
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Washing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Dyeing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Designs
                            </li>
                        </ul>

                        <button className='Breathable'>Customize Your Own Clothing</button>
                    </Col>
                </Row>
            </div>

            {/* CTA Section */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">Private Label Underwear Supplier for Your Brand's Identity</h2>
                            <p className="lead mb-4">
                                If you are looking for a trusted OEM partner, we are your one-stop solution. Our private labeling options include custom labels, logo placements, and tags that inform the customer about your products.
                                Our private labeling options help you become recognized in the market.
                            </p>
                            <button className='Breathable'>Begin Now</button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sweat Section */}
            <div className="sweat-section" style={{ backgroundImage: `url(${bgImage})` }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='underwear'>
                                <h2 className="sweat-title">Seamless & Sustainable Underwear Production</h2>
                                <p className="sweat-desc">
                                    We incorporate eco-friendly yarns, breathable materials, and recycled 
                                    materials to meet the global sustainability standards while maintaining quality, aesthetics, and comfort.
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
                                <h3 className="last-title">Start a Performance-Driven Underwear Brand with Us?</h3>
                                <button className='Brand-btn'>Partner With Us</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Customunderwearmanufacturer;
