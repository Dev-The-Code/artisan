import React, { Component } from 'react';
import './fourEcom.css';
import { Checkbox, Input, Col, Row, Button, Radio, Rate } from 'antd';

class FourEcom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minPrice: '',
      maxPrice: '',

    }
  }

  render() {
    const { minPrice, maxPrice } = this.state;
    const { categories, color, location, brandName, onChange, serachProductMinToMaxPrice, priceRangeNotGiven } = this.props;
    return (
      <div>
        <div className="" style={{padding:"15px"}}>
          <h4 style={{ fontWeight: '700' }}>Related Categories</h4>
            <ol style={{marginTop:"0", marginLeft:"38px"}}>
                  <li>Dummy</li>
                  <li>Dummy</li>
                  <li>Dummy</li>
                  <li>Dummy</li>
                  <li>Dummy</li>
                  <li>Dummy</li>
            </ol>
          {categories && categories.map((elem, key) => {
            return (
              <div className="">
                <ol onClick={onChange.bind(this, 'categories', elem)}> {elem}
                  
                </ol>
              </div>
            )
          })}
        </div>

        <hr className="filterdivider" />
        <div className="" style={{ display: "grid", padding:"15px" }}>
          <h4 style={{ fontWeight: '700' }}>Brand</h4>
          <Checkbox.Group style={{ width: '100%' }} 
          // onClick={onChange.bind (this, 'brand name')}
          >
            {/* {brandName && brandName.map((elem, key) => {
              return ( */}
                <div className="" style={{display:"grid"}}>
                  <Checkbox 
                  // value={elem}
                  >
                    Nokia
                     {/* {elem} */}
                  </Checkbox>
                  <Checkbox>
                    Samsung
                  </Checkbox>
                  <Checkbox>
                    Samsung
                  </Checkbox>
                  <Checkbox>
                    Samsung
                  </Checkbox>
                  <Checkbox>
                    Samsung
                  </Checkbox>
                </div>
              {/* )
            })} */}
          </Checkbox.Group>
        </div>


        <hr className="filterdivider" />
        <div class="" style={{ display: "grid", padding:"15px" }}>
          <h4 style={{ fontWeight: '700' }}>
            Color Family</h4>
          <Checkbox.Group style={{ width: '100%' }}
          //   onClick={onChange.bind(this, 'color')}
          >
            {/* {color && color.map((elem, key) => {
            return ( */}
                <div className="" style={{ display: "grid" }}>
                  <Checkbox 
                  // value={elem}
                  >
                  Black  {/* {elem} */}
                  </Checkbox>
                  <Checkbox>
                    Blue
                  </Checkbox>
                  <Checkbox>
                    Green
                  </Checkbox>
                  <Checkbox>
                    Yellow
                  </Checkbox>
                  <Checkbox>
                    Orange
                  </Checkbox>
                </div>
              {/* )
             })} */}
          </Checkbox.Group>
        </div>

        <hr className="filterdivider" />
        <div class="" style={{ display: "grid", padding:"15px" }}>
          <h4 style={{ fontWeight: '700' }}>Location</h4>
          <Checkbox.Group style={{ width: '100%' }}
          //  onClick={onChange.bind(this, 'location')}
           >
            {location && location.map((elem, key) => {
              return (
                <div className="">
                  <Checkbox 
                  // value={elem}
                  >
                    {/* {elem} */}
                  </Checkbox>
                </div>
              )
            })}
          </Checkbox.Group>
        </div>


        <hr className="filterdivider" />
        <div className="" style={{padding:"15px"}}>
          <h4 style={{ fontWeight: '700' }}>Price</h4>
          <div size="large" style={{ marginLeft: '10px' }}>
            <Row gutter={8}>
              <Col span={8}>
                <Input
                  placeholder="Min"
                  onChange={e => this.setState({ minPrice: e.target.value })}
                />
              </Col>
              <Col span={8}>
                <Input
                  // defaultValue="Max" 
                  placeholder="Max"
                  onChange={e => this.setState({ maxPrice: e.target.value })}
                />
              </Col>
              <Col>
                <Button type="primary" icon="caret-right" 
                // onClick={this.props.serachProductMinToMaxPrice.bind(this, minPrice, maxPrice)} 
                />
              </Col>
            </Row>
          </div>
          {priceRangeNotGiven ? <div>
            <p>Please Enter Min & Max Price</p>
          </div> : null}
        </div>
        <hr className="filterdivider" />
        {/* <div>
          <h4 style={{ fontWeight: '700' }}>Rating</h4>
          <div style={{ marginLeft: "15px", display: 'grid' }}>
            <Radio> <Rate style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={4.5} /></Radio>
            <Radio> <Rate style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={4} /></Radio>
            <Radio> <Rate style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={3.5} /></Radio>
            <Radio> <Rate style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={3} /></Radio>
            <Radio> <Rate style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={2} /></Radio>
          </div>
        </div> */}

      </div>
    )
  }
}

export default FourEcom;