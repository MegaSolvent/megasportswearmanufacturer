'use client';

import Image from 'next/image';

function ContactPage() {
  return (
    <div>
          <title> Sportswear Manufacturing || Contact Us</title>
      <meta name="description"  content="Have questions about custom sportswear, bulk production, or private-label manufacturing? 
                Our team is here to help! We provide fast support for quotes, samples, pricing, fabric options, 
                and full-cycle sportswear production!" />  
  <link rel="canonical" href="/contact"></link>


      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
              <p className="lead mb-0">
                Have questions about custom sportswear, bulk production, or private-label manufacturing? 
                Our team is here to help! We provide fast support for quotes, samples, pricing, fabric options, 
                and full-cycle sportswear production!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <Image 
                src="/Images/Homeimages/1st.jpg" 
                alt="Contact Image" 
                className="img-fluid rounded shadow-lg" 
                width={600}
                height={400}
                style={{ height: '400px', objectFit: 'cover' }}
                priority
              />
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="card p-4 shadow-sm border-0 h-100">
                <div className="card-body">
                  <h3 className="mb-4">Get In Touch</h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Name *</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Phone</label>
                        <input type="tel" className="form-control" />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email *</label>
                      <input type="email" className="form-control" required />
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Message *</label>
                      <textarea 
                        rows={4} 
                        className="form-control" 
                        required 
                        placeholder="Aapka message yahan likhein..."
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center h-100 contact-card">
              <div className="contact-icon-wrap mx-auto mt-4 fs-1">🌎</div>
              <div className="card-body">
                <h5 className="mb-3">Address</h5>
                <p>3680 Wilshire Blvd Ste P04 - 1524 Los Angeles, CA 90010 United States</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center h-100 contact-card">
              <div className="contact-icon-wrap mx-auto mt-4 fs-1">📞</div>
              <div className="card-body">
                <h5 className="mb-3">Phone</h5>
                <p className="text-warning fw-semibold">+1-909-329-2103</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center h-100 contact-card">
              <div className="contact-icon-wrap mx-auto mt-4 fs-1">✉️</div>
              <div className="card-body">
                <h5 className="mb-3">Email</h5>
                <p className="text-warning fw-semibold">info@megaapparel.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <section className="py-5 bg-light">
        <div className="container-fluid">
          <h3 className="text-center mb-5">Our Location</h3>
          <div className="w-100 rounded shadow-lg overflow-hidden" style={{ height: '300px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.699614614614!2d-118.297968!3d34.061572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc7e6b4e8b1d%3A0x8e8e8e8e8e8e8e8e!2s3680%20Wilshire%20Blvd%2C%20Los%20Angeles%20CA%2090010!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
