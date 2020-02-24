import React, { Component } from 'react';
import ExploreCards from '../ecommerce/explorecards';
import './ecommercedata.css';

class EcommerceProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    const { shopsData } = this.props;
    return (
      <div className="container" style={{ borderRadius: '5px', width: '100%', padding: '25px' }}>
        <div className="row">
          <div className="artisanproducts">
            <ExploreCards shopsData={shopsData} />
          </div>
        </div>
      </div>


    )
  }
}

export default EcommerceProducts;