'use client';

import { useEffect } from 'react';
import './style.css';


export default function PrivacyPolicy() {
    useEffect(() => {
        // Bootstrap JS initialization if needed
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            <title> Sports Apparel Manufacturers | Privacy Policy </title>
            <meta name="description" content=" Learn about our privacy policies to strengthen the professional bond. 
            Explore the non-disclosure policy and marketing practices to trust us with your designs. " />
            <link rel="canonical" href="/privacy-policy"></link>

            {/* Custom Banner Styles */}
            <style jsx>{`
        .banner-bg {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%);
          color: white;
          padding: 80px 0;
          overflow: hidden;
          position: relative;
        }
        .banner-title {
          font-size: 3rem;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.6);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        .dot:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .dot:nth-child(2) { top: 20%; right: 15%; animation-delay: 0.6s; }
        .dot:nth-child(3) { top: 50%; left: 5%; animation-delay: 1.2s; }
        .dot:nth-child(4) { top: 70%; right: 25%; animation-delay: 1.8s; }
        .dot:nth-child(5) { bottom: 30%; left: 20%; animation-delay: 2.4s; }
        .dot:nth-child(6) { top: 40%; right: 10%; animation-delay: 3s; }
        .dot:nth-child(7) { bottom: 50%; left: 30%; animation-delay: 3.6s; }
        .dot:nth-child(8) { top: 15%; left: 40%; animation-delay: 4.2s; }
        .dot:nth-child(9) { bottom: 20%; right: 35%; animation-delay: 4.8s; }
        .dot:nth-child(10) { top: 65%; left: 60%; animation-delay: 5.4s; }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        @media (max-width: 768px) {
          .banner-title { font-size: 2rem; }
          .dot { width: 6px; height: 6px; }
        }
      `}</style>

            <div className="min-vh-100 bg-light">
                {/* Hero Banner */}
                <section className="banner-bg text-center position-relative overflow-hidden">
                       <div className="position-absolute top-0 start-0 w-100 h-100 p-4">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 mx-auto">
                                <h1 className="banner-title mb-4">Privacy Policy</h1>
                                <p className="lead fs-4 mb-4 opacity-90">
                                    Strengthening Trust with Our Commitment to Your Privacy
                                </p>
                                <div className="d-flex justify-content-center flex-wrap gap-3">

                                    <button className="policy">
                                        <a href='/privacy-policy' >Read Policy</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Subtle animated overlay */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
                        <div className="position-absolute" style={{ top: '20%', left: '10%' }}>◆</div>
                        <div className="position-absolute" style={{ top: '60%', right: '15%' }}>◆</div>
                        <div className="position-absolute" style={{ bottom: '20%', left: '20%' }}>◆</div>
                    </div>
                </section>

                {/* Content Sections */}
                <div className="container py-5">
                    {/* Title */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <h1 className="display-4 fw-bold text-center text-dark mb-3">
                                Sports Apparel Manufacturers | Privacy Policy
                            </h1>
                            <p className="lead text-center text-muted fs-5">
                                Learn about our privacy policies to strengthen the professional bond. Explore the non-disclosure policy and marketing practices to trust us with your designs.
                            </p>
                        </div>
                    </div>

                    {/* Privacy Policy Statement */}
                    <section className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg h-100">
                                <div className="card-body p-5">
                                    <h2 className="h3 fw-bold text-primary mb-4">Privacy Policy Statement</h2>
                                    <p className="fs-5 lh-lg text-dark">
                                        We are the leading sports apparel manufacturers that cater to every need of customers. We are fully committed to protecting the client’s privacy. Any data or information collected from the website visitors is accessed only by authorized company personnel on a need-to-know basis. We analyze our data practices to ensure smooth and secure delivery of high-quality services to our customers. Personal information may be disclosed in case of legal matters only.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Design Non-Disclosure Policy */}
                    <section className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg h-100 bg-gradient" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
                                <div className="card-body p-5">
                                    <h2 className="h3 fw-bold text-success mb-4">Design Non-Disclosure Policy</h2>
                                    <p className="fs-5 lh-lg text-dark">
                                        We focus on providing exceptional services to our customers. We are dedicated to meeting our customer requirements and expectations with the help of our premium-quality products, showcased on the website.
                                    </p>
                                    <p className="fs-5 lh-lg text-dark">
                                        We respect if our clients want to keep the design ideas and details confidential. Hence, we ensure 100% privacy and confidentiality. We can remove content from our website upon customer request. However, confidentiality services come with premium client status, which can be availed by placing cumulative orders totaling USD 10,000 through our platform. Customers can place orders in multiple installments to reach the required amount.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Marketing Policy */}
                    <section className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg h-100">
                                <div className="card-body p-5">
                                    <h2 className="h3 fw-bold text-info mb-4">Marketing Policy</h2>
                                    <p className="fs-5 lh-lg text-dark">
                                        We are inclined towards the growth and success of our customers. Our prime objective is to support the beginners, emerging brands, and established clothing lines by helping them achieve measurable growth and improved market visibility. We try to accomplish the success by utilizing effective marketing strategies and promotional ways that help in enhancing the presence. Our work helps in connecting brands with broader audiences and new business opportunities. We help our clients reach their full potential through our marketing practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <section className="row justify-content-center mt-5">
                        <div className="col-lg-8 text-center">
                            <h3 className="fw-bold text-dark mb-3">Ready to Trust Us with Your Designs?</h3>
                            <p className="text-muted mb-4">Contact our team for premium confidentiality services.</p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <a href="/contact" className="btn btn-primary btn-lg px-5">Get Started</a>
                                <a href="/contact" className="btn btn-outline-primary btn-lg px-5">Place Order</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Bootstrap JS CDN */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </>
    );
}
