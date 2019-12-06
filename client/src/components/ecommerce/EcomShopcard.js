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

      <div className="container" style={{ width: "95%" }}>
        <div className="row" style={{ marginTop: "20px" }}>
          <span>
            <h3 className="" style={{ fontWeight: "bold", textAlign: "left", marginLeft: "15px" }}> Products </h3>
            {/* <p style={{ marginLeft: "365px", marginTop: "-40px" }}> see detail </p> */}
          </span>
        </div>

        <div className="row">
          <div className="col-md-12">
            {productsData && productsData.map((elem, key) => {
              return (
                <div className="col-md-3 col-sm-4">
                  <Link rel="noopener noreferrer" to={{ pathname: `/products_DetailStyle/${elem._id}`, state: elem }} >
                    <div className="ecomshopcard" style={{ cursor: 'pointer' }}>
                      <div className="card2" >
                        <img alt='' src={elem.images[0]} />
                      </div>
                      <h4 style={{ marginTop: "20px", textAlign: "center" }}>{`$${elem.price}`} </h4>
                      <button type="button" className="btn btn-sm btn2-success font-style" style={{ width: "100%" }}>Shop Now</button>
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
