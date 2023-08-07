import React from "react";
import '../css/promotion.css'
import { Container } from 'react-bootstrap'; 

const Promotion = () =>{
    return(
        <Container className="promotion-container">
            <h5 className="text-danger fw-bold">Promotion</h5>
            <h1>See What Out Clients say About Us</h1>
        </Container>
    );
}
export default Promotion;