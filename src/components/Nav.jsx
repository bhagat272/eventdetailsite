import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInput,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function Nav() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
       
        <MDBContainer> 
            <h4 className='text-danger'>BookUsNow</h4>  
            <MDBBtn >Button</MDBBtn>
            <MDBInput label="Example label" id="form1" type="text" />

            <MDBBtn >Button</MDBBtn>

        </MDBContainer>
      </MDBNavbar>
    </>
  );
}