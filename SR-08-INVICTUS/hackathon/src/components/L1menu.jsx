import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const buttonStyle = {
  "marginTop": "20px",
  "width": "400px"
}

export default function L1menu() {
  return (
    <form>
      <div style={{ display: "flex" }}>
        <NavLink to='/newcases'>
          <MDBBtn type='submit' style={
            buttonStyle
          } block>
            New Cases
          </MDBBtn>
        </NavLink>
      </div>
      <div>
        <NavLink to='/allotedcases'>
          <MDBBtn type='submit' style={
            buttonStyle
          } block>
            Alloted Cases
          </MDBBtn>
        </NavLink>
      </div>
      <div>
        <NavLink to='/solvedcases'>
          <MDBBtn type='submit' style={
            buttonStyle
          } block>
            Solved Cases
          </MDBBtn>
        </NavLink>
      </div>
      <div>
        <NavLink to='/shiftmanagement'>
          <MDBBtn type='submit' style={
            buttonStyle
          } block>
            Shift Management
          </MDBBtn>
        </NavLink>
      </div>
      
      <div>
      <NavLink to='/eventlist'>
        <MDBBtn type='submit' style={
          buttonStyle
        } block>
          Upcoming Events
        </MDBBtn>
        </NavLink>
      </div>
    </form>
  );
}