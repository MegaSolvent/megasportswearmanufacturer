"use client"; // (only if using /app directory in Next.js 13+)

import { Container, Row, Col } from "react-bootstrap";
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, ListGroupItem } from "reactstrap";

import "../style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images correctly for Next.js
import Image from "next/image";
const images = [
  "/Images/cycling/Ultimate-Customization-and-First-Class-Fabrics.jpg",
  "/Images/cycling/Ultimate-Customization-and-First-Class-Fabrics2.jpg",
  "/Images/cycling/Ultimate-Customization-and-First-Class-Fabrics3.jpg"
];



const Cyclingclothingmanufacturers = () => {
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
      className={`${className} slick-prev slick-next`}
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
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="textile-services-page">
      <title>Cycling clothing manufacturers for a unique product line</title>
      <meta name="description" content="Cycling jersey manufacturers craft outstanding
       jerseys, t-shirts, shorts, and more products using premium customization and production methods." />
      <link rel="canonical" href="/services/cycling-clothing-manufacturer"></link>
      <section>
        <div className='yogaapparel'
          style={{ backgroundImage: "url('/Images/cycling/banner.jpg')" }} >
          <div style={overlayStyle}></div>
          <div style={contentStyle}>
            <h1 className="tenistitle" >
              Custom Cycling Clothing Manufacturer in The USA
            </h1>
          </div>
        </div>
      </section>
      {/* 2nd section */}
      <section className="upersectiontop bg-light">
        <Container>
          <Row>
            <Col md={6} className="position-relative">
              <Image
                src="/Images/cycling/Premium-Cycling-Wear-Smooth-and-Comfortable-Ride.jpg"
                alt="Premium Cycling Wear"
                width={600}
                height={400}
                className="img-fluid rounded shadow"
              />
              <div className="uppersection">
                <FaTshirt />
                <p className="textour">
                  
                  Partner with a reliable custom <strong className="linkbank"><a href="/services/gym-clothing-manufacturer">athletic clothing manufacturer,</a></strong>, delivering high-quality, performance-driven cycling wear for clothing lines, retailers, fitness labels, and all small- and large-scale sports apparel brands.
                   Our end-to-end customization and excellent craftsmanship blend quality and affordability. 
                </p>
              </div>
            </Col>

            <Col md={6}>
              <p className="lead">
                Your trusted cycling apparel manufacturer produces practical and comfortable cycling wear.
              </p>
              <p className="lead">
                Every product that we make using our efficient manufacturing process ensures optimal comfort and
                performance on long and intense rides. From insulated winter cycling apparel to
                lightweight clothes for warm weather, we craft apparel with efficiency and precision.
              </p>
              <button className="Breathable">BEGIN NOW</button>
              <h2 className="besthunting">Premium Cycling Wear: Smooth and Comfortable Ride</h2>
              <div className="customjeake">
                <ListGroup>
                  <ListGroupItem className="custom bg-light">Cycling Shorts</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Cycling T-Shirts</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Cycling Jerseys</ListGroupItem>
                  <ListGroupItem className="printingg bg-light">Cycling Tops</ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3rd section */}
      <section className="hero-section d-flex align-items-center text-center bg-light">
        <Container>
          <h2 className="display-6 fw-bold mb-3">
            Cut and Sew Bicycle Bibshorts & Jersey Manufacturing
          </h2>
          <p className="outdoor">

            We are the cut-and-sew experts that create bicycle bibshorts and jerseys tailored with advanced technology
            and modern production methods. We incorporate precise construction techniques for strength, breathable fabrics
            to keep the body cool while cycling, anti-slip grippers for a firm grip, and mesh
            panels for ventilation. Our chamois enhanced bibshorts are ideal for padding for long-lasting comfort
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
            <h2 className="fw-bold mb-3">Ultimate Customization and First-Class Fabrics</h2>
            <p className="trusted">As reliable <strong className="linkbank"><a href="/">sports clothing manufacturers,</a></strong>, we craft cycling gear using our limitless customization options, versatile printing methods, and advanced fabrics. You can choose colors, patterns, designs,
              and materials of your own choosing to create a unique and market-ready product. </p>
            <ul className="list-unstyled mt-3">
              {[
                "Pantone Color Matching",
                "Seamless Stitching",
                "Custom Embroidery",
                "Custom Washing",
                "Printing Methods: sublimation, heat, vinyl, DTF, DTG and more",
              ].map((text, i) => (
                <li key={i} className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="me-2 text-success" /> {text}
                </li>
              ))}
            </ul>

            <button className="Breathable">Customization Begins Here</button>
          </Col>
        </Row>
      </div>

      {/* CTA Section */}
      <section className="cta-section bg-light text-white py-5">
        <Container>
          <Row className="text-center">
            <Col lg={12}>
              <h2 className="display-6 fw-bold mb-3">
                Private Label Cycling Apparel: Level Up Your Existence
              </h2>
              <p className="lead mb-4">
                We want to make your brand exclusive and unique in the market.
                Therefore, our private labeling options are the best for you to stand out. We offer logo customization,
                custom tags, and labels that create and enhance your brand’s identity.

              </p>
              <button className="Breathable">Inquire Now</button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Strong Clothing Line Section */}
      <div className="hero-section"
        style={{ backgroundImage: "url('/Images/cycling/Choose-Us-to-Build-a-Strong-Clothing-Line.jpg')" }} >


        <Container>
          <Row>
            <Col md={12}>
              <div className="cyc-sublimation">
                <h2 className="Golf-Polo">Choose Us to Build a Strong Clothing Line</h2>
                <p className="Golf-desc">
                  Let’s build your cycling collection with the most promising customer services. Our low MOQ (minimum order quantity) of 35 to 50 pieces per color and design helps you start efficiently. Our fast turnaround time
                  can help you launch your brand at a faster pace. We offer doorstep delivery to save your time and efforts.
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
              <div className="golfapp">
                <h3 className="last-title">Ready to Build a Successful Cycling Apparel Brand?</h3>
                <button className="Brand-btn">Start Right Away</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cyclingclothingmanufacturers;
