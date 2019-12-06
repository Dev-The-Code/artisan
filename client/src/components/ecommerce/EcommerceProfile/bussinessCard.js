import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';
import moment from 'moment';

class BussinesCard extends Component {
    callFunc(cardDetails, detail) {
        let to = '';
        if (detail === 'businessData') {
            to = { pathname: `/detail_business`, state: cardDetails };
        } else if (detail === 'roomRentData') {
            to = { pathname: `/detail_roomRent`, state: cardDetails };
        } else if (detail === 'buySellData') {
            to = { pathname: `/detail_buySell`, state: cardDetails };
        } else if (detail === 'jobListData') {
            to = { pathname: `/detail_jobPortal`, state: { ...cardDetails, sec: 'mainPart', user: true } };
        } else if (detail === 'eventPortalData') {
            to = { pathname: `/detail_eventPortal/${cardDetails.randomKey}`, state: cardDetails };
        } else if (detail === 'ecommerce') {
            to = { pathname: `/products_DetailStyle/${cardDetails._id}`, state: cardDetails };
        }
        return to;
    }

    render() {
        const { cardDetails, detail } = this.props;
        let src = cardDetails.imageurl && cardDetails.imageurl[0] ||
            cardDetails.businessImages && cardDetails.businessImages[0] ||
            cardDetails.arr_url && cardDetails.arr_url[0] ||
            cardDetails.images && cardDetails.images[0],
            locate = cardDetails.city + ", " + cardDetails.state,

            name = cardDetails.businessname || cardDetails.eventTitle ||
                cardDetails.compName || cardDetails.postingtitle || cardDetails.title,
            obj = this.callFunc(cardDetails, detail);

        return (
            <Link key={1} to={obj}>
                <div className="" style={{ 'marginBottom': '30px' }}>
                    <div className="card" style={{ width: '100%' }}>
                        <img alt='' src={src} style={{ height: '200px', width: "100%" }} />
                        {detail == 'businessData' && <span>
                            <h4 style={{ marginLeft: "-1px", marginBottom: "15px", marginTop: "20px" }}>
                                <b>{name}</b>
                            </h4>
                            <span>
                                <Rate disabled
                                    style={{ paddingBottom: '20px', marginTop: "-10px" }}
                                    allowHalf value={cardDetails.star}
                                />
                                {cardDetails.star}
                            </span>
                            <p style={{ marginTop: "-15px" }}>
                                <span className="glyphicon glyphicon-map-marker"
                                    style={{ color: "#008080", margin: "2px" }}
                                ></span>
                                <span style={{ color: "black" }}>{locate}</span>
                            </p>
                        </span>}
                        {/* {detail == 'ecommerce' && <span>
                            <p style={{color: 'black', margin:"0",fontFamily: 'Source Sans Pro, sans-serif'}}>
                                {cardDetails.product}
                            </p>
                            <p style={{color: 'black', margin:"0",fontFamily: 'Source Sans Pro, sans-serif'}}>
                                <b>{cardDetails.country}</b>
                                <br/>{'$' + cardDetails.price }
                            </p>
                            <span>
                               
                            </span>
                        </span>} */}
                        {detail == 'roomRentData' && <span>
                            <p style={{ color: 'black', margin: "0", fontFamily: 'Source Sans Pro, sans-serif' }}>
                                {cardDetails.postingtitle}
                            </p>
                            <p style={{ color: 'black', margin: "0", fontFamily: 'Source Sans Pro, sans-serif' }}>
                                <b>{cardDetails.propertylocation.slice(0, 35)}</b>
                                <br />{'$' + cardDetails.rent + ' ' + cardDetails.pricemode}
                            </p>
                            <span>
                                <Rate disabled
                                    style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }}
                                    allowHalf value={cardDetails.star}
                                />
                                {cardDetails.star}
                            </span>
                        </span>}
                        {detail == 'jobListData' && <span>
                            <p className="companyName"
                                style={{ marginTop: "15px" }}
                            >
                                {cardDetails.compName && cardDetails.compName}
                            </p>
                            <h4 style={{ marginLeft: "-1px", marginBottom: "15px", marginTop: "-22px" }}>
                                <b>{cardDetails.jobCat}</b>
                            </h4>
                            <p style={{ marginTop: "-10px", marginLeft: '-5px' }}>
                                <span className="glyphicon glyphicon-map-marker"
                                    style={{ color: "#008080", margin: "2px" }}
                                ></span>
                                <span style={{ color: "black" }}>{cardDetails.location}</span>
                            </p>
                        </span>}
                        {detail == 'buySellData' && <p>
                            Rs.{!cardDetails.hideprice ? '$' + cardDetails.price : 'Hide'}
                            <br /><b>{cardDetails.modelname}</b>
                            <br />{cardDetails.address},{cardDetails.state}
                        </p>}
                        {detail == 'eventPortalData' && <span>
                            <h5 style={{ marginTop: '5px', marginLeft: "0", marginBottom: "5px" }}>
                                <b>{cardDetails.eventTitle}</b>
                            </h5>
                            <p style={{ marginBottom: "0px" }}>
                                <span style={{ color: "black" }}>{cardDetails.city}</span>
                            </p>
                            <p>
                                <span className="glyphicon glyphicon-calendar"
                                    style={{ color: "#008080", margin: "-1px" }}
                                ></span>
                                <span style={{ color: "black", marginLeft: "5px" }}>
                                    {moment(cardDetails.posted, "LL").format('YYYY-MM-DD')}
                                </span>
                            </p>
                        </span>}
                        {detail == 'ecommerce' && <span>
                            <p style={{ color: 'black', margin: "0", fontFamily: 'Source Sans Pro, sans-serif' }}>
                                {cardDetails.product}
                            </p>
                            <p style={{ color: 'black', margin: "0", fontFamily: 'Source Sans Pro, sans-serif' }}>
                                <b>{cardDetails.country}</b>
                                <br />{'$' + cardDetails.price}
                            </p>
                            <span>

                            </span>
                        </span>}
                    </div>
                </div>
            </Link>

        )
    }
}

export default BussinesCard;
