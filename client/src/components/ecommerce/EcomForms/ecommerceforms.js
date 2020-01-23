import React, { Component } from 'react';
import superagent from "superagent";
import sha1 from "sha1";
import { HttpUtils } from "../../../Services/HttpUtils";

import {
  Form,
  Select,
  Input,
  InputNumber,
  Switch,
  Cascader,
  notification,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
  Modal
} from 'antd';

const { Option } = Select;
const { TextArea } = Input;


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

const sizes = [
  {
    value: 'xtra-small',
    label: 'Xtra Small',
  },
  {
    value: 'small',
    label: 'Small',
  },
  {
    value: 'medium',
    label: 'Medium',
  },
  {
    value: 'large',
    label: 'Large',
  },
  {
    value: 'xtra-large',
    label: 'Xtra Large',
  },
  {
    value: 'XXl',
    label: 'XX Large',
  }

];


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class PriceInput extends React.Component {
  handleNumberChange = e => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    this.triggerChange({ number });
  };

  handleCurrencyChange = currency => {
    this.triggerChange({ currency });
  };

  triggerChange = changedValue => {
    const { onChange, value } = this.props;
    if (onChange) {
      onChange({
        ...value,
        ...changedValue,
      });
    }
  };

  render() {
    const { size, value } = this.props;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={value.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={value.currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="pkr">PKR</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  }
}




class EcommerceForm extends Component{

constructor(props){
  super(props)
  this.state={
    fileList:[],
    previewVisible: false,
    previewImage: '',
  }
}



  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // this.handleEvent(values)
        this.setState({ loader: true })
        this.funcForUpload(values)
        console.log(values, 'values')
        //   let responseEcommreceData = await HttpUtils.post('postEcomreceProduct', val)
  //   console.log(responseEcommreceData, 'reqProductsObj')
      }
    });
  }

  // handleEvent = async (val) => {
  //   console.log(val, "getproducts")

  //   let responseEcommreceData = await HttpUtils.post('postEcomreceProduct', val)
  //   console.log(responseEcommreceData, 'reqProductsObj')
  // }

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      return callback();
    }
    callback('Price must greater than zero!');
  };

  /*Upload options*/



  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });


    async funcForUpload(values, key) {
      const { fileList } = this.state;
      Promise.all(fileList.map((val) => {
        return this.uploadFile(val).then((result) => {
          return result.body.url
        })
      })).then((results) => {
        this.postData(values, results, key)
      })
    }
  
    //--------------function for cloudnary url ---------------
    uploadFile = (files) => {
      const image = files.originFileObj
      const cloudName = 'dxk0bmtei'
      const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload'
      const timestamp = Date.now() / 1000
      const uploadPreset = 'toh6r3p2'
      const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'U8W4mHcSxhKNRJ2_nT5Oz36T6BI'
      const signature = sha1(paramsStr)
      const params = {
        'api_key': '878178936665133',
        'timestamp': timestamp,
        'upload_preset': uploadPreset,
        'signature': signature
      }
      return new Promise((res, rej) => {
        let uploadRequest = superagent.post(url)
        uploadRequest.attach('file', image)
        Object.keys(params).forEach((key) => {
          uploadRequest.field(key, params[key])
        })
  
        uploadRequest.end((err, resp) => {
          err ? rej(err) : res(resp);
        })
      })
    }
  
    //-----------------cloudnary function end ------------------
    async postData(values, response, key) {
      console.log(values, "get Data")
      console.log(response, "get Data")
      console.log(key, "get Data")
      values.images=response
      
      
        let msg = 'Your Images is saved successfully.'
        this.openNotification(msg)
      
    }


      openNotification(msg) {
        notification.open({
          message: 'Success ',
          description: msg
        });
      };
  
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        {/*Product Name*/}
        <Form.Item label="Product Name">
          {getFieldDecorator('product', {

          })(<Input />)}
        </Form.Item>

        {/*Category*/}
        <Form.Item label="Select Category">
          {getFieldDecorator('categories', {
            initialValue: [],
            rules: [
              { type: 'array', required: true, message: 'Please select your product category' },
            ],
          })(<Cascader options={categories} />)}
        </Form.Item>

        {/*Sizes*/}
        <Form.Item label="Select Sizes">
          {getFieldDecorator('sizes', {
            initialValue: [],
          })(
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={8}>
                  <Checkbox value="Xtra-Small">Xtra Small</Checkbox>
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
                  <Checkbox value="Xrta-Large">Xtra Large</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>,
          )}
        </Form.Item>

        {/*Quantity*/}
        <Form.Item label="Select Quantity">
          {getFieldDecorator('input-number', { initialValue: 0 })(<InputNumber min={1} max={10} />)}

        </Form.Item>

        {/*Pricing*/}
        <Form.Item label="Price">
          {getFieldDecorator('price', {
            initialValue: { number: 0, currency: 'pkr' },
            rules: [{ validator: this.checkPrice }],
          })(<PriceInput />)}
        </Form.Item>

        {/*Sale Pricing*/}
        <Form.Item label="Sale Price">
          {getFieldDecorator('salePrice', {
            initialValue: { number: 0, currency: 'pkr' },
            rules: [{ validator: this.checkPrice }],
          })(<PriceInput />)}
        </Form.Item>

        {/*Material type*/}
        <Form.Item label="Material Type">
          {getFieldDecorator('materialType', {

          })(<Input />)}
        </Form.Item>

        {/*Description*/}
        <Form.Item label="Description">
          {getFieldDecorator('description', {

          })(<TextArea rows={4} />)}
        </Form.Item>


        {/*Color*/}
        <Form.Item label="Product Color">
          {getFieldDecorator('color', {

          })(<Input />)}
        </Form.Item>


        {/*Uplaod Images*/}

        <Form.Item label="upload">
          {getFieldDecorator('images', {

          })
            (
              <div className="clearfix">
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </div>)}
        </Form.Item>


        {/*Button*/}
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
              </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedEcommerceForm = Form.create({ name: 'register' })(EcommerceForm);

export default WrappedEcommerceForm;