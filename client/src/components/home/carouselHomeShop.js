import React, { Component } from 'react';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import './carouselHome.css';
import { Link } from 'react-router-dom';

class CarouselHomeShop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayListing: [],
            to: isMobile && isTablet ? 2 : isBrowser ? 3 : 1
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.setState({
                arrayListing: this.props.data
            })
        }
    }

    handleFarward = (e) => {
        const { arrayListing, to } = this.state;
        let from = isMobile && isTablet ? 2 : isBrowser ? 3 : 1;
        if (to < arrayListing.length) {
            this.setState({
                to: to + from, backward: false
            });
        } else {
            this.setState({ farward: true, backward: false })
        }
    }

    handleBackward = e => {
        const { arrayListing, to } = this.state;
        let from = isMobile && isTablet ? 2 : isBrowser ? 3 : 1;
        if (to > from) {
            this.setState({
                to: to - from, farward: false
            })
        } else {
            this.setState({ backward: true, farward: false })
        }
    }

    render() {
        const { arrayListing, to, farward, backward } = this.state,
            { detail } = this.props;
        let from = isMobile && isTablet ? 2 : isBrowser ? 3 : 1;

        return (
            <div className="carousel-reviews broun-block">
                <div className="container" style={{ width: "100%" }}>
                    <div className="row" style={{ padding: "0" }}>
                        <div id="carousel-reviews" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {arrayListing && arrayListing.map((elem, key) => {
                                    if (key >= to - from && key < to) {
                                        return (
                                            <div key={key} className="item active">
                                                <div className="">
                                                    <div className="col-md-4 col-sm-6">
                                                        <div className="ecomshopcard">
                                                            <div className="ecommerce-card" >
                                                                <img alt='img' src={elem.images[0]} />
                                                            </div>
                                                            {/* <div className="">
                                                                <div className="pricing">
                                                                    <h4 style={{ margin: "0", color: "#337AB7" }}>
                                                                        {elem.price.number} {elem.price.currency}
                                                                    </h4>
                                                                </div>
                                                                <div className="category">
                                                                    <h4>
                                                                        {elem.categories[0]}
                                                                    </h4>
                                                                </div>
                                                            </div> */}
                                                            <div className="otherdetails">
                                                                <span><h3>{elem.shopTitle.slice(0, 15)}....</h3></span>
                                                                <span><h5>{elem.shopCategories[0]}</h5></span>
                                                                <Link rel="noopener noreferrer" to={{ pathname: `/EcommerceProfile/${elem._id}`, state: elem }} >
                                                                    <button className="shop-btn">Visit Shop</button>
                                                                </Link>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            {arrayListing && arrayListing.length > 3 ? <div>
                                <a disabled={backward} className="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left" id="left" onClick={e => this.handleBackward(e)}></span>
                                </a>
                                <a disabled={farward} className="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right" id="right" onClick={e => this.handleFarward(e)}></span>
                                </a>
                            </div>
                                : null}
                            {/* <a disabled={backward} className="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left" id="left" onClick={e => this.handleBackward(e)}></span>
                            </a>
                            <a disabled={farward} className="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right" id="right" onClick={e => this.handleFarward(e)}></span>
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselHomeShop;
