'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { FaTshirt, FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images from public folder
const images = [
  "/Images/baseball/Unlimited-Customization-Options1.jpg",
  "/Images/baseball/Unlimited-Customization-Options2.jpg",
  "/Images/baseball/Unlimited-Customization-Options3.jpg",
  "/Images/baseball/Unlimited-Customization-Options4.jpg"
];

const bgBack = "/Images/Sweatsuit/bgback.jpg";
const bgImage = "/Images/baseball/Choose-the-Most-Productive-Baseball-Clothing-Manufacturer.jpg";
const Track = "/Images/baseball/Custom-Baseball-Clothing-Perfect-for-Your-Brand.jpg";
const Tracksuit = "/Images/baseball/banner.jpg";

const Baseballclothingmanufacturer = () => {
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
        backgroundColor: "rgba(0,0,0,24%)",
        zIndex: 1,
    };

    const contentStyle = {
        position: "relative",
        zIndex: 2,
        maxWidth: "800px",
        padding: "0 15px",
    };

    const Arrow = ({ className, style, onClick, direction }) => (
        <div className={className} style={{ ...style, display: 'block', zIndex: 3 }} onClick={onClick}>
            <span>{direction === 'left' ? '‹' : '›'}</span>
        </div>
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
              <title>Top Baseball jersey manufacturers in the USA for your brand</title>
      <meta name="description"  content="Baseball clothing manufacturers offer the best customization
       options, limitless bulk production, and private labeling services to help you launch your brand. " />  
  <link rel="canonical" href="/services/baseball-clothing-manufacturer"></link>
            {/* Hero Section */}
            <section>
                <div className='huntingapparel' style={slideStyle(Tracksuit)}>
                    <div style={overlayStyle}></div>
                    <div style={contentStyle}>
                        <h1 className="fw-bold mb-3 display-5">Baseball Jersey Manufacturers</h1>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="upersectiontop bg-light">
                <Container>
                    <Row>
                        {/* LEFT SIDE - IMAGES */}
                        <Col md={6} className="position-relative">
                            <img
                                src={Track}
                                alt="Main Textile"
                                className="img-fluid rounded shadow"
                            />
                            <div className='uppersection'>
                                <FaTshirt />
                                <p className="textour">
                                 Start your top-tier baseball apparel brand with the leading <strong className='linkbank'><a href="/">sports apparel manufacturers</a></strong> in the USA. We are the professional suppliers of
                                  custom baseball uniform team apparel engineered for performance, comfort, and durability. 
                                </p>
                            </div>
                        </Col>

                        {/* RIGHT SIDE - CONTENT */}
                        <Col md={6}>
                            <p className="lead">
                               Our custom baseball jerseys, shirts, jackets, and other products are ideal for your brand or team.
                                We customize every product precisely according to the 
                               requirements of our customers. We deliver bulk baseball jerseys tailored for unmatched value and performance.
                            </p>
                            <button className='Breathable'>Build Your Product Line</button>

                            <h2 className="besthunting">Custom Baseball Clothing Perfect for Your Brand</h2>

                            <div className="customjeake">
                                <ListGroup>
                                    <ListGroupItem className='custom bg-light'>Custom Baseball Jersey</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Custom Baseball Pant</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Custom Baseball Polo Shirt</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Custom Baseball Tracksuit</ListGroupItem>
                                    <ListGroupItem className='printingg bg-light'>Custom Baseball Jacket</ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center text-center bg-light">
                <Container>
                    <h2 className="Customhunting">Premium Private Labeling Options</h2>
                    <p className="outdoor">
                  We understand that you want your brand to stand out among the top competitors in the market. 
                  Therefore, we offer the best private labeling options for your products to reflect and enhance your brand’s
                   identity. From custom labels
                   and tags to precise sizing and placement, we make your products market-ready with a promising reputation.
                    </p>
                    <button className='Breathable'>Inquire Now</button>
                </Container>
            </section>

            {/* Image Carousel Section */}
            <div className="container carouselsec">
                <Row className="align-items-center">
                    {/* LEFT — IMAGE CAROUSEL */}
                    <Col xs={12} md={6}>
                        <div style={{ maxWidth: "900px", margin: "auto" }}>
                            <Slider {...settings}>
                                {images.map((src, i) => (
                                    <div key={i}>
                                        <img src={src} alt={`img-${i}`} style={{ padding: "0 10px", width: "100%", borderRadius: "8px" }} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>

                    {/* RIGHT — HEADING + DESCRIPTION + ICON LIST */}
                    <Col md={6} className="mt-4 mt-md-0">
                        <h2 className="fw-bold mb-3">Unlimited Customization Options</h2>
                        <p className='trusted'>
                            We manufacture and customize baseball clothing using our advanced customization methods that enrich products
                             with outstanding features. From colors and fabric selection 
                            to particular designs and prints, we allow you to personalize every piece according to your design ideas.
                        </p>

                        <ul className="list-unstyled mt-3">
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Sizing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Cut-and-Sew
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Embroidery
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Custom Printing
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <FaCheckCircle className="me-2 text-success" />
                                Washing & Dyeing
                            </li>
                        </ul>

                        <button className='Breathable'>Customize Your Apparel</button>
                    </Col>
                </Row>
            </div>

            {/* CTA Section */}
            <section className="cta-section bg-light text-white py-5">
                <Container>
                    <Row className="text-center">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-6 fw-bold mb-3">Top-of-the-Line Printing Options</h2>
                            <p className="lead mb-4">
                          We bring your ideas to life with unmatched clarity using our printing options. Our printing options include heat transfer printing that adds details and sharpness to products, sublimation printing that creates durable designs, vinyl printing that develops outstanding graphics, and other printing techniques like DTF (direct to film), DTG (direct to garment), Our advanced printing 
                          techniques ensure top-tier printing services to make your products market-ready with a unique identity.  
                            </p>
                            <button className='Breathable'>Learn More</button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sweat Section */}
            <div className="sweat-section" style={{ backgroundImage: `url(${bgImage})` }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='sweatsuit'>
                                <h2 className="sweat-title">Choose the Most Productive Baseball Clothing Manufacturer.</h2>
                                <p className="sweat-desc">
                              Our customer services make us one of the best baseball jersey manufacturers. We offer the fastest turnaround time. Our low MOQ of 35 to 50 pieces makes it easier for both small- and large-scale baseball brands. Our quality control ensures that every product meets
                               the global quality standards. We offer doorstep delivery to help you start your brand without any worries. 
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Last Section */}
            <div className="last-section" style={{ backgroundImage: `url(${bgBack})` }}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='gymnactic'>
                                <h3 className="last-title">Become a Brand with Us?</h3>
                                <button className='Brand-btn'>Begin Now</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Baseballclothingmanufacturer;
