import React, { Component } from 'react';
import ProfileContact from './profileContact';
import ProfileListing from './profileListing';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';
import AsyncStorage from "@callstack/async-storage";
import { HttpUtils } from "../../Services/HttpUtils";
import { Tabs, Radio } from 'antd';

const TabPane = Tabs.TabPane;

class TestComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listing: true,
            listData1: [],
            listData2: [],
            listData3: [],
            listData4: [],
            listData5: [],
            listData6: [],
            allData: [],
            buySell: false,
            business: false,
            rooms: false,
            jobPortal: false,
            ecommerce: false,
            data: [],
        };
    }


    render() {
        const { arr1, arr2, arr3, arr4, arr5 } = this.props.listing;

        const noData = (
            <div style={{ marginTop: '125px' }}>
                <h1>
                    You dont have data to show...
            </h1>
            </div>
        )


        return (
            <div className="container" style={{ width: "90%" }}>
                <div className="row">
                    <h2 style={{ marginLeft: "15px" }}>Listings</h2>

                    {/* ===============Ad Listing start================= */}
                    {<Tabs defaultActiveKey="1">
                        {/* <TabPane tab='Room Renting' key="1">
                            <div className="secondfold" style={{ backgroundColor: '#FBFAFA' }}>
                                <div className="index-content" style={{ marginTop: '20px' }}>
                                    <div className="row">
                                        {arr1 && arr1.length ? arr1.map((elem) => {
                                            let img = elem.imageurl && elem.imageurl[0] ||
                                                '../images/images.jpg';
                                            let title = elem.postingtitle || ''
                                            let str = elem.discription || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                <div className="col-md-4"
                                                    style={{
                                                        marginBottom: '20px',
                                                        marginTop: '20px'
                                                    }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_roomRent`, state: elem }}>
                                                            <img alt='' src={img} />
                                                            <h4>{title}</h4>
                                                            <p>{str}</p>
                                                        </Link>

                                                    </div>
                                                </div>

                                            )
                                        }) :
                                            noData
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPane> */}
                        {/* <TabPane tab='Bussiness Listing' key="2">
                            <div className="secondfold" style={{ backgroundColor: '#FBFAFA' }}>
                                <div className="index-content" style={{ marginTop: '20px' }}>
                                    <div className="row">
                                        {arr2 && arr2.length ? arr2.map((elem) => {
                                            let img = elem.businessImages && elem.businessImages[0] || '../images/images.jpg';
                                            let title = elem.businessname || ''
                                            let str = elem.description || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                <div className="col-md-4"
                                                    style={{
                                                        marginBottom: '20px',
                                                        marginTop: '20px'
                                                    }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_business`, state: elem }}>
                                                            <img alt='' src={img} />
                                                            <h4>{title}</h4>
                                                            <p>{str}</p>
                                                        </Link>

                                                    </div>
                                                </div>

                                            )
                                        }) :
                                            noData
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab='Buy & Sell' key="3">
                            <div className="secondfold" style={{ backgroundColor: '#FBFAFA' }}>
                                <div className="index-content" style={{ marginTop: '20px' }}>
                                    <div className="row">
                                        {arr3 && arr3.length ? arr3.map((elem) => {
                                            let img = elem.images && elem.images[0] || '../images/images.jpg';
                                            let title = elem.title || ''
                                            let str = elem.description || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                <div className="col-md-4"
                                                    style={{
                                                        marginBottom: '20px',
                                                        marginTop: '20px'
                                                    }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_buySell`, state: elem }}>
                                                            <img alt='' src={img} />
                                                            <h4>{title}</h4>
                                                            <p>{str}</p>
                                                        </Link>

                                                    </div>
                                                </div>

                                            )
                                        }) :
                                            noData
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPane> */}
                        {/* <TabPane tab='Job Portal' key="4">
                            <div className="secondfold" style={{ backgroundColor: '#FBFAFA' }}>
                                <div className="index-content" style={{ marginTop: '20px' }}>
                                    <div className="row">
                                        {arr4 && arr4.length ? arr4.map((elem) => {
                                            let img = elem.arr_url && elem.arr_url[0] || '../images/images.jpg';
                                            let title = elem.compName || ''
                                            let str = elem.compDescription || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                <div className="col-md-4"
                                                    style={{
                                                        marginBottom: '20px',
                                                        marginTop: '20px'
                                                    }}>
                                                    <div className="card">
                                                        <Link to={{ pathname: `/detail_jobPortal`, state: elem }}>
                                                            <img alt='' src={img} />
                                                            <h4>{title}</h4>
                                                            <p>{str}</p>
                                                        </Link>

                                                    </div>
                                                </div>
                                            )
                                        }) :
                                            noData
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPane> */}
                        <TabPane tab='E Commerce' key="1">
                            <div className="secondfold" style={{ backgroundColor: '#FBFAFA' }}>
                                <div className="index-content" style={{ marginTop: '20px' }}>
                                    <div className="row">
                                        {arr5 && arr5.length ? arr5.map((elem) => {
                                            let img = elem.images && elem.shopLogo[0] || '../images/images.jpg';

                                            let title = elem.product || ''
                                            let str = elem.brandName || '';
                                            if (str.length > 45) {
                                                str = str.substring(0, 45);
                                                str = str + '...'
                                            }
                                            return (
                                                <div className="col-md-3 col-sm-4" style={{
                                                    marginBottom: '20px',
                                                    marginTop: '20px'
                                                }}>
                                                    <div className="sellercardopacity" style={{ cursor: 'pointer' }}>
                                                        <div className="overlay1">
                                                            <Link to={{
                                                                pathname: `/EcommerceProfile/${elem._id}`,
                                                                state: elem
                                                            }}>
                                                                <div className="sellerstorecard" >
                                                                    <img alt='img' src={img} />
                                                                </div>
                                                                <h4 style={{ marginTop: "20px", textAlign: "left" }}>{elem.shopTitle}</h4>
                                                                <div class="middle">
                                                                    <div class="text">View Shop</div>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                    </div>
                                                </div>

                                            )
                                        }) :
                                            noData
                                        }
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>}
                </div>
            </div>
        )
    }
}

export default TestComponent;
