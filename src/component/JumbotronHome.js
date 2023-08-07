import React from "react";
import '../css/jumbotronHome.css'
import { Container } from 'react-bootstrap';

const JumbotronHome = () => {
    return ( 
        <Container className="jumbotron">
            <img className='normal-image' src="/images/vector1.png" alt="vector1" />
                <h1 style={{color :'white',fontSize:'2.5em', marginTop: '0px', paddingRight: '500px'}}>
                    No matter where you're going to, we'll take you there
                </h1>
                <div className='div-in-jumbotron'>
                    <div className='div-text-jumbotron'>Where to?</div>
                    <div className='div-text-jumbotron'>Travel Type</div>
                    <div className='div-text-jumbotron' style={{border: 'none'}}>Duration</div>
                    <button className='button-jumbotron'>Submit</button>
                </div>
                <div style={{display: "flex", width: "max-content"}}>
                    <div>
                        <img src="/images/image_pp.png" alt="pp" width={100}  />
                    </div>
                    <div className='text-in-jumbotron'>
                        2,500 people booked Tommorowland Event in last 24 hours
                    </div>
                    
                </div>
        </Container>
     );
}
 
export default JumbotronHome;