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

// carousel images (imported via Next.js static routing)

const images = [
  "/Images/jacekt/limitless-customization-1.jpg",
  "/Images/jacekt/limitless-customization-2.jpg",
  "/Images/jacekt/limitless-customization-3.jpg",
  "/Images/jacekt/limitless-customization-4.jpg"
];

const Customjacketsmanufacturer = () => {
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
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="textile-services-page">
      <title> Custom Jackets Manufacture</title>
      <meta name="description" content="We are your go-to custom jacket supplier for the market-ready custom jackets
       and coats. We create jackets and coats according to purposes and your specific requirements. We manufacture
        high-quality outerwear for private labels, brands, wholesalers, and fashion labels. Our coats and jackets are also ideal
       for workwear and streetwear since they feature durability, aesthetics, comfort, and performance. " />
      <link rel="canonical" href="/services/custom-jackets-manufacturer"></link>
      {/* Banner Section */}
      <section>
        <div className='yogaapparel'
          style={{
            backgroundImage: "url('/Images/jacekt/bannewr.jpg')"
          }} >
          <div style={overlayStyle}></div>
          <div style={contentStyle}>
            <h1 className="tenistitle" >
              Custom Jackets Manufacture
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="upersectiontop bg-light">
        <Container fluid="md">
          <Row>
            {/* LEFT SIDE IMAGE */}
            <Col md={6} className="position-relative">
              <Image
                src="/Images/jacekt/Types-of-Jackets-We-Manufacture.jpg"
                width={600}
                height={300}
                className="img-fluid rounded shadow"
              />

              <div className="uppersection">
                <FaTshirt />
                <p className="textour">
                 As your trusted custom 
                 jackets manufacturer, we strive to give the most iconic types of 
                 jackets and coats that can dominate the market. We use premium-quality fabrics 
                 and modern production methods to create the jackets and coats.
                </p>
              </div>
            </Col>

            {/* RIGHT SIDE CONTENT */}
            <Col md={6}>
              <p className="lead">
           We are your go-to custom jacket supplier for the market-ready custom jackets and coats.
            We create jackets and coats according to purposes and your specific requirements.
             We manufacture high-quality outerwear for private labels, brands, wholesalers, and fashion labels.
              Our coats and jackets are 
           also ideal for workwear and streetwear since they feature durability,
            <strong className="linkbank"><a href="/services/gym-clothing-manufacturer">aesthetics</a></strong>, comfort, and performance. 
              </p>
              <button className="Breathable">Create Your Own Products</button>

              <h2 className="besthunting">Types of Jackets We Manufacture</h2>

              {/* ✅ ListGroup — remains unchanged */}
              <div className="customjeake">
                <ListGroup>
                  <ListGroupItem className="custom bg-light">Puffer Jacket</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Down Jacket</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Flame-Resistant Jacket</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Denim Jacket</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Fur Jacket</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Leather Jacket</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Varsity Jacket</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Windbreaker</ListGroupItem>
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
            Your Trustworthy Private Label Jacket Manufacturers
          </h2>
          <p className="outdoor">
           We professionally craft jackets using our private labeling options.
            From design ideas to finished products, we offer a full range of services. We offer customized
            logo placement, custom labels, tags, exclusive prints, and your preferred fabrics under one roof.
          </p>
          <button className="Breathable">Start Your Clothing Brand</button>
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
              Flexible Customization and Customer Services
            </h2>
            <p className="trusted">
           Our customer services and limitless customization methods
            help your brand prosper in the competitive apparel market. 
            </p>

            <ul className="list-unstyled mt-3">
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> Cut-and-Sew
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> Limitless Customization
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> Low MOQs (35-50 pieces)
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> Rapid Sampling
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> All Sizes According to Global Standards
              </li>
            </ul>

            <button className="Breathable">Request Quote</button>
          </Col>
        </Row>
      </div>

      {/* CTA Section */}
      <section className="cta-section bg-light text-white py-5">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="display-6 fw-bold mb-3">
                Top-of-the-Line Printing Methods for Unique Products
              </h2>
              <p className="lead mb-4">
             As your reliable <strong className="linkbank"><a href="/">clothing manufacturer,</a></strong> we give jackets and coats a unique appearance using advanced printing methods that help in embedding marvelous designs, logos, and prints. We incorporate heat printing, sublimation printing, DTF 
             (direct to film), DTG (direct to garment), vinyl printing, and many others, according to the products’ requirements.
              </p>
              <button className="Breathable">Launch Your Brand Now</button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* End to End Section */}
      <div className="sweat-section"
        style={{
          backgroundImage: "url('/Images/jacekt/55.jpg')"
        }} >
        <Container>
          <Row>
            <Col md={12}>
              <div className="sweatsuit">
                <h2 className="sweat-title">End-to-End Production Solutions</h2>
                <p className="sweat-desc">
                 We believe in providing the best production solutions to keep our customers satisfied.
                  We offer a fast turnaround time to deliver the final products within the promised time.
                   We make tech packs and mockups to give a visual representation of the products.
                    Our sample manufacturing gives you an idea of the final products.
                  We offer limitless bulk production for you to start big. Our doorstep delivery 
                  saves you time and unwanted hassles.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Final Section */}
      <div className="last-section"
        style={{ backgroundImage: "url('/Images/Sweatsuit/bgback.jpg')" }} >
        <Container>
          <Row>
            <Col md={12}>
              <div className="gymnactic">
                <h3 className="last-title">
                  Ready to Start Your Journey as a Clothing Brand?
                </h3>
                <button className="Brand-btn">Start Right Away</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Customjacketsmanufacturer;
