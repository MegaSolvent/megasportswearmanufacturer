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
  "/Images/tracksuit/Custom-Tracksuits-with-Reliable-Manufacturing-Solutions1.jpg",
  "/Images/tracksuit/Custom-Tracksuits-with-Reliable-Manufacturing-Solutions2.jpg",
  "/Images/tracksuit/Custom-Tracksuits-with-Reliable-Manufacturing-Solutions3.jpg",
  "/Images/tracksuit/Custom-Tracksuits-with-Reliable-Manufacturing-Solutions4.jpg"
];

const bgBack = "/Images/Sweatsuit/bgback.jpg";
const bgImage = "/Images/tracksuit/55.jpg";
const Track = "/Images/tracksuit/ready-to-customize-tracksuit.jpg";
const Tracksuit = "/Images/tracksuit/banner.jpg";

const Customtracksuitmanufacturer = () => {
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
              <title>  Custom Tracksuit Manufacturers</title>
            <meta name="description" content="  We offer a full range of tracksuit products that are created using high-quality materials and excellent craftsmanship.
                                    Our designers sew every piece of thread with precision." />
            <link rel="canonical" href="/services/custom-tracksuit-manufacturer"></link>
            {/* Hero Section */}
            <section>
                <div className='huntingapparel' style={slideStyle(Tracksuit)}>
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="fw-bold mb-3 display-5">Custom Tracksuit Manufacturers</h1>
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
                                    We offer a full range of tracksuit products that are created using high-quality materials and excellent craftsmanship.
                                    Our designers sew every piece of thread with precision.
                                </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                            <p className="lead">
                                As one of the leading <strong>sportswear manufacturers,</strong> our expertise is in designing and producing
                                performance-driven, comfortable, and eye-catching tracksuits for fitness brands, sports teams, athletes,
                                and private labels. We deliver premium quality, whether you want gym-ready tracksuits or lifestyle clothing for your clothing line.
                            </p>
                            <button className='Breathable'>Start Your Clothing Line</button>

                            <h2 className="besthunting">Our Ready-to-Customize Tracksuit Options</h2>

                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light'>Tracksuit Pants</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Tracksuit Zipper Jackets</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Sweatsuits</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Trousers</ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center text-center bg-light">
                <Container>
                    <h2 className="Customhunting">Customize Your Tracksuits</h2>
                    <p className="outdoor">
                        Our custom tracksuits are built for optimal performance since we design and craft them using the most advanced and premium materials. We also specialize in design printed tracksuits using heat transfer printing,
                        sublimation, and several other methods to give the products promising details and lasting color quality.
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
                        <h2 className="fw-bold mb-3">Custom Tracksuits with Reliable Manufacturing Solutions</h2>
                        <p className='trusted'>
                            If you want a tracksuit supplier that offers end-to-end manufacturing solutions, we are the best choice for you. From creating
                            tech packs and digital mockups to sampling, bulk production, and packaging, we offer everything you crave.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Private Labeling & OEM Manufacturing Custom Branding
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Unlimited Bulk Production
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                In-House Designing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Technologically Advanced Personalization Options
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Branding
                            </li>
                        </ul>

                        <button className='Breathable'>Start Your Clothing Brand</button>
                    </Col>
                </Row>
            </div>

            {/* CTA Section */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">
                                Customizable Tracksuits: Your Idea Our Customization Skills
                            </h2>
                            <p className="lead mb-4">
                                As your trusted high-quality tracksuit manufacturer, ensuring that your ideas become reality is our responsibility. We combine flexibility, durability, comfort, fabrics, color creativity, and advanced personalization methods to create your ideal tracksuits. We offer limitless customization options including embroidery, printing, dyeing, washing, cut-and-sew, and more
                                for you to create the perfect products for your brand.
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
                                <h2 className="sweat-title">Choose Us to Avail the Best Services</h2>
                                <p className="sweat-desc">
                                    We offer the best services to build trust that lasts forever. Considering the needs of
                                    clothing brands, we offer a low MOQ of 35 to 50 pieces, fast turnaround time,
                                    market-competitive prices, and doorstep delivery. Partner with us to start your brand with high possibilities of success.
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
                                <h3 className="last-title">Take Your Tracksuit Brand to the Next Level?</h3>
                                <button className='Brand-btn'>Begin Now</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Customtracksuitmanufacturer;
