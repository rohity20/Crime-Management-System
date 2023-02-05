import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Header from './Header';

export default function ShiftManagement() {
  return (
    <div>
      {/* <Header /> */}
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope='col'>Date</th>
            <th scope='col'>Required Day Shifts</th>
            <th scope='col'>Required Night Shifts</th>
            <th scope='col'>Alloted Shifts</th>
            <th scope='col'>Available Officers</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope='row'>01-04-2023</th>
            <td>8</td>
            <td>2</td>
            <td>Alloted Shifts</td>
            <td>Available Officers</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
