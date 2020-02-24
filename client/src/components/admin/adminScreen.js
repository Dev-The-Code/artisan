import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './adminScreen.css';

  

class AdminScreen extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
  
    render(){
        const { getFieldDecorator } = this.props.form;

        return(
            <div className="container">
                <div className="background-pic">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        
                    </Form>
                </div>
            </div>
        )
    }
} 

const WrappedBusinessForm = Form.create()(AdminScreen);
export default WrappedBusinessForm;
