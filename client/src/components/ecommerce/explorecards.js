import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EcomShopcard.css'

class ExploreCards extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { shopsData } = this.props;
    return (

      <div className="container" style={{ width: "100%" }}>
        <div className="row" style={{ marginTop: "20px" }}>
        </div>

        <div className="row">
          <div className="col-md-12">
            {shopsData && shopsData.map((elem, key) => {
              return (
                <div className="col-md-4 col-sm-6">
                  <Link rel="noopener noreferrer" to={{ pathname: `/EcommerceProfile/${elem._id}`, state: elem }} >
                    <div className="ecomshopcard">
                      <div className="ecommerce-card" >
                        <img alt='' src={elem.images[0]} />
                      </div>
                      <div className="otherdetails">
                        <span><h3>{elem.shopTitle.slice(0, 15)}....</h3></span>
                        <span><h5>{elem.shopCategories[0]}</h5></span>
                        <Link rel="noopener noreferrer" to={{ pathname: `/EcommerceProfile/${elem._id}`, state: elem }} >
                          <button className="shop-btn">Visit Shop</button>
                        </Link>
                      </div>

                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div >
    )
  }
}

export default ExploreCards;
