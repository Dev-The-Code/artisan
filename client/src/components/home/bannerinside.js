import React, { Component } from 'react';
import './homebanner.css';
import { Link } from "react-router-dom";
import { Select, Input, Icon } from 'antd';

const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class BannerInside extends Component{
 
    render(){
        return(
            <div className="container">
                        <div className="onbanner">
                        <h2>Discover great Artists</h2>
                        <h4>Find awesome jwellery, artifacts, sculpturs and many more</h4>
                            
                        </div>
                    </div>
        )
    }
}

export default BannerInside;