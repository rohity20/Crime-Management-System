import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function L1carousal() {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://aniportalimages.s3.amazonaws.com/media/details/4oFS6Qqo_400x400_xpTP0Hn.jpg'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://aniportalimages.s3.amazonaws.com/media/details/4oFS6Qqo_400x400_xpTP0Hn.jpg'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://aniportalimages.s3.amazonaws.com/media/details/4oFS6Qqo_400x400_xpTP0Hn.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  );
}