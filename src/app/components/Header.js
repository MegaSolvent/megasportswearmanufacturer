'use client';
import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Dropdown, NavDropdown, Button } from "react-bootstrap";
import './style.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaComments } from 'react-icons/fa';
import QuotePopup from '../popupform/page';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // 🔥 Popup state
  const handleNavClick = () => {
    setExpanded(false); // 🔥 Auto close on menu click
  };

  return (
    <>
      <div className='top-header' style={{ backgroundColor: '#5458f7', color: 'white', padding: '8px 0', fontSize: '15px' }}>
        <Container>
          <Row className='align-items-center'>
            <Col className='d-flex align-items-center'>
              <span className='me-3'>📧 info@yourcompany.com</span>
              <span className='me-3'>📞 +92 300 000 0000</span>
              <span className='d-flex align-items-center'><FaComments /> Chat</span>
            </Col>
            <Col className='d-flex justify-content-end gap-3'>
              <a href='#' style={{ color: 'white' }}><FaFacebookF /></a>
              <a href='#' style={{ color: 'white' }}><FaTwitter /></a>
              <a href='#' style={{ color: 'white' }}><FaInstagram /></a>
              <a href='#' style={{ color: 'white' }}><FaLinkedinIn /></a>
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar expand="lg" expanded={expanded} onToggle={setExpanded} className="py-3 shadow-sm bg-white">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="/Images/newlogo.png"
              alt="Logo"
              width="100"
              className="img-fluid"
            />
          </Navbar.Brand>

          {/* Toggle controls 'expanded' state */}
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto">

              <Nav.Link href="/" onClick={handleNavClick}>Home</Nav.Link>

              <NavDropdown title="Services" id="mega-menu">
                <div className="p-4" style={{ minWidth: "800px" }}>
                  <Row>
                    <Col md={6}>
                      <h6 className="fw-bold">Textile</h6>

                      <NavDropdown.Item href="/services/tennis-clothing-manufacturer" onClick={handleNavClick}>Tennis Clothing Manufacturer</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/golf-apparel-manufacturer" onClick={handleNavClick}>Golf Apparel Manufacturer</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/sweat-suit-manufacturer" onClick={handleNavClick}>Sweat Suit Manufacturer</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/gym-clothing-manufacturer" onClick={handleNavClick}>Gym Clothing Manufacturer</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/cycling-clothing-manufacturer" onClick={handleNavClick}>Cycling Clothing Manufacturers</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/gymnastics-leotard-manufacturer" onClick={handleNavClick}>Gymnastics Leotard Manufacturers</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/custom-jackets-manufacturer" onClick={handleNavClick}>Custom Jackets Manufacturer</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/custom-shorts-manufacturer" onClick={handleNavClick}>Custom Shorts Manufacturer</NavDropdown.Item><Dropdown.Divider />
                    </Col>
                    <Col md={6}>
                      <h6 className="fw-bold">Apparel</h6>
                      <NavDropdown.Item href="/services/yoga-wear-manufacturer" onClick={handleNavClick}>Yoga Wear Manufacturer</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/hunting-clothing-manufacturer" onClick={handleNavClick}>Hunting Clothing Manufacturer</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/custom-tracksuit-manufacturer" onClick={handleNavClick}>Custom Tracksuit Manufacturers</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/baseball-clothing-manufacturer" onClick={handleNavClick}>Baseball Clothing Manufacturers</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/custom-hoodie-manufacturer" onClick={handleNavClick}>Custom Hoodie Manufacturer</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/custom-underwear-manufacturer" onClick={handleNavClick}>Custom Underwear Manufacturer</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/custom-pajama-manufacturer" onClick={handleNavClick}>Custom Pajama Manufacturer</NavDropdown.Item><Dropdown.Divider />
                      <NavDropdown.Item href="/services/fishing-shirt-manufacturer" onClick={handleNavClick}>Fishing Shirts Manufacturing</NavDropdown.Item><Dropdown.Divider />
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              <Nav.Link href="/portfolio" onClick={handleNavClick}>Portfolio</Nav.Link>
              <Nav.Link href="/about" onClick={handleNavClick}>About</Nav.Link>
              <Nav.Link href="/services" onClick={handleNavClick}>Blogs</Nav.Link>
              <Nav.Link href="/contact" onClick={handleNavClick}>Contact</Nav.Link>
            </Nav>

            <div className="ms-auto">
            <QuotePopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />

            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

       {/* 🔥 POPUP RENDER - Header ke BAAD */}
      
    </>
  );
}

export default Header;
