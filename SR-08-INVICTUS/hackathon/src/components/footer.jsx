import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='black' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Greater Mumbai Police</h5>


    <img
      src='https://mumbaipolice.gov.in/img/ourLogo@2x.png'
      className='img-thumbnail'
      alt='...'
    />
  
            
          </MDBCol>

          

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>From CP′s Desk</h5>
            Mumbai Police shall ensure the Rule of Law, enforce the law of the land impartially and firmly without fear or favour, and strive to create a fear free environment that is conducive to growth and development.

Mumbai Police will remain committed to maintaining public order, preventing and detecting crime, maintaining and promoting communal harmony, ensuring a smooth flow of traffic, and taking strong action against terrorism, organized crime, anti-social / illicit activities / elements.
            <ul className='list-unstyled'>
              
            </ul>
          </MDBCol>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Follow Us At</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Twitter
                </a>
              </li>
              <li>
                <a>
                       
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Youtube
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      
    </MDBFooter>
  );
}