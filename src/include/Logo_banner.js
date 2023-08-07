import React from 'react';
import '../css/logo_banner.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Logo_banner = () =>{
    return(
        <Row className='logo-container'>
            <Col><img src="/images/logo1.png" alt="logo1" className='logo'/></Col> 
            <Col><img src="/images/logo2.png" alt="logo2" className='logo'/></Col>
            <Col><img src="/images/logo3.png" alt="logo3" className='logo'/></Col>
            <Col><img src="/images/logo4.png" alt="logo4" className='logo'/></Col>
            <Col><img src="/images/logo5.png" alt="logo5" className='logo'/></Col>
      </Row>
    );
}
export default Logo_banner