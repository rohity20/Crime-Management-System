import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import './page1.css'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
// import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// import React from "react";
// import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";


export default function UserFpage() {
    return (
        <div>
            <div>
                {/* <MDBCarousel showIndicators showControls fade>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src='https://www.socialsamosa.com/wp-content/uploads/2020/01/Mumbai-Police-new-campaign.jpg'
                        alt='...'
                    >
                        <h5>Mumbai Police takes on honkers with new campaign</h5>
                    </MDBCarouselItem>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src='https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/02/24/960143-maharashtra-police-new.jpg'
                        alt='...'
                    >
                        <h5>How Mumbai Police will do 'Work From Home', know the real motive behind this unconventional move</h5>
                    </MDBCarouselItem>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src='https://gumlet.assettype.com/bloombergquint%2F2020-03%2F9755572f-df04-4bfd-a8b5-29b8b3765431%2F29021_pti2_29_2020_000140b.jpg?rect=0%2C72%2C4800%2C2700&auto=format%2Ccompress&fmt=webp&w=732'
                        alt='...'
                    >
                        <h5>Param Bir Singh Appointed As Commissioner Of Mumbai Police</h5>
                    </MDBCarouselItem>
                </MDBCarousel> */}
            </div>
            <div style={{
        backgroundColor: 'black',
        color: 'white'
      }}>
            <Marquee><div link>
            *     Mumbai Police Uses A Schitt's Creek Reference To Promote e-Awareness, Leaves The Internet In Splits!    *
            </div>
            <div>
                *     NM traffic department to create awareness through innovative programmes during road safety week     *
            </div>
            </Marquee>
            </div>
            <MDBContainer>
      <MDBRow>
        <MDBCol size='md'>
            
        <div className='cardplace'>
        {/* <MDBListGroup style={{ minWidth: '22rem' }} dark>
      <MDBListGroupItem active noBorders aria-current='true' className='px-3'>
        
        Updates & News
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
      <Marquee><div link>
            *     Mumbai Police Uses A Schitt's Creek Reference To Promote e-Awareness, Leaves The Internet In Splits!    *
            </div>
            <div>
                *     NM traffic department to create awareness through innovative programmes during road safety week     *
            </div>
            </Marquee>
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
      <Marquee><div link>
            *     Mumbai Police Uses A Schitt's Creek Reference To Promote e-Awareness, Leaves The Internet In Splits!    *
            </div>
            <div>
                *     NM traffic department to create awareness through innovative programmes during road safety week     *
            </div>
            </Marquee>
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-3'>
      <Marquee><div link>
            *     Mumbai Police Uses A Schitt's Creek Reference To Promote e-Awareness, Leaves The Internet In Splits!    *
            </div>
            <div>
                *     NM traffic department to create awareness through innovative programmes during road safety week     *
            </div>
            </Marquee>
      </MDBListGroupItem>

      <MDBListGroupItem noBorders className='px-3'>
      <Marquee><div link>
            *     Mumbai Police Uses A Schitt's Creek Reference To Promote e-Awareness, Leaves The Internet In Splits!    *
            </div>
            <div>
                *     NM traffic department to create awareness through innovative programmes during road safety week     *
            </div>
            </Marquee>
      </MDBListGroupItem>       */}
    {/* </MDBListGroup> */}
            </div> 
        </MDBCol>
        <MDBCol size='md'>
          <div className='cardplace'>
          <MDBListGroup style={{ minWidth: '15rem' }} dark>
      <MDBListGroupItem active noBorders aria-current='true' className='px-3' style={{
        backgroundColor: 'black',
        color: 'white'
      }} >
        <div>
            User Options
        </div>
        
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-5'>
      <NavLink to='/complaint'>
                    <button>Register New Complaint</button>
                </NavLink>
      </MDBListGroupItem>
      <MDBListGroupItem noBorders className='px-5'>
      <NavLink to='/newcases'>
                    <button>Track Complaints</button>
                </NavLink>
      </MDBListGroupItem>
      
    </MDBListGroup>
            </div>
        </MDBCol>
        
      </MDBRow>
    </MDBContainer>
            
        </div>
    );
}