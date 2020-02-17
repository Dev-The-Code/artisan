import React, { Component } from 'react';
import {
  Cascader,
  Checkbox,
  Row,
  Col,
  Input,
  Button
} from 'antd';


const categories = [
  {
    value: 'Clothing',
    label: 'Clothing',
    children: [{
      value: 'Mens',
      label: 'Mens',
      children: [{
        value: 'Jackets',
        label: 'Jackets',
      }, {
        value: 'Jumpers',
        label: 'Jumpers',
      }, {
        value: 'Costumes',
        label: 'Costumes',
      }],
    }, {
      value: 'Womens',
      label: 'Womens',
      children: [{
        value: 'Dresses',
        label: 'Dresses',
      }, {
        value: 'Tops',
        label: 'Tops',
      }, {
        value: 'Skirts',
        label: 'Skirts',
      }, {
        value: 'Jackets',
        label: 'Jackets & Coats',
      }, {
        value: 'Trousers',
        label: 'Trousers & Pants',
      }, {
        value: 'Jumpers',
        label: 'Jumpers',
      }, {
        value: 'Costumes',
        label: 'Costumes',
      }],
    }]

  },
  {
    value: 'Shoes',
    label: 'Shoes',
    children: [{
      value: 'Mens',
      label: 'Mens',
      children: [{
        value: 'Sneakers & Athletic Shoes',
        label: 'Sneakers & Athletic Shoes',
      }, {
        value: 'Boots',
        label: 'Boots',
      }, {
        value: 'Sandals',
        label: 'Sandals',
      }, {
        value: 'Slippers',
        label: 'Slippers',
      }, {
        value: 'Loafers & Slip Ons',
        label: 'Loafers & Slip Ons',
      }, {

      }, {
        value: 'Oxfords & Wingtips',
        label: 'Oxfords & Wingtips',
      }],
    }, {
      value: 'Womens',
      label: 'Womens',
      children: [{
        value: 'Sandals',
        label: 'Sandals',
      }, {
        value: 'Boots',
        label: 'Boots',
      }, {
        value: 'Sneakers & Athletic Shoes',
        label: 'Sneakers & Athletic Shoes',
      }, {
        value: 'Slip Ons',
        label: 'Slip Ons',
      }, {
        value: 'Pumps',
        label: 'Pumps',
      }, {
        value: 'Slippers',
        label: 'Slippers',
      }, {
        value: 'Clogs & Mules',
        label: 'Clogs & Mules',
      }, {
        value: 'Oxfords & Tie Shoes',
        label: 'Oxfords & Tie Shoes',
      }, {
        value: 'Costume Shows',
        label: 'Costume Shows',
      }],
    }]
  },
  {
    value: 'Bags & Puses',
    label: 'Bags & Puses',
    children: [{
      value: 'Handbags',
      label: 'Handbags',
      children: [{
        value: 'Shoulder bags',
        label: 'Shoulder bags',
      }, {
        value: 'Clutches & Evening Bags',
        label: 'Clutches & Evening Bags',
      }, {
        value: 'Crossbody Bags',
        label: 'Crossbody Bags',
      }, {
        value: 'Top HandleBags',
        label: 'Top HandleBags',
      }]
    }, {
      value: 'Wallets & Money Clips',
      label: 'Wallets & Money Clips',
      children: [{
        value: 'Wallets',
        label: 'Wallets',
      }, {
        value: 'Business Card Cases',
        label: 'Business Card Cases',
      }, {
        value: 'Money Clips',
        label: 'Money Clips',
      }]
    }, {
      value: 'Electronic Cases',
      label: 'Electronic Cases',
      children: [{
        value: 'Phone Cases',
        label: 'Phone Cases',
      }, {
        value: 'Laptop Sleeves',
        label: 'Laptop Sleeves',
      }, {
        value: 'Tablet & E-Reader Cases',
        label: 'Tablet & E-Reader Cases',
      }, {
        value: 'Camera Bags ',
        label: 'Camera Bags ',
      }]
    }]
  },
  {
    value: 'Jwellery',
    label: 'Jwellery',
    children: [{
      value: 'Body Jwellery',
      label: 'Body Jwellery',
      children: [{
        value: 'HairJwellery',
        label: 'Hair Jwellery',
      }, {
        value: 'Anklets',
        label: 'Anklets',
      }, {
        value: 'Nose Rings & Studs',
        label: 'Nose Rings & Studs',
      }, {
        value: 'Gauge & Plug Earring',
        label: 'Gauge & Plug Earring',
      }, {
        value: 'Toe Rings',
        label: 'Toe Rings',
      }]
    }, {
      value: 'Bracelets',
      label: 'Bracelets',
      children: [{
        value: 'Woven & Braided Bracelets',
        label: 'Woven & Braided Bracelets',
      }, {
        value: 'Beaded Bracelets',
        label: 'Beaded Bracelets',
      }, {
        value: 'Charm Bracelets',
        label: 'Charm Bracelets',
      }, {
        value: 'Cuff Bracelets',
        label: 'Cuff Bracelets',
      }]
    }, {
      value: 'Earring',
      label: 'Earring',
      children: [{
        value: 'Ear Jackets & Climber',
        label: 'Ear Jackets & Climber',
      }, {
        value: 'Dangle & Drop Earrings',
        label: 'Dangle & Drop Earrings',
      }, {
        value: 'Stud Earrings',
        label: 'Stud Earrings',
      }, {
        value: 'Hoop Earrings',
        label: 'Hoop Earrings',
      }, {
        value: 'Clip-On Earrings',
        label: 'Clip-On Earrings',
      }, {
        value: 'Chandelier Earrings',
        label: 'Chandelier Earrings',
      }, {
        value: 'Screw Back Earrings',
        label: 'Screw Back Earrings',
      }]
    }, {
      value: 'Necklaces',
      label: 'Necklaces',
      children: [{
        value: 'Pendants',
        label: 'Pendants',
      }, {
        value: 'Beaded Necklaces',
        label: 'Beaded Necklaces',
      }, {
        value: 'Charm Necklaces',
        label: 'Charm Necklaces',
      }, {
        value: 'Chokers',
        label: 'Chokers',
      }, {
        value: 'Crystal Necklaces',
        label: 'Crystal Necklaces',
      }, {
        value: 'Chains',
        label: 'Chains',
      }, {
        value: 'Monogram & Name Necklaces',
        label: 'Monogram & Name Necklaces',
      }, {
        value: 'Lockets',
        label: 'Lockets',
      }, {
        value: 'Bib Necklaces',
        label: 'Bib Necklaces'
      }]
    }, {
      value: 'Rings',
      label: 'Rings',
      children: [{
        value: 'Wedding & Engagement',
        label: 'Wedding & Engagement',
      }, {
        value: 'Signet Rings',
        label: 'Signet Rings',
      }, {
        value: 'Statement Rings',
        label: 'Statement Rings',
      }, {
        value: 'Bands',
        label: 'Bands',
      }, {
        value: 'Solitaire Rings',
        label: 'Solitaire Rings',
      }, {
        value: 'Stackable Rings',
        label: 'Stackable Rings',
      }, {
        value: 'Multi-Stone Rings',
        label: 'Multi-Stone Rings',
      }, {
        value: 'Midi Rings',
        label: 'Midi Rings',
      }, {
        value: 'Triplet & Double Rings',
        label: 'Triplet & Double Rings',
      }]
    }, {
      value: 'Accessories',
      label: 'Accessories',
      children: [{
        value: 'Hair Accessories',
        label: 'Hair Accessories',
      }, {
        value: 'Hats & Caps',
        label: 'Hats & Caps',
      }, {
        value: 'Keychains & Lanyards',
        label: 'Keychains & Lanyards',
      }, {
        value: 'Scarves & Wraps',
        label: 'Scarves & Wraps',
      }, {
        value: 'Suits & Tie Accessories',
        label: 'Suits & Tie Accessories',
      }, {
        value: 'Baby Accessories',
        label: 'Baby Accessories',
      }]
    }]
  }, {
    value: 'Decor',
    label: 'Decor',
    children: [{
      value: 'Wall Decor',
      label: 'Wall Decor',
      children: [{
        value: 'Wall Hangings',
        label: 'Wall Hangings',
      }, {
        value: 'Wall Decals & Murals',
        label: 'Wall Decals & Murals',
      }, {
        value: 'Wallpapers',
        label: 'Wallpapers',
      }, {
        value: 'Wall Stencils',
        label: 'Wall Stencils',
      }]
    }, {
      value: 'Decorative Cushions',
      label: 'Decorative Cushions',
      children: [{
        value: 'Cushions',
        label: 'Cushions',
      }]
    }, {
      value: 'Picture Frames',
      label: 'Picture Frames',
      children: [{
        value: 'Frames',
        label: 'Frames',
      }]
    }, {
      value: 'Candles & Holders',
      label: 'Candles & Holders',
      children: [{
        value: 'Candles',
        label: 'Candles',
      }, {
        value: 'Candle Holders',
        label: 'Candle Holders',
      }, {
        value: 'Wax Melts',
        label: 'Wax Melts',
      }, {
        value: 'Incense',
        label: 'Incense',
      }]
    }]
  }, {
    value: 'Pets',
    label: 'Pets',
    children: [{
      value: 'Collars & Leashes',
      label: 'Collars & Leashes',
      children: [{
        value: 'Pet Collars & Jwellery',
        label: 'Pet Collars & Jwellery',
      }, {
        value: 'Pet ID Tags',
        label: 'Pet ID Tags',
      }, {
        value: 'Pet Leashes',
        label: 'Pet Leashes',
      }, {
        value: 'Pet Harnesses & Backpacks',
        label: 'Pet Harnesses & Backpacks',
      }]
    }, {
      value: 'Furniture',
      label: 'Furniture',
      children: [{
        value: 'Pet Beds & Cots',
        label: 'Pet Beds & Cots',
      }, {
        value: 'Pet Hammocks',
        label: 'Pet Hammocks',
      }, {
        value: 'Play Furniture',
        label: 'Play Furniture',
      }, {
        value: 'Pet Steps',
        label: 'Pet Steps',
      }]
    }, {
      value: 'Colting & Shoes',
      label: 'Colting & Shoes',
      children: [{
        value: 'Pet Jackets',
        label: 'Pet Jackets',
      }, {
        value: 'Pet Tops',
        label: 'Pet Tops',
      }, {
        value: 'Pet Dresses',
        label: 'Pet Dresses',
      }, {
        value: 'Pet Hat & Wigs',
        label: 'Pet Hat & Wigs',
      }, {
        value: 'Pet Booties',
        label: 'Pet Booties',
      }, {
        value: 'Pet Shoes',
        label: 'Pet Shoes',
      }, {
        value: 'Pet Neckwear',
        label: 'Pet Neckwear',
      }, {
        value: 'Pet Bows and Bells',
        label: 'Pet Bows and Bells',
      }]
    }, {
      value: 'Carriers & House',
      label: 'Carriers & House',
      children: [{
        value: 'Pet Houses',
        label: 'Pet Houses',
      }, {
        value: 'Aquariums & Tank Decor',
        label: 'Aquariums & Tank Decor',
      }, {
        value: 'Nests & Bags',
        label: 'Nests & Bags',
      }, {
        value: 'Pet Slings',
        label: 'Pet Slings',
      }, {
        value: 'Bird Cages',
        label: 'Bird Cages',
      }, {
        value: 'Pet Totes',
        label: 'Pet Totes',
      }, {
        value: 'Pet Crates & Kennels',
        label: 'Pet Crates & Kennels',
      }, {
        value: 'Coops',
        label: 'Coops',
      }]
    }]
  }, {
    value: 'Furniture',
    label: 'Furniture',
    children: [{
      value: 'Living Room',
      label: 'Living Room',
      children: [{
        value: 'Drawer Pulls & Knobs',
        label: 'Drawer Pulls & Knobs',
      }, {
        value: 'Coffee & End Tables',
        label: 'Coffee & End Tables',
      }, {
        value: 'Chairs & Ottomans',
        label: 'Chairs & Ottomans',
      }, {
        value: 'Floor Cushions',
        label: 'Floor Cushions',
      }]
    }, {
      value: 'Dinning Room',
      label: 'Dinning Room',
      children: [{
        value: 'Kitchen & Dinning Tables',
        label: 'Kitchen & Dinning Tables',
      }, {
        value: 'Dining Chairs',
        label: 'Dining Chairs',
      }, {
        value: 'Stools & Banquettes',
        label: 'Stools & Banquettes',
      }, {
        value: 'Buffets & China Cabinets',
        label: 'Buffets & China Cabinets',
      }]
    }, {
      value: 'Bedroom',
      label: 'Bedroom',
      children: [{
        value: 'Dressers & Armoires',
        label: 'Dressers & Armoires',
      }, {
        value: 'Vanities & Nightstands',
        label: 'Vanities & Nightstands',
      }, {
        value: 'Beds & Headboards',
        label: 'Beds & Headboards',
      }, {
        value: 'Steps & Stools',
        label: 'Steps & Stools',
      }]
    }, {
      value: 'Kids Furniture',
      label: 'Kids Furniture',
      children: [{
        value: 'Desks, Tables & Chairs',
        label: 'Desks, Tables & Chairs',
      }, {
        value: 'Bean Bag Chairs',
        label: 'Bean Bag Chairs',
      }, {
        value: 'Steps & Stools',
        label: 'Steps & Stools',
      }, {
        value: 'Toddlers Beds',
        label: 'Toddlers Beds',
      }]
    }]
  }];

class EcommerceFiler extends Component {
  render() {
    const { onChange, onChangeCheckBoxes, onChangeSizes, categoryProduct, colorsofProduct, sizesofProducts } = this.props
    return (

      <div className="container">
        <div className="">
          <h4 style={{ margin: "0" }}>Select Category</h4>
          <Cascader
            value={categoryProduct}
            style={{ width: '33%' }} options={categories} onChange={onChange}
            placeholder="Please select category" />
        </div>
        <div className="">
          <h4 style={{ margin: "0" }}>Select Color</h4>
          <Checkbox.Group style={{ width: '33%', display: "block" }}
            value={colorsofProduct}
            onChange={onChangeCheckBoxes}>
            <Row style={{ display: "grid" }}>
              <Col span={8}>
                <Checkbox value="Black">Black</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Blue">Blue</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Red">Red</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Green">Green</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Yellow">Yellow</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </div>

        <div className="">
          <h4 style={{ margin: "0" }}>Select Sizes</h4>
          <Checkbox.Group style={{ width: '33%', display: "block" }}
            value={sizesofProducts}
            onChange={onChangeSizes}>
            <Row style={{ display: "grid" }}>
              <Col span={8}>
                <Checkbox value="Xtra-Small">Xtra-Small</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Small">Small</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Medium">Medium</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Large">Large</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Xrta-Large">Xtra-Large</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </div>
        <div className="col-md-12 col-sm-12" style={{ marginTop: '1vw' }}>
          <p style={{ marginBottom: '5px' }}><b>Price</b></p>
        </div>
        {/* <div className="col-md-12 col-sm-12 hidden-xs"> */}
          <div size="large" style={{ marginLeft: '10px' }}>
            <Row gutter={8}>
              <Col span={8}>
                <Input
                  placeholder="Min"
                  // onChange={this.onChangeMin}
                  type="Number"
                />
              </Col>
              <Col span={8}>
                <Input
                  // onChange={this.onChangeMax}
                  placeholder="Max"
                  type="Number"
                />
              </Col>
              <Col>
                <Button type="primary" icon="caret-right"
                  onClick={this.filterRoomWithPrice}
                />
              </Col>
            </Row>
          </div>
        {/* </div> */}
      </div>

    )
  }
}

export default EcommerceFiler;