import React from "react";
import '../css/trendy.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Trendy =() =>{
    return(
        <Row className="p-5">
            <h4 className="text-center text-danger">Trendy</h4>
            <h1 className="text-center">Our Trending Tour Packages</h1>
            <Col xl={4} lg={6} className="py-3 px-5">
                <div className="trendy-image1">
                    {/*Add background image to this div*/}
                </div>
                <Row>
                    <Col><p className="fw-light small pb-0 mb-0 pt-3">8 Days</p></Col>
                    <Col><p className="fw-light small pb-0 mb-0 pt-3">25 People Going</p></Col>
                </Row>
                <div className="d-flex align-items-center justify-content-between">
                    <h2>Switzerland</h2>
                    <img src="/images/star.png" alt="" height={15}/>
                </div>
                <p>Europe</p>
                <h2>1,000 $</h2><p>1,200 $</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Digerem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button className="trendy-button">Explore Now</button>
            </Col>
            <Col xl={4} lg={6} className="py-3 px-5">
                <div className="trendy-image2">
                    {/*Add background image to this div*/}
                </div>
                <Row>
                    <Col><p className="fw-light small pb-0 mb-0 pt-3">8 Days</p></Col>
                    <Col><p className="fw-light small pb-0 mb-0 pt-3">30 People Going</p></Col>
                </Row>
                <div className="d-flex align-items-center justify-content-between">
                    <h2>Amazon</h2>
                    <img src="/images/star.png" alt="" height={15}/>
                </div>
                <p>Brazil</p>
                <h2>1,223 $</h2><p>1,200 $</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Digerem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button className="trendy-button">Explore Now</button>
            </Col>
            <Col xl={4} lg={6} className="py-3 px-5">
                <div className="trendy-image3">
                    {/*Add background image to this div*/}
                </div>
                <Row>
                    <Col><p className="fw-light small pb-0 mb-0 pt-3">8 Days</p></Col>
                    <Col><p className="fw-light small pb-0 mb-0 pt-3">155 People Going</p></Col>
                </Row>
                <div className="d-flex align-items-center justify-content-between">
                    <h2>Giza</h2>
                    <img src="/images/star.png" alt="" height={15}/>
                </div>
                <p>Egypt</p>
                <h2>1,200 $</h2><p>1,200 $</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Digerem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button className="trendy-button">Explore Now</button>
            </Col>
        </Row>
    );
}
export default Trendy;