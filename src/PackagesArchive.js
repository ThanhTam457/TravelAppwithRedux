import React from "react";
import './css/archive.css';
import Header from "./include/Header";
import Footer from "./include/Footer";
import Container from 'react-bootstrap/Container';
import JumbotronArchive from "./component/JumbotronArchive";
import ContainerArchive from "./include/ContainerArchive";

const PackagesArchive = () =>{
    return(
        <div className="archive">
            <Header/>
            <JumbotronArchive/>
            <ContainerArchive/>
            <Footer/>
        </div>
    );
}
export default PackagesArchive;