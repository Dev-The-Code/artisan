import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
    value: 'Bags & Purses',
    label: 'Bags & Purses',
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

const sizesOfProducts = [
  {
    label: 'Clothing',
    value: ['Xtra Small', 'Small', "Medium", 'Large', 'Xtra Large']
  },
  {
    label: 'Shoes',
    value: ['35', '36', '37', '38', '39', '40', '41', "42", '43', '44', '45', '46', '47', '48']
  },
  {
    label: 'Bags & Purses',
    value: []
  },
  {
    label: 'Jwellery',
    value: ['Universal']
  },
  {
    label: 'Decor',
    value: ['Per Squre Feet']
  },
  {
    label: 'Pets',
    value: []
  },
  {
    label: 'Furniture',
    value: ['King', 'Queen', 'Single']
  }
]


const colorsOfProducts = [
  {
    label: 'Clothing',
    value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
      'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
      'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige',
      'Brown', 'Camel Brown', "Chocolate Brown", 'Coffe',]
  },
  {
    label: 'Shoes',
    value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
      'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
      'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
      'Brown', 'Camel Brown', "Chocolate Brown",]
  },
  {
    label: 'Bags & Purses',
    value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
      'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
      'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
      'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
  },
  {
    label: 'Jwellery',
    value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
      "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
      'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
  },
  {
    label: 'Decor',
    value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
      "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
  },
  {
    label: 'Pets',
    value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
      "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
  },
  {
    label: 'Furniture',
    value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
      "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
  }
]


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
      producId: '',
      imageList: [],
      renderSizes: [],
      renderColors: [],
      skuId: '',
      date: '',
      time: '',
      shopId: '',
      shopName: ''
    }
  }


  componentDidMount() {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    let min = new Date().getMinutes();
    const sec = new Date().getSeconds();

    let data = this.props.data;
    if (data._id != undefined) {
      this.setState({
        product: data.product,
        category: data.categories,
        sizes: data.sizes,
        price: data.price,
        salePrice: data.salePrice,
        materialType: data.materialType,
        description: data.description,
        data: data.color,
        quantity: data.quantity,
        objectId: data._id,
        data: data,
        imageList: data.images,
        shopId: data.shopId,
        shopName: data.shopName
      })
    }
    else if (data._id == undefined) {
      this.setState({
        data: data,
        shopId: data.shopId,
        shopName: data.shopTitle,
        date: year + '-' + month + '-' + date,
        time: hours + ':' + min + ':' + sec,
      })
    }
  }



  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loader: true,
          btnDisabeld: true
        })
        this.genrateskuid(values)
      }
    });
  }

  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      return callback();
    }
    callback('Price must greater than zero!');
  };


  genrateskuid = async (values) => {
    const { skuId } = this.state;
    if (skuId == '') {
      let res = await HttpUtils.get('getYourProduct');
      let sku;
      if (res) {
        let totalProducts = res.content.length + 1000;
        let productWord = values.product.slice(0, 2).toLowerCase();
        let categoryWord = values.categories[0].slice(0, 2) + values.categories[1].slice(0, 2) + values.categories[2].slice(0, 2);
        sku = categoryWord + productWord + totalProducts;
        this.setState({
          skuId: sku
        })
      }
    }
    this.funcForUpload(values)
  }
  // validateNumber(rule, value, callback) {
  //   if (isNaN(value)) {
  //     callback('Please type Numbers');
  //   } else {
  //     callback()
  //   }
  // }

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

  deleteImage(e) {
    let { imageList } = this.state;
    imageList = imageList.filter((elem) => elem !== e)
    this.setState({ imageList: imageList })
  }

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

  onChangeGetSizes = (values) => {

    for (var i = 0; i < sizesOfProducts.length; i++) {
      if (values[0] == sizesOfProducts[i].label) {
        this.setState({
          renderSizes: sizesOfProducts[i].value
        })
      }
    }
    for (var j = 0; j < colorsOfProducts.length; j++) {
      if (values[0] == colorsOfProducts[j].label) {
        this.setState({
          renderColors: colorsOfProducts[j].value
        })
      }
    }
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
    const { shopId, shopName, objectId, imageList, skuId, date, time } = this.state;
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
      images: [...imageList, ...response],
      shopId: shopId,
      shopName: shopName,
      user_Id: user._id,
      profileId: user.profileId,
      objectId: objectId,
      productSKU: skuId,
      date: date,
      time: time
    }
    console.log(objOfProduct, 'objOfProduct')
    // let responseEcommreceData = await HttpUtils.post('postYourProduct', objOfProduct)

    // if (responseEcommreceData.code == 200) {
    //   if (objectId == '') {
    //     this.setState({
    //       loader: false,
    //       btnDisabeld: false,
    //       mgs: responseEcommreceData.mgs,
    //       productData: responseEcommreceData.content,
    //       producId: responseEcommreceData.content._id,
    //       goProductDetailPage: true
    //     })

    //   }
    //   else {
    //     this.setState({
    //       loader: false,
    //       btnDisabeld: false,
    //       mgs: responseEcommreceData.mgs,
    //       productData: responseEcommreceData.content[0],
    //       producId: responseEcommreceData.content[0]._id,
    //       goProductDetailPage: true
    //     })
    //   }
    //   let msg = 'Your product is saved successfully.'
    //   this.openNotification(msg)
    // }
    // else {
    //   this.setState({
    //     loader: false,
    //     btnDisabeld: false,
    //     mgs: responseEcommreceData.mgs,
    //     goProductDetailPage: false,
    //   })
    // }
    // let msg = 'Your product is not submit successfully.'
    // this.openNotification(msg)
  }


  openNotification(msg) {
    notification.open({
      message: 'Success ',
      description: msg
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const { previewVisible, previewImage, fileList, btnDisabeld, mgs, loader, product, category, sizes, quantity, salePrice,
      price, materialType, description, color, productData, goProductDetailPage, producId, imageList, renderSizes, renderColors } = this.state;
    if (goProductDetailPage) {
      return (
        <Redirect to={{ pathname: `/products_DetailStyle/${producId}`, state: productData }} />
      )
    }

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const uploadedImages = (
      <div style={{ height: '100%' }}>
        {imageList && imageList.map((elem) => {
          return (
            <div className='insideDiv'>
              <a>
                <img alt='img1' src={elem} style={{ height: '100%' }} />
                <span>
                  <a><Icon title='Preview file' onClick={() =>
                    this.handlePreview(elem)} type="eye" theme="outlined"
                    style={{
                      zIndex: 10, transition: 'all .3s', fontSize: '16px',
                      width: '30px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'
                    }} />
                  </a>
                  <Icon title='Remove file' type='delete'
                    onClick={this.deleteImage.bind(this, elem)}
                    style={{
                      zIndex: 10, transition: 'all .3s', fontSize: '16px',
                      width: '30px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'
                    }} />
                </span>
              </a>
            </div>
          )
        })}
      </div>
    )
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
            })(<Cascader options={categories} onChange={this.onChangeGetSizes} />)}
          </Form.Item>

          {/*Sizes*/}
          {renderSizes.length > 0 && <Form.Item label="Select Sizes">
            {getFieldDecorator('sizes', {
              initialValue: sizes,
              rules: [
                { required: true, message: 'Please select your sizes!', type: 'array' },
              ],
            })(
              <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                  {renderSizes && renderSizes.map((elem, key) => {
                    return (
                      <Col span={8}>
                        <Checkbox value={elem}>{elem}</Checkbox>
                      </Col>
                    )
                  })}
                </Row>
              </Checkbox.Group>
            )}
          </Form.Item>
          }

          {/*Color*/}
          {renderColors.length > 0 && <Form.Item label="Product Color">
            {getFieldDecorator('color', {
              initialValue: color,
              rules: [
                { required: true, message: 'Please select your Colors!', type: 'array' },
              ],
            })(
              <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                  {renderColors && renderColors.map((elem, key) => {
                    return (
                      // <div className="">
                      // <Checkbox value="Xtra-Small">Xtra Small</Checkbox>
                      // </div>
                      <Col span={8}>
                        <Checkbox value={elem}>{elem}</Checkbox>
                      </Col>
                    )
                  })}
                </Row>

              </Checkbox.Group>
            )}
          </Form.Item>
          }
          {/*Quantity*/}
          <Form.Item label="Select Quantity">
            {getFieldDecorator('quantity', {
              initialValue: quantity,
              rules: [{
                required: true,
                message: 'Please Enter Quantity',
                // validator: this.validateNumber 
              }],
            })(
              <InputNumber min={0} max={5000} />
            )}

          </Form.Item>

          {/*Pricing*/}
          <Form.Item label="Price">
            {getFieldDecorator('price', {
              initialValue: price,
              rules: [{
                required: true,
                message: 'Please Enter Price',
                validator: this.checkPrice
              }],
            })(<PriceInput />)}
          </Form.Item>

          {/*Sale Pricing*/}
          <Form.Item label="Sale Price">
            {getFieldDecorator('salePrice', {
              initialValue: salePrice,
              // rules: [{ 
              //   validator: this.validateNumber 
              // }],
            })(<PriceInput />)}
          </Form.Item>

          {/*Material type*/}
          <Form.Item label="Material Type">
            {getFieldDecorator('materialType',
              {
                initialValue: materialType,
                rules: [{
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

          {/*Uplaod Images*/}

          <Form.Item label="upload">
            {getFieldDecorator('images', {
              rules: [{
                required: true,
                message: 'Please upload your Images!',
                whitespace: true
              }],
            })
              (
                <div className="clearfix">
                  {uploadedImages}
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                  >
                    {imageList && imageList.length + fileList.length >= 8 ? null : uploadButton}
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