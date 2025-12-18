'use client';

import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import { ListGroup, ListGroupItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'; // Keep your existing CSS
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Golfapparelmanufacturer = () => {
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

    // Carousel images from public folder
    const images = [
        "/Images/Golf/Private Label Golf Apparel Factory for Your Brand Identity..jpg",
        "/Images/Golf/Private Label Golf Apparel Factory for Your Brand Identity.jpg",
        "/Images/Golf/Private Label Golf Apparel Factory for Your Brand Identity0.jpg"
    ];

    const Arrow = ({ className, style, onClick, direction }) => (
        <button
            className={className + " custom-arrow"}
            style={{ ...style }}
            onClick={onClick}
        >
            <span>{direction === "left" ? "‹" : "›"}</span>
        </button>
    );

    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
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
   <title>  Golf Apparel Manufacturer</title>
            <meta name="description" content="  We offer end-to-end solutions ranging from fabric sourcing and stitching to complete bulk golf wear manufacturing.
                                    Our excellent production ensures that every product reflects your brand's 
                                    style and performance values." />
            <link rel="canonical" href="/services/golf-apparel-manufacturer"></link>
            <section>
                <div className='yogaapparel'
                    style={{ backgroundImage: "url('/Images/Golf/bannner.jpg')" }} >
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="tenistitle" >
                            Golf Apparel Manufacturer
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2 section */}
            <section className="upersectiontop bg-light">
                <Container>
                    <Row>
                        <Col md={6} className="position-relative">
                            <Image
                                src="/Images/Golf/1st-section.jpg"
                                alt="Golf wear"
                                width={600}
                                height={400}
                                className="img-fluid rounded shadow"
                                priority
                            />
                            <div className='uppersection'>
                                <FaTshirt />
                                <p className="textour">
                                    We offer end-to-end solutions ranging from fabric sourcing and stitching to complete bulk golf wear manufacturing.
                                    Our excellent production ensures that every product reflects your brand's 
                                    style and performance values.
                                </p>
                            </div>
                        </Col>

                        <Col md={6}>
                            <p className="lead">
                                <strong className='linkbank'><a href="/">Sportswear manufacturing solutions</a></strong> for premium quality golf clothing to cater to global brands, businesses,
                                players, and golf clubs.
                                We produce high-performance, custom golf products using modern materials and efficient production methods.
                            </p>
                            <button className='Breathable'>BEGIN NOW</button>
                            <h2 className="besthunting"> Custom Golf Uniforms: Excellence in Every Garment</h2>



                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light'>Golf polo shirts and shorts</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf trousers and pants</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf jackets and windbreakers</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf vests and rainwear</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf hoodies and pullovers</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf skirts and skorts</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Golf hoodies and pullovers</ListGroupItem>

                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* 3 section */}
            <section className="hero-section d-flex align-items-center text-center bg-light">
                <Container>
                    <p className="outdoor">
                        We offer wholesale golf polos for our retailers that cater to golfers with a wide
                        variety of golf essentials. Our high-quality products ensure that your brand
                        becomes an admired entity among your customers with the help of our manufacturing
                        capabilities.
                    </p>
                    <button className='Breathable'>Build Your Own Brand</button>
                </Container>
            </section>

            {/* Image carousel section */}
            <div className="container carouselsec">
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <div style={{ maxWidth: "900px", margin: "auto" }}>
                            <Slider {...settings}>
                                {images.map((src, i) => (
                                    <div key={i}>
                                        <Image
                                            src={src}
                                            alt={`Golf apparel ${i}`}
                                            width={400}
                                            height={300}
                                            style={{ padding: "0 10px", width: "100%", borderRadius: "8px" }}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>

                    <Col md={6} className="mt-4 mt-md-0">
                        <h3 className="fw-bold mb-3">Unlimited Customization Options</h3>
                        <p className='trusted'>
                            We offer a wide range of customization options for you to personalize your own clothing.
                        </p>
                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Embroidery
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Printing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Cut-and-Sew
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Fabric Washing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Fabric Dyeing
                            </li>
                        </ul>
                        <button className='Breathable'>BEGIN NOW</button>
                    </Col>
                </Row>
            </div>

            {/* Rest of sections remain same */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={12} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">
                                Private Label Golf Apparel Factory for <br /> Your Brand's Identity
                            </h2>
                            <p className="lead mb-4">
                                Start and expand your clothing line with our private labeling services. We offer tags and labels that showcase your brand's vision. Our customized logos, colors, materials, and trims make your products market-ready. We allow you to fully
                                customize any labels from hang tags to heat-printed tags and use them to 
                                form an identity in the industry.
                            </p>
                            <button className='Breathable'>Become a Brand with Us</button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="hero-section"
                style={{ backgroundImage: "url('/Images/Golf/Golf-Polo-Shirt-Manufacturer-with-Promising-Customer-Services.jpg')" }} >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='golf-sublimation'>
                                <h2 className="Golf-Polo">Golf Polo Shirt Manufacturer with Promising <br />Customer Services.
                                </h2>
                                <p className="Golf-desc">
                                    We are committed to quality and sustainability. We provide our customers with the best services possible.
                                     From sampling and prototyping to quality inspection and dispatching the order, we take care of every little 
                                     detail. Our low MOQ of 35 to 50 pieces per color and design allows you to start a brand with a minimum risk. Moreover, 
                                    our bulk order discount and flexible payment methods make your journey to becoming a market giant easier.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="last-section"
                style={{ backgroundImage: "url('/Images/Sweatsuit/bgback.jpg')" }} >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='golfapp'>
                                <h3 className="last-title">Ready to Launch and Elevate Your<br /> Golf Clothing Brand?</h3>
                                <button className='Brand-btn'>Start Building Your Brand</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Golfapparelmanufacturer;
