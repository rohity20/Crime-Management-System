import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Header from '../header';

export default function NewComplaints({ type }) {
  const [cases, setCases] = useState([{}]);
  const newcases = async()=>{
    // console.log(username);
    // console.log(userpassword);
    const res = await fetch(`http://localhost:4000/getcase`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
      // body:JSON.stringify({
      //   email: username,
      //   password: userpassword,
      // })
    })
    const data = await res.json();
    console.log(data);
    if(res.status===422 || !data){
      console.log("error");
    }else{
      setCases(data);
      console.log(data);
      console.log("Inside cases");
      console.log(cases);
      console.log(type);
      const searchMatchesArr = cases?.filter((match)=>match?.status.toLowerCase().includes(type.toLowerCase()));
      // const searchMatchesArr = cases?.filter((match)=>match?.status.toLowerCase.localCompare(type.toLowerCase()));
      console.log("filter cases");
      console.log(searchMatchesArr);
      setCases(searchMatchesArr);
      // navigate(`/l1carousal?id=${data._id}&${user._id} `);
    }
}

useEffect(() => {
  newcases();
}, [])

  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Case ID</th>
          <th scope='col'>Description</th>
          <th scope='col'>Status</th>
          <th scope='col'>{ type } Priority</th>
          <th scope='col'>Set Priority</th>
          <th scope='col'>{ type } Officers</th>
          <th scope='col'>Register Date</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>

       {cases.map((item,index)=>(
       <>
            <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                // src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                src='https://th.bing.com/th/id/OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa?pid=ImgDet&rs=1'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{item.name}</p>
                <p className='text-muted mb-0'>{item.email}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{item.description}</p>
            {/* <p className='text-muted mb-0'>IT department</p> */}
          </td>
          <td>
            <MDBBadge color='success' pill>
            {item.status}
            </MDBBadge>
          </td>
          <td>{item.priority}</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
          <td>  </td>
          <td>{item.start_date}</td>
        </tr>
        </>
         ))} 
{/*        
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
       <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>  */}
      </MDBTableBody>
    </MDBTable>
  );
}