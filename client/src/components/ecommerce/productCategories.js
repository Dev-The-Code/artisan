import React, { Component } from 'react';
import './productCategories.css';


class ProductCategories extends Component{
    render(){
        return(
            <div className="">
                <div className="categoriescard">
                    <div className="">
                        <h1>
                            Electronics
                        </h1>
                    </div>
                </div>
                <div className="categoriescard2">
                    <div className="">
                        <h1>
                           Jwellery
                        </h1>
                    </div>
                </div>
                <div className="categoriescard3">
                    <div className="">
                        <h1>
                            Art & Craft
                        </h1>
                    </div>
                </div>
                <div className="categoriescard4">
                    <div className="">
                        <h1>
                            House Hold
                        </h1>
                    </div>
                </div>
            </div>
        )   
    }
}

export default ProductCategories;