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

// Images (Next.js handles static imports easily)


const images = [
  "/Images/Short/Elevate-Your-Brand-with-Private-Label-Shorts-1.jpg",
"/Images/Short/Elevate-Your-Brand-with-Private-Label-Shorts-2.jpg",
 "/Images/Short/Elevate-Your-Brand-with-Private-Label-Shorts-3.jpg",
 "/Images/Short/Elevate-Your-Brand-with-Private-Label-Shorts-4.jpg"
]

const Customshortsmanufacturer = () => {
  // Style for banner slide
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
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="textile-services-page">
       <title>Build Your Shorts Brand with Top Custom Shorts Manufacturer</title>
            <meta name="description" content=" Leading custom shorts manufacturer creates 
            premium quality shorts using modern customization, private labeling, and advanced production methods.  " />
            <link rel="canonical" href="/services/custom-shorts-manufacturer"></link>
      {/* Banner */}

      <section>
        <div className='yogaapparel'
          style={{ backgroundImage: "url('/Images/Short/banner.jpg')" }} >

          <div style={overlayStyle}></div>
          <div style={contentStyle}>
            <h1 className="tenistitle" >
              Custom Shorts Manufacturer
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="upersectiontop bg-light">
        <Container fluid="md">
          <Row>
            {/* LEFT IMAGE */}
            <Col md={6} className="position-relative">
              <Image
                src="/Images/Short/Made-to-Measure-Shorts-by-Your-Trusted-Supplier.jpg"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
              <div className="uppersection">
                <FaTshirt />
                <p className="textour">
                 We are your go-to custom shorts manufacturers for high-quality, comfortable and durable shorts.
                  We help your brand begin its journey to success with the <strong className="linkbank"><a href="/">custom sports apparel</a></strong> and many
                    customization options. 
                </p>
              </div>
            </Col>

            {/* RIGHT CONTENT */}
            <Col md={6}>
              <p className="lead">
          As a professional activewear manufacturer, we specialize in crafting a variety of premium-quality shorts for sports teams, streetwear brands, fitness labels and more. We incorporate advanced production methods and materials to enhance the products' features, including performance, flexibility, and durability. 
          From gym shorts and fitness shorts to basketball
           shorts and athletic shorts, we create shorts in bulk for your brand
              </p>
              <button className="Breathable">Get Started Now</button>

              <h2 className="besthunting">
                Made-to-Measure Shorts by Your Trusted Supplier
              </h2>

              {/* ✅ SAME ListGroup SECTION (UNCHANGED) */}
              <div className="customjeake">
                <ListGroup>
                  <ListGroupItem className="custom bg-light">Denim Shorts</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Custom Mesh Shorts</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Custom Nylon Shorts</ListGroupItem>
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
            Mesh Shorts Manufacturers Offer Tech Advanced Shorts
          </h2>
          <p className="outdoor">
          We combine technology with fabric to bring out the best properties of shorts. Every pair is tailored using breathable mesh materials to add and enhance ventilation, moisture control and quick drying 
          that elevate the overall performance. Our mesh shorts are ideal for workout sessions, sports, and casual wear. 
          </p>
          <button className="Breathable">Build Your Own Brand</button>
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
              Elevate Your Brand with Private Label Shorts
            </h2>
            <p className="trusted">
              We aspire to make your brand recognized with private labeling 
              options. Our custom labels give your products an identity that stands out in the competitive market. 
            </p>

            <ul className="list-unstyled mt-3">
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> Custom Labels
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> Custom Tags
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheckCircle className="me-2 text-success" /> Custom Printed Logos
              </li>
            </ul>

            <button className="Breathable">Begin Now</button>
          </Col>
        </Row>
      </div>

      {/* CTA Section */}
      <section className="cta-section bg-light text-white py-5">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="display-6 fw-bold mb-3">
                Cut and Sew Expertise and Unlimited Customization
              </h2>
              <p className="lead mb-4">
            We believe in producing the best quality and aesthetically rich products using our customization options. Our customization techniques include embroidery, washing, dyeing, and several printing techniques. 
            Our cut and sew shorts are made with precision by our professionals, making shorts exactly to your requirements.
              </p>
              <button className="Breathable">Start Your Brand with Us</button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Printing Section */}
      <div className="sweat-section"
        style={{ backgroundImage: "url('/Images/Short/Modern-Printing-Methods-for-Stunning-Shorts.jpg')" }} >
        <Container>
          <Row>
            <Col md={12}>
              <div className="sweatsuit">
                <h2 className="sweat-title">Modern Printing Methods for Stunning Shorts</h2>
                <p className="sweat-desc">
                 We use the modern and advanced printing methods to create outstanding shorts
                  for your brand. Our printing methods include sublimation printing, heat printing, 
                  vinyl printing, DTF (direct-to-film), DTG (direct-to-garment), and more. 

                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Final CTA Section */}
      <div className="last-section"
        style={{ backgroundImage: "url('/Images/Sweatsuit/bgback.jpg')" }} >
        <Container>
          <Row>
            <Col md={12}>
              <div className="gymnactic">
                <h3 className="last-title">Choose Us for the Best Customer Services</h3>
                <button className="Brand-btn">Start Building Your Brand</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Customshortsmanufacturer;
