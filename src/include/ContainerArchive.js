import React from "react";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import db from '../database/DBConfig';
import { useLiveQuery } from "dexie-react-hooks";  
import { TravelCard } from "../component/TravelCard";
import { Form } from "react-bootstrap";
import '../css/archive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Plan_trip_form from "./Plan_trip_form";

const ContainerArchive = () => {
    const travelArr = useLiveQuery(()=>db.travel.toArray(),[]);
    return ( 
        <Container>
            <Row className="d-flex justify-content-between text-center" style={{backgroundColor: "#F8F8F8", height: "100px", alignItems: "center", marginTop: "-25px"}}>
                <Col>Date</Col>
                <Col>Price low to high</Col>
                <Col>Price high to low</Col>
                <Col>Name(A-Z)</Col>
            </Row>
            <Row className="justify-content-between">
                <Col md={8} className='px-2'>
                    <a href="#" className="card-hover" style={{textDecoration: "none"}}>
                    <Row>
                        {travelArr?.map((travel) => (
                            <TravelCard
                                key={travel.id}
                                title={travel.name}
                                date={travel.date}
                                group={travel.group}
                                price={travel.price}
                                image={travel.image}
                                description={travel.description}
                                rating={travel.rating}
                            />
                        ))}
                    </Row>
                    </a>
                </Col>
                <Col md={4}>
                    <Plan_trip_form/>
                </Col>
            </Row>
        </Container>
     );
}
 
export default ContainerArchive;