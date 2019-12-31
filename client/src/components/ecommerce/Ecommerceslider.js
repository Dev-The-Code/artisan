import React, { Component } from 'react';
import './home/homebanner.css';
import { Link } from "react-router-dom";
import BannerInside from './bannerinside';



class EcomSlider extends Component{
    render(){
        return(
            <div className="container" style={{width:"90%", padding:'0', position:"relative", top:"-100px"}}>
            <div className="homebanneropa">
                <img src="../images/homepage/banner.jpg" alt="" style={{width: "100%", height:"650px"}}/>
            </div>
            
            
        </div>
        )
    }
}

export default EcomSlider;