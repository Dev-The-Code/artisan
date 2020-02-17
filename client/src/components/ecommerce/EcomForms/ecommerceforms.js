import React, { Component } from 'react';
import superagent from "superagent";
import sha1 from "sha1";
import { HttpUtils } from "../../../Services/HttpUtils";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Cascader,
  notification,
  Button,
  Upload,
  Icon,
  Checkbox,
  Row,
  Col,
  Modal,
  Spin,
} from 'antd';
import stateCities from "../../../lib/countrycitystatejson";

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


const color = [{
  value: 'Black',
  label: 'Black',
}, {
  value: 'Blue',
  label: 'Blue',
}, {
  value: 'Green',
  label: 'Green',
}, {
  value: 'Yellow',
  label: 'Yellow',
}, {
  value: 'White',
  label: 'White',
}, {
  value: 'Brown',
  label: 'Brown',
}, {
  value: 'Red',
  label: 'Red',
}, {
  value: 'Maroon',
  label: 'Maroon',
}, {
  value: 'Customize',
  label: 'Customize',
}, {
  value: 'Orange',
  label: 'Orange',
}];

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




class EcommerceForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fileList: [],
      previewVisible: false,
      previewImage: '',
      data: "",
      btnDisabeld: false,
      mgs: '',
      loader: false,
      objectId: '',
      product: '',
      category: [],
      sizes: [],
      quantity: 0,
      price: { number: 0, currency: 'pkr' },
      salePrice: { number: 0, currency: 'pkr' },
      materialType: '',
      description: '',
      color: [],
      productData: "",
      goProductDetailPage: false,
      producId: ''
    }
  }


  componentDidMount() {
    let data = this.props.data;
    if (data) {
      this.setState({
        data: data
      })
    }
    this.stateAndCities();
  }

  stateAndCities() {
    let states = stateCities.getStatesByShort('US');
    console.log(states, 'state')
    states = states.map((elem) => {
      return {
        label: elem,
        value: elem
      }
    })
    this.setState({
      states: states,
    })
  }


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // this.handleEvent(values)
        // this.setState({
        //   loader: true,
        //   btnDisabeld: true
        // })
        // this.funcForUpload(values)
        console.log(values, 'values')
      }
    });
  }

  // handleEvent = async (val) => {
  //   console.log(val, "getproducts")

  //   let responseEcommreceData = await HttpUtils.post('postEcomreceProduct', val)
  //   console.log(responseEcommreceData, 'reqProductsObj')
  // }


  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      return callback();
    }
    callback('Price must greater than zero!');
  };


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

  onChangeSizes = (values) => {
    console.log(values, "onchange")
    const { sizes } = this.state
    let arr = [];
    arr.push(values[2])
    this.setState({
      sizes: arr
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


  //-----------------cloudnary function end ------------------//
  async postData(values, response, key) {
    const { data, objectId } = this.state;
    var user = JSON.parse(localStorage.getItem('user'));

    let objOfProduct = {
      product: values.product,
      categories: values.categories,
      sizes: values.sizes,
      quantity: values.quantity,
      price: values.price,
      salePrice: values.salePrice,
      materialType: values.materialType,
      description: values.description,
      color: values.color,
      images: response,
      shopId: data.shopId,
      shopName: data.shopTitle,
      user_Id: user._id,
      profileId: user.profileId,
    }
    console.log(response, 'response')
    console.log(objOfProduct, 'objOfProduct')

    let responseEcommreceData = await HttpUtils.post('postYourProduct', objOfProduct)

    if (responseEcommreceData.code == 200) {
      this.setState({
        loader: false,
        btnDisabeld: false,
        mgs: responseEcommreceData.mgs,
        productData: responseEcommreceData.content,
        producId: responseEcommreceData.content._id,
        goProductDetailPage: true
      })
      console.log(responseEcommreceData, 'reqProductsObj')
      let msg = 'Your product is saved successfully.'
      this.openNotification(msg)
    }
    else {
      this.setState({
        loader: false,
        btnDisabeld: false,
        mgs: responseEcommreceData.mgs,
        goProductDetailPage: false,
      })
    }
    let msg = 'Your product is not submit successfully.'
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
    const { previewVisible, previewImage, fileList, btnDisabeld, mgs, loader, product, category, sizes, quantity, salePrice, price, materialType, description, color, productData, goProductDetailPage, producId } = this.state;
    console.log(sizes, "Sizes")
    // if (goProductDetailPage) {
    //   return (
    //     <Redirect to={{ pathname: `/products_DetailStyle/${producId}`, state: productData }} />
    //   )
    // }

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
    const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          {/*Product Name*/}
          <Form.Item label="Product Name">
            {getFieldDecorator('product', {
              initialValue: product,
              rules: [{
                required: true,
                message: 'Please enter your product Title!',
                whitespace: true
              }],
            })(<Input />)}
          </Form.Item>

          {/*Category*/}
          <Form.Item label="Select Category">
            {getFieldDecorator('categories', {
              initialValue: category,
              rules: [
                {
                  type: 'array',
                  required: true,
                  message: 'Please select your product category'
                },
              ],
            })(<Cascader options={categories} onChange={this.onChangeSizes} />)}
          </Form.Item>

          {/*Sizes*/}
          <Form.Item label="Select Sizes">
            {getFieldDecorator('sizes', {
              initialValue: sizes,
              rules: [
                { required: true, message: 'Please select your sizes!', type: 'array' },
              ],
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
            {getFieldDecorator('quantity', {
              initialValue: quantity,

            })(
              <InputNumber min={1} max={5000} />
            )}

          </Form.Item>

          {/*Pricing*/}
          <Form.Item label="Price">
            {getFieldDecorator('price', {
              initialValue: price,
              rules: [{ validator: this.checkPrice }],
            })(<PriceInput />)}
          </Form.Item>

          {/*Sale Pricing*/}
          <Form.Item label="Sale Price">
            {getFieldDecorator('salePrice', {
              initialValue: salePrice,
              rules: [{ validator: this.checkPrice }],
            })(<PriceInput />)}
          </Form.Item>

          {/*Material type*/}
          <Form.Item label="Material Type">
            {getFieldDecorator('materialType',
              {
                initialValue: materialType,
                rules: [{
                  required: true,
                  message: 'Please enter your material type!',
                  whitespace: true
                }],
              })(<Input />)}
          </Form.Item>

          {/*Description*/}
          <Form.Item label="Description">
            {getFieldDecorator('description', {
              initialValue: description,
              rules: [{
                required: true,
                message: 'Please enter your description!',
                whitespace: true
              }],
            })(<TextArea rows={4} />)}
          </Form.Item>


          {/*Color*/}
          <Form.Item label="Product Color">
            {getFieldDecorator('color', {
              initialValue: color,
              rules: [{
                required: true,
                message: 'Please enter your color!',
                whitespace: true,
                type: 'array',
              }],
            })(<Select mode="multiple" placeholder="Please select favourite colors">
              <Option value="blue">Blue</Option>
              <Option value="blue">Black</Option>

            </Select>)}
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
          {btnDisabeld ?
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button disabled type="primary" htmlType="submit">
                Submit
          </Button>
            </Form.Item>
            :
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          }

          <div className="col-md-12">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              {mgs != "" && <p style={{ marginTop: '20px', fontWeight: 'bold', color: 'red' }}>{mgs}</p>}
            </div>
            <div className="col-md-4"></div>
          </div>
          {loader && <div style={{ textAlign: 'center', marginLeft: '-100px', marginBottom: '15px' }}>
            <Spin indicator={antIcon} />

          </div>}
        </Form>
      </div>
    );
  }
}

const WrappedEcommerceForm = Form.create({ name: 'register' })(EcommerceForm);

export default WrappedEcommerceForm;