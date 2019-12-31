import React, { Component } from 'react';
import Eshopcard from '../ecommerce/EcomShopcard';
import {HttpUtils} from "../../Services/HttpUtils";
import FourEcom from './ecommercedetail/fourEcom';
import ProductCategories from './productCategories';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }

class Ecomtabs extends Component{
    constructor(props) {
        super(props);
        this.state = {
          productsData: '',
          featureData: '',
        };
    }
    
    async componentDidMount() {
        let res = await HttpUtils.get('getecommercedata');
        let featureData = [];
        if (res) {
          if (res.code == 200) {
            if (res.content.length >= 7) {
              for (var i = 0; i < 7; i++) {
                featureData.push(res.content[i])
              }
            }
            this.setState({
              productsData: res.content,
              featureData: featureData,
              allData: res.content,
              loader: false
            })
          }
        }
      }
    render(){
        const {productsData} = this.state
        return(
            <div className="">
                <Tabs defaultActiveKey="2" onChange={callback} style={{textAlign:"center"}}>
                    <TabPane tab="What you are looking for?" disabled key="1">
                        <div>

                        </div>
                    </TabPane>
                    <TabPane tab="All Products" key="2">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-3" style={{backgroundColor:"white", marginTop:"-1.4vw"}}>
                                    <Tabs defaultActiveKey="1" onChange={callback} style={{textAlign:"left"}}>
                                        <TabPane tab="Filters" key="1">
                                            <FourEcom/>
                                        </TabPane>
                                        <TabPane tab="Categories" key="2">
                                           <ProductCategories/>
                                        </TabPane>
                                    </Tabs>
                                </div>
                                <div className="col-md-9">
                                     <Eshopcard productsData={productsData}/>
                                </div>
                            </div>
                        </div>    
                    </TabPane>
                    <TabPane tab="Shops" key="3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-3" style={{backgroundColor:"white", marginTop:"-1.4vw"}}>
                                    <Tabs defaultActiveKey="1" onChange={callback} style={{textAlign:"left"}}>
                                        <TabPane tab="Filters" key="1">
                                            <FourEcom/>
                                        </TabPane>
                                        <TabPane tab="Categories" key="2">
                                             <ProductCategories/>
                                        </TabPane>
                                    </Tabs>
                                </div>
                                <div className="col-md-9">
                                     <Eshopcard productsData={productsData}/>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Ecomtabs;