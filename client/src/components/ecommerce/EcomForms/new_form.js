// import React, { Component } from 'react';
// import {
//   Form, Input, Select, notification, Cascader, Upload, Icon, Modal,Button
// } from 'antd';
// import './Vitalinfo.css';
// import superagent from "superagent";
// import sha1 from "sha1";
// import { HttpUtils } from '../../../Services/HttpUtils';
// import { Redirect } from 'react-router';

// // const { Link } = Anchor;

// const handleClick = (e, link) => {
//     e.preventDefault();
//     console.log(link);
// };

// const FormItem = Form.Item;
// const Option = Select.Option;
// const { TextArea } = Input;

// const electronics = [{
//   value: 'Clothing',
//   label: 'Clothing',
//   children: [{
//     value: 'Mens',
//     label: 'Mens',
//     children: [{
//       value: 'Jackets',
//       label: 'Jackets',
//     }, {
//       value: 'Jumpers',
//       label: 'Jumpers',
//     }, {
//       value: 'Costumes',
//       label: 'Costumes',
//     }],
//   }, {
//     value: 'Womens',
//     label: 'Womens',
//     children: [{
//       value: 'Dresses',
//       label: 'Dresses',
//     }, {
//       value: 'Tops',
//       label: 'Tops',
//     }, {
//       value: 'Skirts',
//       label: 'Skirts',
//     }, {
//       value: 'Jackets',
//       label: 'Jackets & Coats',
//     }, {
//       value: 'Trousers',
//       label: 'Trousers & Pants',
//     }, {
//       value: 'Jumpers',
//       label: 'Jumpers',
//     }, {
//       value: 'Costumes',
//       label: 'Costumes',
//     }],
//   }]

// },
// {
//   value: 'Shoes',
//   label: 'Shoes',
//   children: [{
//     value: 'Mens',
//     label: 'Mens',
//     children: [{
//       value: 'Jackets',
//       label: 'Jackets',
//     }, {
//       value: 'Jumpers',
//       label: 'Jumpers',
//     }, {
//       value: 'Costumes',
//       label: 'Costumes',
//     }],
//   }, {
//     value: 'Womens',
//     label: 'Womens',
//     children: [{
//       value: 'Dresses',
//       label: 'Dresses',
//     }, {
//       value: 'Tops',
//       label: 'Tops',
//     }, {
//       value: 'Skirts',
//       label: 'Skirts',
//     }, {
//       value: 'Jackets',
//       label: 'Jackets & Coats',
//     }, {
//       value: 'Trousers',
//       label: 'Trousers & Pants',
//     }, {
//       value: 'Jumpers',
//       label: 'Jumpers',
//     }, {
//       value: 'Costumes',
//       label: 'Costumes',
//     }],
//   }]
// }, {
//   value: 'Jwellery',
//   label: 'Jwellery',
//   children: [{
//     value: 'BodyJwellery',
//     label: 'BodyJwellery',
//     children: [{
//       value: 'Projectors',
//       label: 'Projectors',
//     }, {
//       value: 'LED Televisons',
//       label: 'LED Televisons',
//     }, {
//       value: 'Smart Televisions',
//       label: 'Smart Televisions',
//     }, {
//       value: 'OLED Televisions',
//       label: 'OLED Televisions',
//     }, {
//       value: 'QLED Televisions',
//       label: 'QLED Televisions',
//     }, {
//       value: 'Other Televisons',
//       label: 'Other Televisons',
//     }, {
//       value: 'Blu-Ray/DVD Players',
//       label: 'Blu-Ray/DVD Players',
//     }]
//   }, {
//     value: 'Bracelets',
//     label: 'Bracelets',
//     children: [{
//       value: 'Soundbars',
//       label: 'Soundbars',
//     }, {
//       value: 'Home Entertainment',
//       label: 'Home Entertainment',
//     }, {
//       value: 'Portable Players',
//       label: 'Portable Players',
//     }, {
//       value: 'Live Sound & Stage Equipment',
//       label: 'Live Sound & Stage Equipment',
//     }]
//   }, {
//     value: 'Earring',
//     label: 'Earring',
//     children: [{
//       value: 'TV Recievers',
//       label: 'TV Recievers',
//     }, {
//       value: 'Wall Mounts & Protectors',
//       label: 'Wall Mounts & Protectors',
//     }]
//   }, {
//     value: 'Necklaces',
//     label: 'Necklaces',
//     children: [{
//       value: 'Washing Machines',
//       label: 'Washing Machines',
//     }, {
//       value: 'Refrigerators',
//       label: 'Refrigerators',
//     }, {
//       value: 'Microwave',
//       label: 'Microwave',
//     }, {
//       value: 'Oven',
//       label: 'Oven',
//     }, {
//       value: 'Freezer',
//       label: 'Freezer',
//     }, {
//       value: 'Cooktop & Range',
//       label: 'Cooktop & Range',
//     }, {
//       value: 'Water Heater',
//       label: 'Water Heater',
//     }]
//   }, {
//     value: 'Rings',
//     label: 'Rings',
//     children: [{
//       value: 'Rice Cooker',
//       label: 'Rice Cooker',
//     }, {
//       value: 'Blender, Mixer & Grinder',
//       label: 'Blender, Mixer & Grinder',
//     }, {
//       value: 'Electric Ketttle',
//       label: 'Electric Ketttle',
//     }, {
//       value: 'Juicer & Fruit Extraction',
//       label: 'Juicer & Fruit Extraction',
//     }, {
//       value: 'Fryer',
//       label: 'Fryer',
//     }, {
//       value: 'Water Purifier',
//       label: 'Water Purifier',
//     }, {
//       value: 'Pressure Cookers',
//       label: 'Pressure Cookers',
//     }, {
//       value: 'Speciality Cookware',
//       label: 'Speciality Cookware',
//     }]
//   }, {
//     value: 'Accessories',
//     label: 'Accessories',
//     children: [{
//       value: 'Fan',
//       label: 'Fan',
//     }, {
//       value: 'Air Conditioner',
//       label: 'Air Conditioner',
//     }, {
//       value: 'Air Cooler',
//       label: 'Air Cooler',
//     }, {
//       value: 'Air Purifier',
//       label: 'Air Purifier',
//     }, {
//       value: 'Dehumidier',
//       label: 'Dehumidier',
//     }, {
//       value: 'Humidifier',
//       label: 'Humidifier',
//     }]
//   }]
// }, {
//   value: 'Decor',
//   label: 'Decor',
//   children: [{
//     value: 'Wall Decor',
//     label: 'Wall Decor',
//     children: [{
//       value: 'BodyMassage',
//       label: 'Body & Massage Oils'
//     }, {
//       value: 'BodySoaps',
//       label: 'Body  Soaps & Shower Gels',
//     }]
//   }, {
//     value: 'Decorative Cushions',
//     label: 'Decorative Cushions',
//     children: [{
//       value: 'CurlingIrons',
//       label: 'Curling Irons & Wands',
//     }, {
//       value: 'FlatIrons',
//       label: 'Flat Irons',
//     }]
//   }, {
//     value: 'Picture Frames',
//     label: 'Picture Frames',
//     children: [{
//       value: 'Women Fragrances',
//       label: 'Women Fragrances',
//     }, {
//       value: 'Men Fragrances',
//       label: 'Men Fragrances',
//     }, {
//       value: 'Unisex',
//       label: 'Unisex',
//     }]
//   }, {
//     value: 'Candles & Holders',
//     label: 'Candles & Holders',
//     children: [{
//       value: 'Shampoo',
//       label: 'Shampoo',
//     }, {
//       value: 'Hair Treatments',
//       label: 'Hait Treatments',
//     }, {
//       value: 'Hair Accessories',
//       label: 'Hair Accessories',
//     }]
//   }, {
//     value: 'Vases',
//     label: 'Vases',
//   }]
// }, {
//   value: 'Pets',
//   label: 'Pets',
//   children: [{
//     value: 'Collars & Leashes',
//     label: 'Collars & Leashes',
//     children: [{
//       value: 'Utensils',
//       label: 'Utensils',
//     }, {
//       value: 'Bottle-Feeding',
//       label: 'Bottle-Feeding',
//     }]
//   }, {
//     value: 'Furniture',
//     label: 'Furniture',
//     children: [{
//       value: 'Kids Bag',
//       label: 'Kids Bag',
//     }, {
//       value: 'Swings, Jumpers & Bouncers',
//       label: 'Swings, Jumpers & Bouncers',
//     }]
//   }, {
//     value: 'Colting & Shoes',
//     label: 'Colting & Shoes',
//     children: [{
//       value: 'Activity Gym & Playmats',
//       label: 'Activity Gym & Playmats',
//     }, {
//       value: 'Bath Toys',
//       label: 'Bath Toys',
//     }, {
//       value: 'Building Blocks Toys',
//       label: 'Building Blocks Toys',
//     }, {
//       value: 'Crib Toys & Attachmensts',
//       label: 'Crib Toys & Attachmensts',
//     }, {
//       value: 'Early Development Toys',
//       label: 'Early Development Toys',
//     }, {
//       value: 'Music & Sounds',
//       label: 'Music & Sounds',
//     }, {
//       value: 'Ratlles',
//       label: 'Ratlles',
//     }, {
//       value: 'Push & Pull Toys',
//       label: 'Push & Pull Toys',
//     }]
//   }, {
//     value: 'Carriers & House',
//     label: 'Carriers & House',
//     children: [{
//       value: 'Die-Cast Vehicles',
//       label: 'Die-Cast Vehicles',
//     }, {
//       value: 'Drones & Accessories',
//       label: 'Drones & Accessories',
//     }, {
//       value: 'Play Trains & Railway Sets',
//       label: 'Play Trains & Railway Sets',
//     }, {
//       value: 'Play Vehicles',
//       label: 'Play Vehicles',
//     }, {
//       value: 'RC Vehicles & Batteries',
//       label: 'RC Vehicles & Batteries',
//     }]
//   }]
// }, {
//   value: 'Furniture',
//   label: 'Furniture',
//   children: [{
//     value: 'Living Room',
//     label: 'Living Room',
//     children: [{
//       value: 'Fresh',
//       label: 'Fresh Vegetables',
//     }, {
//       value: 'FreshFruits',
//       label: 'FreshFruits',
//     }]
//   }, {
//     value: 'Dinning Room',
//     label: 'Dinning Room',
//     children: [{
//       value: 'Coffee',
//       label: 'Coffee',
//     }, {
//       value: 'Tea',
//       label: 'Tea',
//     }, {
//       value: 'HotChocolate',
//       label: 'Hot Chocolate Drinks',
//     }, {
//       value: 'UHTMilk',
//       label: 'UHT, Milk & Milk Powder',
//     }, {
//       value: 'PowderedMixes',
//       label: 'Powdered Drink Mixes',
//     }, {
//       value: 'FlavoringSyrups',
//       label: 'Flavoring Syrups',
//     }, {
//       value: 'Water',
//       label: 'Water',
//     }, {
//       value: 'SoftDrinks',
//       label: 'Soft Drinks',
//     }, {
//       value: 'Juices',
//       label: 'Juices',
//     }]
//   }, {
//     value: 'Bedroom',
//     label: 'Bedroom',
//     children: [{
//       value: 'Biscuits',
//       label: 'Biscuits',
//     }, {
//       value: 'BreakfastCereals',
//       label: 'Breakfast Cereals',
//     }, {
//       value: 'Chocolate',
//       label: 'Chocolate',
//     }, {
//       value: 'Nuts',
//       label: 'Nuts',
//     }, {
//       value: 'Oatmeals',
//       label: 'Oatmeals',
//     }, {
//       value: 'BreakfastBars',
//       label: 'Breakfast Bars',
//     }, {
//       value: 'Snacks',
//       label: 'Snacks',
//     }, {
//       value: 'InstantBreakfast',
//       label: 'Instant Breakfast Drinks',
//     }, {
//       value: 'JamsHoney',
//       label: 'Jams, Honey & Spread',
//     }, {
//       value: 'PancakeWaffle',
//       label: 'Pancake & Waffle Mixes',
//     }]
//   }, {
//     value: 'Kids Furniture',
//     label: 'Kids Furniture',
//     children: [{
//       value: 'CannedFood',
//       label: 'Canned Food',
//     }, {
//       value: 'CondimentDressing',
//       label: 'Condiment Dressing',
//     }, {
//       value: 'CookingIngredients',
//       label: 'Cooking Ingredients',
//     }, {
//       value: 'GrainsBeans',
//       label: 'Grains, Beans & Pulses',
//     }, {
//       value: 'HomeBaking',
//       label: 'Home Baking & Sugar',
//     }, {
//       value: 'InstantReady',
//       label: 'Instant & Ready-to-Eat',
//     }, {
//       value: 'JarredFood',
//       label: 'Jarred Food',
//     }, {
//       value: 'Nooddles',
//       label: 'Nooddles',
//     }, {
//       value: 'Rice',
//       label: 'Rice',
//     }, {
//       value: 'Oil',
//       label: 'Oil',
//     }]
//   }]
// }];

// class NewForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: 'Electronics',
//       sub: '',
//       price: '',
//       salePrice: '',
//       description: '',
//       imageList: [],
//       color: '',
//       size: '',
//       materialType: '',
//       pakageQuantity: '',
//       category: [],
//       objData:{},
//       previewVisible: false,
//       previewImage: '',
//     }
//   }
//   // state = {
//   //   previewVisible: false,
//   //   previewImage: '',
//   //   fileList: [],
//   //   imageList: [],
//   //   noChooseFile: false,
//   //   herfSec: ''
//   // };
//   // whenClicked = (item) => {
//   //   this.setState({ item })
//   // }

//   // whenSecondClicked = (sub) => {
//   //   this.setState({ sub })
//   // }
//   // onchange = (category) => {
//   //   this.setState({model: category[0]});
//   //   console.log(category,"bhai kuch to ajao")

//   // }
//   // componentDidMount() {
//   //   let data = this.props.data;
//   //   if (data.product != undefined) {
//   //     this.setState({
//   //       price: data.price,
//   //     })
//   //   }
//   // }

//   componentDidMount() {
//     window.scrollTo(0, 0);
//         this.handleLocalStorage();
//         let data = this.props.location.state;
//         if (data) {
//             this.setState({
//         product: data.product,
//         category: data.category,
//         price: data.price,
//         salePrice: data.salePrice,
//         productFeature: data.productFeature,
//         description: data.description,
//         color: data.color,
//         size: data.size,
//         materialType: data.materialType,
//         pakageQuantity: data.pakageQuantity,
//         imageList: data.images,
//         objectId: data._id

//       })

//     }
//   }


//   checkPrice = (rule, value, callback) => {
//     if (value.number > 0) {
//       callback();
//       return;
//     }
//     callback('Value must greater than zero!');
//   }

//   validateNumber(rule, value, callback) {
//     if (isNaN(value)) {
//       callback('Please type Numbers');
//     } else {
//       callback()
//     }
//   }

//   handleSelectChange = (value) => {
//     this.props.form.setFieldsValue({
//       note: `Hi, ${value === 'bundle' ? 'part' : 'preorder'}!`,
//     });
//   }


//   /*Image sEction*/
//   handleCancel = () => this.setState({ previewVisible: false })

//   handlePreview = (file) => {
//     this.setState({
//       previewImage: file.url || file.thumbUrl,
//       previewVisible: true,
//     });
//   }

//   deleteImage(e) {
//     let { imageList } = this.state;
//     imageList = imageList.filter((elem) => elem !== e)
//     this.setState({ imageList: imageList })
//   }

//   handleChange = ({ fileList }) => {
//     this.setState({
//       fileList
//       , noChooseFile: true
//     })
//   }
// /*Image Section end*/


// handleSubmit = (e) => {
//   e.preventDefault();
//   this.props.form.validateFieldsAndScroll((err, values) => {
//       if (!err) {
//           this.setState({ loader: true })
//           this.funcForUpload(values)
//           console.log(values, 'values')
//       }
//   })
// }

//   async funcForUpload(values, key) {
//     const { fileList } = this.state;
//     Promise.all(fileList.map((val) => {
//       return this.uploadFile(val).then((result) => {
//         return result.body.url
//       })
//     })).then((results) => {
//       this.postData(values, results, key)
//     })
//   }

//   //--------------function for cloudnary url ---------------
//   uploadFile = (files) => {
//     const image = files.originFileObj
//     const cloudName = 'dxk0bmtei'
//     const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload'
//     const timestamp = Date.now() / 1000
//     const uploadPreset = 'toh6r3p2'
//     const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'U8W4mHcSxhKNRJ2_nT5Oz36T6BI'
//     const signature = sha1(paramsStr)
//     const params = {
//       'api_key': '878178936665133',
//       'timestamp': timestamp,
//       'upload_preset': uploadPreset,
//       'signature': signature
//     }
//     return new Promise((res, rej) => {
//       let uploadRequest = superagent.post(url)
//       uploadRequest.attach('file', image)
//       Object.keys(params).forEach((key) => {
//         uploadRequest.field(key, params[key])
//       })

//       uploadRequest.end((err, resp) => {
//         err ? rej(err) : res(resp);
//       })
//     })
//   }

//   //-----------------cloudnary function end ------------------
//   async postData(values, response, key) {
//     const { imageList } = this.state;
//     let respons;
//     if (imageList != undefined) {
//       respons = [...imageList, ...response];
//     }
//     else {
//       respons = response
//     }
//     this.props.handleProps({ images: respons }, 'description');
//     this.props.desStates()
//     if (key === 'submit') {
//       this.setState({
//         herfSec: '#Section4'
//       },
//         () => {
//           document.getElementById('imgForm').click();
//         })
//       let msg = 'Your Images is submited successfully, Kindly fill next form'
//       this.openNotification(msg)
//     }
//     else if (key === 'draft') {
//       let msg = 'Your Images is saved successfully.'
//       this.openNotification(msg)
//     }
//   }

//   openNotification(msg) {
//     notification.open({
//       message: 'Success ',
//       description: msg
//     });
//   };

// /*Extract from eomerce*/

// handleProps = async (values, key) => {
//   let { objData, objectId, shopId, shopName } = this.state;
//   var user = JSON.parse(localStorage.getItem('user'));
//   var updateData = localStorage.getItem('updateData');
//   values.user_Id = user._id;
//   values.profileId = user.profileId;
//   values.shopId = shopId;
//   values.shopName = shopName;

//   if (updateData !== undefined && updateData !== 'undefined' && updateData != null) {
//     var updateData = JSON.parse(localStorage.getItem('updateData'));
//     values.objectId = updateData.objectId;
//   } else {
//     values.objectId = objectId;
//   }
//   objData.push(key);
//   values.objData = objData;

//   if (this.state.draftStatus === 'draft') {
//     values.status = this.state.draftStatus
//   }
//   else if (this.state.submitStatus === 'submit') {
//     values.status = this.state.submitStatus
//   }

//   let responseEcommreceData = await HttpUtils.post('postecommercedata', values)
//   if (responseEcommreceData.code === 200) {
//     if (objectId === '') {
//       this.setState({ allTabs, objectId: responseEcommreceData.content._id, objData: responseEcommreceData.content[0] })
//     }
//     else {
//       responseEcommreceData.content.map((k, index) => {
//         this.setState({ allTabs, objectId: responseEcommreceData.content[index]._id, objData: responseEcommreceData.content[0] })
//       })
//     }
//     responseEcommreceData.content.objectId = objectId
//     await localStorage.setItem('formData', JSON.stringify(responseEcommreceData.content[0]));
//   }
// }

// statusFormDraft = () => {
//   this.setState({
//     draftStatus: "draft",
//     formStep: steps
//   })
//   steps++;
// }

// statusFormSubmit = () => {
//   this.setState({
//     submitStatus: 'submit',
//     formStep: steps
//   })
//   steps++;
// }
// /*Ecommerce ends*/

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     const { electronics, previewVisible, fileList, noChooseFile, previewImage, herfSec, imageList, objData } = this.state;
//     if (this.state.msg === true) {
//       return <Redirect to={{ pathname: `/products_DetailStyle/${objData._id}`, state: objData }} />
//     }

//     const uploadButton = (
//       <div>
//         <Icon type="plus" />
//         <div className="ant-upload-text">Upload</div>
//       </div>
//     );
//     const uploadedImages = (
//       <div style={{ height: '100%' }}>
//         {imageList && this.state.imageList.map((elem) => {
//           return (
//             <div className='insideDiv'>
//               <a>
//                 <img alt='img1' src={elem} style={{ height: '100%' }} />
//                 <span>
//                   <a><Icon title='Preview file' onClick={() =>
//                     this.handlePreview(elem)} type="eye" theme="outlined"
//                     style={{
//                       zIndex: 10, transition: 'all .3s', fontSize: '16px',
//                       width: '30px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'
//                     }} />
//                   </a>
//                   <Icon title='Remove file' type='delete'
//                     onClick={this.deleteImage.bind(this, elem)}
//                     style={{
//                       zIndex: 10, transition: 'all .3s', fontSize: '16px',
//                       width: '30px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'
//                     }} />
//                 </span>
//               </a>
//             </div>
//           )
//         })}
//       </div>
//     )
//     const formItemLayout = {
//       labelCol: {
//         md: { span: 6 },
//         xs: { span: 24 },
//         sm: { span: 5 },
//       },
//       wrapperCol: {
//         md: { span: 12 },
//         xs: { span: 24 },
//         sm: { span: 16 },
//       },
//     };

//     return (
     
//       <div className="container" style={{ width: "70%" }}>
//         <Form onSubmit={this.handleSubmit}>
//           <Form.Item
//             label="Product Name">
//             {getFieldDecorator('product', {
//               // initialValue: this.state.product,
//               rules:
//                 [{
//                   required: true,
//                   message: 'Please input your product!',
//                   whitespace: true
//                 }],
//             })(
//               <Input />
//             )}
//           </Form.Item>
//           {/*PRoduct Category*/}
//           <Form.Item

//             label="Category"
//           >
//             {getFieldDecorator('category', {
//               // initialValue: { category: category },

//               // initialValue: category,
//               defaultValue: Option.initialValue,
//               rules:
//                 [{
//                   type: 'array', required: true,
//                   message: 'Please select your Category!'
//                 }],
//             })(
//               <Cascader
//                 // defaultValue={option.initialValue}
//                 style={{ height: 'auto' }}
//                 options={electronics} onChange={this.onchange}
//               />
//             )}
//           </Form.Item>
//           {/*Pricing*/}
//           <Form.Item
//             label="Price">
//             {getFieldDecorator('price', {
//               // initialValue: this.state.price,
//               rules: [{
//                 required: true,
//                 message: 'Please enter price',
//                 whitespace: true
//               },
//               { validator: this.validateNumber.bind(this) }]
//             })(
//               <Input
//               />
//             )}
//           </Form.Item>

//           <FormItem>
//             {getFieldDecorator('salePrice', {
//               initialValue: this.state.salePrice,
//               rules: [{
//                 required: true,
//                 message: 'Please enter Sale Price',
//                 whitespace: true
//               },
//               { validator: this.validateNumber.bind(this) }]
//             })(
//               <Input
//               />
//             )}
//           </FormItem>

//           {/*Descriptions*/}
//           <Form.Item
//             label="Description">
//             {getFieldDecorator('productFeature', {
//               // initialValue: this.state.productFeature,
//               rules: [{
//                 required: false,
//                 message: 'Please enter Product Feature',
//                 whitespace: true
//               }],
//             })(
//               <Input style={{ height: "140px" }} />
//             )}
//           </Form.Item>
//           {/*Color*/}
//           <Form.Item
//             label="Color">
//             {getFieldDecorator('color', {
//               // initialValue: this.state.color,
//               rules: [{
//                 required: true,
//                 message: 'Please enter color',
//                 whitespace: true
//               }],
//             })(
//               <Input />
//             )}
//           </Form.Item>
//           {/*Size*/}
//           <Form.Item
//             label="Size">
//             {getFieldDecorator('size', {
//               // initialValue: this.state.size,
//               rules: [{
//                 required: true,
//                 message: 'Please enter size',
//                 whitespace: true
//               }],
//             })(
//               <Input />
//             )}
//           </Form.Item>
//           {/*Material Type*/}
//           <Form.Item
//             label="Material Type">
//             {getFieldDecorator('materialType', {
//               // initialValue: this.state.materialType,
//               rules: [{
//                 required: true,
//                 message: 'Please enter materialtype',
//                 whitespace: true
//               }],
//             })(
//               <Input />
//             )}
//           </Form.Item>

//           {/*Package Quantity*/}
//           <Form.Item
//             label="Quantity">
//             {getFieldDecorator('pakageQuantity', {
//               // initialValue: this.state.pakageQuantity,
//               rules: [{
//                 required: true,
//                 message: 'Please enter pakage quantity',
//                 whitespace: true
//               },
//               { validator: this.validateNumber.bind(this) }]
//             })(
//               <Input
//               />
//             )}
//           </Form.Item>

//           {/*Images*/}
//           <div>
//             <Form.Item
//               {...formItemLayout}
//               label="Images"
//             >
//               {getFieldDecorator('images', {
//                 rules: [{
//                   required: true,
//                   message: 'Please upload your Images!',
//                   whitespace: true
//                 }],
//               })(
//                 <div className="clearfix">
//                   <Upload
//                     action="//jsonplaceholder.typicode.com/posts/"
//                     listType="picture-card"
//                     fileList={fileList}
//                     onPreview={this.handlePreview}
//                     onChange={this.handleChange}
//                   >
//                     {imageList && this.state.imageList.length + fileList.length >= 6 ? null : uploadButton}
//                   </Upload>
//                   <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
//                     <img alt="example" style={{ width: '100%' }} src={previewImage} />
//                   </Modal>
//                   {uploadedImages}
//                 </div>
//               )}
//             </Form.Item>
//             {noChooseFile ?
//               null
//               : <div className="col-md-6">
//                 <h6 style={{ marginTop: "10px", marginLeft: "4px" }}> No File Chosen</h6>
//               </div>
//             }
//           </div>
//           <div className="col-md-3 col-xs-4">
//             <Form.Item >
//               <Button type="primary" htmlType="submit">
//                 Register
//           </Button>
//             </Form.Item>
//             {/* <div className="row center_global row">
//               <button style={{ textAlign: 'center', width: "70%" }}
//                 className="btn button_custom">
//                 Submit
//                             </button>
//             </div> */}
//           </div>

//         </Form>



//       </div>

//     )
//   }
// }

// const WrappedBusinessForm = Form.create()(NewForm);
// export default WrappedBusinessForm;