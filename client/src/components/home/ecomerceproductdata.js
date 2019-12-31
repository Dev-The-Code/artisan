import React, { Component } from 'react';
import './ecommercedata.css';
import Eshopcard from '../ecommerce/EcomShopcard';
import {HttpUtils} from "../../Services/HttpUtils";
import ExploreCards from '../ecommerce/explorecards';



class EcommerceProducts extends Component{
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
            <div className="container" style={{borderRadius:'5px', width:'100%', padding:'25px'}}>
            <div className="row">
            <div className="artisanproducts">
                
                <ExploreCards productsData={productsData} />
            </div>
        </div>
        </div>

 
        )
    }
}

export default EcommerceProducts;