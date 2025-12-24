'use client';
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import './style.css';
const AboutPage = () => {

    const contentStyle = {
        position: "relative",
        zIndex: 2,
        maxWidth: "900px",
        padding: "0 15px",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    };

    return (
        <div className="about-page bg-white">


            <title> About Sports Apparel Manufacturers | Custom Sports Clothing </title>
            <meta name="description" content="Sports Apparel Manufacturers offer
             custom production, premium fabrics, low MOQ, fast turnaround time, doorstep delivery,
              and customer-oriented services." />
            <link rel="canonical" href="/about"></link>


            <section
                className="position-relative d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: "url('/Images/about us page/banner.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "350px",
                }}
            >
                {/* Overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
                ></div>

                {/* Content */}
                <div className="container position-relative z-2">
                    <h1 className="fw-bold display-5 text-white text-center">
                        About Us
                    </h1>
                </div>
            </section>

            {/* ABOUT US SECTION */}
            <section className="aboutbgound">
                <Container>
                    <div className="mainabu">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mianabout">
                                    <p className="sportaparel">
                                        We are the <strong className='linkbank'> <a href="/">Sports Apparel Manufacturers,</a></strong> top sports clothing suppliers in the USA.
                                        We cater to clothing brands, retailers, startups, established clothing lines,
                                        athletic teams, wholesalers, and small- and large-scale apparel businesses.
                                        With the help of our top-of-the-line customer services, we help our customers develop
                                        their product lines and launch their brands.
                                        We help them evolve in the competitive clothing industry.
                                    </p>
                                    <p className="mnufacturer">
                                        For many years, Sports Apparel Manufacturers has been working closely with brands of all scales. We have a strong reputation, given the fact that most of our clients are well-set and running their businesses smoothly globally.
                                        Our advanced production facility is located in Pakistan. We are registered in the USA.
                                    </p>
                                    <button className="btn btn-white">Talk to Us</button>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <div className="position-relative">
                                    <img
                                        src="/Images/about us page/22.jpg"
                                        className="img-fluid rounded shadow"
                                        alt="Fitness model"
                                        width="100%"
                                        height="auto"
                                    />
                                </div>





                            </div>
                        </div>
                    </div>
                </Container>




            </section>
            {/* backimg_upersection  */}
            <div className="row">
                <div className="col-md-4">
                    <div className="khalisection"></div>
                </div>
                <div className="col-md-8 text-center">
                    <div className="bagimg">
                        <img
                            src="/Images/about us page/1.jpg"
                            className="img-fluid rounded shadow"
                            alt="Background image"
                            width="80%"
                            height="auto"
                        />
                    </div>
                </div>
            </div>


            {/* MISSION / VISION */}
            <section className="py-5 bg-white">
                <Container className="text-center">
                    <h2 className="mb-3 text-uppercase">Our Mission/Vision</h2>
                    <p className="mission">
                        Our mission is to provide our customers with end-to-end production solutions that include limitless customization options, limitless manufacturing, and premium-quality products.
                        Our vision is to understand the requirements of our clients and offer them the best possible solutions for the success of their clothing lines.

                    </p>
                </Container>
            </section>

            {/* USP SECTION */}
            <section className="py-5">
                <Container>
                    <div className="row align-items-center">
                        <div className="col-md-8 mb-4 mb-md-0 ourcustomer">
                            <h2 className="text-center text-uppercase mb-4">
                                Our Unique Selling Proposition (USP)
                            </h2>
                            <div className="orientation">
                                <p>Our customer-oriented services make us the best in business.</p>
                                <ul className="list-abstyle">
                                    <li>• Low MOQ (35 to 50 pieces)</li>
                                    <li>• Premium Fabric Sourcing</li>
                                    <li>• Fast turnaround time</li>
                                    <li>• Sample Manufacturing</li>
                                    <li>• Tech Packs and Digital Mockups</li>
                                    <li>• Bulk Production</li>
                                    <li>• Quality Control</li>
                                    <li>• Free shipment</li>
                                    <li>• Doorstep Delivery</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 text-center"></div>
                    </div>
                </Container>
            </section>

            {/* MANUFACTURING PROCESS */}
            <Container fluid>
                <section className="py-5 text-white">
                    <div className="row align-items-stretch g-0">
                        <div className="col-md-4">
                            <img
                                src="/Images/about us page/444.jpg"
                                className="img-fluid h-100 w-100 object-fit-cover"
                                alt="Manufacturing process"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-4 bg-dark customer p-4">
                            <h3 className="text-uppercase mb-4">Our Manufacturing Process</h3>
                            <div className="mb-3">
                                <h6 className="text-uppercase mb-1">1. Contact us</h6>
                                <p className="mb-0">
                                    Our customers contact us through email, phone number, and inquiry forms on the website.
                                    Once you get in touch with us, share your design ideas or requirements with us to commence the next step.
                                </p>
                            </div>
                            <div className="mb-3">
                                <h6 className="text-uppercase mb-1">2. Creating the designs</h6>
                                <p className="mb-0">
                                    Once you submit the design ideas, our professionals will turn the raw ideas
                                    into digital products for you to have a look. The next step begins after your approval.
                                </p>
                            </div>
                            <div className="mb-3">
                                <h6 className="text-uppercase mb-1">3. Tech packs & mockups</h6>
                                <p className="mb-0">
                                    Our representative will share the tech packs and digital mockups with you that contain all
                                    the information about your products, including sizes, fabrics, patterns, and designs.
                                </p>
                            </div>
                            <div className="mb-3">
                                <h6 className="text-uppercase mb-1">4. Sample making</h6>
                                <p className="mb-0">
                                    Upon your approval, we will create samples of your products to
                                    give you the final physical look. In case you want to make changes, we will take care of them. If you approve, we will begin the bulk production.
                                </p>
                            </div>
                            <div className="mb-3">
                                <h6 className="text-uppercase mb-1">5. Doorstep delivery</h6>
                                <p className="mb-0">
                                    Once the production is completed, we will deliver the products
                                    to your doorstep using the most secure services.
                                </p>
                            </div>
                            <button className="btn btn-dark mt-2 text-uppercase">
                                Start your clothing line today
                            </button>
                        </div>
                        <div className="col-md-4">
                            <img
                                src="/Images/about us page/333.jpg"
                                className="img-fluid h-100 w-100 object-fit-cover baguperimg"
                                alt="Manufacturing process"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </section>
            </Container>

            {/* CONTACT FORM */}
            <section className="py-5">
                <Container>
                    <div className="row">
                        <div className="col-md-7 mb-4 mb-md-0">
                            <h4 className="text-uppercase mb-3">Contact Form</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        rows="3"
                                        className="form-control"
                                        placeholder="How can we help you?"
                                        required
                                    />
                                </div>
                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="privacy"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="privacy">
                                        I agree that my data is collected and stored.
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-danger">
                                    Get in touch
                                </button>
                            </form>
                        </div>
                        <div className="col-md-5 d-flex flex-column justify-content-center">
                            <h6 className="text-uppercase text-muted mb-2">Contact us</h6>
                            <h3 className="text-uppercase mb-2">Have questions?</h3>
                            <h3 className="text-uppercase">Get in touch!</h3>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default AboutPage;
