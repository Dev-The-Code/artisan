import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../EcomShopcard.css'

class EshopCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { shopsData } = this.props;
        return (

            <div className="container" style={{ width: "100%" }}>
                {shopsData.length > 0 &&
                    <div className="row" style={{ marginTop: "20px" }}>
                        <span>
                            <h3 className="exploreHead"> Shops </h3>
                        </span>
                    </div>}


                <div className="row">

                    <div className="col-md-12">


                        {/* {notFoundFilterData && filteredData.length == 0 ?
                            <div>
                                <p>
                                    No Record Found
                                </p>
                                <button
                                    onClick={this.shopsData}
                                >Back</button>
                            </div>
                            :
                            filteredData && filteredData.map((elem, key) => {
                                let str = elem.showAllProducts || '';
                                if (str.length > 35) {
                                    str = str.substring(0, 10);
                                    str = str + '...'
                                }
        <div className="row" style={{ marginTop: "20px" }}>
          <span>
          </span>
        </div>

        
              return (
                <div className="col-md-4 col-sm-4">
                  <Link rel="noopener noreferrer" to={{ pathname: `/products_DetailStyle/${elem._id}`, state: elem }} >
                    <div className="ecomshopcard">
                      <div className="ecommerce-card" >
                        <img alt='' src={elem.images[0]} />
                      </div>
                      <div className="">
                        <div className="pricing">
                          <h4>{`${elem.price.number} ${elem.price.currency}`} </h4>
                        </div>
                        <div className="category">
                          <h4>
                                {elem.category}
                              </h4>
                        </div>
                      </div>
                      <div className="otherdetails">
                        <span><h3>{elem.product.slice(0,18)}...</h3></span>
                        <span><h5>By:{elem.shopName}</h5></span>
                        <Link rel="noopener noreferrer" to={{ pathname: `/products_DetailStyle/${elem._id}`, state: elem }} ><button className="shop-btn">Shop Now</button></Link>
                      </div>
                      
                    </div>
                    </Link>
                </div>
              )
            })} */}

                        {/* {notFoundFilterData == false && filteredData.length == 0 && allData ? */}
                        {shopsData && shopsData.map((elem, key) => {
                            return (
                                <div className="col-md-4 col-sm-4">
                                    <Link rel="noopener noreferrer" to={{ pathname: `/EcommerceProfile/${elem._id}`, state: elem }} >
                                        <div className="ecomshopcard">
                                            <div className="ecommerce-card" >
                                                <img alt='' src={elem.images[0]} />
                                            </div>
                                            <div className="">
                                                {/* <div className="pricing">
                                                    <h4 style={{ margin: "0", color: "#337AB7" }}>{`${elem.price.number} ${elem.price.currency}`} </h4>
                                                </div> */}
                                                {/* <div className="category">
                                                    <h4>
                                                        {elem.category}
                                                    </h4>
                                                </div> */}
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
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default EshopCard;
