import React, { Component } from 'react';
//import Header from '../../Components/home/Header';
import Burgermenu from '../header/burgermenu';
//import Footer from '../../Components/home/headingf8';
import Termsofservices1 from './termsofservices1';
import Footer from '../footer/footer';
import './termsofservices.css'

class Termsofservices extends Component {
  render() {
    return (
        <div>
        <div className="visible-xs" style={{marginTop:'-19px',backgroundSize: 'cover'}}>
            <div className="background-image">
                <Burgermenu/>
            </div>
        </div>
        <div className ="hidden-xs" style={{marginTop:'86px',backgroundSize: 'cover'}}>
            <div className="background-image">
                <Burgermenu/>
            </div>
        </div>
        	<Termsofservices1/>
        <Footer/>
  		</div>
    );
  }
}
export default Termsofservices;
