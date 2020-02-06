import React, { Component } from 'react';
import { Rate } from 'antd';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import './productinformation.css';

class RelatedInformation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isData: true,
      data: {},
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    let data = this.props.data;
    if (data === undefined) {
      this.setState({
        isData: false
      })
    } else {
      this.setState({
        isData: true,
        data: data
      })
    }
  }
  render() {
    const { data } = this.state;
    let length = data.itemLength;
    let weight = data.itemWeight;
    let width = data.itemWidth;
    return (
        <div className="">
            
            
            <div className="new-card">
                    <div className="">
                      {data.product ?
                      <span>
                        <strong>{data.product}</strong>
                      </span>

                      :null}
                    </div>
                    <div>
                         {data.price ?
                          <span>
                            <strong>Price</strong>
                            { data.price.number + ' Pkr'}
                            </span>
                        : null}
                    </div>
                    <div>
                        
                        {data.salePrice ?
                          <span>
                            <strong>Sale Price</strong>
                            { data.salePrice.number + ' Pkr'}
                          </span>
                        : null}
                    </div>
            </div>
            
        </div>
    )
}
}

export default RelatedInformation