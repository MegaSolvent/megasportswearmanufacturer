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

// IMPORTANT: ye saari images public folder mein rakho:
// public/Images/Gym/...
// public/Images/Sweatsuit/bgback.jpg
const images =[
"/Images/Gym/Private-Label.jpg",
"/Images/Gym/Private-Label1.jpg",
"/Images/Gym/Private-Label2.jpg"
];




const Gymclothingmanufacturer = () => {
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
            type="button"
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

             <title>Gym Clothing Manufacturer</title>
            <meta name="description" content=" Your product selection becomes easy with our gym apparel wholesale range that includes versatile
                                    fitness wear for men and women. We specialize in designing gym wear with technical
                                    precision and contemporary aesthetics, making them ideal for intense workouts 
                                    and casual wear." />
            <link rel="canonical" href="/services/gym-clothing-manufacturer"></link>
            {/* Hero section */}
            
              <section>
                <div className='yogaapparel'
                  style={{ backgroundImage: "url('/Images/Gym/banner.jpg')"}} >
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="tenistitle" >
                         Gym Clothing Manufacturer
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
                                src="/Images/Gym/Gym-Appare.jpg"
                                alt="Gym apparel"
                                width={600}
                                height={400}
                                className="img-fluid rounded shadow"
                            />
                            <div className='uppersection'>
                                <FaTshirt />
                                <p className="textour">
                                  Your product selection becomes easy with our gym apparel wholesale range that includes versatile fitness wear for men and women. We specialize in designing gym wear with technical 
                                  precision and contemporary aesthetics, making them ideal for intense workouts and casual wear.
                                </p>
                            </div>
                        </Col>

                        <Col md={6}>
                            <p className="lead">
                                Partner with a leading gym wear manufacturer for the iconic workout clothes for your clothing line.
                                Launch and level up your brand with our custom fitness apparel developed uniquely according to your requirements.
                            </p>
                            <button className='Breathable'>BEGIN NOW</button>

                            <h2 className="besthunting">
                                Gym Apparel Manufacturers to Elevate Your Product line
                            </h2>




                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light'>T-shirts</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Leggings</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Sports Bras</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Hoodies</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Joggers</ListGroupItem>


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
                        As your reliable athletic &amp; workout clothing manufacturer, we offer a full range of services from sampling and prototyping to bulk production and quality control.
                    </h2>
                    <button className='Breathable'>Customize Your Clothes</button>
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
                                            alt={`Gym {i+ 1}`}
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
                        <h3 className="fw-bold mb-3">Private Label Fitness Apparel Manufacturing</h3>
                        <p className='trusted'>
                            We take pride in being reliable <strong className='linkbank'><a href="/">sports clothing manufacturers</a></strong>
                            to offer the best private label fitness apparel to ensure your products reflect your brand’s identity.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Logo
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Personalized Tags
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Color Flexibility and Fabric Diversity
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Labeling and Designs
                            </li>
                        </ul>

                        <button className='Breathable'>Get Your Sample</button>
                    </Col>
                </Row>
            </div>

            {/* CTA Section */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">
                                Start Your Gym Clothing Brand with Us
                            </h2>
                            <p className="lead mb-4">
                                Partner with a reliable workout clothes supplier because we believe in innovations,
                                performance and practicality. Reveal your design ideas and we will create the finest gym clothes for you.
                            </p>
                            <button className='Breathable'>
                                Customize Your Products
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Printing solutions section */}
            <div
                className="hero-section"
                style={{ backgroundImage: "url('/Images/Gym/The-Printing-Solutions-You-Need-for-Your-Gym-Wear-Brand.jpg')"}} 
            >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='Gymwear'>
                                <h2 className="Gym-Polo">
                                    The Printing Solutions You Need for Your<br /> Gym Wear Brand
                                </h2>
                                <p className="Gym-desc">
                                    As your trusted activewear manufacturer, we deliver vibrant appearance, precision,
                                    and durability with our printing solutions. Our printing methods include cut-and-sew,
                                    sublimation, heat printing, embroidery, washing, dyeing, and more.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Last section */}
            <div
                className="yoga-section"
                style={{ backgroundImage: "url('/Images/Sweatsuit/bgback.jpg')" }} >
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='last-gym'>
                                <h3 className="last-title">
                                    Choose us for advanced performance fabrics, fast turnaround time,
                                    flexible payment methods, bulk order discounts, and low MOQ options to make your brand stronger.
                                </h3>
                                <button className='Brand-btn'>
                                    Build Your Brand Now
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Gymclothingmanufacturer;
