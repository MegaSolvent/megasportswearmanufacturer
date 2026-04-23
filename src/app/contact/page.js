"use client";
import { useState } from "react";
import './style.css';


 function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // ⚠️ ye bhi missing tha
    },
    body: JSON.stringify({
      ...form,
      pageUrl: window.location.href, // ✅ yahan add karo
    }),
  });

  const data = await res.json();

  if (res.ok && data.success) {
  window.location.href = "/thank-you";
}
};
  // if (data.success) {
  //   alert("Submitted ✅");
  //   setForm({ name: "", email: "", phone: "", message: "" });
  // }




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
 <div className="container">
  <div className="row">


 {/* LEFT SIDE IMAGE */}
      <div className="lefc=section">
        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
          alt="form"
        />
      </div>
  {/* RIGHT SIDE FORM */}
      <div className="form-section">
          <h2 className="heding">Contact Us</h2>


<form onSubmit={handleSubmit}>
      <input placeholder="Name" required
        value={form.name}
        onChange={(e)=>setForm({...form,name:e.target.value})}
      />

      <input placeholder="Email" required
        value={form.email}
        onChange={(e)=>setForm({...form,email:e.target.value})}
      />

      <input placeholder="Phone" required
        value={form.phone}
        onChange={(e)=>setForm({...form,phone:e.target.value})}
      />

      <textarea placeholder="Message" required
        value={form.message}
        onChange={(e)=>setForm({...form,message:e.target.value})}
      />

      <button type="submit">Submit</button>
    </form>



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

export default Contact;



