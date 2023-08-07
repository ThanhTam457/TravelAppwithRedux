import React from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Plan_trip_form = () => {
    return ( 
        <div className="plan-trip-form px-5 py-4 mb-3" style={{backgroundColor: "#EDEDED"}}>
            <h2 className="text-center">Plan Your Trip</h2>
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus officiis cupiditate in expedita.</p>
            <form action="">
                <div className="form mb-3">
                    <input type="text" className="form-control" placeholder="Search Tour"/>
                </div>
                <div className="form mb-3">
                    <input type="text" className="form-control"placeholder="Where To?"/>
                </div>
                <div className="form mb-3">
                    <input type="text" className="form-control" placeholder="Date"/>
                </div>
                
                <div className="filter-by-price">
                    <h3 className="">Filter By Price</h3>
                    <div className="px-4">
                        <Slider style={{height: "20px"}}
                            pushable={true}
                            min={12} 
                            max={3600} 
                            defaultValue={[12, 3600]}
                            railStyle={{backgroundColor: "white", height: "2rem", borderRadius: "0"}}
                            trackStyle={{backgroundColor:"#DF6951", height: "2rem", borderRadius: "0"}}
                            handleStyle={{backgroundColor: "#DF6951", border: "none", borderRadius: "0", height: "2rem" , width: "1.5rem", marginTop:"0", opacity: "1"}}
                        />
                    </div>
                    <p className="filter-price mt-3 text-secondary">$12 - $3600</p>
                </div>
                <div className="w-100 text-center">
                    <button className="btn text-white px-5 py-3" type="submit" style={{backgroundColor: "#DF6951"}}>Book Now</button>
                </div>
            </form>
        </div>
     );
}
 
export default Plan_trip_form;