import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CButton, CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav, CNavLink } from '@coreui/react';  
import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage
} from '@coreui/react';

import img1 from '../../assets/landing/virtual-nurse.jpg';
import img2 from '../../assets/landing/lab.jpg';
import img3 from '../../assets/landing/covid.jpg';

function Landing(props) {
  const [visible, setVisible] = useState(false);
  const carouselItems = [
    { src: img1, alt: 'Slide 1', caption: 'Virtual Nurse Consultation', text: 'Experience the future of healthcare with our virtual nurse, providing real-time consultation and care right from your laptop.' },
    { src: img2, alt: 'Slide 2', caption: 'Diagnostic Predictions using ML', text: 'Unveiling the power of Machine Learning in predicting scientific outcomes. ' },
    { src: img3, alt: 'Slide 3', caption: 'Heart Health', text: 'A symbol of our commitment to your heart health.' },
  ];

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">COMP308 Group 2</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav component="nav">
              <CNavLink href="/login" active>
                Login
              </CNavLink>
              {/* <CNavLink href="#">Features</CNavLink>
              <CNavLink href="#">Pricing</CNavLink>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink> */}
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
      <div style={{ padding: '1rem', textAlign: 'center' }}>        
        <CCarousel controls indicators>
          {carouselItems.map((item, index) => (
            <CCarouselItem key={index}>
              <CImage className="d-block w-100" style={{width: '100%', height: '100%'}} src={item.src} alt={item.alt} />
              <CCarouselCaption className="d-none d-md-block">
                <h5>{item.caption}</h5>
                <p>{item.text}</p>
              </CCarouselCaption>
            </CCarouselItem>
          ))}
        </CCarousel>        
      </div>
      <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa' }}>
        © 2023 COMP308 Group 2. All rights reserved.
      </footer>
    </div>
  );
}

export default Landing;
