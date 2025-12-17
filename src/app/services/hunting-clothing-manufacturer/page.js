"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import "../style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Image imports (Next.js style)
const images = [
  "/Images/hunting/Cut-and-Sew-Expertise-and-Superior-Craftsmanship1.jpg",
  "/Images/hunting/Cut-and-Sew-Expertise-and-Superior-Craftsmanship2.jpg",
  "/Images/hunting/Cut-and-Sew-Expertise-and-Superior-Craftsmanship3.jpg",
  "/Images/hunting/Cut-and-Sew-Expertise-and-Superior-Craftsmanship4.jpg"
]


const HuntingclothingManufacturer = () => {
  // Common style for banners
  const slideStyle = (image) => ({
    height: "400px",
    backgroundImage: `url(${image.src})`,
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
      className={`${className} custom-arrow`}
      style={style}
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
    arrows: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="textile-services-page">
           <title>Hunting Apparel Manufacturer</title>
            <meta name="description" content="  Our custom hunting gear is built for performance, stealth, and comfort — ideal for hunters,
                   outdoor enthusiasts, and active brands wanting top-tier quality gear." />
            <link rel="canonical" href="/services/hunting-clothing-manufacturer"></link>
      {/* Banner */}

         <section>
        <div className='yogaapparel'
          style={{ backgroundImage: "url('/Images/hunting/banner.jpg')"}} >
        
          <div style={overlayStyle}></div>
          <div style={contentStyle}>
            <h1 className="tenistitle" >
          Hunting Apparel Manufacturer
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="upersectiontop bg-light">
        <Container>
          <Row>
            {/* LEFT SIDE - IMAGE */}
            <Col md={6} className="position-relative">
              <Image
                src="/Images/hunting/the-best-hunting.jpg"
                alt="Main Hunting Clothing"
                 width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
              <div className="uppersection">
                <FaTshirt />
                <p className="textour">
                  Our custom hunting gear is built for performance, stealth, and comfort — ideal for hunters,
                   outdoor enthusiasts, and active brands wanting top-tier quality gear.
                </p>
              </div>
            </Col>

            {/* RIGHT SIDE - CONTENT */}
            <Col md={6}>
              <p className="lead">
                As your reliable camouflage clothing manufacturer, we craft premium hunting apparel for durability and performance in all terrains. Our expertise supports brands, retailers, and labels worldwide.
              </p>
              <button className="Breathable">BEGIN NOW</button>

              <h2 className="besthunting">The Best Hunting Wear You Need</h2>

              {/* ✅ Unchanged ListGroup Section */}
              <div className="customjeake">
                <ListGroup>
                  <ListGroupItem className="custom bg-light">Custom Jackets</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Custom Camouflage Gear</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Custom Vests</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Custom Base Layers</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Custom Pants</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Custom Bibs</ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-center bg-light">
        <Container>
          <h2 className="Customhunting">
            Custom Hunting Clothing for Your Brand
          </h2>
          <p className="outdoor">
            As outdoor clothing specialists, we build tailored hunting apparel to reflect your brand’s vision —
            from custom fabrics to precision sizing and design.
          </p>
          <button className="Breathable">Start Your Hunting Clothing Brand</button>
        </Container>
      </section>

      {/* Image Carousel Section */}
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

          {/* RIGHT — DESCRIPTION */}
          <Col md={6} className="mt-4 mt-md-0">
            <h3 className="fw-bold mb-3">
              Cut and Sew Expertise and Superior Craftsmanship
            </h3>
            <p className="trusted">
              As leading <strong>sports apparel manufacturers</strong>, we offer
              precision craftsmanship built for durability and flexibility using
              our cut-and-sew experience and advanced production methods.
            </p>

            <ul className="list-unstyled mt-3">
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> Tailored Design
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> Custom Sizing
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> Precise Shaping
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> Perfect Construction
              </li>
            </ul>

            <button className="Breathable">Request a Quote</button>
          </Col>
        </Row>
      </div>

      {/* CTA Section */}
      <section className="cta-section bg-light text-white py-5">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="display-6 fw-bold mb-3">
                Private Labeling for Your Hunting Apparel
              </h2>
              <p className="lead mb-4">
                Our private labeling options give your brand a distinct market identity.
                Customize labels, tags, and placement — designed to represent your brand’s vision and excellence.
              </p>
              <button className="Breathable">Get Started Today</button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Final Info Section */}
      <div className="sweat-section" 
            style={{ backgroundImage: "url('/Images/hunting/55.jpg')" }}>
        <Container>
          <Row>
            <Col md={12}>
              <div className="sweatsuit">
                <h2 className="sweat-title">We Are the Best Option for You</h2>
                <p className="sweat-desc">
                  Work with the best hunting clothing manufacturer. Low MOQ (35–50 pieces), quick sampling, fast turnaround, and doorstep delivery make branding effortless.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Ending Section */}
      <div className="last-section"
       style={{ backgroundImage: "url('/Images/Sweatsuit/bgback.jpg')" }} >
        <Container>
          <Row>
            <Col md={12}>
              <div className="sweatset">
                <h3 className="last-title">
                  Ready to Become a Brand with the Top Hunting Apparel Manufacturer?
                </h3>
                <button className="Brand-btn">Get Quote</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HuntingclothingManufacturer;
