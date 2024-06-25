import React from 'react'
import '../Assets/style/Navigationbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function Navigationbar() {
  return (
    <>
      <div className="navigationbar">
        <Navbar expand="lg" className="bg-body-tertiary" id='navi'>
          <Container fluid>
            <Navbar.Brand><Link className = "navigationbar-Link" id="basic"  to='/mainpage'>BASIC/DEPT</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                <Link className = "navigationbar-Link" to="/work">WORK</Link>
                <Link className = "navigationbar-Link" to="/about">ABOUT</Link>
                <Link className = "navigationbar-Link" to="/news">NEWS</Link>
                <Link className = "navigationbar-Link" to="/thinking">THINKING</Link>
                <Link className = "navigationbar-Link" to="/careers">CAREERS</Link>
                <Link className = "navigationbar-Link" to="/contact">CONTACT</Link>
              </Nav>
              <i class="fa-solid fa-ellipsis"></i>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>

    </>
  )
}
