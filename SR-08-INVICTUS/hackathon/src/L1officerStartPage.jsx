import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import Header from './header';
import L1menu from './components/L1menu';
import L1carousal from './components/l1carousal';

const fontStyle = {
  "fontWeight": "bold",
  "fontSize": "30px",
}

function L1officerStartPage() {
  return (

    <div className='l1fpage'>
      <Header />
      <L1carousal />
      <a />
      <a />
      <div class="container">
        <div class="row">
          <div style={
            fontStyle
          } class="col">
            Reugular Department
            <L1menu />
          </div>
          <div style={
            fontStyle
          } class="col">
            Traffic Department
            <L1menu />
          </div>
          <div style={
            fontStyle
          } class="col">
            Other Complaints
            <L1menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default L1officerStartPage;