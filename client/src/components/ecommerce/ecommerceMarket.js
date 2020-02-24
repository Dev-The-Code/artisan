import React, { Component } from 'react';
import HeaderMenu from '../header/headermenu';
import Footer from '../footer/footer';
import Ecomtabs from './ecommercetabs';


class EcommerceMarket extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <span>
          <div className="vissible-xs" style={{ marginTop: "102px", backgroundSize: 'cover' }}>
            <div className="visible-xs" style={{ marginTop: '-119px' }}></div>
            <div className="background-image">
              <HeaderMenu />
              <Ecomtabs data={this.props.location.state} />
            </div>
          </div>
        </span>
        <Footer />
      </div>
    )
  }
}

export default EcommerceMarket;
