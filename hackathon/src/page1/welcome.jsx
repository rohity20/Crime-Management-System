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


export default function Welcome() {
    return (
        <div>
            <div>
                <MDBCarousel showIndicators showControls fade>
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
                </MDBCarousel>
            </div>
            <div className='cardplace'>
                <NavLink to='/loginUser'>
                    <button>LOGIN AS USER</button>
                </NavLink>
                <NavLink to='/login'>
                    <button>LOGIN AS OFFICER</button>
                </NavLink>
            </div>
        </div>
    );
}