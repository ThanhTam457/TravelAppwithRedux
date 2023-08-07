import React from "react";
import { Container } from 'react-bootstrap';
import Header from './include/Header';
import Footer from './include/Footer';
import './css/home.css'
import Logo_banner from './include/Logo_banner.js';
import Promotion from './include/Promotion';
import Main from "./include/Main.js";
import JumbotronHome from "./component/JumbotronHome.js";

const Home =() => {
    return(
        <div className='home'>
        <Header
            style = {"url(/images/background.png)"
                }/>
        <JumbotronHome/>
        <Logo_banner/>
        <Main/>
        <Promotion/>
        <Footer/>
    </div>
    );

}
export default Home;