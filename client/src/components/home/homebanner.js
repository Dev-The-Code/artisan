import React, { Component } from 'react';
import './homebanner.css';
import { Link } from "react-router-dom";
import BannerInside from './bannerinside';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';

class HomeBanner extends Component{
    render() {
        return (
            <div className="container" style={isMobile ? {width:"100%", padding:'0'} : {width:"100%", padding:'0', position:"relative", top:"-30px"}}>
                <div className="homebanneropa">
                    <img src="../images/main-banner.jpg" alt=""/>
                </div>
                <BannerInside/>
            </div>
        )
    } 
    
}

export default HomeBanner;