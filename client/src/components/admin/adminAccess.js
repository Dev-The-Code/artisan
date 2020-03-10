import React, { Component } from 'react';
import './adminAccess.css';
// import Burgermenu from '../header/burgermenu';
import Footer from '../footer/footer';
import HeaderMenu from '../header/headermenu';

import { Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom';

class AdminAccess extends Component{

    render(){
        // const menu = (
        //     <Menu >
        //         <Menu.Item>
        //             <Link rel="noopener noreferrer" to={`/featured_shop`}>Publish Your Business</Link>
        //         </Menu.Item>
        //         <Menu.Item>
        //             <Link rel="noopener noreferrer" to={`/order_listnew`}>Roommates / Rentals</Link>
        //         </Menu.Item>
        //         <Menu.Item>
        //             <Link rel="noopener noreferrer" to={`/featured_product`}>Buy & Sell</Link>
        //         </Menu.Item>
                
        //     </Menu>
        // );
        return(
            <div>
                <HeaderMenu/>
                
                <div className="container" >
                    <div className="col-lg-12 col-md-12 col-sm-12 hidden-xs" style={{textAlign: 'center',marginTop: '17vh'}}>
                        <h1>Create a listing</h1>
                        <p>What type of listing would you like to add?</p>
                    </div>
                    <div className="visible-xs" style={{textAlign: 'center',marginTop: '2vh'}}>
                        <h1>Create a listing</h1>
                        <p>What type of listing would you like to add?</p>
                    </div>
                    <div className="row">

                        <Link rel="noopener noreferrer" to={`/featured_shop`}>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 flip-card">
                                <div className="devCard flip-card-inner">
                                    <div className="flip-card-front">
                                        <div className="iconDev1">
                                            <img className="iconDevImg" src="images/post-your-need-images/businessListing.png" alt='img'/>
                                        </div>
                                        <h4 className="needPost-Head">Featured Shops</h4>
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="flip-card-back-child-dev1">
                                            <h4 className="needPost-Head">Edit Featured Shops</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link rel="noopener noreferrer" to={`/order_listnew`}>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 flip-card">
                                <div className="devCard flip-card-inner">
                                    <div className="flip-card-front">
                                        <div className="iconDev2">
                                            <img className="iconDevImg" src="images/post-your-need-images/roomRental.png" alt='img'/>
                                        </div>
                                        <h4 className="needPost-Head">Product Order List</h4>
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="flip-card-back-child-dev2">
                                            <h4 className="needPost-Head">Check Order List</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link rel="noopener noreferrer" to={`/featured_product`}>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 flip-card">
                                <div className="devCard flip-card-inner">
                                    <div className="flip-card-front">
                                        <div className="iconDev3">
                                            <img className="iconDevImg" src="images/post-your-need-images/buyNSell.png" alt='img'/>
                                        </div>
                                        <h4 className="needPost-Head">Featured Products</h4>
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="flip-card-back-child-dev3">
                                            <h4 className="needPost-Head">Edit Featured Products</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        

                    </div>
                </div>

                <Footer />
                
            </div>
        )
    }
}

export default AdminAccess;