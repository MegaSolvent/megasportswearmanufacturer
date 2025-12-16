"use client"; // Only needed if you're using the /app directory in Next.js 13+

import { Container, Row, Col } from "react-bootstrap";
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "reactstrap";

import "../style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";



// Image imports (optimized with Next.js)

const images = [
  "/Images/gymnastic/A-full-Range-of-Customization-Options1.jpg",
  "/Images/gymnastic/A-full-Range-of-Customization-Options2.jpg",
  "/Images/gymnastic/A-full-Range-of-Customization-Options3.jpg",
  "/Images/gymnastic/A-full-Range-of-Customization-Options4.jpg"
];


const Gymnasticsleotardmanufacturers = () => {
  // Common style for each slide
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


  // Minimal empty arrow placeholders
  const Arrow = () => <></>;

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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="textile-services-page">
      {/* Hero Banner */}
     <section>
        <div className='yogaapparel'
          style={{ backgroundImage: "url('/Images/gymnastic/banner.jpg')"}} >
          <div style={overlayStyle}></div>
          <div style={contentStyle}>
            <h1 className="tenistitle" >
            Gymnastics Leotard Manufacturer
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="upersectiontop bg-light">
        <Container>
          <Row>
            <Col md={6} className="position-relative">
              <Image
                src="/Images/gymnastic/high-quality-gymnastic.jpg"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
              <div className="uppersection">
                <FaTshirt />
                <p className="textour">
                  Being a reliable gymnastics apparel company, we manufacture products for durability, performance, and style. Our custom gymnastics sportswear ensures excellence in aerobic gymnastics, tumbling, practicing acrobatics, and more.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <p className="lead">
                We are the gymnastics leotard manufacturer offering a perfect blend of elegance and comfort.
              </p>
              <button className="Breathable">Start Your Clothing Line</button>

              <h2 className="besthunting">High-Quality Gymnastics Clothing</h2>

              <div className="customjeake">
                <ListGroup>
                  <ListGroupItem className="custom bg-light">
                    Custom Dance Leotards
                  </ListGroupItem>
                  <ListGroupItem className="printingg bg-light">
                    Custom Gymnastics Leotards
                  </ListGroupItem>
                  <ListGroupItem className="printingg bg-light">
                    Custom Training Leotards
                  </ListGroupItem>
                  <ListGroupItem className="printingg bg-light">
                    Sleeveless Leotards
                  </ListGroupItem>
                  <ListGroupItem className="printingg bg-light">
                    Cap Sleeve Leotard
                  </ListGroupItem>
                  <ListGroupItem className="printingg bg-light">
                    Custom Unitards
                  </ListGroupItem>
                  <ListGroupItem className="printingg bg-light">
                    Competition Leotards
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Fabric Info */}
      <section className="hero-section d-flex align-items-center text-center bg-light">
        <Container>
          <h2 className="Customhunting">
            Fabric Options for Gymnastics Leotards
          </h2>
          <p className="outdoor">
            We believe in crafting the best gymnastics clothing using performance fabrics like polyester, nylon, and spandex to ensure durability, stretch, and shape retention.
          </p>
          <button className="Breathable">Inquire Now</button>
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
            <h2 className="fw-bold mb-3">
              A Full Range of Customization Options
            </h2>
            <p className="trusted">
              We allow brands to personalize their own clothing using our customization options. You have the power to shape your own products in your brand’s image.
            </p>

            <ul className="list-unstyled mt-3">
              {[
                "Custom Cut-and-Sew",
                "Custom Embroidery",
                "Custom Printing",
                "Custom Designs",
                "Fabric Washing",
                "Fabric Dyeing",
              ].map((text, index) => (
                <li key={index} className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="me-2 text-success" /> {text}
                </li>
              ))}
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
                Premium Printing Methods
              </h2>
              <p className="lead mb-4">
                We use advanced printing methods like heat printing, sublimation, DTG, DTF, and vinyl printing to give your gymnastics clothing eye-catching detail.
              </p>
              <button className="Breathable">Learn More</button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Private Label Section */}
      <div
        className="sweat-section"
         style={{ backgroundImage: "url('/Images/gymnastic/55.jpg')"}} 
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className="sweatsuit">
                <h1 className="sweat-title">
                  Private Labeling for Your Brand’s Strong Market Presence
                </h1>
                <p className="sweat-desc">
                  Our private labeling services are ideal for enhancing your brand identity. Customize your tags, labels, and placement to stand out.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Final CTA */}
      <div
        className="last-section"
         style={{ backgroundImage: "url('/Images/Sweatsuit/bgback.jpg')" }} 
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className="gymnactic">
                <h1 className="last-title">
                  Build Your Brand from Scratch — Customize Your Own Products
                </h1>
                <button className="Brand-btn">Begin Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Gymnasticsleotardmanufacturers;
