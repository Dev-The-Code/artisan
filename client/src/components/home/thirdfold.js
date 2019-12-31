import React, { Component } from 'react';
import './thirdfold.css';
import { Link } from "react-router-dom";
import { isMobile, isTablet, isBrowser } from 'react-device-detect';


class ThirdFold extends Component{
    render(){
        return(
            <div className="container" style={{width:"90%"}}>
                <div className="row hidden-xs" style={{marginTop:'50px'}}>
                    <div className="col-md-8">
                        <div className="bannertext">
                                <p style={{padding:'25px'}}>Masterpiece all youthful on, full-bodied wholesome quick, take zippy the tasty than natural. Outlasts great peppy generous, grand simply offer. Far why hearty, goodbye, leading can’t, splash formula brand know, reduced neat power jumbo</p>
                        </div>   
                    </div>
                    <div className="col-md-4">
                        <div className="text-third">
                            <h2> Artisan Categories </h2>
                        </div>
                    </div>
                </div>
                    
                <div className="row hidden-xs">
                    <div className="col-md-4">
                        <div className="image-hover">
                            <img src="./images/artisans/painter.jpg" alt="" className="image" style={{borderRadius:'5px'}}/>
                            <div className="middle">
                                <div className="image-text">PAINTER</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="image-hover">
                            <img src='./images/artisans/clay.jpg' alt="" class="image" style={{borderRadius:'5px'}}/>
                            <div className="middle">
                                    <div className="image-text">CLAY</div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="image-hover">
                            <img src="./images/artisans/embroidery.jpg" alt=""  class="image" style={{borderRadius:'5px'}}/>
                            <div className="middle">
                                        <div className="image-text">EMBROIDERY</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4" style={{marginTop:"25px"}}>
                        <div className="image-hover">
                            <img src="./images/artisans/weaver.jpg" alt=""  class="image" style={{borderRadius:'5px'}}/>
                            <div className="middle">
                                        <div className="image-text">WEAVER</div>
                            </div>
                        </div>  
                    </div>
                    <div className="col-md-4" style={{marginTop:"25px"}}>
                        <div className="image-hover">
                            <img src="./images/artisans/wood work.jpg" alt=""  class="image" style={{borderRadius:'5px'}}/>
                            <div className="middle">
                                        <div className="image-text">WOOD WORK</div>
                            </div>
                        </div>
                     
                    </div>
                </div>


                   {/*For Mobile Phones*/}
                   <div className="row visible-xs" style={{marginTop:'50px'}}>
                   <div className="col-md-4">
                        <div className="text-third">
                            <h2> Artisan Categories </h2>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="bannertext">
                                <p style={{padding:'25px'}}>Masterpiece all youthful on, full-bodied wholesome quick, take zippy the tasty than natural. Outlasts great peppy generous, grand simply offer. Far why hearty, goodbye, leading can’t, splash formula brand know, reduced neat power jumbo</p>
                        </div>   
                    </div>
                </div> 

                <div className="row visible-xs" style={{marginTop:"25px"}}>
                    <div className="col-xs-12">
                        <div className="image-hover">
                            <img src="./images/artisans/painter.jpg" alt="" className="image" style={{borderRadius:'5px'}}/>
                            <div className="middle">
                                <div className="image-text">PAINTER</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-xs-12" style={{marginTop:"25px"}}>
                        <div className="image-hover">
                            <img src='./images/artisans/clay.jpg' alt="" class="image" style={{borderRadius:'5px'}}/>
                            <div className="middle">
                                    <div className="image-text">CLAY</div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xs-12" style={{marginTop:"25px"}}>
                        <div className="image-hover">
                            <img src="./images/artisans/embroidery.jpg" alt=""  class="image" style={{borderRadius:'5px'}}/>
                            <div className="middle">
                                        <div className="image-text">EMBROIDERY</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-xs-12" style={{marginTop:"25px"}}>
                        <div className="image-hover">
                            <img src="./images/artisans/weaver.jpg" alt=""  class="image" style={{borderRadius:'5px'}}/>
                            <div className="middle">
                                        <div className="image-text">WEAVER</div>
                            </div>
                        </div>  
                    </div>
                    <div className="col-xs-12" style={{marginTop:"25px"}}>
                        <div className="image-hover">
                            <img src="./images/artisans/wood work.jpg" alt=""  class="image" style={{borderRadius:'5px'}}/>
                            <div className="middle">
                                        <div className="image-text">WOOD WORK</div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdFold;