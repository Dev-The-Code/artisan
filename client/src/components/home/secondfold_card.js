import React, { Component } from 'react';
import './secondfold_card.css';
import { Link } from "react-router-dom";
import { isMobile, isTablet, isBrowser } from 'react-device-detect';


class SecondfoldCard extends Component{
    render() {
        return (
            <div className="container" style={isTablet ? {marginTop:"0px", width:"100%", backgroundColor:"#4cadc98f"} : {marginTop:"20px", width:"99%", backgroundColor:"#4cadc98f", borderRadius:"5px"}}>
                <div className="row" style={{padding:"51px 20px"}}>
                    <div className="col-md-2 col-sm-3">
                        <div className="hometext">
                            <h4>Artisans</h4>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-9">
                        <div className="bannertext"> 
                            <h2>We’re a digital agency mainly focused on Web Interactions and Photography, based on New York.</h2>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="bannertext">
                            <p>Masterpiece all youthful on, full-bodied wholesome quick, take zippy the tasty than natural. Outlasts great peppy generous, grand simply offer. Far why hearty, goodbye, leading can’t, splash formula brand know, reduced neat power jumbo</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="bannertext">
                            <img src="../images/homepage/about_image.png" alt=""/>
                        </div>
                    </div>              
                </div>
                
            </div>

            
        )
    }
}

export default SecondfoldCard;