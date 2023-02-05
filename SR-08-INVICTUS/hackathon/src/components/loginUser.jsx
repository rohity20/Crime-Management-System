import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Loginuser() {

  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const navigate = useNavigate();

  const login = async()=>{
    console.log(username);
    console.log(userpassword);
    const res = await fetch(`http://localhost:4000/loginuser`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email: username,
        password: userpassword,
      })
    })
    const data = await res.json();
    console.log(data);
    if(res.status===422 || !data){
      console.log("error");
    }else{
      setUser(data);
      console.log(user);
      
      // navigate(`/l1carousal?id=${data._id}&${user._id} `);
      navigate(`/userFpage`);
    }
}

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" class="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg'  type='email' onChange={(e)=>{setUsername(e.target.value)}}  size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' onChange={(e)=>{setUserpassword(e.target.value)}}  label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn id="compredirect" className="mb-4 w-100" size="lg" onClick={login}>Sign in as User</MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Loginuser;