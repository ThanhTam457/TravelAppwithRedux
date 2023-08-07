import React from 'react'
import '../css/header.css'
import '../css/navbar.css'
import { Container, NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap';
const Header = (style) =>{
    return(
        <div className='container-header' style={{backgroundImage:"url(/images/background.png)"}}>
            <Navbar className='div-navbar'>
                <Container className='d-flex justify-content-between'>
                    <Navbar.Brand href="#home" className='div-travel-text'><img className='arrow' src="/images/Arrow1.png" alt="arrow" width={50}/>Travel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                    <Nav className='div-link' style={{display:'flex', flexDicrection: 'row'}}>
                        <Nav.Link href='/' >Home</Nav.Link>
                        <Nav.Link /*as={Link} to="/about"*/ href="#">About</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" className='dropdown-link'>Honeymoon packages</NavDropdown.Item>
                            <NavDropdown.Item href="ToursPackages" className='dropdown-link'>Tours packages</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className='dropdown-link'>Musical Events</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className='dropdown-link'>Build Package</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link /*as={Link} to="/upcomming"*/ href="#">Up comming packages</Nav.Link>
                    </Nav>
                    <button className='button-header'>Get in Touch</button>
                </Container>
            </Navbar>
        </div>
        
    );
}
export default Header