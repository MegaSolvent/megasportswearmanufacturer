'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import './styles.css';


function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    setStatus({ type: '', message: '' });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (formData.phone) {
      const phoneRegex = /^(\+?\d[\d\s-]{8,15})$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = 'Enter a valid phone number';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send email. Please try again.',
        });
      } else {
        setStatus({
          type: 'success',
          message: data.message || 'Your message has been sent successfully!',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection.',
      });
    } finally {
      setLoading(false);
    }
  };




  return (
    <div>
      <title>Contact Us | Sports Apparel Manufacturers.</title>
      <meta name="description" content="Get in touch with the leading sports apparel manufacturers
       in the USA. Get low MOQ, premium fabrics, customization, fast production, and doorstep delivery." />
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
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="card shadow border-0">
                <div className="card-body p-4 p-md-5">
                  <h2 className="mb-4 text-center text-primary fw-bold">
                    Contact Us
                  </h2>
                  <p className="text-muted text-center mb-4">
                    Fill the form and your message will be sent via SMTP (Nodemailer).
                  </p>

                  {status.message && (
                    <div
                      className={`alert ${status.type === 'success'
                          ? 'alert-success'
                          : 'alert-danger'
                        }`}
                      role="alert"
                    >
                      {status.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold" htmlFor="name">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''
                          }`}
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold" htmlFor="email">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''
                          }`}
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold" htmlFor="phone">
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''
                          }`}
                        placeholder="+92 3xx xxxxxxx"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                      )}
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold" htmlFor="message">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={`form-control ${errors.message ? 'is-invalid' : ''
                          }`}
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-2 fw-semibold"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>

                  <p className="text-muted small mt-3 mb-0 text-center">
                    Your data is sent securely to the server via SMTP using Nodemailer.
                  </p>
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
