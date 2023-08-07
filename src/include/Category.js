import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/category.css'

const Category = () =>{
    return(
        <div className='category-container'>
            <div className='title'>
                <div className='text-category'>
                    CATEGORY 
                </div>
                <div className='text-category2'>
                    We Offer Best Services
                </div>
            </div>
            <Row className='service-category'>
                <Col className='card' xl={3} lg={6} md={12}>
                    <div className='card-img'>
                        <img src="/images/service1.png" alt="service1" />
                    </div>
                    <h3 className='card-title'>Guided Tours</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>
                <Col className='card' xl={3} lg={6} md={12}>
                    <div className='card-img'>
                    <img src="/images/service2.png" alt="service1" />
                    </div>
                    <h3 className='card-title'>Best Flights Options</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>
                <Col className='card ' xl={3} lg={6} md={12}>
                    <div className='card-img'>
                    <img src="/images/service3.png" alt="service1" />
                    </div>
                    <h3 className='card-title'>Religous Tours</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>
                <Col className='card' xl={3} lg={6} md={12}>
                    <div className='card-img'>
                    <img src="/images/service4.png" alt="service1" />
                    </div>
                    <h3 className='card-title'>Medical Insurance</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Col>
            </Row>
        </div>
    );
}
export default Category