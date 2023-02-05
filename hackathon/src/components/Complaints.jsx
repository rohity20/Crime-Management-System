import React, { useState } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Complaints.css'
export default function Complaint() {
  const [userId, setUserId] = useState();
  const [type, setType] = useState();
  const [descrip, setDescript] = useState();
  const [address, setAddress] = useState();
 
  return (
    <div className='forpad'>
      <h1></h1>
        <h2></h2>
    <h1 className='padhead'>Enter Your Complaints</h1>
    <h2></h2>

    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='UserId' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Type' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Description' />
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
      <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' />

      

      <MDBBtn className='mb-4' type='submit' block>
        Submit
      </MDBBtn>
    </form>
    <h1></h1>
    </div>
  );
}