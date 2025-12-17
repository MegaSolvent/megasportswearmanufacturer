'use client';

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./style.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setMsg("⚠️ Please enter an email address.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMsg("❌ Invalid email format.");
      return;
    }

    setTimeout(() => {
      setMsg("✅ Subscription successful!");
      setEmail("");
    }, 800);
  };

  return (
    <>
      {/* Top Subscription Section */}
      <section
        className="py-5"
        style={{
          backgroundImage: "url('/Images/footrbg.jpg')", // public/Images/footrbg.jpg
          backgroundSize: "contain",
          backgroundPosition: "center",
          width:"100%",
          height:200,
          backgroundColor: "#f8f9fa",
        }}
      >
        <div className="container text-center">
          <h2 className="fw-bold text-white">Subscribe to our Newsletter</h2>
          <p className="text-muted text-white">Get latest updates weekly</p>

          <div className="d-flex justify-content-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control w-50 me-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="Subscribe-btn" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>

          <p className="mt-2 text-danger fw-semibold">{msg}</p>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="text-light pt-5 pb-4" style={{ background: "#111" }}>
        <div className="container">
          <div className="row">
            {/* Column 1: Logo & Text */}
            <div className="col-md-3">
              <Image
                src="/Images/footerlogo.png" // public/Images/footerlogo.png
                width={140}
                height={60}
                alt="footer logo"
              />
              <p className="mt-3-Expert">
                Expert sportswear manufacturing with dedicated support services,
                delivering quality, custom apparel solutions.
              </p>
            </div>

            {/* Column 2: Company */}
            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Company</h5>
              <ul className="list-order text-white">
                <a href="/about">
                  <p>About Us</p>
                </a>
                <a href="/portfolio">
                  <p>Portfolio</p>
                </a>
                <a href="/blogs">
                  <p>Blogs</p>
                </a>
                <a href="/contact">
                  <p>Contact</p>
                </a>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Services</h5>
              <ul className="serviceslist">
                <a href="/services/tennis-clothing-manufacturer">
                  <p>Tennis Clothing Manufacturer</p>
                </a>
                <a href="/services/golf-apparel-manufacturer">
                  <p>Golf Apparel Manufacturer</p>
                </a>
                <a href="/services/sweat-suit-manufacturer">
                  <p>Sweat Suit Manufacturer</p>
                </a>
                <a href="/services/gym-clothing-manufacturer">
                  <p>Gym Clothing Manufacturer</p>
                </a>
                <a href="/services/cycling-clothing-manufacturer">
                  <p>Cycling Clothing Manufacturers</p>
                </a>
                <a href="/services/yoga-wear-manufacturer">
                  <p>Yoga Wear Manufacturer</p>
                </a>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="col-md-3">
              <h5 className="fw-bold mb-3">Contact</h5>
              <p className="detail mb-1">📞 (301) 476-4681</p>
              <p className="detail mb-1">📧 info@megasportsapparel.com</p>
              <p className="detail">🌍 USA, UK</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="lastsection">
        <p className="text-center text-white mb-0">
          © {new Date().getFullYear()} Copyright Ⓒ 2018 – 2025
          Sportswear Manufacturing | Designed & Developed By{" "}
          <a
            className="urllinkk"
            rel="nofollow"
            href="https://megasolvent.com/"
          >
            {" "}
            Mega Solvent LLC
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
