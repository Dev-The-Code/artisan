import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './EcomShopcard.css'

class EshopCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { productsData } = this.props;
    return (

      <div className="container" style={{width:"100%"}}>
        <div className="row" style={{ marginTop: "20px" }}>
          <span>
            {/* <h3 className="" style={{ fontWeight: "bold", textAlign: "left", marginLeft: "15px" }}> Products </h3> */}
            {/* <p style={{ marginLeft: "365px", marginTop: "-40px" }}> see detail </p> */}
          </span>
        </div>

        <div className="row">
          <div className="col-md-12">
            {productsData && productsData.map((elem, key) => {
              console.log(elem.category, "Category finder")
              return (
                <div className="col-md-4 col-sm-4">
                  <Link rel="noopener noreferrer" to={{ pathname: `/products_DetailStyle/${elem._id}`, state: elem }} >
                    <div className="ecomshopcard">
                      <div className="ecommerce-card" >
                        <img alt='' src={elem.images[0]} />
                      </div>
                      <div className="">
                        <div className="pricing">
                          <h4>{`$${elem.price}`} </h4>
                        </div>
                        <div className="category">
                          <h4>
                                {elem.category[1]}
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
            })}

            {/* <div className="col-md-3 col-sm-4">
              <Link rel="noopener noreferrer" to={`/products_DetailStyle`} >
                <div className="ecomshopcard" style={{ cursor: 'pointer' }}>
                  <div className="card2" >
                    <img alt='' src='./images/ecommerce/31CElO-B3PL._AC_US160_.jpg' />
                  </div>
                  <h4 style={{ marginTop: "20px", textAlign: "center" }}> $13.49 to $22.24 </h4>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4">
              <Link rel="noopener noreferrer" to={`/products_DetailStyle`} >
                <div className="ecomshopcard" style={{ cursor: 'pointer' }}>
                  <div className="card2" >
                    <img alt='' src='./images/ecommerce/41+zILHoWaL._AC_US218_.jpg' />
                  </div>
                  <h4 style={{ marginTop: "20px", textAlign: "center" }}> $13.49 to $22.24 </h4>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-4">
              <div className="ecomshopcard" style={{ cursor: 'pointer' }}>
                <div className="card2" >
                  <img alt='' src='./images/ecommerce/41pa5T0NGKL._AC_US218_.jpg' />
                </div>
                <h4 style={{ marginTop: "20px", textAlign: "center" }}> $13.49 to $22.24 </h4>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div >
    )
  }
}

export default EshopCard;
