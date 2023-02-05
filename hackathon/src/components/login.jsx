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
import { Navigate, useNavigate } from 'react-router-dom';



function Login() {

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
      
      navigate(`/l1carousal?id=${data._id}`);
    }
  }



 
  return (
    <div>
      
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Maharashtra_Police_Insignia_%28India%29.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' onChange={(e)=>{setUsername(e.target.value)}} size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' onChange={(e)=>{setUserpassword(e.target.value)}} size="lg"/>
         
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn className="mb-4 w-100" size="lg" onClick={login}>Sign in</MDBBtn>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
    </div>
  );
}

export default Login;