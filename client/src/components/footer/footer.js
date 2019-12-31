import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './footer.css'

class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return(
            <footer className={`jazba_footer ${this.props.footerPosition}`}>
            
                <div className="row hidden-xs" style={{padding:"20px"}}>
                    <div className="col-md-4">
                        <Link to={`/`}>
                            <img alt='' src="../images/Artisans Pakistan Logo-04.png" style={{width:'45%', marginTop:"38px"}} />
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <div className="gridstyle">
                            <span style={{fontSize:'18px'}}><b>Contact Us</b></span>
                            <span>Email:<b>info@pakjazba.com</b></span>
                            <span>Phone:<b>+01 456 7890</b></span>
                            <span style={{fontSize:'18px', marginTop:'15px'}}><b>Follow Us</b></span>
                            <div className="row" style={{padding:'0px'}}>
                                <div className="col-md-12" style={{padding:"0"}}>
                                    <a href="https://www.facebook.com" target="_blank" className="fa fa-facebook "><i></i></a>
                                    <a href="https://www.linkedin.com" target="_blank" className="fa fa-linkedin " ></a>
                                    <a href="https://mail.google.com" target="_blank" className="fa fa-google-plus "></a>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gridstyle">
                            <span style={{fontSize:'18px'}}><b>Others</b></span>
                            <span><b>For All Your Local Need</b></span>
                            <span><b>Find expert service providers</b></span>
                            <span><Link to={`/privacypolicy`} target="blank" style={{color:'#D9A67E'}}><b>privacy policy</b></Link></span>
                           <span><Link to="/termofservice" target="blank" style={{color:'#D9A67E'}}><b>term of service</b></Link></span>

                        </div>
                    </div>
                    {/*<div className="row" style={{padding:'0px'}}>
                        <div className="col-md-6" style={{textAlign:'left'}}>
                            <span style={{marginLeft:'55%'}}></span>
                        </div>
                        <div className="col-md-6" style={{textAlign:'left'}}>
                           <span style={{marginLeft:"160px"}}><b>Get Started Now!</b></span>
                        </div>
                     </div>*/}
                </div>

                <div className="row visible-xs" style={{padding:"20px"}}>
                    <div className="col-md-12">
                        <Link to={`/`}>
                            <img alt='' src="../images/Artisans Pakistan Logo-04.png" style={{width:'60%', marginTop:"38px", marginLeft:"60px", marginBottom:"30px"}} />
                        </Link>
                    </div>
                    <div className="col-md-6 col-sm-4 col-xs-6" style={{padding:"10px"}}>
                        <div className="gridstyle">
                            <span style={{fontSize:'18px'}}><b>Contact Us</b></span>
                            <span>Email:<b>info@pakjazba.com</b></span>
                            <span>Phone:<b>+01 456 7890</b></span>
                            <span style={{fontSize:'18px', marginTop:'15px'}}><b>Follow Us</b></span>
                            <div className="row" style={{padding:'0px'}}>
                                <div className="col-md-12" style={{padding:"0"}}>
                                    <a href="https://www.facebook.com" target="_blank" className="fa fa-facebook "><i></i></a>
                                    <a href="https://www.linkedin.com" target="_blank" className="fa fa-linkedin " ></a>
                                    <a href="https://mail.google.com" target="_blank" className="fa fa-google-plus "></a>
                                </div>
                            </div>
                         </div>
                    </div>
                    <div className="col-md-6 col-sm-4 col-xs-6" style={{padding:"10px"}}>
                        <div className="gridstyle">
                            <span style={{fontSize:'18px'}}><b>Others</b></span>
                            <span><b>For All Your Local Need</b></span>
                            <span><b>Find expert service providers</b></span>
                            <span><Link to={`/privacypolicy`} target="blank" style={{color:'#D9A67E'}}><b>privacy policy</b></Link></span>
                           <span><Link to="/termofservice" target="blank" style={{color:'#D9A67E'}}><b>term of service</b></Link></span>

                        </div>
                    </div>
                    {/*<div className="row" style={{padding:'0px'}}>
                        <div className="col-md-6" style={{textAlign:'left'}}>
                            <span style={{marginLeft:'55%'}}></span>
                        </div>
                        <div className="col-md-6" style={{textAlign:'left'}}>
                           <span style={{marginLeft:"160px"}}><b>Get Started Now!</b></span>
                        </div>
                     </div>*/}
                </div>

                
            </footer>
        )
    }
}

export default Footer;
