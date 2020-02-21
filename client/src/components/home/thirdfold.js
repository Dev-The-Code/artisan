import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './thirdfold.css';

class ThirdFold extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryTabsValues: '',
            redirectExploreShop: false
        }
    }

    shopCategory(cat) {
        let category = []
        category.push(cat)
        let obj = {
            category: category,
            keyOfTab: '3'
        }
        this.setState({
            categoryTabsValues: obj,
            redirectExploreShop: true
        })
    }
    render() {
        const { categoryTabsValues, redirectExploreShop } = this.state;
        if (redirectExploreShop) {
            return <Redirect to={{ pathname: `explore_Market`, state: categoryTabsValues }} />;
        }
        return (
            <div className="container" style={{ width: "90%" }}>
                <div className="row hidden-xs" style={{ marginTop: '50px' }}>
                    <div className="col-md-8">
                        <div className="bannertext">
                            <p style={{ padding: '25px' }}>Masterpiece all youthful on, full-bodied wholesome quick, take zippy the tasty than natural. Outlasts great peppy generous, grand simply offer. Far why hearty, goodbye, leading can’t, splash formula brand know, reduced neat power jumbo</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-third">
                            <h2> Artisan Categories </h2>
                        </div>
                    </div>
                </div>

                <div className="row hidden-xs">
                    <div className="col-md-4" onClick={() => { this.shopCategory('Clothing') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/painter.jpg" alt="" className="image" style={{ borderRadius: '5px', cursor: "pointer" }}
                            />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}
                                >Clothing</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => { this.shopCategory('Bags & Puses') }}>
                        <div className="image-hover">
                            <img src='./images/artisans/clay.jpg' alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Bags & Puses</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => { this.shopCategory('Jwellery') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/embroidery.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Jwellery</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => { this.shopCategory('Shoes') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/weaver.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Shoes</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => { this.shopCategory('Decor') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/wood work.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Decor</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => { this.shopCategory('Gardening') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/wood work.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Gardening</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => { this.shopCategory('Pets') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/wood work.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Pets</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" onClick={() => { this.shopCategory('Furniture') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/wood work.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Furniture</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*For Mobile Phones*/}
                <div className="row visible-xs" style={{ marginTop: '50px' }}>
                    <div className="col-md-4">
                        <div className="text-third">
                            <h2> Artisan Categories </h2>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="bannertext">
                            <p style={{ padding: '25px' }}>Masterpiece all youthful on, full-bodied wholesome quick, take zippy the tasty than natural. Outlasts great peppy generous, grand simply offer. Far why hearty, goodbye, leading can’t, splash formula brand know, reduced neat power jumbo</p>
                        </div>
                    </div>
                </div>

                <div className="row visible-xs" style={{ marginTop: "25px" }}>
                    <div className="col-xs-12" onClick={() => { this.shopCategory('Clothing') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/painter.jpg" alt="" className="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Clothing</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12" onClick={() => { this.shopCategory('Bags & Puses') }}>
                        <div className="image-hover">
                            <img src='./images/artisans/clay.jpg' alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Bags & Puses</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12" onClick={() => { this.shopCategory('Jwellery') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/embroidery.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Jwellery</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12" onClick={() => { this.shopCategory('Shoes') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/weaver.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Shoes</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12" onClick={() => { this.shopCategory('Decor') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/wood work.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Decor</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12" onClick={() => { this.shopCategory('Gardening') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/wood work.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Gardening</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12" onClick={() => { this.shopCategory('Pets') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/wood work.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Pets</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12" onClick={() => { this.shopCategory('Furniture') }}>
                        <div className="image-hover">
                            <img src="./images/artisans/wood work.jpg" alt="" class="image" style={{ borderRadius: '5px', cursor: "pointer" }} />
                            <div className="middle">
                                <div className="image-text" style={{ cursor: "pointer" }}>Furniture</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThirdFold;