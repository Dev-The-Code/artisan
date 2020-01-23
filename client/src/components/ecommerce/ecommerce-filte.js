import React, { Component } from 'react';
import { Cascader, Pagination, Slider, Spin, Icon, Rate, Row, Col, Input, Button, Checkbox } from 'antd';
import Burgermenu from '../header/burgermenu'
import { Link, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router';


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
      value: 'Jwellery',
      label: 'Jwellery',
      children: [{
        value: 'BodyJwellery',
        label: 'BodyJwellery',
        children: [{
          value: 'Projectors',
          label: 'Projectors',
        }, {
          value: 'LED Televisons',
          label: 'LED Televisons',
        }, {
          value: 'Smart Televisions',
          label: 'Smart Televisions',
        }, {
          value: 'OLED Televisions',
          label: 'OLED Televisions',
        }, {
          value: 'QLED Televisions',
          label: 'QLED Televisions',
        }, {
          value: 'Other Televisons',
          label: 'Other Televisons',
        }, {
          value: 'Blu-Ray/DVD Players',
          label: 'Blu-Ray/DVD Players',
        }]
      }, {
        value: 'Bracelets',
        label: 'Bracelets',
        children: [{
          value: 'Soundbars',
          label: 'Soundbars',
        }, {
          value: 'Home Entertainment',
          label: 'Home Entertainment',
        }, {
          value: 'Portable Players',
          label: 'Portable Players',
        }, {
          value: 'Live Sound & Stage Equipment',
          label: 'Live Sound & Stage Equipment',
        }]
      }, {
        value: 'Earring',
        label: 'Earring',
        children: [{
          value: 'TV Recievers',
          label: 'TV Recievers',
        }, {
          value: 'Wall Mounts & Protectors',
          label: 'Wall Mounts & Protectors',
        }]
      }, {
        value: 'Necklaces',
        label: 'Necklaces',
        children: [{
          value: 'Washing Machines',
          label: 'Washing Machines',
        }, {
          value: 'Refrigerators',
          label: 'Refrigerators',
        }, {
          value: 'Microwave',
          label: 'Microwave',
        }, {
          value: 'Oven',
          label: 'Oven',
        }, {
          value: 'Freezer',
          label: 'Freezer',
        }, {
          value: 'Cooktop & Range',
          label: 'Cooktop & Range',
        }, {
          value: 'Water Heater',
          label: 'Water Heater',
        }]
      }, {
        value: 'Rings',
        label: 'Rings',
        children: [{
          value: 'Rice Cooker',
          label: 'Rice Cooker',
        }, {
          value: 'Blender, Mixer & Grinder',
          label: 'Blender, Mixer & Grinder',
        }, {
          value: 'Electric Ketttle',
          label: 'Electric Ketttle',
        }, {
          value: 'Juicer & Fruit Extraction',
          label: 'Juicer & Fruit Extraction',
        }, {
          value: 'Fryer',
          label: 'Fryer',
        }, {
          value: 'Water Purifier',
          label: 'Water Purifier',
        }, {
          value: 'Pressure Cookers',
          label: 'Pressure Cookers',
        }, {
          value: 'Speciality Cookware',
          label: 'Speciality Cookware',
        }]
      }, {
        value: 'Accessories',
        label: 'Accessories',
        children: [{
          value: 'Fan',
          label: 'Fan',
        }, {
          value: 'Air Conditioner',
          label: 'Air Conditioner',
        }, {
          value: 'Air Cooler',
          label: 'Air Cooler',
        }, {
          value: 'Air Purifier',
          label: 'Air Purifier',
        }, {
          value: 'Dehumidier',
          label: 'Dehumidier',
        }, {
          value: 'Humidifier',
          label: 'Humidifier',
        }]
      }]
    }, {
      value: 'Decor',
      label: 'Decor',
      children: [{
        value: 'Wall Decor',
        label: 'Wall Decor',
        children: [{
          value: 'BodyMassage',
          label: 'Body & Massage Oils'
        }, {
          value: 'BodySoaps',
          label: 'Body  Soaps & Shower Gels',
        }]
      }, {
        value: 'Decorative Cushions',
        label: 'Decorative Cushions',
        children: [{
          value: 'CurlingIrons',
          label: 'Curling Irons & Wands',
        }, {
          value: 'FlatIrons',
          label: 'Flat Irons',
        }]
      }, {
        value: 'Picture Frames',
        label: 'Picture Frames',
        children: [{
          value: 'Women Fragrances',
          label: 'Women Fragrances',
        }, {
          value: 'Men Fragrances',
          label: 'Men Fragrances',
        }, {
          value: 'Unisex',
          label: 'Unisex',
        }]
      }, {
        value: 'Candles & Holders',
        label: 'Candles & Holders',
        children: [{
          value: 'Shampoo',
          label: 'Shampoo',
        }, {
          value: 'Hair Treatments',
          label: 'Hait Treatments',
        }, {
          value: 'Hair Accessories',
          label: 'Hair Accessories',
        }]
      }, {
        value: 'Vases',
        label: 'Vases',
      }]
    }, {
      value: 'Pets',
      label: 'Pets',
      children: [{
        value: 'Collars & Leashes',
        label: 'Collars & Leashes',
        children: [{
          value: 'Utensils',
          label: 'Utensils',
        }, {
          value: 'Bottle-Feeding',
          label: 'Bottle-Feeding',
        }]
      }, {
        value: 'Furniture',
        label: 'Furniture',
        children: [{
          value: 'Kids Bag',
          label: 'Kids Bag',
        }, {
          value: 'Swings, Jumpers & Bouncers',
          label: 'Swings, Jumpers & Bouncers',
        }]
      }, {
        value: 'Colting & Shoes',
        label: 'Colting & Shoes',
        children: [{
          value: 'Activity Gym & Playmats',
          label: 'Activity Gym & Playmats',
        }, {
          value: 'Bath Toys',
          label: 'Bath Toys',
        }, {
          value: 'Building Blocks Toys',
          label: 'Building Blocks Toys',
        }, {
          value: 'Crib Toys & Attachmensts',
          label: 'Crib Toys & Attachmensts',
        }, {
          value: 'Early Development Toys',
          label: 'Early Development Toys',
        }, {
          value: 'Music & Sounds',
          label: 'Music & Sounds',
        }, {
          value: 'Ratlles',
          label: 'Ratlles',
        }, {
          value: 'Push & Pull Toys',
          label: 'Push & Pull Toys',
        }]
      }, {
        value: 'Carriers & House',
        label: 'Carriers & House',
        children: [{
          value: 'Die-Cast Vehicles',
          label: 'Die-Cast Vehicles',
        }, {
          value: 'Drones & Accessories',
          label: 'Drones & Accessories',
        }, {
          value: 'Play Trains & Railway Sets',
          label: 'Play Trains & Railway Sets',
        }, {
          value: 'Play Vehicles',
          label: 'Play Vehicles',
        }, {
          value: 'RC Vehicles & Batteries',
          label: 'RC Vehicles & Batteries',
        }]
      }]
    }, {
      value: 'Furniture',
      label: 'Furniture',
      children: [{
        value: 'Living Room',
        label: 'Living Room',
        children: [{
          value: 'Fresh',
          label: 'Fresh Vegetables',
        }, {
          value: 'FreshFruits',
          label: 'FreshFruits',
        }]
      }, {
        value: 'Dinning Room',
        label: 'Dinning Room',
        children: [{
          value: 'Coffee',
          label: 'Coffee',
        }, {
          value: 'Tea',
          label: 'Tea',
        }, {
          value: 'HotChocolate',
          label: 'Hot Chocolate Drinks',
        }, {
          value: 'UHTMilk',
          label: 'UHT, Milk & Milk Powder',
        }, {
          value: 'PowderedMixes',
          label: 'Powdered Drink Mixes',
        }, {
          value: 'FlavoringSyrups',
          label: 'Flavoring Syrups',
        }, {
          value: 'Water',
          label: 'Water',
        }, {
          value: 'SoftDrinks',
          label: 'Soft Drinks',
        }, {
          value: 'Juices',
          label: 'Juices',
        }]
      }, {
        value: 'Bedroom',
        label: 'Bedroom',
        children: [{
          value: 'Biscuits',
          label: 'Biscuits',
        }, {
          value: 'BreakfastCereals',
          label: 'Breakfast Cereals',
        }, {
          value: 'Chocolate',
          label: 'Chocolate',
        }, {
          value: 'Nuts',
          label: 'Nuts',
        }, {
          value: 'Oatmeals',
          label: 'Oatmeals',
        }, {
          value: 'BreakfastBars',
          label: 'Breakfast Bars',
        }, {
          value: 'Snacks',
          label: 'Snacks',
        }, {
          value: 'InstantBreakfast',
          label: 'Instant Breakfast Drinks',
        }, {
          value: 'JamsHoney',
          label: 'Jams, Honey & Spread',
        }, {
          value: 'PancakeWaffle',
          label: 'Pancake & Waffle Mixes',
        }]
      }, {
        value: 'Kids Furniture',
        label: 'Kids Furniture',
        children: [{
          value: 'CannedFood',
          label: 'Canned Food',
        }, {
          value: 'CondimentDressing',
          label: 'Condiment Dressing',
        }, {
          value: 'CookingIngredients',
          label: 'Cooking Ingredients',
        }, {
          value: 'GrainsBeans',
          label: 'Grains, Beans & Pulses',
        }, {
          value: 'HomeBaking',
          label: 'Home Baking & Sugar',
        }, {
          value: 'InstantReady',
          label: 'Instant & Ready-to-Eat',
        }, {
          value: 'JarredFood',
          label: 'Jarred Food',
        }, {
          value: 'Nooddles',
          label: 'Nooddles',
        }, {
          value: 'Rice',
          label: 'Rice',
        }, {
          value: 'Oil',
          label: 'Oil',
        }]
      }]
    }];
  
  
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      }

      function onChange(values) {
    }

class EcomFiler extends Component{
    render(){
        const { onChange, categoryofProduct, onChangeCheckBoxes,} = this.props
        return(
            <div className="container">
                <div className="">
                <h4 style={{margin:"0"}}>Select Category</h4>
                <Cascader
                        value={categoryofProduct}
                        style={{ width: '33%' }} options={electronics} onChange={onChange}
                    placeholder="Please select category" />
                </div>

                <div className="">
                <h4 style={{margin:"0"}}>Select Color</h4>
                <Checkbox.Group style={{ width: '33%', display:"block" }} onChange={onChangeCheckBoxes}>
                    <Row style={{display:"grid"}}>
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

        
        </div>

        )
    }
}

export default EcomFiler;