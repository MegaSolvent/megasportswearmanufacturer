"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "../style.css";

// Import images using Next.js aliases
const images = [
  "/Images/yoga/yoga1.jpg",
  "/Images/yoga/yoga2.jpg",
  "/Images/yoga/yoga3.jpg"
]

const Yogawearmanufacturer = () => {
  const slideStyle = (image) => ({
    height: "400px",
    backgroundImage: `url(${image.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
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
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="textile-services-page">
      {/* Banner */}

      <section>
        <div className='yogaapparel'
          style={{
            backgroundImage: "url('/Images/yoga/banner.jpg')"
          }} >
          <div style={overlayStyle}></div>
          <div style={contentStyle}>
            <h1 className="tenistitle" >
              Custom Yoga Wear Manufacturer

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
                src="/Images/yoga/Custom-Yoga.jpg"
                alt="Custom Yoga Wear"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
              <div className="uppersection">
                <FaTshirt />
                <p className="textour">
                  We create iconic gym clothing that includes the perfect yoga
                  wear for your brand. Our product line includes practical yoga
                  clothes that support yoga, cardio, and fitness activities.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <p className="lead">
                Our expertise in crafting premium-quality yoga clothing makes us
                a reliable custom yoga wear manufacturer. We combine flexibility,
                style, and comfort with performance fabrics to create products
                that excel during yoga sessions.
              </p>
              <button className="Breathable">BEGIN NOW</button>

              <h2 className="besthunting">
                Custom Yoga Wear Factory for Outstanding Products
              </h2>

              {/* ✅ Unchanged ListGroup Section */}
              <div className="customjeake">
                <ListGroup>
                  <ListGroupItem className="custom bg-light">Yoga Shirts</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Yoga Leggings</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Yoga Pants</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Yoga Bras</ListGroupItem>
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
            Premium Fabric Options for Your Yoga Clothing
          </h2>
          <p className="outdoor">
            Our <strong>sportswear manufacturing</strong> solutions and premium
            fabric options make yoga wear ideal for every practice. We blend
            spandex, nylon, cotton, and recycled fabrics for flexibility,
            comfort, and breathability.
          </p>
          <button className="Breathable">Inquire Now</button>
        </Container>
      </section>

      {/* Image Carousel */}
    <div className="container carouselsec">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div style={{ maxWidth: "900px", margin: "auto" }}>
              <Slider {...settings}>
                {images.map((src, i) => (
                  <div key={i}>
                    <Image
                      src={src}
                      alt={`Yogasuit ${i + 1}`}
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
            <h3 className="fw-bold mb-3">
              Advanced Printing Methods for Your Unique Product Line
            </h3>
            <p className="trusted">
              We use advanced printing to add logos, colors, and patterns,
              giving your yoga products a distinctive brand identity.
            </p>

            <ul className="list-unstyled mt-3">
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" />
                Sublimation Printing
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" />
                Heat Printing
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" />
                Vinyl Printing
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" />
                Direct to Garment Printing (DTG)
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" />
                Direct to Fabric Printing (DTF)
              </li>
            </ul>

            <button className="Breathable">Start Now</button>
          </Col>
        </Row>
      </div>

      {/* CTA Section */}
      <section className="cta-section bg-light text-white py-5">
        <Container>
          <Row className="text-center-yoga">
            <Col lg={8} className="mx-yoga">
              <h2 className="display-6 fw-bold mb-3">
                Cut and Sew Manufacturing with Limitless Customization
              </h2>
              <p className="yogacloth">
                We offer precise cut-and-sew manufacturing for yoga wear with
                full customization—from fabrics to designs—turning your ideas
                into wearable art.
              </p>
              <button className="Breathable">Customize Your Products</button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Private Label Section */}
      <div className="hero-section"
        style={{ backgroundImage: "url('/Images/yoga/yoga-label.jpg')" }} >
        <Container>
          <Row>
            <Col md={12}>
              <div className="Yogawear">
                <h1 className="Yoga-title">
                  Private Label Yoga Clothing to Elevate Brand Identity
                </h1>
                <p className="yoga-desc">
                  Build your brand identity with our private label yoga clothing
                  options. We offer custom tags and labels to make your products
                  stand out in the market.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Final CTA */}
      <div className="yoga-section"
        style={{ backgroundImage: "url('/Images/Sweatsuit/bgback.jpg')" }} >
        <Container>
          <Row>
            <Col md={12}>
              <div className="yogawearss">
                <h1 className="last-title">
                  Start and Level Up Your Brand with Our<br /> Custom
                  Manufacturing
                </h1>
                <p className="carefully">
                  Start small or big with our low MOQ of 35–50 pieces per design.
                  Fast production, sample options, and doorstep delivery save
                  your time and effort.
                </p>
                <button className="Brand-btn">Build Your Own Brand</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Yogawearmanufacturer;
