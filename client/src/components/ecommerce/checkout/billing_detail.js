import React, { Component } from 'react';
import HeaderMenu from '../../header/headermenu';
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
    Table,
    Switch,
  } from 'antd';
import './billing-detail.css';

const { Option } = Select;

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }


class BillingDetail extends Component{
    render(){
        return(
            <div className="">
                

                <HeaderMenu/>
                    <div className="hidden-xs" style={{ width: "100%", height: "67px", marginTop: "3px" }}></div>

                    {/*================================post business form start============================*/}
                    <div className="hidden-sm" style={{ marginTop: '5%' }}></div>
                    <div className="visible-sm" style={{ marginTop: '5%' }}></div>
                <div>
                    <div className="container">
                        <div className="row">
                                <div className="col-md-8">
                                    <div className="Billing-detail">
                                        <div>
                                            <h3 style={{color:"black"}}>Delivery Option</h3>
                                        </div>
                                        <div className="row" style={{margin:"0"}}>
                                            <div className="col-md-6">
                                                <Form>
                                                    <div className="form-margin">
                                                        <Form.Item label="Full Name">
                                                            <Input className="border-class"  placeholder="Enter your first name and last name" style={{width:"100%"}}/>
                                                        </Form.Item>
                                                    </div>
                                                    <div className="form-margin">
                                                        <Form.Item label="Phone Number">
                                                            <Input className="border-class" placeholder="please enter your phone number" style={{width:"100%"}}/>
                                                        </Form.Item>
                                                    </div>
                                                </Form>
                                            </div>
                                            <div className="col-md-6">
                                                <Form>
                                                    <div  className="form-margin">
                                                        <Form.Item label="Province">
                                                            <Select
                                                                showSearch
                                                                style={{ width:'100%'}}
                                                                placeholder="Please choose your province"
                                                                optionFilterProp="children"
                                                                filterOption={(input, option) =>
                                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                                }
                                                            >
                                                                <Option value="Azad Kashmir">Azad Kashmir</Option>
                                                                <Option value="Balochistan">Balochistan</Option>
                                                                <Option value="Federally Administered Tribal Areas">Federally Administered Tribal Areas</Option>
                                                                <Option value="Gilgit-Balochistan">Gilgit-Balochistan</Option>
                                                                <Option value="Islamabad">Islamabad</Option>
                                                                <Option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</Option>
                                                                <Option value="Punjab">Punjab</Option>
                                                                <Option value="Sindh">Sindh</Option>
                                                            </Select>
                                                        </Form.Item>
                                                    </div>
                                                    {/*Cities*/}
                                                    <div  className="form-margin">
                                                        <Form.Item label="City">
                                                            <Select
                                                                showSearch
                                                                style={{ width: '100%' }}
                                                                placeholder="Please choose your city"
                                                                optionFilterProp="children"
                                                                filterOption={(input, option) =>
                                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                                }
                                                            >
                                                                <Option value="Azad Kashmir">Azad Kashmir</Option>
                                                                <Option value="Balochistan">Balochistan</Option>
                                                                <Option value="Federally Administered Tribal Areas">Federally Administered Tribal Areas</Option>
                                                                <Option value="Gilgit-Balochistan">Gilgit-Balochistan</Option>
                                                                <Option value="Islamabad">Islamabad</Option>
                                                                <Option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</Option>
                                                                <Option value="Punjab">Punjab</Option>
                                                                <Option value="Sindh">Sindh</Option>
                                                            </Select>
                                                        </Form.Item>
                                                    </div>
                                                    {/*Area*/}
                                                    <div  className="form-margin">
                                                        <Form.Item label="Area">
                                                            <Select
                                                                showSearch
                                                                style={{ width: '100%' }}
                                                                placeholder="Please choose your city"
                                                                optionFilterProp="children"
                                                                filterOption={(input, option) =>
                                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                                }
                                                            >
                                                                <Option value="Azad Kashmir">Azad Kashmir</Option>
                                                                <Option value="Balochistan">Balochistan</Option>
                                                                <Option value="Federally Administered Tribal Areas">Federally Administered Tribal Areas</Option>
                                                                <Option value="Gilgit-Balochistan">Gilgit-Balochistan</Option>
                                                                <Option value="Islamabad">Islamabad</Option>
                                                                <Option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</Option>
                                                                <Option value="Punjab">Punjab</Option>
                                                                <Option value="Sindh">Sindh</Option>
                                                            </Select>
                                                        </Form.Item>
                                                    </div>
                                                        {/*address*/}
                                                    <div  className="form-margin">
                                                        <Form.Item label="Address">
                                                            <Input placeholder="For example: House#123, Street#abc, ABC Road" style={{width:"100%"}}/>
                                                        </Form.Item>
                                                    </div>
                                                </Form>
                                                <div  className="form-margin">
                                                    <p>Select a label for effective delivery:</p>
                                                    <span>
                                                            <Button style={{width:"45%", marginRight:"5px"}}>
                                                                <span></span>
                                                                <span>Office</span>
                                                            </Button>
                                                    </span>
                                                    <span>
                                                            <Button style={{width:"45%", marginLeft:"5px"}}>
                                                                Home
                                                            </Button>
                                                    </span>
                                                </div>
                                                <div className="left-button">
                                                    <Button className="savebtn">
                                                        <span>Save</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="package">
                                        <div className="package-box">
                                            <div className="package-title-left">
                                                <span className="package-title-name">Package 1 of 1</span>
                                            </div>
                                            <div className="package-title-right">
                                                <span className="package-title-tips">shipped by</span>
                                                <span className="package-title-brand">Rana Mobile</span>
                                            </div>
                                        </div>
                                        <div style={{padding:"0 10px"}}>
                                                <p>Delivery Option</p>
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <img src="./images/ecommerce/41pa5T0NGKL._AC_US218_.jpg" />            
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p style={{color:"black"}}>N-1280 100% PTA Approved Calling,SMS,FM,Torch Light - Black</p>
                                                        <span>Shop Name</span><span>Color Family: Black</span>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <p>Rs. 550</p>
                                                        <s>Rs. 1000</s>
                                                        <p>45%</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <p style={{float:"right"}}>Qty: <strong>1</strong></p>
                                                        <div>
                                                            <button type="button" class="trashbtn btn-link btn-xs">
                                                                <span class="glyphicon glyphicon-trash"> </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="proceedbox">
                                        <div>
                                            <Button className="proceedPay">
                                                <span>Proceed to Pay</span>
                                            </Button>
                                            <div className="order-summary">
                                                <h3 style={{color:"black"}}>Order Summary</h3>
                                                <p>
                                                    <span>Subtotal (1 items)</span>
                                                    <span style={{float:"right", fontSize:"15px"}}><b>Rs. 4,999</b></span>
                                                </p>
                                                <p>
                                                    <span>Shipping Fee</span>
                                                    <span style={{float:"right", fontSize:"15px"}}><b>Rs. 99</b></span>
                                                </p>

                                                <p>
                                                    <span><b>Total</b></span>
                                                    <span className="total-price"><b>Rs. 5,099</b></span>
                                                </p>
                                            </div>
                                            <Button className="proceedPay">
                                                <span>Proceed to Pay</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BillingDetail;