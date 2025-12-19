'use client';

import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style.css';



const Tennisclothingmanufacturer = () => {
  // Hero slide style
  const slideStyle = (image) => ({
    height: "400px",
    backgroundImage: `url("/Images/Tennis/banner.jpg")`,
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

  const images = [
 "/Images/Tennis/3rd-section.jpg", 
 "/Images/Tennis/3rd-sectionB.jpg",
  "/Images/Tennis/3rd-sectionA.jpg"
  ];

  const Arrow = ({ className, style, onClick, direction }) => (
    <button
      className={`${className} custom-arrow`}
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
         <title>Tennis Clothing Manufacturers for Your Brand’s Success</title>
            <meta name="description" content=" Top tennis clothes manufacturers helps you build your clothing
             line with unique products delivered with private labeling and limitless customization options." />
            <link rel="canonical" href="/services/tennis-clothing-manufacturer"></link>
      {/* Hero Section */}
      <section>
        <div className='yogaapparel'
          style={{ backgroundImage: "url('/Images/Tennis/banner.jpg')"}} >
          <div style={overlayStyle}></div>
          <div style={contentStyle}>
            <h1 className="tenistitle" >
              Custom Tennis Clothing Manufacturer
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
                src="/Images/Tennis/1st-section.jpg"
                alt="Tennis Clothing"
                className="img-fluid rounded shadow"
                width={600}
                height={500}
              />
              <div className='uppersection'>
                <FaTshirt />
                <p className="textour">
                  We help tennis clothing brands, teams,
                  and private labels start their clothing lines and build up a clothing
                  line that dominates the competitive market.
                </p>
              </div>
            </Col>

            {/* RIGHT SIDE - CONTENT */}
            <Col md={6}>
              <p className="lead">
                From custom tennis shorts and shirts to skirts and full uniforms, we offer fully customized products.
                We offer performance tennis clothing that
                features flexibility, breathability, and moisture-wicking ability to help players stay cool and active.
              </p>
              <button className='Breathable'>BEGIN NOW</button>

              <h2 className="besthunting">
                Types of Custom Tennis Apparel We Produce
              </h2>

              <div className="customjeake">
                <ListGroup>
                  <ListGroupItem className='custom bg-light'>Tennis shorts</ListGroupItem>
                  <ListGroupItem className='printingg bg-light'>Tennis polos</ListGroupItem>
                  <ListGroupItem className='printingg bg-light'>Tennis Skirts</ListGroupItem>
                  <ListGroupItem className='printingg bg-light'>Tennis Hats</ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Carousel Section */}
      <div className="container carouselsec">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div style={{ maxWidth: "900px", margin: "auto" }}>
              <Slider {...settings}>
                {images.map((src, i) => (
                  <div key={i}>
                    <Image
                      src={src}
                      alt={`Tennis apparel ${i + 1}`}
                      style={{ padding: "0 10px", width: "100%", borderRadius: "8px" }}
                      width={400}
                      height={300}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>

          <Col md={6} className="mt-4 mt-md-0">
            <h3 className="fw-bold mb-3">
              Custom Tennis Apparel Crafted with Popular Materials
            </h3>
            <p className='trusted'>
              Our <strong className='linkbank'><a href="/services/gym-clothing-manufacturer">custom athletic clothing</a></strong> includes high-quality tennis apparel crafted using the performance fabrics.
              We build custom tennis dresses considering the needs of athletes and tennis clothing lines. Each fabric gives products unique
              abilities like moisture absorbency, mobility, and resistance that help players perform well on the court.
            </p>

            <ul className="list-unstyled mt-3">
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" />
                Spandex-Polyester Blends
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" />
                Mesh Fabric
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" />
                Microfibers
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" />
                UV-Protective Fabrics
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" />
                Recycled Performance Fabric
              </li>
            </ul>

            <button className='Breathable'>Start Building Your Product Line Now</button>
          </Col>
        </Row>
      </div>

      {/* CTA Section */}
      <section className="cta-section bg-light text-white py-5">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="display-6 fw-bold mb-3">
                Make Your Clothes Unique with Advanced Customization Options
              </h2>
              <p className="lead mb-4">
                Our limitless and advanced customization options make us a premium sports clothing manufacturer.
                From fabric selection and color options to personalized prints and custom sizing, we offer everything you need.
                You can choose embroidery,
                washing, dyeing and printing methods to give your tennis apparel aesthetic appeal and practicality.
              </p>
              <button className='Breathable'>
                Customize Your Clothes
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Private Labeling Section */}
      <div
        className="hero-section"
          style={{ backgroundImage: "url(/Images/Tennis/5th-section.jpg)" }} 
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className='Tenis'>
                <h2 className="Tenis-title">
                  Private Labeling Options to Enhance Brand Identity
                </h2>
                <p className="Tanis-desc">
                  As your trusted tennis apparel supplier, we offer end-to-end private labeling options to enhance your brand's identity. Our products are designed with precision and delivered with custom tags,
                  labels, and logos of your choosing. We allow you to design your labels according to your brand's image.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Final CTA Section */}
      <div
        className="tenis-section"
        style={{ backgroundImage: "url('/Images/Sweatsuit/bgback.jpg')" }}
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className='performan_under'>
                <h3 className="last-title">
                  Your Performance-Driven Underwear Brand Awaits?
                </h3>
                <button className='Brand-btn'>Begin Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Tennisclothingmanufacturer;
