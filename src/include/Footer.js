import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/footer.css'

const Footer = () =>{
    return(
        <Row className='footer-container'>
            <Row>
                <Col xl={3} lg={6} className='px-4'>
                    <h2>Travel</h2>
                    <p>Travel helps companies manage payments easily</p>
                    <img src="/images/icon-footer.png" alt="" />
                </Col>
                <Col xl={3} lg={6} className='px-4'>
                    <h2>Company</h2>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Pricing</p>
                </Col>
                <Col xl={3} lg={6} className='ps-4'>
                    <h2>Destintions</h2>
                    <p>Maldives</p>
                    <p>Los Angelas</p>
                    <p>Las Vegas</p>
                    <p>Torronto</p>
                </Col>
                <Col xl={3} lg={6} className='px-3'>
                    <h2>Joins Our Newsletter</h2>
                    <div>
                        <input type="text" placeholder='Your email address' className='p-2' />
                        <button className='subscribe'>Subscribe</button>
                    </div>
                    <p className='fw-light'>* Will send you weekly updates for your better tours pakages</p>
                </Col>
            </Row>
            <Row>
                <hr/>
                <p className='text-center fw-light'>Copyright @ Xpro 2022. All Rights Reserved</p>
            </Row>
            
        </Row>
    );
}
export default Footer