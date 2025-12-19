'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import { ListGroup, ListGroupItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMPORTANT:
// In images ko public folder mein rakho:
// public/Images/Sweatsuit/slide1.jpg  etc.
const images = [
 "/Images/Sweatsuit/slide1.jpg",
    "/Images/Sweatsuit/slide2.jpg",
    "/Images/Sweatsuit/slide3.jpg"
];
 
const SweatsuitManufacturer = () => {
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
        backgroundColor: "rgba(0,0,0,0.24)",
        zIndex: 1,
    };

    const contentStyle = {
        position: "relative",
        zIndex: 2,
        maxWidth: "800px",
        padding: "0 15px",
    };



    const Arrow = ({ className, style, onClick, direction }) => (
        <button
            className={className + " custom-arrow"}
            style={{ ...style }}
            onClick={onClick}
            type="button"
        >
            <span>{direction === "left" ? "‹" : "›"}</span>
        </button>
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
                <title>Sweatsuit manufacturers | High-Quality Custom Sweatsuits </title>
            <meta name="description" content="Sweatsuit suppliers offer bulk sweatsuit 
            manufacturing with limitless customization options, low MOQ, premium fabrics, and affordable prices. " />
            <link rel="canonical" href="/services/sweat-suit-manufacturer"></link>
            {/* Hero banner */}
           
             <section>
                <div className='yogaapparel'
                  style={{ backgroundImage: "url('/Images/Sweatsuit/banner.jpg')" }} >
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="tenistitle" >
                           Custom Sweatsuits Manufacturer
                        </h1>
                    </div>
                </div>
            </section>

            {/* About section */}
            <section className="upersectiontop bg-light">
                <Container>
                    <Row>
                        <Col md={6} className="position-relative">
                            <Image
                                src="/Images/Sweatsuit/Custom-Sweatsuits.jpg"
                                alt="Custom Sweatsuits"
                                width={600}
                                height={400}
                                className="img-fluid rounded shadow"
                            />
                            <div className='uppersection'>
                                <FaTshirt />
                                <p className="textour">

                                Our reputation extends beyond just jogging suit manufacturers; we are the producers of custom
                                 sweatsuits designed to improve your style and performance. We craft your sweatsuits using modern fabrics
                                  like polyester blends, terry cloth, fleece and other advanced materials to ensure optimal comfort. 
                                Each piece is given a unique color palette and design to reflect your brand’s identity. 
                                </p>
                            </div>
                        </Col>

                        <Col md={6}>
                            <p className="lead">
                                Our specialty in crafting the best sweatsuits makes us a reliable sweatsuit and <strong className='linkbank'><a href="/">tracksuit manufacturer</a></strong>.
                                We cater to private labels, sports clubs, and brands that want premium-quality sweatsuits.
                                We have got you covered whether you need performance products or loungewear in the best designs.
                            </p>
                            <button className='Breathable'>BEGIN NOW</button>

                            <h2 className="besthunting">
                                Custom Sweatsuits: A Combination of Comfort &amp; Customization
                            </h2>

                            {/* Reactstrap hata ke simple list-group classes use ki */}




                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light'>Custom Cut-and-Sew</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Custom Printing with Various Options</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Custom Embroidery</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>ROUND NECK T-SHIRT</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Breathable and Flexible Fabric Options</ListGroupItem>


                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Hero text section */}
            <section className="hero-section d-flex align-items-center text-center bg-light">
                <Container>
                    <h2 className="Customhunting">
                        Private Labeling Solutions
                    </h2>
                    <p className="outdoor">
                        We are more than just a wholesale sweatsuits supplier. We are the manufacturers of
                         <strong className='linkbank'><a href="/">custom sports clothing</a></strong> with vast private labeling options. Whether you want a personalized
                          logo printed on the
                        sweatsuits or tags and labels customized according to your brand’s requirements, we have everything you want.
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
                                            alt={`Sweatsuit ${i + 1}`}
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
                        <h3 className="fw-bold mb-3">Efficient and Reliable Production</h3>
                        <p className='trusted'>
                            We want to become your trusted sweatsuit manufacturers that
                            handle every step, from design ideas and samples to bulk products, with absolute professionalism.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Product Designs
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Sourcing Materials
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Sample Production
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Bulk Production
                            </li>
                        </ul>

                        <button className='Breathable'>BEGIN NOW</button>
                    </Col>
                </Row>
            </div>

            {/* CTA section */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">
                                What We Offer to Make Your Brand Whole
                            </h2>
                            <p className="lead mb-4">
                                We believe in making your sweatsuit brand the best among other market giants. Therefore, we offer a wide range of services, including OEM manufacturing, limitless bulk production,
                                a low MOQ of 35 to 50 pieces, market-competitive prices, free shipment, and doorstep delivery.
                            </p>
                            <button className='Breathable'>
                                Become a Brand with Us
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Advanced printing section */}
            <div
                className="sweat-section"
                style={{ backgroundImage: "url('/Images/Sweatsuit/Advanced-Printing.jpg')"}}
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='sweatsuit'>
                                <h2 className="sweat-title">Advanced Printing Methods for You to Stand Out</h2>
                                <p className="sweat-desc">
                                    We design products with the most advanced printing methods to help you get unique products exclusive to your brand. We offer heat printing, sublimation printing, vinyl printing, digital printing,
                                    DTF (direct-to-film), DTG (direct-to-garment), and more.
                                </p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Last section */}
            <div
                className="last-section"
                style={{ backgroundImage: "url('/Images/Sweatsuit/bgback.jpg')" }} >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='sweatset'>
                                <h3 className="last-title">
                                    Ready to Partner with a Trusted Sweatsuit Manufacturer?
                                </h3>
                                <button className='Brand-btn'>
                                    Start Building Your Brand
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SweatsuitManufacturer;
