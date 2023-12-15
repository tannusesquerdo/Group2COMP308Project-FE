import React from 'react';
import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage
} from '@coreui/react';

import img1 from '../../assets/landing/virtual-nurse.jpg';
import img2 from '../../assets/landing/lab.jpg';
import img3 from '../../assets/landing/covid.jpg';
// This is the home page component
function Landing(props) {
  const carouselItems = [
    { src: img1, alt: 'Slide 1', caption: 'Virtual Nurse Consultation', text: 'Experience the future of healthcare with our virtual nurse, providing real-time consultation and care right from your laptop.' },
    { src: img2, alt: 'Slide 2', caption: 'Diagnostic Predictions using ML', text: 'Unveiling the power of Machine Learning in predicting scientific outcomes. ' },
    { src: img3, alt: 'Slide 3', caption: 'Heart Health', text: 'A symbol of our commitment to your heart health.' },
  ];

  return (
    <div>
      <h2>Welcome to our Medical Web Application</h2>
      <CCarousel controls indicators>
        {carouselItems.map((item, index) => (
          <CCarouselItem key={index}>
            <CImage className="d-block w-100" src={item.src} alt={item.alt} />
            <CCarouselCaption className="d-none d-md-block">
              <h5>{item.caption}</h5>
              <p>{item.text}</p>
            </CCarouselCaption>
          </CCarouselItem>
        ))}
      </CCarousel>
    </div>
  );
}

export default Landing;
