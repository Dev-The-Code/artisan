import React, { Component } from 'react';
import {
    Form,
    Input,
    Icon,
    Cascader,
    Spin,
    Checkbox,
    notification,
    Upload,
    Modal,
    Button,
    Radio,
    Anchor,
} from 'antd';
import HeaderMenu from '../../header/headermenu';
import sha1 from "sha1";
import superagent from "superagent";
import Footer from '../../footer/footer';
import './shopForm.css'
import { HttpUtils } from "../../../Services/HttpUtils";
import { Redirect } from "react-router-dom";
import { isMobile, isTablet, isBrowser } from 'react-device-detect';

const { Link } = Anchor;
const { TextArea } = Input;
const Dragger = Upload.Dragger;


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

const states = [
    {
        value: 'Sindh',
        label: 'Sindh',
    }, {
        value: 'Punjab',
        label: 'Punjab',
    }, {
        value: 'KPK',
        label: 'KPK',
    }, {
        value: 'Balochistan',
        label: 'Balochistan',
    }, {
        value: 'Gilgit-Baltistan',
        label: 'Gilgit-Baltistan',
    }, {
        value: 'Azad Kashmir',
        label: 'Azad Kashmir',
    }, {
        value: 'Islamabad',
        label: 'Islamabad',
    }
]

const cities = [
    {
        value: 'Abbottabad',
        label: 'Abbottabad',
    }, {
        value: "Ahmadpur East",
        label: "Ahmadpur East",
    }, {
        value: 'Ahmed Nager Chatha',
        label: 'Ahmed Nager Chatha',
    }, {
        value: 'Ali Khan Abad',
        label: 'Ali Khan Abad',
    }, {
        value: 'Alipur',
        label: 'Alipur',
    }, {
        value: 'Arifwala',
        label: 'Arifwala',
    }, {
        value: 'Attock',
        label: 'Attock',
    },
    {
        value: 'Bhera',
        label: 'Bhera',
    },
    {
        value: 'Bhalwal',
        label: 'Bhalwal',
    },
    {
        value: 'Bahawalnagar',
        label: 'Bahawalnagar',
    },
    {
        value: 'Bahawalpur',
        label: 'Bahawalpur',
    },
    {
        value: 'Bhakkar',
        label: 'Bhakkar',
    }, {
        value: 'Bhimber',
        label: 'Bhimber',
    }, {
        value: 'Burewala',
        label: 'Burewala',
    }, {
        value: 'Chillianwala',
        label: 'Chillianwala',
    }, {
        value: 'Choa Saidanshah',
        label: 'Choa Saidanshah',
    }, {
        value: 'Chakwal',
        label: 'Chakwal',
    }, {
        value: 'Chak Jhumra',
        label: 'Chak Jhumra',
    }, {
        value: 'Chichawatni',
        label: 'Chichawatni',
    }, {
        value: 'Chiniot',
        label: 'Chiniot',
    }, {
        value: 'Chishtian',
        label: 'Chishtian',
    }, {
        value: 'Chunian',
        label: 'Chunian',
    }, {
        value: 'Dajkot',
        label: 'Dajkot',
    }, {
        value: 'Daska',
        label: 'Daska',
    }, {
        value: 'Davispur',
        label: 'Davispur',
    }, {
        value: 'Darya Khan',
        label: 'Darya Khan',
    }, {
        value: 'Dera Ghazi Khan',
        label: 'Dera Ghazi Khan',
    }, {
        value: 'Dera Ismail Khan',
        label: 'Dera Ismail Khan',
    }, {
        value: 'Dhaular',
        label: 'Dhaular',
    }, {
        value: 'Dina',
        label: 'Dina',
    }, {
        value: 'Dinga',
        label: 'Dinga',
    }, {
        value: 'Dhudial Chakwal',
        label: 'Dhudial Chakwal',
    }, {
        value: 'Dipalpur',
        label: 'Dipalpur',
    }, {
        value: 'Faisalabad',
        label: 'Faisalabad',
    }, {
        value: 'Fateh Jang',
        label: 'Fateh Jang',
    }, {
        value: 'Ghakhar Mandi',
        label: 'Ghakhar Mandi',
    }, {
        value: 'Gojra',
        label: 'Gojra',
    }, {
        value: 'Gujranwala',
        label: 'Gujranwala',
    }, {
        value: 'Gujrat',
        label: 'Gujrat',
    }, {
        value: 'Gujar Khan',
        label: 'Gujar Khan',
    }, {
        value: 'Harappa',
        label: 'Harappa',
    }, {
        value: 'Haripur',
        label: 'Haripur',
    }, {
        value: 'Hafizabad',
        label: 'Hafizabad',
    }, {
        value: 'Haroonabad',
        label: 'Haroonabad',
    }, {
        value: 'Hasilpur',
        label: 'Hasilpur',
    }, {
        value: 'Haveli Lakha',
        label: 'Haveli Lakha',
    }, {
        value: 'Islamabad',
        label: 'Islamabad',
    }, {
        value: 'Jalalpur Jattan',
        label: 'Jalalpur Jattan',
    }, {
        value: 'Jampur',
        label: 'Jampur',
    }, {
        value: 'Jaranwala',
        label: 'Jaranwala',
    }, {
        value: 'Jauharabad',
        label: 'Jauharabad',
    }, {
        value: 'Jhang',
        label: 'Jhang',
    }, {
        value: 'Jhelum',
        label: 'Jhelum',
    }, {
        value: 'Kallar Syedan',
        label: 'Kallar Syedan',
    }, {
        value: 'Kalabagh',
        label: 'Kalabagh',
    }, {
        value: 'Karor Lal Esan',
        label: 'Karor Lal Esan',
    }, {
        value: 'Karachi',
        label: 'Karachi',
    }, {
        value: 'Kasur',
        label: 'Kasur',
    }, {
        value: 'Kamalia',
        label: 'Kamalia',
    }, {
        value: 'Kamoke',
        label: 'Kamoke',
    }, {
        value: 'Khanewal',
        label: 'Khanewal',
    }, {
        value: 'Khanpur',
        label: 'Khanpur',
    }, {
        value: 'Khanqah Sharif',
        label: 'Khanqah Sharif',
    }, {
        value: 'Kharian',
        label: 'Kharian',
    }, {
        value: 'Khushab',
        label: 'Khushab',
    }, {
        value: 'Kot Adu',
        label: 'Kot Adu',
    }, {
        value: 'Lahore',
        label: 'Lahore',
    }, {
        value: 'Larkana',
        label: 'Larkana',
    }, {
        value: 'Lalamusa',
        label: 'Lalamusa',
    }, {
        value: 'Layyah',
        label: 'Layyah',
    }, {
        value: 'Lawa Chakwal',
        label: 'Lawa Chakwal',
    }, {
        value: 'Liaquat Pur',
        label: 'Liaquat Pur',
    }, {
        value: 'Lodhran',
        label: 'Lodhran',
    }, {
        value: 'Malakwal',
        label: 'Malakwal',
    }, {
        value: 'Mamoori',
        label: 'Mamoori',
    }, {
        value: 'Mailsi',
        label: 'Mailsi',
    }, {
        value: 'Mandi Bahauddin',
        label: 'Mandi Bahauddin',
    }, {
        value: 'Mian Channu',
        label: 'Mian Channu',
    }, {
        value: 'Mianwali',
        label: 'Mianwali',
    }, {
        value: 'Miani',
        label: 'Miani',
    }, {
        value: 'Mirpur',
        label: 'Mirpur',
    }, {
        value: 'Mangla Cantt',
        label: 'Mangla Cantt',
    }, {
        value: 'Multan',
        label: 'Multan',
    }, {
        value: 'Muzaffargarh',
        label: 'Muzaffargarh',
    }, {
        value: 'Murree',
        label: 'Murree',
    }, {
        value: 'Mianwali Bangla',
        label: 'Mianwali Bangla',
    }, {
        value: 'Muridke',
        label: 'Muridke',
    }, {
        value: 'Narowal',
        label: 'Narowal',
    }, {
        value: 'Nankana Sahib',
        label: 'Nankana Sahib',
    }, {
        value: 'Okara',
        label: 'Okara',
    }, {
        value: 'Peshawar',
        label: 'Peshawar',
    }, {
        value: 'Renala Khurd',
        label: 'Renala Khurd',
    }, {
        value: 'Pakpattan',
        label: 'Pakpattan',
    }, {
        value: 'Pattoki',
        label: 'Pattoki',
    }, {
        value: 'Pindi Bhattian',
        label: 'Pindi Bhattian',
    }, {
        value: 'Pind Dadan Khan',
        label: 'Pind Dadan Khan',
    }, {
        value: 'Pir Mahal',
        label: 'Pir Mahal',
    }, {
        value: 'Qaimpur',
        label: 'Qaimpur',
    }, {
        value: 'Qila Didar Singh',
        label: 'Qila Didar Singh',
    }, {
        value: 'Quetta',
        label: 'Quetta',
    }, {
        value: 'Rabwah',
        label: 'Rabwah',
    }, {
        value: 'Raiwind',
        label: 'Raiwind',
    }, {
        value: 'Rajanpur',
        label: 'Rajanpur',
    }, {
        value: 'Rahim Yar Khan',
        label: 'Rahim Yar Khan',
    }, {
        value: 'Rawalakot',
        label: 'Rawalakot',
    },{
        value: 'Rawalpindi',
        label: 'Rawalpindi',
    },{
        value: 'Sadiqabad',
        label: 'Sadiqabad',
    },{
        value: 'Sagri',
        label: 'Sagri',
    },{
        value: 'Sahiwal',
        label: 'Sahiwal',
    },{
        value: 'Sambrial',
        label: 'Sambrial',
    },{
        value: 'Samundri',
        label: 'Samundri',
    },{
        value: 'Sangla Hill',
        label: 'Sangla Hill',
    },{
        value: 'Sarai Alamgir',
        label: 'Sarai Alamgir',
    },{
        value: 'Sargodha',
        label: 'Sargodha',
    },{
        value: 'Shakargarh',
        label: 'Shakargarh',
    },{
        value: 'Sheikhupura',
        label: 'Sheikhupura',
    },{
        value: 'Shujaabad',
        label: 'Shujaabad',
    },{
        value: 'Sialkot',
        label: 'Sialkot',
    },{
        value: 'Sohawa',
        label: 'Sohawa',
    },{
        value: 'Soianwala',
        label: 'Soianwala',
    },{
        value: 'Siranwali',
        label: 'Siranwali',
    },{
        value: 'Sukkur',
        label: 'Sukkur',
    },{
        value: 'Tandlianwala',
        label: 'Tandlianwala',
    },{
        value: 'Talagang',
        label: 'Talagang',
    },{
        value: 'Taxila',
        label: 'Taxila',
    },{
        value: 'Toba Tek Singh',
        label: 'Toba Tek Singh',
    },{
        value: 'Vehari',
        label: 'Vehari',
    },{
        value: 'Wah Cantonment',
        label: 'Wah Cantonment',
    },{
        value: 'Wazirabad',
        label: 'Wazirabad',
    },{
        value: 'Yazman',
        label: 'Yazman',
    },{
        value: 'Zafarwal',
        label: 'Zafarwal',
    }
]



let id = 0;

class ShopForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileList: [],
            previewVisible: false,
            previewImage: '',
            coverPhotoSrc: '',
            bannerSrc: '',
            keyFor: '',
            shopPurpose: '',
            fileListLogo: [],
            previewVisibleLogo: false,
            previewImageLogo: '',
            btnDisabeld: false,
            mgs: '',
            loader: false,
            shopData: '',
            shopId: '',
            goShop: false,
            shopTitle: '',
            shopAddress: '',
            shopCity: '',
            shopState: '',
            shopPhone: '',
            shopEmail: '',
            shopURL: '',
            shopCategories: '',
            shopDescription: '',
            shopCategories: [],
            objectId: '',
            showAlert: false,
            gridImages: false,
        }
    }

    componentDidMount() {
        let data = this.props.location.state;
        if (data) {
            this.setState({
                shopTitle: data.shopTitle,
                shopAddress: data.shopAddress,
                shopCity: data.shopCity,
                shopState: data.shopState,
                shopEmail: data.shopEmail,
                shopPhone: data.shopPhone,
                shopURL: data.shopURL,
                shopDescription: data.shopDescription,
                shopPurpose: data.shopPurpose,
                shopCategories: data.shopCategories,
                objectId: data._id,
                accountTitle: data.accountTitle,
                bankAddress: data.bankAddress,
                bankName: data.bankName,
                ibank: data.ibank,
                swift: data.swift,
                // fileListLogo: data.shopLogo,

            })
        }
    }

    addForm = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        this.setState({ keyFor: nextKeys.length })
        form.setFieldsValue({
            keys: nextKeys,
        });
    }


    removeForm = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');

        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }
        // can use data-binding to set
        this.setState({ keyFor: keys.length - 1 })
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    validateNumber(rule, value, callback) {
        if (isNaN(value)) {
            callback('Please type Numbers');
        } else {
            callback()
        }
    }

    handleCancel = () => {
        this.setState({ previewVisible: false })
    }

    handleCancelLogo = () => {
        this.setState({ previewVisibleLogo: false })
    }

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl || file,
            previewVisible: true,
        });
    }

    handlePreviewLogo = (file) => {
        this.setState({
            previewImageLogo: file.url || file.thumbUrl || file,
            previewVisibleLogo: true,
        });
    }

    handleChange = ({ fileList }) => {
        this.setState({
            fileList: fileList,
            gridImages: false,
        })
    }

    handleChangeLogo = ({ fileList }) => {
        this.setState({ fileListLogo: fileList })
    }

    onChangeCoverPhoto = info => {
        let self = this,
            file = info.file,
            coverPhoto = [],
            reader = new FileReader();

        //Read the contents of Image File.
        reader.readAsDataURL(info.file.originFileObj);
        reader.onload = function (e) {

            //Initiate the JavaScript Image object.
            var image = new Image();

            //Set the Base64 string return from FileReader as source.
            image.src = e.target.result;

            //Validate the File Height and Width.
            image.onload = function () {
                let height = this.height,
                    width = this.width;
                if (height < width) {
                    file.src = e.target.result;
                    coverPhoto.push(file);
                    self.setState({ coverPhotoSrc: file.src, coverPhoto });
                    return false;
                }
                alert("Image must be in landscape mode.");
                return true;
            };
        }
    }

    onChangeBanner = info => {
        if (info.event !== undefined) {
            let self = this,
                file = info.file,
                banner = [],
                reader = new FileReader();

            //Read the contents of Image File.
            reader.readAsDataURL(info.file.originFileObj);
            reader.onload = function (e) {

                //Initiate the JavaScript Image object.
                var image = new Image();

                //Set the Base64 string return from FileReader as source.
                image.src = e.target.result;

                //Validate the File Height and Width.
                image.onload = function () {
                    let height = this.height,
                        width = this.width;
                    if (height > width) {
                        file.src = e.target.result;
                        banner.push(file);
                        self.setState({ bannerSrc: file.src, banner });
                        return false;
                    }
                    alert("Image must be in portrait mode.");
                    return true;
                };
            }
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { fileList, coverPhoto, banner, fileListLogo } = this.state;
        let arr = [];
        let coverImg;
        let bannerImg;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                if (coverPhoto != undefined && banner != undefined && fileList.length >= 4) {
                    this.setState({
                        loader: true,
                        btnDisabeld: true
                    })
                    coverImg = { ...coverPhoto[0], ...{ id: 'banner' } },
                        bannerImg = { ...banner[0], ...{ id: 'gridImage' } };

                    arr.push(coverImg, bannerImg)
                    console.log(values, 'values')
                    this.funcForUpload(values, arr, fileList, fileListLogo)
                }
                else if (coverPhoto == undefined || banner == undefined) {
                    this.setState({
                        showAlert: true,
                    })
                }
                else if (fileList.length < 4) {
                    this.setState({
                        gridImages: true,
                    })
                }

            }
        })
    }

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

    async funcForUpload(values, arr, fileList, fileListLogo) {
        Promise.all(arr.map((val) => {
            return this.uploadFile(val).then((result) => {
                let id = val.id;
                return { [id]: result.body.url }
            })
        })).then((results) => {
            if (results) {
                Promise.all(fileList.map((val) => {
                    return this.uploadFile(val).then((result) => {
                        return result.body.url
                    })
                })).then((images) => {
                    if (images) {
                        Promise.all(fileListLogo.map((val) => {
                            return this.uploadFile(val).then((result) => {
                                return result.body.url
                            })
                        })).then((logo) => {

                            this.postData(values, results, images, logo);
                        })
                    }
                })
            }
        })
    }

    async postData(values, response, images, logo) {
        const { keyFor, shopPurpose, objectId } = this.state;
        let cetogires = [];
        let cover = '';
        let banner = '';
        response.map((elem) => {
            if (Object.keys(elem)[0] == 'banner') {
                cover = elem['banner']
            }
            else if (Object.keys(elem)[0] == 'gridImage') {
                banner = elem['gridImage']
            }
        })
        if (keyFor == '') {
            cetogires.push(values.shopCategories0[0])
        }
        else {
            for (var i = 0; i < keyFor; i++) {
                cetogires.push(values[`shopCategories${i}`][0])
            }
        }
        const userData = JSON.parse(localStorage.getItem('user'));

        let shopObj = {
            shopTitle: values.shopTitle,
            shopCategories: cetogires,
            shopAddress: values.shopAddress,
            shopCity: values.shopCity,
            shopState: values.shopState,
            shopEmail: values.shopEmail,
            shopPhone: values.shopPhone,
            shopURL: values.shopURL,
            shopDescription: values.shopDescription,
            images: images,
            gridImageSrc: banner,
            bannerPhotoSrc: cover,
            shopPurpose: shopPurpose,
            shopLogo: logo,
            objectId: objectId,
            profileId: userData.profileId,
            userId: userData._id,
            bankName: values.bankName,
            accountTitle: values.accountTitle,
            ibank: values.ibank,
            bankAddress: values.bankAddress,
            swift: values.swift,
        }

        let reqShopObj = await HttpUtils.post('postshop', shopObj)
        if (reqShopObj.code === 200) {
            if (objectId != '') {
                this.setState({
                    loader: false,
                    btnDisabeld: false,
                    mgs: reqShopObj.mgs,
                    shopData: reqShopObj.content[0],
                    shopId: reqShopObj.content[0]._id,
                    goShop: true
                })
            }
            else {
                this.setState({
                    loader: false,
                    btnDisabeld: false,
                    mgs: reqShopObj.mgs,
                    shopData: reqShopObj.content,
                    shopId: reqShopObj.content._id,
                    goShop: true
                })
            }
            this.openNotification()

        }
        else {
            this.setState({
                loader: false,
                btnDisabeld: false,
                mgs: reqShopObj.msg

            })
        }
    }

    onChangeShop = e => {
        this.setState({
            shopPurpose: e.target.value,
        });
    };

    openNotification() {
        notification.open({
            message: 'Shop Created Success ',
            description: "Your shop has been created successfully"
        });
    };

    render() {
        const { fileList, previewImage, previewVisible, fileListLogo, previewImageLogo, previewVisibleLogo, btnDisabeld, mgs, loader, shopData, shopId, goShop, showAlert, gridImages } = this.state;
        const { getFieldDecorator, getFieldValue } = this.props.form;
        if (goShop) {
            return (
                <Redirect to={{ pathname: `/EcommerceProfile/${shopId}`, state: shopData }} />
            )
        }
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const uploadButtonLogo = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const gridImage = (
            <div className="shopcataloge">
                <Icon type="plus-square" />
                <div className="ant-upload-text">Upload Grid Image</div>
            </div>
        )

        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;


        { getFieldDecorator('keys', { initialValue: [keys] }) };
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <Form.Item
                    required={false}
                    key={k}
                >
                    <div className='row' style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                        <div className="col-md-9 col-sm-10 col-xs-10"
                            key={index} style={{ margin: '10px 0', padding: '0' }}>
                            <label htmlFor="Category"> Category </label>
                            <Form.Item style={{ margin: '0px' }}>
                                {getFieldDecorator(`shopCategories${index}`, {
                                    // initialValue: this.state.shopCategory,
                                    initialValue: this.state.shopCategories,
                                    defaultValue: Option.initialValue,
                                    rules: [{
                                        type: 'array',
                                        required: true,
                                        message: 'Please select your Shop Category!',
                                    }],
                                })(
                                    <Cascader
                                        options={category}
                                    />
                                )}
                            </Form.Item>
                        </div>
                        {keys.length > 1 ? (
                            <div className='col-md-3 col-sm-2 col-xs-2' style={{ padding: "0" }}>
                                <button
                                    type="button"
                                    onClick={() => this.removeForm(k)}
                                    className="btn btn-fb"
                                    style={{ backgroundColor: 'white', marginLeft: '-20px' }}
                                >
                                    <i className="fa fa-minus" style={{ color: 'gray', width: '100%', border: '1px solid', padding: '8px' }}></i>
                                </button>
                            </div>
                        ) : null}
                    </div>
                </Form.Item>
            )
        })
        return (
            <div>
                {/*================================App component include Start===========================*/}
                {showAlert && alert("Please Upload required grid & banner")}
                {gridImages && alert("Please Upload 4 grid images for shops")}

                <HeaderMenu />

                <div className="hidden-xs" style={{ width: "100%", height: "67px", marginTop: "3px" }}></div>

                {/*================================post business form start============================*/}
                <div className="hidden-sm" style={{ marginTop: '5%' }}></div>
                <div className="visible-sm" style={{ marginTop: '5%' }}></div>
                <div className="row jobdetail-page">
                    <div className="col-md-12 col-sm-12 col-xs-12" style={{ textAlign: "center" }}>
                        <div className="">
                            <h1 style={{ fontFamily: 'Work Sans, sans-serif', fontWeight: "bold", color: 'black' }}>CREATE YOUR SHOP</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-sm-4 hidden-xs">
                        <div className="anchartabs">
                            <Anchor>
                                <Link href="#shopdetails" title="General"></Link>
                                <Link href="#shopuploads" title="Images" />
                                <Link href="#shoplocation" title="Location" />
                                <Link href="#billing" title="Billing" />
                            </Anchor>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-8">
                        <div className="container" style={isMobile ? { width: "100%", padding: "0" } : { width: "90%" }}>
                            <Form onSubmit={this.handleSubmit}>
                                <div id="shopdetails">
                                    <div className="panel-body" style={{ border: "0" }}>
                                        <div className="panel panel-default">
                                            <div className="form-headings">
                                                <span className="fa fa-pencil"
                                                    style={{
                                                        background: "linear-gradient(90deg, #D9A67E, #3C3C47)",
                                                        color: "white", fontSize: "12px"
                                                    }}></span>
                                                <span className="margin_font_location">General</span>
                                            </div>
                                            <div className="container" style={{ width: '100%' }}>
                                                <div className="" style={{ marginTop: '10px' }}>
                                                    <div className=""
                                                        style={{ padding: "20px" }}>
                                                        <label htmlFor="sel1">Shop Title</label>
                                                        <Form.Item style={{ margin: "0" }}>
                                                            {getFieldDecorator('shopTitle', {
                                                                initialValue: this.state.shopTitle,
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please input your Shop Title!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <input type="text" className="input-title" placeholder="Name Your Shop" />
                                                            )}
                                                        </Form.Item>
                                                    </div>
                                                </div>
                                                <hr className="shop-form-hr" />
                                                <div className='row' style={{ padding: "20px", margin: "0" }}>

                                                    <div className="col-md-5" style={{ padding: "0" }}>

                                                        <div className="col-md-6" className="form-group">
                                                            <label htmlFor="sel1">Shop Purpose</label>
                                                            <Form.Item>
                                                                {getFieldDecorator('shopPurpose', {
                                                                    initialValue: this.state.shopPurpose,
                                                                    rules: [{
                                                                        required: true,
                                                                        message: 'Please select your Shop Purpose!',
                                                                        whitespace: true
                                                                    }],
                                                                })(
                                                                    <Radio.Group onChange={this.onChangeShop}>
                                                                        <Radio value={"Gift Shop"}>Gift Shop</Radio>
                                                                        <Radio value={"Shop"}>Shop</Radio>
                                                                    </Radio.Group>
                                                                )}
                                                            </Form.Item>
                                                        </div>


                                                    </div>

                                                    <div className="col-md-7">

                                                        <div className="col-md-8 col-sm-10 col-xs-10" style={{ padding: '0px', margin: "0" }}>
                                                            {formItems}
                                                        </div>
                                                        <div className="col-md-4 col-sm-2 col-xs-2" style={{ paddingLeft: '0.6%' }}>
                                                            <Form.Item >
                                                                <div className='row' style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                                                    <button
                                                                        type="button"
                                                                        onClick={this.addForm}
                                                                        className="btn btn-fb"
                                                                        style={{ margin: "0", backgroundColor: 'white' }}
                                                                    >
                                                                        <i className="fa fa-plus"
                                                                            style={{
                                                                                color: 'gray', width: '100%',
                                                                                border: '1px solid', padding: '8px'
                                                                            }}
                                                                        >
                                                                        </i>
                                                                    </button>
                                                                </div>
                                                            </Form.Item>
                                                        </div>

                                                    </div>
                                                </div>

                                                <hr className="shop-form-hr" />
                                                <div className="row" style={{ padding: "20px", margin: "0" }}>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="sel1">Description</label>
                                                            <Form.Item>
                                                                {getFieldDecorator('shopDescription', {
                                                                    initialValue: this.state.shopDescription,
                                                                    rules: [
                                                                        {
                                                                            required: true,
                                                                            message: 'Please input your Description/Details!',
                                                                            whitespace: true
                                                                        }],
                                                                })(
                                                                    <TextArea
                                                                        rows={6}
                                                                        maxLength="500"
                                                                        style={{ "marginBottom": "10px" }} />
                                                                )}
                                                                <br />
                                                                <span style={{ "float": "right" }}>
                                                                </span>
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="shopuploads">
                                    <div className="panel-body" style={{ border: "0" }}>
                                        <div className="panel panel-default">
                                            <div className="form-headings">
                                                <span className="fa fa-camera"
                                                    style={{
                                                        background: "linear-gradient(90deg, #D9A67E, #3C3C47)",
                                                        color: "white", fontSize: "12px", padding: "9px"
                                                    }}></span>
                                                <span className="margin_font_location">Images</span>
                                            </div>
                                            <div className="container" style={{ width: '100%' }}>
                                                <div className="row" style={{ padding: "20px", margin: "0" }}>
                                                    <div className="col-md-3" style={{ padding: "0" }}>
                                                        <label htmlFor="sel1">Shop Logo</label>

                                                        <Form.Item>
                                                            {getFieldDecorator('shopLogo', {
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please upload your shop logo!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <div>
                                                                    <Upload
                                                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                                        listType="picture-card"
                                                                        fileList={fileListLogo}
                                                                        onPreview={this.handlePreviewLogo}
                                                                        onChange={this.handleChangeLogo}
                                                                    >
                                                                        {fileListLogo.length > 1 ? null : uploadButtonLogo}
                                                                    </Upload>
                                                                    <div>
                                                                        <Modal visible={previewVisibleLogo} footer={null} onCancel={this.handleCancelLogo}>
                                                                            <img alt="example" style={{ width: '100%' }} src={previewImageLogo} />
                                                                        </Modal>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Form.Item>
                                                    </div>
                                                </div>
                                                <hr className="shop-form-hr" />
                                                <section className="row" style={{ padding: "20px", margin: "0" }}>
                                                    <div className="col-md-12" style={{ padding: '0px' }}>
                                                        <label htmlFor="sel1">Shop Banner</label>
                                                        <Form.Item>
                                                            {getFieldDecorator('banner', {
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please upload your Images!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <span>
                                                                    {this.state.coverPhotoSrc.length == 0 && <Dragger
                                                                        id="coverPhoto"
                                                                        name='file'
                                                                        action="//jsonplaceholder.typicode.com/posts/"
                                                                        onChange={this.onChangeCoverPhoto}>
                                                                        <p className="ant-upload-drag-icon">
                                                                            <Icon type="inbox" />
                                                                        </p>
                                                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                                        <p className="ant-upload-hint">Upload your shop banner. Support for a single or bulk upload.</p>
                                                                    </Dragger>}
                                                                    {this.state.coverPhotoSrc.length > 0 && <div>
                                                                        <img alt="example"
                                                                            src={this.state.coverPhotoSrc}
                                                                            style={{ height: '190px' }} />
                                                                    </div>}
                                                                </span>
                                                            )}
                                                        </Form.Item>
                                                    </div>
                                                    <div className="col-md-6">
                                                    </div>
                                                </section>
                                                <hr className="shop-form-hr" />
                                            </div>

                                            <section className="row" style={{ padding: "20px" }}>
                                                <div className="col-md-12">
                                                    <div className="col-md-6 col-sm-6">
                                                        <label htmlFor="sel1">Shop Grid(Potrait) Image</label>

                                                        <Form.Item style={{ width: '100%' }}>
                                                            {getFieldDecorator('gridImage', {
                                                                rules: [{
                                                                    required: true,
                                                                    message: 'Please upload your Images!',
                                                                    whitespace: true
                                                                }],
                                                            })(
                                                                <span style={{ width: '100%' }}>
                                                                    {this.state.bannerSrc.length == 0 && <Upload
                                                                        action="//jsonplaceholder.typicode.com/posts/"
                                                                        onPreview={this.handlePreview}
                                                                        onChange={this.onChangeBanner}
                                                                    >
                                                                        {gridImage}
                                                                    </Upload>}
                                                                    {this.state.bannerSrc.length > 0 && <div>
                                                                        <img alt="example"
                                                                            src={this.state.bannerSrc}
                                                                            className="shopcataloge" />
                                                                    </div>}
                                                                </span>
                                                            )}
                                                        </Form.Item>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <label htmlFor="sel1">Shop Grid Images</label>
                                                        <div className="row" style={{ padding: '0px' }}>
                                                            <div className="col-md-12">
                                                                <div className="col-md-6 col-sm-6 col-xs-6 clearfix" style={{ marginBottom: '20px' }}>


                                                                    <Form.Item>
                                                                        {getFieldDecorator('images', {
                                                                            rules: [{
                                                                                required: true,
                                                                                message: 'Please upload your Images!',
                                                                                whitespace: true
                                                                            }],
                                                                        })(
                                                                            <div>
                                                                                <Upload
                                                                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                                                    listType="picture-card"
                                                                                    fileList={fileList}
                                                                                    onPreview={this.handlePreview}
                                                                                    onChange={this.handleChange}
                                                                                >
                                                                                    {fileList.length > 3 ? null : uploadButton}
                                                                                </Upload>

                                                                            </div>
                                                                        )}
                                                                    </Form.Item>
                                                                </div>
                                                                <div className="col-md-6 col-sm-6 col-xs-6" style={{ marginBottom: '20px' }}>
                                                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                                                    </Modal>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                        </div>
                                    </div>
                                </div>

                                <div id="shoplocation">
                                    <div className="panel-body" style={{ border: "0" }}>
                                        <div className="panel panel-default">
                                            <div className="form-headings">
                                                <span className="fa fa-compass"
                                                    style={{
                                                        background: "linear-gradient(90deg, #D9A67E, #3C3C47)",
                                                        color: "white", fontSize: "22px", padding: "4px"
                                                    }}></span>
                                                <span className="margin_font_location">Location</span>
                                            </div>
                                            <div className="container" style={{ width: "100%" }}>
                                                <div className="row" style={{ padding: "20px", margin: "0" }}>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="sel1">Address</label>
                                                            <Form.Item>
                                                                {getFieldDecorator('shopAddress', {
                                                                    initialValue: this.state.shopAddress,
                                                                    rules: [{
                                                                        required: true,
                                                                        message: 'Please input your Address!',
                                                                        whitespace: true
                                                                    }],
                                                                })(
                                                                    <Input style={{ border: "0" }} />
                                                                )}
                                                            </Form.Item>
                                                        </div>
                                                    </div>

                                                    <hr className="location-hr" />

                                                </div>
                                                <div className="row" style={{ padding: "20px", margin: "0" }}>
                                                    <div className="col-md-7" style={{ display: 'grid' }}>
                                                        <label> City </label>
                                                        <Form.Item>
                                                            {getFieldDecorator('shopCity', {
                                                                initialValue: this.state.shopCity,
                                                                rules: [{
                                                                    type: 'array',
                                                                    required: true,
                                                                    message: 'Please select your City!'
                                                                }],
                                                            })(
                                                                <Cascader
                                                                    options={cities}
                                                                />
                                                            )}
                                                        </Form.Item>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <label> State </label>
                                                        <Form.Item>
                                                            {getFieldDecorator('shopState', {
                                                                initialValue: this.state.shopState,
                                                                rules: [{
                                                                    type: 'array',
                                                                    required: true,
                                                                    message: 'Please select your State!'
                                                                }],
                                                            })(
                                                                <Cascader
                                                                    options={states}
                                                                />
                                                            )}
                                                        </Form.Item>
                                                    </div>
                                                </div>
                                                <hr className="location-hr" />

                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="sel1">Email Address</label>
                                                            <Form.Item>
                                                                {getFieldDecorator('shopEmail', {
                                                                    initialValue: this.state.shopEmail,
                                                                    rules: [{
                                                                        required: true,
                                                                        message: 'Please input your Address!',
                                                                        whitespace: true
                                                                    }],
                                                                })(
                                                                    <Input style={{ border: "0" }} />
                                                                )}
                                                            </Form.Item>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="billing">
                                    <div className="panel-body" style={{ border: "0" }}>
                                        <div className="panel panel-default">
                                            <div className="form-headings">
                                                <span className="fa fa-university"
                                                    style={{
                                                        background: "linear-gradient(90deg, #D9A67E, #3C3C47)",
                                                        color: "white", fontSize: "15px", padding: "6px"
                                                    }}></span>
                                                <span className="margin_font_location">Billing</span>
                                            </div>
                                            <div className="container" style={{ width: '100%' }}>
                                                <section>
                                                    <div className="row" style={{ padding: '20px 20px 0 20px' }}>
                                                        <div className="col-md-12">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="sel1">Bank Name</label>
                                                                    <Form.Item style={{ margin: "0" }}>
                                                                        {getFieldDecorator('bankName', {
                                                                            initialValue: this.state.bankName,
                                                                            rules: [{
                                                                                required: true,
                                                                                message: 'Please input your bank name!',
                                                                                whitespace: true
                                                                            }],
                                                                        })(
                                                                            <Input style={{ border: "0" }} />
                                                                        )}
                                                                    </Form.Item>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="sel1">Account Title</label>
                                                                    <Form.Item style={{ margin: "0" }}>
                                                                        {getFieldDecorator('accountTitle', {
                                                                            initialValue: this.state.accountTitle,
                                                                            rules: [{
                                                                                required: true,
                                                                                message: 'Please input your Account Title!',
                                                                                whitespace: true
                                                                            }],
                                                                        })(
                                                                            <Input type="text" style={{ border: "0" }} />
                                                                        )}
                                                                    </Form.Item>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className="shop-form-hr" />
                                                    <div className='row'>
                                                        <div className="col-md-6">
                                                            <div className="row" style={{ padding: '0px' }}>
                                                                <div className="col-md-7" style={{ display: 'grid' }}>
                                                                    <label> I Bank </label>
                                                                    <Form.Item>
                                                                        {getFieldDecorator('ibank', {
                                                                            initialValue: this.state.ibank,
                                                                            rules: [{
                                                                                whitespace: true,
                                                                                required: true,
                                                                                message: 'Please select your i bank!'
                                                                            },
                                                                            { validator: this.validateNumber.bind(this) }]
                                                                        })(
                                                                            <Input />
                                                                        )}
                                                                    </Form.Item>
                                                                </div>
                                                                <div className="col-md-5">
                                                                    <label> Swift/Sort </label>
                                                                    <Form.Item>
                                                                        {getFieldDecorator('swift', {
                                                                            initialValue: this.state.swift,
                                                                            rules: [{
                                                                                whitespace: true,
                                                                                required: true,
                                                                                message: 'Please select your Swift/Sort!'
                                                                            },
                                                                            { validator: this.validateNumber.bind(this) }],
                                                                        })(
                                                                            <Input />
                                                                        )}
                                                                    </Form.Item>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="sel1">Bank Address</label>
                                                                <Form.Item>
                                                                    {getFieldDecorator('bankAddress', {
                                                                        initialValue: this.state.bankAddress,
                                                                        rules: [{
                                                                            required: true,
                                                                            message: 'Please input your Bank Address!',
                                                                            whitespace: true
                                                                        }],
                                                                    })(
                                                                        <Input type="text" className="form-control" />
                                                                    )}
                                                                </Form.Item>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row center_global row">
                                    {btnDisabeld ?
                                        <button
                                            disabled
                                            style={{ textAlign: 'center', width: "45%" }}
                                            className="btn button_custom">
                                            Submit Shop
                                </button>

                                        :
                                        <button
                                            style={{ textAlign: 'center', width: "45%" }}
                                            className="btn button_custom">
                                            Submit Shop
                            </button>
                                    }
                                </div>
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
                    </div>
                </div>


                <Footer />
            </div >
        )
    }
}

const WrappedBusinessForm = Form.create()(ShopForm);
export default WrappedBusinessForm;
