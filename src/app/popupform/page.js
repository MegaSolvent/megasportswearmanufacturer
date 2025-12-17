'use client';

import { useState, useCallback } from 'react';
import './style.css';


export default function Popupform() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    modeEmail: false,
    modeCall: false,
    modeText: false,
    file: null,
    brand: '',
    captcha: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, type, checked, value } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }, []);

  const handleFile = useCallback((e) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // API call yahan - Next.js API route ya external API
      console.log('Form Data:', formData);
      
      // Example API call
      // const response = await fetch('/api/quote', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      // });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        modeEmail: false,
        modeCall: false,
        modeText: false,
        file: null,
        brand: '',
        captcha: '',
      });
      setShow(false);
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const togglePopup = useCallback(() => setShow(prev => !prev), []);

  return (
    <>
      {/* Trigger Button - Parent component mein add karna */}
      <button 
        type="button" 
        className="btn btn-primary"
        onClick={togglePopup}
      >
        GET STARTED
      </button>

      {/* Overlay + Modal */}
      {show && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center popup-overlay"
          style={{ zIndex: 1050 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div className="popup-card bg-white">
            {/* Close button */}
            <button
              type="button"
              className="btn-close popup-close position-absolute top-0 end-0 m-3"
              onClick={() => setShow(false)}
              aria-label="Close popup"
            />

            <form onSubmit={handleSubmit} className="popup-form">
              <div className="row g-4">
                {/* Name / Email */}
                <div className="col-md-6">
                  <label className="form-label popup-label" htmlFor="name">
                    Your Name<span className="text-danger">*</span>
                  </label>
                  <input
                    id="name"
                    className="form-control popup-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label popup-label" htmlFor="email">
                    Your Email<span className="text-danger">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control popup-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone / Company */}
                <div className="col-md-6">
                  <label className="form-label popup-label" htmlFor="phone">
                    Your Phone No<span className="text-danger">*</span>
                  </label>
                  <input
                    id="phone"
                    className="form-control popup-input"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <small className="text-muted d-block mt-1 small-note">
                    * The customer agrees to receive SMS/calls from +1-(301)-476-4681
                  </small>
                </div>

                <div className="col-md-6">
                  <label className="form-label popup-label" htmlFor="company">
                    Your Company&apos;s Name (if any)
                  </label>
                  <input
                    id="company"
                    className="form-control popup-input"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Preferred mode / File */}
                <div className="col-md-6">
                  <p className="popup-label fw-semibold mb-1">
                    Preferred Mode of communication
                  </p>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="modeEmail"
                      name="modeEmail"
                      checked={formData.modeEmail}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="modeEmail">
                      Via E‑mail
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="modeCall"
                      name="modeCall"
                      checked={formData.modeCall}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="modeCall">
                      Via Call
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="modeText"
                      name="modeText"
                      checked={formData.modeText}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="modeText">
                      Via Text
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <p className="popup-label fw-semibold mb-1">
                    Submit Your Design
                  </p>
                  <input
                    type="file"
                    className="form-control"
                    id="file-upload"
                    onChange={handleFile}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </div>

                {/* Brand text area */}
                <div className="col-12">
                  <label className="form-label popup-label" htmlFor="brand">
                    Tell us about your brand
                  </label>
                  <textarea
                    id="brand"
                    className="form-control popup-textarea"
                    rows={4}
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                  />
                </div>

                {/* Simple captcha + recaptcha placeholder */}
                <div className="col-md-6">
                  <label className="form-label popup-label" htmlFor="captcha">
                    4 + 3 = ?<span className="text-danger">*</span>
                  </label>
                  <input
                    id="captcha"
                    className="form-control popup-input"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Submit button */}
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 popup-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
