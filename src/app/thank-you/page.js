'use client';
import { useEffect } from 'react';

export default function ThankYou() {

  useEffect(() => {
    // Optional: GA event ya analytics track karo
    window.gtag?.('event', 'form_submit_success');
  }, []);

  return (


    
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50">
      {/* Hero Section - Same as sports sites */}
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        {/* Success Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-green-100 border-2 border-green-400 rounded-full shadow-lg">
            <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xl font-bold text-green-800">Thank You ! Inquiry Received Successfully</span>
          </div>
        </div>

        {/* Main Message */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 md:p-20 text-center border border-white/50">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-6">
            Success!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Our team has received your signup/inquiry.
             We'll contact you within 24 hours via email or WhatsApp to discuss your requirements.
          </p>

          {/* Stats/Highlights - Sports apparel style */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">24H</div>
              <p className="text-gray-600 font-semibold">Response Time</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600 font-semibold">Custom Designs</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">USA</div>
              <p className="text-gray-600 font-semibold">Quality Made</p>
            </div>
          </div>

          {/* CTA Buttons - WhatsApp, Email, Live Chat */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/+13014764681?text=Hi%20from%20thankyou%20page"
              className="group flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
            >
              <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="mailto:info@megasportsapparel.com?subject=Follow%20up%20from%20Thank%20You"
              className="group flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email Us
            </a>
          </div>

          {/* Contact Info - Copied from site */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-emerald-600">+1 (301) 476-4681</p>
                <p className="text-sm text-gray-500">Phone / WhatsApp</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">info@megasportsapparel.com</p>
                <p className="text-sm text-gray-500">Email Support</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-600">Live Chat</p>
                <p className="text-sm text-gray-500">24/7 Available</p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12">
            <a
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              ← Back to Form
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-gray-500 text-sm">
          <p>© 2026 Sports Apparel Manufacturer. All rights reserved. | 30 N Gould St Ste R, Sheridan, Wyoming, 82801</p>
        </div>
      </div>
    </div>
  );
}