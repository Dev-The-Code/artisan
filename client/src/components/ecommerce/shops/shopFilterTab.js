import React, { Component } from 'react';
import './shopFilterTab.css';
import { Cascader, Checkbox } from 'antd';

const category = [
  {
    value: 'Clothing',
    label: 'Clothing',
  },
  {
    value: 'Bags & Puses',
    label: 'Bags & Puses',
  },
  {
    value: 'Jwellery',
    label: 'Jwellery',
  },
  {
    value: 'Shoes',
    label: 'Shoes',
  },
  {
    value: 'Decor',
    label: 'Decor'
  },
  {
    value: 'Gardening',
    label: 'Gardening',
  },
  {
    value: 'Pets',
    label: 'Pets',
  },
  {
    value: 'Furniture',
    label: 'Furniture',
  },
];


class FourEcom extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { locationCitiesShops, onChangeShop, onChangeShopLocation, shopCategory , shopLocation} = this.props;
    return (
      <div>
        <div className="" style={{ padding: "15px" }}>
          <h4 style={{ fontWeight: '700' }}>Related Categories</h4>
          <ol style={{ marginTop: "0", marginLeft: "38px" }}>
            <Cascader
              value={shopCategory}
              options={category}
              onChange={onChangeShop}
            />
          </ol>
        </div>

        <hr className="filterdivider" />
        <div className="" style={{ display: "grid", padding: "15px" }}>
          <h4 style={{ fontWeight: '700' }}>Location</h4>
          <Checkbox.Group style={{ width: '100%' }}
            onChange={onChangeShopLocation}
            value={shopLocation}
          >
            <div className="" style={{ display: "grid" }}>
              {locationCitiesShops && locationCitiesShops.map((elem, key) => {
                return (
                  <div className="">
                    <Checkbox value={elem}>{elem}</Checkbox>
                  </div>
                )
              })}
            </div>
          </Checkbox.Group>
        </div>
      </div>
    )
  }
}

export default FourEcom;