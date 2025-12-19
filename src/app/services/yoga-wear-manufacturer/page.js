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
      <title>Build your brand with custom yoga wear manufacturer</title>
      <meta name="description" content="Custom yoga clothing manufacturers offer limitless
       customization options, private labeling, low MOQ, printing methods, cut-and-sew, and affordable prices. " />
      <link rel="canonical" href="/services/yoga-wear-manufacturer"></link>
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
                  Our expertise in crafting premium-quality yoga clothing makes us a reliable custom yoga wear manufacturer. We combine flexibility, style and comfort with performance fabrics to create products that elevate performance during yoga activities. We cater to sports brands,
                  fitness labels, retailers, and clothing lines by providing them with top-of-the-line yoga wear.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <p className="lead">
                We create iconic <strong className="linkbank"><a href="/services/gym-clothing-manufacturer">gym clothing</a></strong> that includes the perfect yoga wear for your brand. Our product line consists
                of popular and practical yoga clothes that help in exercises, yoga, cardio, and various fitness activities.
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
            Our <strong className="linkbank"><a href="/">sportswear manufacturing</a></strong> solutions and premium fabric options make the yoga wear promising for yoga practices. We incorporate high-performance materials like polyester blends, spandex, nylon-elastane blends, cotton,
            and recycled stretch fabrics, all engineered to add and enhance flexibility, ventilation, comfort, and softness.
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
           We offer advanced printing methods to imprint designs, patterns,
            colors, and graphics on clothes to give your products a unique look that reflects your brand’s vision.
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
              We are your trusted wholesale yoga clothing manufacturers that offer precise cut-and-sew manufacturing solutions with unlimited customization options. Our professionals cut the fabric precisely according to your requirements and sew it to give you a final product. We allow you to customize your products 
              the way you want. From fabric and color selection to designs and prints, your ideas become our guideline. 
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
                <h2 className="Yoga-title">
                  Private Label Yoga Clothing to Elevate Brand Identity
                </h2>
                <p className="yoga-desc">
                 You can build a unique identity for your brand with the help of our private label yoga clothing. We offer custom labels and tags to give your products a market-ready appearance. Using our customization 
                 services, you can personalize the labels and their placements to make your yoga wear appealing to customers.
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
                <h3 className="last-title">
                  Start and Level Up Your Brand with Our<br /> Custom
                  Manufacturing
                </h3>
                <p className="carefully">
               You can start either small or big with our low MOQ of 35 to 50 pieces per design and color. Our fast turnaround time can help you begin your venture faster. Our sample 
               manufacturing can help you choose the products carefully. Our doorstep delivery can save your time and efforts. 
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
