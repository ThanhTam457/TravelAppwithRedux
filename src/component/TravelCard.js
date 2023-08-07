import React from "react";
import { CardImg, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export const TravelCard = ({key, title, date, group, price, image, description, rating}) =>{
    return(
        <Col md={6} lg={6} className='py-2'>
            <Card className="w-96 hover:scale-110 p-10 shadow-transparent hover:shadow-neutral-300 card-wrap" style={{ width: '18rem' }} key={key}>
            <CardImg variant = "top" src={image}/>
            <Card.Body>
                <Row className="justify-content-between" style={{backgroundColor: "#DF6951", fontSize:"15px", marginTop: "-38px", marginBottom: "15px"}}>
                    <Col style={{color: "#181E4B"}}>{date}</Col>
                    <Col style={{color: "#181E4B"}}>{group}</Col>
                </Row>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Row className="flex justify-content-between fw-light ">
                    <Col style={{color: "#181E4B"}}>{price}</Col>
                    <Col style={{color: "#181E4B"}}>{rating}</Col>
                </Row>
            </Card.Body>
            </Card>
        </Col>
    );
}