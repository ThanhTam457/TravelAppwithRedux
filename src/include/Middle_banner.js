import React from "react";
import '../css/middle_banner.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Middle_banner = () =>{
    return(
        <div className='middle-banner'>
          <Col lg={6} className='text-banner'>
            <img src="/images/item7.png" alt="" style={{padding: "50px 0px 0px 80px"}} />
          </Col>
        </div>
    );
}
export default Middle_banner;