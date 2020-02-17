import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../EcomShopcard.css'

class EshopCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { shopsData, filteredDataShop, shopCategory, shopLocation, removeValuesShops, showRecordShop, notFoundFilterDataShop, showAllShops } = this.props;
        return (

            <div className="container" style={{ width: "100%" }}>
                {shopCategory && shopCategory.length > 0 ?
                    shopCategory.map((elem, key) => {
                        return (
                            <div className="row">
                                <div className="cross-card">

                                    <li>{elem}<span class="close"
                                        onClick={removeValuesShops.bind(this, 'categoryShop', elem)}
                                    >x</span></li>
                                </div>
                            </div>
                        )
                    })
                    : null}
                {shopLocation && shopLocation.length > 0 ?
                    shopLocation.map((elem, key) => {
                        return (
                            <div className="row">
                                <div className="cross-card">
                                    <li>{elem}<span class="close"
                                        onClick={removeValuesShops.bind(this, 'locationShop', elem)}
                                    >x</span></li>
                                </div>
                            </div>
                        )
                    })
                    : null}
                {shopsData.length > 0 &&
                    <div className="row" style={{ marginTop: "20px" }}>
                        <span>
                            <h3 className="exploreHead"> Shops </h3>
                        </span>
                    </div>}


                <div className="row">

                    <div className="col-md-12">
                        {/* 
                        {shopsData && shopsData.map((elem, key) => {
                            return (
                                <div className="col-md-4 col-sm-4">
                                    <Link rel="noopener noreferrer" to={{ pathname: `/EcommerceProfile/${elem._id}`, state: elem }} >
                                        <div className="ecomshopcard">
                                            <div className="ecommerce-card" >
                                                <img alt='' src={elem.images[0]} />
                                            </div>
                                            <div className="">

                                            </div>
                                            <div className="otherdetails">
                                                <span><h3>{elem.shopTitle.slice(0, 15)}....</h3></span>
                                                <span><h5>{elem.shopCategories[0]}</h5></span>
                                                <Link rel="noopener noreferrer" to={{ pathname: `/EcommerceProfile/${elem._id}`, state: elem }} ><button className="shop-btn">Visit Shop</button></Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                        } */}
                        {notFoundFilterDataShop && filteredDataShop.length == 0 ?
                            <div>
                                <p>
                                    No Record Found
                  </p>
                                <button
                                    onClick={showAllShops}
                                >Back</button>
                            </div>
                            :
                            filteredDataShop && filteredDataShop.map((elem, key) => {
                                return (
                                    <div className="col-md-4 col-sm-4">
                                        <Link rel="noopener noreferrer" to={{ pathname: `/EcommerceProfile/${elem._id}`, state: elem }} >
                                            <div className="ecomshopcard">
                                                <div className="ecommerce-card" >
                                                    <img alt='' src={elem.images[0]} />
                                                </div>
                                                <div className="">

                                                </div>
                                                <div className="otherdetails">
                                                    <span><h3>{elem.shopTitle.slice(0, 15)}....</h3></span>
                                                    <span><h5>{elem.shopCategories[0]}</h5></span>
                                                    <Link rel="noopener noreferrer" to={{ pathname: `/EcommerceProfile/${elem._id}`, state: elem }} ><button className="shop-btn">Visit Shop</button></Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}

                        {notFoundFilterDataShop == false && filteredDataShop.length == 0 && showRecordShop ?
                            shopsData && shopsData.map((elem, key) => {
                                return (
                                    <div className="col-md-4 col-sm-4">
                                        <Link rel="noopener noreferrer" to={{ pathname: `/EcommerceProfile/${elem._id}`, state: elem }} >
                                            <div className="ecomshopcard">
                                                <div className="ecommerce-card" >
                                                    <img alt='' src={elem.images[0]} />
                                                </div>
                                                <div className="">

                                                </div>
                                                <div className="otherdetails">
                                                    <span><h3>{elem.shopTitle.slice(0, 15)}....</h3></span>
                                                    <span><h5>{elem.shopCategories[0]}</h5></span>
                                                    <Link rel="noopener noreferrer" to={{ pathname: `/EcommerceProfile/${elem._id}`, state: elem }} ><button className="shop-btn">Visit Shop</button></Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                            : null
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default EshopCard;
