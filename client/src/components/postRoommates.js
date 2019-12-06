import React, { Component } from 'react';
import App from '../App';
import {
    Form,
    Input,
    Icon,
    Cascader,
    InputNumber,
    Checkbox,
    notification,
    Upload,
    Modal,
    DatePicker,
    Radio,
    Row,
    Col
} from 'antd';
import moment from 'moment';
import superagent from "superagent";
import {HttpUtils} from "../Services/HttpUtils";
//import MapContainer from './google_map/Map'
import sha1 from "sha1";
import Burgermenu from './header/burgermenu';
import Footer from '../components/footer/footer';
import AsyncStorage from "@callstack/async-storage/lib/index";
const RangePicker = DatePicker.RangePicker;
const InputGroup = Input.Group;
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const FormItem = Form.Item
const category = [{
  value: 'Property to rent',
  label: 'Property to rent',
  children: [{
    value: 'Single Family Home',
    label: 'Single Family Home',
    children: [{
      value: '1 Bed',
      label: '1 Bed',
    },{
      value: '2 Beds',
      label: '2 Beds',
    },{
      value: '3 Beds',
      label: '3 Beds',
    },{
      value: '4+ Beds',
      label: '4+ Beds',
    }],
  },
{
    value:'Appartment',
    label:'Apartment',
    children: [{
      value: '1 Bed',
      label: '1 Bed',
    },{
      value: '2 Beds',
      label: '2 Beds',
    },{
      value: '3 Beds',
      label: '3 Beds',
    },{
      value: '4+ Beds',
      label: '4+ Beds',
    }],
},{
    value:'Condo',
    label:'Condo',
    children: [{
      value: '1 Bed',
      label: '1 Bed',
    },{
      value: '2 Beds',
      label: '2 Beds',
    },{
      value: '3 Beds',
      label: '3 Beds',
    },{
      value: '4+ Beds',
      label: '4+ Beds',
    }],
},{
    value:'Town house',
    label:'Town house',
    children: [{
      value: '1 Bed',
      label: '1 Bed',
    },{
      value: '2 Beds',
      label: '2 Beds',
    },{
      value: '3 Beds',
      label: '3 Beds',
    },{
      value: '4+ Beds',
      label: '4+ Beds',
    }],
},{
    value:'Homes',
    label:'Homes',
    children: [{
      value: '1 Bed',
      label: '1 Bed',
    },{
      value: '2 Beds',
      label: '2 Beds',
    },{
      value: '3 Beds',
      label: '3 Beds',
    },{
      value: '4+ Beds',
      label: '4+ Beds',
    }],
}],
},{
  value: 'Room to rent',
  label: 'Room to rent',
  children: [{
    value: 'Shared Room',
    label: 'Shared Room',
  },{
    value:'Single Room',
    label:'Single Room',
  },{
    value:'Paying Guest',
    label:'Paying Guest',
  }],
},{
    value:'Office & commercial to rent',
    label:'Office & commercial to rent',
    children:[{
      value:'Office Space',
      label:'Office Space',  
    },{
        value:'Retail Outlet',
        label:'Retail Outlet',
    },{
        value:'Others',
        label:'Others',
    }],

},{
    value:'Parking & storage to rent',
    label:'Parking & storage to rent',
}];

const furnishedcategory = [{
  value: 'Unfurnished',
  label: 'Unfurnished',
  },{
    value:'Furnished with Bed',
    label:'Furnished with Bed',
  },{
    value:'Semi Furnished',
    label:'Semi Furnished',
  },{
    value:'Fully Furnished',
    label:'Fully Furnished',
  }];

class Postroommates extends Component{
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            desLength: 0,
            fileList: [],
            previewVisible: false,
            previewImage: '',
            hideAddress: false,
            dateObj: { from: '', to: '' },
            radio: true,
            amenities: [],
            vegNoVeg: 'Yes',
            petFriendly: 'No',
            smoking: 'No'
        }
    }

    componentWillMount(){
        this.handleLocalStorage();
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                var userObj = JSON.parse(obj)
                if(!!userObj) {
                    this.setState({
                        userId: userObj._id
                    })
                }
            })
    }

    //-------------- upload functions start -------------------
    handleCancel = () => {
        this.setState({ previewVisible: false })
    }

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => {
        this.setState({fileList})
    }
    //--------------upload functions end ---------------------

    checkValue(rule, value, callback) {
        this.setState({desLength: value ? value.length : 0})
        callback();
    }

    checkPriceValue(rule, value, callback){
        if (!value) {
            callback('Please input your Price!');
        } else {
            callback();
        }
    }

    validateDate(rule, value, callback){
        if (!(!!value)) {
            callback('Please select your Date Range!');
        } else {
            callback();
        }
    }

    onChangePrice(e) {
        this.setState({hidePrice: e.target.checked});
    }

    onChangeDate(dates, dateStrings) {
        this.setState({
            dateObj: {
                from: dateStrings[0],
                to: dateStrings[1]
            }
        })
    }

    onChangeAmenities(checkedValues) {
        this.setState({amenities: checkedValues});
    }

    onChangeAddress(e) {
        this.setState({hideAddress: e.target.checked});
    }

    checkCheckBox = (rule, value, callback) => {
        if (!value) {
            callback('Please check at least one!');
        } else {
            callback();
        }
    };

    changeAttBath = (e) => {
        if(e.target.name === 'radio') {
            this.setState({
                radio: e.target.value,
            });
        }else if(e.target.name === 'vegNoVeg'){
            this.setState({
                vegNoVeg: e.target.value,
            });
        }else if(e.target.name === 'smoking'){
            this.setState({
                smoking: e.target.value,
            });
        }else if(e.target.name === 'petFriendly'){
            this.setState({
                petFriendly: e.target.value,
            });
        }
    }

    uploadFile = (files) =>{
        const image = files.originFileObj
        const cloudName = 'dxk0bmtei'
        const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
        const timestamp = Date.now()/1000
        const uploadPreset = 'toh6r3p2'
        const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'U8W4mHcSxhKNRJ2_nT5Oz36T6BI'
        const signature = sha1(paramsStr)
        const params = {
            'api_key':'878178936665133',
            'timestamp':timestamp,
            'upload_preset':uploadPreset,
            'signature':signature
        }

        return new Promise((res, rej) => {
            let uploadRequest = superagent.post(url)
            uploadRequest.attach('file', image)
            Object.keys(params).forEach((key) =>{
                uploadRequest.field(key, params[key])
            })

            uploadRequest.end((err, resp) =>{
                err ? rej(err) : res(resp);
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err) {
                this.funcForUpload(values)
            }
        })
    }

    async funcForUpload(values){
        const { fileList } = this.state;
        var cloudURL = [];

        Promise.all(fileList.map((val) => {
            return this.uploadFile(val).then((result) => {
                return result.body.url
            })
        })).then((results) => {
            this.postData(values, results)
        })
    }

    async postData(values, response) {
        const {dateObj, userId, petFriendly, radio, smoking, vegNoVeg} = this.state;
        var obj = {
            user_id: userId,
            accommodates : values.accommodates[0],
            amenities: values.amenities,
            attachedBath : radio,
            category: values.category[0],
            city : values.city[0],
            contactEmail: values.contactEmail,
            contactMode: values.contactMode,
            contactName: values.contactName,
            contactNumber: values.contactNumber,
            dateRange: dateObj,
            description: values.description,
            furnished: values.furnished[0],
            housingType: values.housingType[0],
            postingTitle :values.postingTitle,
            price: values.price,
            priceMode: values.priceMode[0],
            propertyLocation: values.propertyLocation,
            zipCode: values.zipCode,
            petFriendly: petFriendly,
            smoking: smoking,
            vegNoVeg: vegNoVeg,
            arr_url: response ? response : []
        }
        var req = await HttpUtils.post('postroomrent', obj)
    }

    render(){
        const { desLength, fileList, previewVisible, previewImage, hideAddress } = this.state;
        const {getFieldDecorator} = this.props.form;
        const optionsContact = [
            { label: 'email', value: 'email' },
            { label: 'phone', value: 'phone' },
            { label: 'text', value: 'text' },
        ];

        const formItemLayout = {
            labelCol: {
                md:{span:6},
                xs: {span: 24},
                sm: {span: 5},
            },
            wrapperCol: {
                md:{span:12},
                xs: {span: 24},
                sm: {span: 16},
            },
        };

        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return(
            <div>
                <Burgermenu/>
                <div className="">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="main_c_panel">Roommates / Rentals<br/>
                                    Find all your Local Rentals in one place
                                </div>
                                <div className="panel-body">
                                    {/*==========main panel content=============*/}
                                    {/*==========location panel start=========*/}
                                    <div className="panel panel-default">
                                        <div className="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">Location</span></div>
                                        <div className="panel-body">
                                            <FormItem
                                                {...formItemLayout}
                                                label="City"
                                            >
                                                {getFieldDecorator('city', {
                                                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                                    rules: [{ type: 'array', required: true, message: 'Please select your City!' }],
                                                })(
                                                    <Cascader options={category} />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Property Location"
                                            >
                                                {getFieldDecorator('propertyLocation', {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please input your Property Location!',
                                                        whitespace: true
                                                    }],
                                                })(
                                                    <Input/>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Property Zip Code"
                                            >
                                                {getFieldDecorator('zipCode', {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please input your Property Zip Code!',
                                                        whitespace: true
                                                    }],
                                                })(
                                                    <Input/>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Category"
                                            >
                                                {getFieldDecorator('category', {
                                                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                                    rules: [{ type: 'array', required: true, message: 'Please select your Category!' }],
                                                })(
                                                    <Cascader options={category} />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Posting Title"
                                            >
                                                {getFieldDecorator('postingTitle', {
                                                    rules: [{ required: true, message: 'Please input your Posting Title!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Description/Details"
                                            >
                                                {getFieldDecorator('description', {
                                                    rules: [
                                                        {
                                                            required: true, message: 'Please input your Description/Details!', whitespace: true
                                                        },
                                                        {
                                                            validator: this.checkValue.bind(this)
                                                        }],
                                                })(
                                                    <TextArea
                                                        rows={6}
                                                        maxlength="500"
                                                    style={{"margin-bottom": "10px"}}/>
                                                )}
                                                <br />
                                                <span style={{"float": "right"}}>{500 - desLength}</span>
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Date Range"
                                            >
                                                {getFieldDecorator('dateRange', {
                                                    rules: [{ validator: this.validateDate.bind(this) }],
                                                })(
                                                    <RangePicker
                                                        ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                                                        onChange={this.onChangeDate.bind(this)}
                                                    />
                                                )}
                                            </FormItem>
                                            <div className="row" style={{'text-align': 'center'}}>
                                                <div className="col-md-2"></div>
                                                <div class="col-md-4">
                                                    <FormItem
                                                        {...formItemLayout}
                                                        label="Rent"
                                                    >
                                                        {getFieldDecorator('price', {
                                                            rules: [{ validator: this.checkPriceValue.bind(this) }],
                                                        })(
                                                            <Input />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-md-5" style={{'text-align': 'left'}}>
                                                    <FormItem
                                                        {...formItemLayout}
                                                        label="Price Mode"
                                                    >
                                                        {getFieldDecorator('priceMode', {
                                                            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                                            rules: [{ type: 'array', required: true, message: 'Please select your Price Mode!' }],
                                                        })(
                                                            <Cascader options={category} />
                                                        )}
                                                    </FormItem>
                                                </div>
                                                <div className="col-md-1"></div>
                                            </div>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Accommodates"
                                            >
                                                {getFieldDecorator('accommodates', {
                                                    rules: [{ type: 'array', required: true, message: 'Please select your Accommodates!' }],
                                                })(
                                                    <Cascader options={category} />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Furnished"
                                            >
                                                {getFieldDecorator('furnished', {
                                                    rules: [{ type: 'array', required: true, message: 'Please select your Furnished!' }],
                                                })(
                                                    <Cascader options={furnishedcategory} />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Attached Bath"
                                            >
                                                <RadioGroup onChange={this.changeAttBath} name='radio' value={this.state.radio}>
                                                    <Radio value={true}>YES</Radio>
                                                    <Radio value={false}>NO</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Amenities include"
                                            >
                                                {getFieldDecorator('amenities', {
                                                    rules: [{ validator: this.checkCheckBox }],
                                                })(
                                                    <CheckboxGroup style={{ width: '100%' }} onChange={this.onChangeAmenities.bind(this)}>
                                                        <Row>
                                                            <Col span={8}><Checkbox value="Gym/Fitness Center">Gym/Fitness Center</Checkbox></Col>
                                                            <Col span={8}><Checkbox value="Swimming Pool">Swimming Pool</Checkbox></Col>
                                                            <Col span={8}><Checkbox value="Car Park">Car Park</Checkbox></Col>
                                                            <Col span={8}><Checkbox value="Visitors Parking">Visitors Parking</Checkbox></Col>
                                                            <Col span={8}><Checkbox value="Power Backup">Power Backup</Checkbox></Col>
                                                            <Col span={8}><Checkbox value="Garbage Disposal">Garbage Disposal</Checkbox></Col>
                                                            <Col span={8}><Checkbox value="Private Lawn">Private Lawn</Checkbox></Col>
                                                            <Col span={8}><Checkbox value="Water Heater Plant">Water Heater Plant</Checkbox></Col>
                                                            <Col span={8}><Checkbox value="Security System">Security System</Checkbox></Col>
                                                            <Col span={8}><Checkbox value="Laundry Service">Laundry Service </Checkbox></Col>
                                                            <Col span={8}><Checkbox value="Elevator">Elevator</Checkbox></Col>
                                                            <Col span={8}><Checkbox value="Club House">Club House</Checkbox></Col>
                                                        </Row>
                                                    </CheckboxGroup>
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Vegetarians Preferred"
                                            >
                                                <RadioGroup onChange={this.changeAttBath} name='vegNoVeg' value={this.state.vegNoVeg}>
                                                    <Radio value={'Yes'}>YES</Radio>
                                                    <Radio value={'No'}>NO</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Smoking"
                                            >
                                                <RadioGroup onChange={this.changeAttBath} name='smoking' value={this.state.smoking}>
                                                    <Radio value={'Yes'}>YES</Radio>
                                                    <Radio value={'No'}>NO</Radio>
                                                    <Radio value={'Outside'}>Outside only</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Pet Friendly"
                                            >
                                                <RadioGroup onChange={this.changeAttBath} name='petFriendly' value={this.state.petFriendly}>
                                                    <Radio value={'No'}>No</Radio>
                                                    <Radio value={'Only Cats'}>Only Cats</Radio>
                                                    <Radio value={'Only Dogs'}>Only Dogs</Radio>
                                                    <Radio value={'Any Pet'}>Any Pet</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Images"
                                            >
                                                {getFieldDecorator('images', {
                                                    rules: [{ required: true, message: 'Please upload your Images!', whitespace: true }],
                                                })(
                                                    <div>
                                                        <Upload
                                                            action="//jsonplaceholder.typicode.com/posts/"
                                                            listType="picture-card"
                                                            fileList={fileList}
                                                            onPreview={this.handlePreview}
                                                            onChange={this.handleChange}
                                                        >
                                                            {fileList.length >= 4 ? null : uploadButton}
                                                        </Upload>
                                                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                        </Modal>
                                                    </div>
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    {/*==========main panel content=============*/}
                                    {/*==========location panel start=========*/}
                                    <div className="panel panel-default">
                                        <div className="panel-heading bold_c_text"><Icon type="info-circle"/><span
                                            className="margin_font_location">About</span></div>
                                        <div className="panel-body">
                                            <FormItem
                                                {...formItemLayout}
                                                label="Contact Name"
                                            >
                                                {getFieldDecorator('contactName', {
                                                    rules: [{ required: true, message: 'Please input your Contact Name!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Contact Email"
                                            >
                                                {getFieldDecorator('contactEmail', {
                                                    rules: [{ required: true, message: 'Please input your Contact Email!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Contact Number"
                                            >
                                                {getFieldDecorator('contactNumber', {
                                                    rules: [{ required: true, message: 'Please input your Contact Number!', whitespace: true }],
                                                })(
                                                    <Input  />
                                                )}
                                            </FormItem>
                                            <FormItem
                                                {...formItemLayout}
                                                label="Mode of Contact"
                                            >
                                                {getFieldDecorator('contactMode', {
                                                    rules: [{ validator: this.checkCheckBox }],
                                                })(
                                                    <CheckboxGroup options={optionsContact} />
                                                )}
                                            </FormItem>
                                        </div>
                                    </div>
                                </div>
                                <div className="row center_global">
                                    <button className="btn color_button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </Form>
                    <Footer />
                </div>
            </div>
        )
    }
}

const WrappedBusinessForm = Form.create()(Postroommates);
export default WrappedBusinessForm;
