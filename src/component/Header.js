import React from 'react'

import mmclogo from '../images/MMC.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Header() {
  return (
    <>
    {/* "#00a86b"  */}
      <Navbar style={{ backgroundColor: "#024002" }} className="justify-content-center d-flex flex-wrap">
        <Container fluid className="justify-content-space-between d-flex flex-wrap" >
          <Navbar.Brand href="#" className='text-white'>
            <img src={mmclogo} style={{ width: "180px", height: "85px", marginLeft:"25px" }} />
          </Navbar.Brand>
          {/* <Navbar.Offcanvas>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Nav.Link href="#action1" className='text-white'>Home</Nav.Link>
                <Nav.Link href="#action2" className='text-white'>Disease</Nav.Link>
                <Nav.Link href="#action1" className='text-white'>Pesticides</Nav.Link>
                <Nav.Link href="#action2" className='text-white'>Fertilizer</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas> */}
        </Container>
      </Navbar>
    </>
  )
}

export default Header