import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Category from './Category.js';
import Logo_banner from './Logo_banner.js';
import Logo_banner2 from './Logo_banner2.js';
import Middle_banner from './Middle_banner';
import Trendy from './Trendy';

const Main = () =>{
    return(
    <Container>
                <Category/>
                <Row >
                <Col xl={6} lg={12} className='item-contain'>
                    <img src="/images/item1.png" alt="item1" />
                </Col>
                <Col xl={6} lg={12} className='item-contain'>
                    <h3 className='text-special'>HONEYMOON SPECIALS</h3>
                    <h2>Our Romantic Tropical Destinations</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis maxime exercitationem eius minus laborum commodi tenetur alias officiis, hic voluptatem ut iure dolore qui a tempora nihil inventore nobis pariatur!</p>
                    <button className='button-header'>View Pakages</button>
                </Col>
                </Row>
                <Row>
                <Col className='p-3'>
                    <h3 className='text-special'>Fast &amp; Easy</h3>
                    <h2>Get Your Favourite Resort Booking</h2>
                    <div className='booking-section'>
                    <Row>
                        <Col md={3}><img src="/images/item2.png" alt="" /></Col>
                        <Col>
                        <h5>Choose Destination</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae minus obcaecati minima veritatis
                        </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}><img src="/images/item3.png" alt="" /></Col>
                        <Col>
                        <h5>Choose Destination</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae minus obcaecati minima veritatis
                        </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}><img src="/images/item4.png" alt="" /></Col>
                        <Col>
                        <h5>Choose Destination</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae minus obcaecati minima veritatis
                        </p>
                        </Col>
                    </Row>
                    </div>
                </Col>
                <Col className='plan'>
                    <img src="/images/item5.png" alt=""/>
                </Col>
                </Row>
                <Middle_banner/>
                <Row>
                <Col>            
                    <h3 className='text-special'>Promotion </h3>
                    <h2>We Provide You Best Europe Sightseeing Tours</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, et harum? Autem, recusandae, tempore blanditiis minima dolore ut magnam enim dolorum ipsam dolorem odio assumenda debitis possimus dignissimos? Doloremque, suscipit!</p>
                    <button className='button-end'>View Packages</button>
                </Col>
                <Col className='effel pt-5'>
                    <img src="/images/illustration.png" alt="" />
                </Col>
                </Row>
                <Row className='div-top-image'>
                    <Col><img src="/images/destination1.png" alt="" className='image-price' /></Col>
                    <Col><img src="/images/destination2.png" alt="" className='image-price' /></Col>          
                    <Col><img src="/images/destination3.png" alt="" className='image-price' /></Col>          
                    <Col><img src="/images/destination4.png" alt="" className='image-price' /></Col>          
                </Row>
                <Logo_banner2/>
                <Trendy/>
        </Container>
    );
}
export default Main;