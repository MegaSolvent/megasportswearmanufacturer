'use client';

import { useEffect } from 'react';
import './style.css';


export default function TermsConditions() {
    useEffect(() => {
        // Bootstrap JS initialization if needed
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            <title> Sports Apparel Manufacturers | Terms and Conditions</title>
            <meta name="description" content="Read Terms & Conditions for custom sports apparel
             orders, turnaround time, delivery, shipment, cancellations, refunds, and client confidentiality." />
            <link rel="canonical" href="/terms-and-conditions"></link>


            {/* Custom Banner Styles with Animated Dots */}
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
                {/* Hero Banner with Animated Dots */}
                <section className="banner-bg text-center position-relative">
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
                    <div className="container position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-8 mx-auto">
                                <h1 className="banner-title mb-4">Terms & Conditions</h1>
                                <p className="lead fs-4 mb-4 opacity-90">
                                    Clear Policies for Custom Sports Apparel Orders & Delivery
                                </p>
                                <div className="d-flex justify-content-center flex-wrap gap-3">
                                    <button className="btn btn-light btn-lg px-4">
                                      <a href='/privacy-policy' >Read Policy</a>  
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <div className="container py-5">
                    {/* Title */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <h1 className="display-4 fw-bold text-center text-dark mb-3">
                                Sports Apparel Manufacturers | Terms and Conditions
                            </h1>
                            <p className="lead text-center text-muted fs-5">
                                Read Terms & Conditions for custom sports apparel orders, turnaround time, delivery, shipment, cancellations, refunds, and client confidentiality.
                            </p>
                        </div>
                    </div>

                    {/* Terms & Conditions—Legal Policies, Privacy & Shipping */}
                    <section className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg h-100">
                                <div className="card-body p-5">
                                    <h2 className="h3 fw-bold text-primary mb-4">Terms & Conditions—Legal Policies, Privacy & Shipping</h2>

                                    <h3 className="h4 fw-bold text-dark mt-4 mb-3">Terms & Conditions</h3>
                                    <p className="fs-5 lh-lg text-dark mb-4">
                                        Confidentiality<br />
                                        We always prioritize client confidentiality. We only share records with authorized agents, manufacturers/suppliers and legal personnel (if needed by the law). Clients may request the copies of the records by providing a prior notice. We encourage customers to keep and review the copies of their service-related documents. We regularly review the internal trails and protect the client privacy by keeping them confidential.
                                    </p>

                                    <h3 className="h4 fw-bold text-dark mt-4 mb-3">Delivery Charges & Shipping</h3>
                                    <p className="fs-5 lh-lg text-dark mb-3">
                                        Our Carriers:<br />
                                        DHL<br />
                                        FedEx<br />
                                        Dubai UPS<br />
                                        Skynet<br />
                                        (others as suitable)
                                    </p>
                                    <p className="fs-5 lh-lg text-dark mb-3">
                                        Estimated Delivery Times:<br />
                                        Priority FedEx/DHL: 4–5 days<br />
                                        Standard DHL (Canada & USA): Up to 2 weeks<br />
                                        Alaska & Hawaii: 2–3 weeks
                                    </p>
                                    <p className="fs-5 lh-lg text-dark">
                                        We donot own courier companies but facilitate shipping by partnering with the ones mentioned above. Therefore, we are not responsible for lost shipments. Clients are responsible for paying for shipment charges in case of loss.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Order Cancellation */}
                    <section className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg h-100 bg-gradient" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
                                <div className="card-body p-5">
                                    <h2 className="h3 fw-bold text-success mb-4">Order Cancellation</h2>
                                    <ul className="list-unstyled fs-5 lh-lg text-dark">
                                        <li className="mb-3">• Orders may be canceled within 24 hours of payment</li>
                                        <li className="mb-3">• Custom products cannot be canceled if they are in transit or delivered already.</li>
                                        <li>• If samples are not approved within 2 months, the order will be automatically canceled. Clients will be required to place a new order with full payment.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Delivery Delays & Refund Policy */}
                    <section className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg h-100">
                                <div className="card-body p-5">
                                    <h3 className="h4 fw-bold text-info mb-3">Delivery Delays</h3>
                                    <ul className="list-unstyled fs-5 lh-lg text-dark mb-4">
                                        <li>• Clients are advised to provide correct and accurate delivery/contact information and ensure someone can accept the shipment.</li>
                                        <li>• The company "Sports Apparel Manufacturers" is not responsible for unsuccessful deliveries due to incorrect addresses.</li>
                                        <li>• Couriers are the responsible entities after dispatch; we are not accountable for delays or lost shipments.</li>
                                    </ul>

                                    <h3 className="h4 fw-bold text-info mb-3">Refund Policy</h3>
                                    <ul className="list-unstyled fs-5 lh-lg text-dark">
                                        <li>• Returns and refunds are not accepted for customized products once dispatched.</li>
                                        <li>• Samples, before shipment, may be customized or replaced.</li>
                                        <li>• We provide clients with pictures, tech packs, and mockups for approval before bulk manufacturing.</li>
                                        <li>• Clients are responsible for any errors if they request direct bulk production without sample approvals.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Fabric & Production */}
                    <section className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg h-100 bg-gradient" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
                                <div className="card-body p-5">
                                    <h3 className="h4 fw-bold text-primary mb-3">Fabric Specifications</h3>
                                    <p className="fs-5 lh-lg text-dark mb-3">
                                        Sourcing and complete customization are available.<br />
                                        Small orders use market-available fabrics closest to requested specifications.<br />
                                        Knitted fabrics with unique blends require minimum 1000-piece orders.
                                    </p>

                                    <h3 className="h4 fw-bold text-primary mb-3">Commencement of Turnaround</h3>
                                    <p className="fs-5 lh-lg text-dark mb-3">
                                        Production commences upon the approval of the order summary, 24–48 hours after payment.<br />
                                        Changes cannot be made after forwarding to production.
                                    </p>

                                    <h3 className="h4 fw-bold text-primary mb-3">Production Delays</h3>
                                    <p className="fs-5 lh-lg text-dark">
                                        Production timelines depend on the customer's approval of the fabric's availability.<br />
                                        Standard turnaround time is 20-25 business days.<br />
                                        We keep our clients updated about the progress and delays.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Approval & Shipping Policy */}
                    <section className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg h-100">
                                <div className="card-body p-5">
                                    <h3 className="h4 fw-bold text-warning mb-3">Approval & Storage of Finished Goods</h3>
                                    <ul className="list-unstyled fs-5 lh-lg text-dark mb-4">
                                        <li>• Finished orders are stored for up to 15 days.</li>
                                        <li>• Extra storage requires USD 50 per day.</li>
                                        <li>• Clients must approve goods before shipment.</li>
                                        <li>• If approval is delayed, goods may be shipped at the company's discretion.</li>
                                        <li>• Faulty products after non-response are not eligible for refunds/amendments.</li>
                                        <li>• Orders canceled after 2 months are non-refundable.</li>
                                    </ul>

                                    <h2 className="h3 fw-bold text-info mb-4">Shipping Policy</h2>
                                    <h3 className="h4 fw-bold text-dark mb-3">Order Processing</h3>
                                    <p className="fs-5 lh-lg text-dark mb-3">
                                        Production timelines depend on order size, sample approval, and customization.<br />
                                        Orders are prepared for shipment upon production completion.
                                    </p>

                                    <h3 className="h4 fw-bold text-dark mb-3">Shipping Costs</h3>
                                    <p className="fs-5 lh-lg text-dark mb-3">
                                        We offer free shipment, depending on order volume and agreement.<br />
                                        Customs duties/taxes are the buyer's responsibility.
                                    </p>

                                    <h3 className="h4 fw-bold text-dark mb-3">Shipping Locations</h3>
                                    <p className="fs-5 lh-lg text-dark">
                                        We ship products worldwide, including the USA, the UK, Europe, and other international localities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <section className="row justify-content-center mt-5">
                        <div className="col-lg-8 text-center">
                            <h3 className="fw-bold text-dark mb-3">Ready to Place Your Order?</h3>
                            <p className="text-muted mb-4">Review our terms and start your custom sports apparel production.</p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <a href="/contact" className="btn btn-primary btn-lg px-5">Contact Us</a>
                                <a href="/order" className="btn btn-outline-primary btn-lg px-5">Start Order</a>
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
