import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/logo_banner2.css'

const Logo_banner2 = () =>{
    return(
        <Row className='d-flex container-fluid'>
            <Col xl={6} lg={12} className='banner-container2-1 py-5'>
                <h4>Promotion</h4>
                <h1>Explore Nature</h1>
                <button className='button-banner2'>View Pakages</button>
            </Col>
            <Col xl={6} lg={12} className='banner-container2-2 py-5'>
                <h4>Promotion</h4>
                <h1>Explore Cities</h1>
                <button className='button-banner2'>View Pakages</button>
            </Col>
        </Row>
    );
}

export default Logo_banner2