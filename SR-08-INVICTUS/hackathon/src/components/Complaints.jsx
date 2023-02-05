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
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [type, setType] = useState();
  const [descrip, setDescript] = useState();
  const [address, setAddress] = useState();
  const [addinfo, setAddinfo] = useState();
  
  const create = async()=>{
  
    const res = await fetch(`http://localhost:4000/createcase`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name: name,
        email: email,
        phone: phone,  
        type: type,
        description: descrip,
        address: address,
        additonalInfo: addinfo,
        status: "new",
      })
    })
    const data = await res.json();
    console.log(data);
    if(res.status===422 || !data){
      console.log("error");
    }else{
      // setUser(data);
      console.log(user);
      
      // navigate(`/l1carousal?id=${data._id}&${user._id} `);
    }
}
  return (
    <div className='forpad'>
      <h1></h1>
        <h2></h2>
    <h1 className='padhead'>Enter Your Complaints</h1>
    <h2></h2>

    <form>
    <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Name' onChange={(e)=>{setName(e.target.value)}}  />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Email' onChange={(e)=>{setEmail(e.target.value)}}  />
        </MDBCol>
      </MDBRow>
   
    <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='Phone no' onChange={(e)=>{setPhone(e.target.value)}}  />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Type' onChange={(e)=>{setType(e.target.value)}}  />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Description' onChange={(e)=>{setDescript(e.target.value)}} />
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' onChange={(e)=>{setAddress(e.target.value)}}  />

      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' onChange={(e)=>{addinfo(e.target.value)}}  />

      

      <MDBBtn className='mb-4' type='submit' block onClick={create}>
        Submit
      </MDBBtn>
    </form>
    <h1></h1>
    </div>
  );
}