import React, { Component } from 'react';
import './productCarousel.css';


class productCarousel extends Component {
    render() {
        // {carousel && carousel.map((elem, key) => {
        //     <div className="col-md-4 col-sm-6">
        //         <div className="ecomshopcard">
        //             <div className="ecommerce-card" >
        //                 <img alt='img' src={elem.images[0]} />
        //             </div>
        //             <div className="">
        //                 <div className="pricing">
        //                     <h4 style={{ margin: "0", color: "#337AB7" }}>
        //                         {elem.price.number} {elem.price.currency}
        //                     </h4>
        //                 </div>
        //                 <div className="category">
        //                     <h4>
        //                         {elem.categories[0]}
        //                     </h4>
        //                 </div>
        //             </div>
        //             <div className="otherdetails">
        //                 <span><h3>{elem.product}</h3></span>
        //                 <span><h5>By:{elem.shopName}</h5></span>
        //                 <button className="shop-btn">Shop Now</button>
        //             </div>

        //         </div>
        //     </div>
        // })}

        return (
            <div className="carousel-reviews broun-block">
                <div className="container" style={{ width: "100%" }}>
                    <div className="row">
                        <div id="carousel-reviews" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="ecomshopcard">
                                            <div className="ecommerce-card" >
                                                <img alt='' src='./images/ecommerce/images (3).jpg' />
                                            </div>
                                            <div className="">
                                            <div className="pricing">
                                                <h4 style={{ margin: "0", color: "#337AB7" }}>5000$</h4>
                                            </div>
                                            <div className="category">
                                                <h4>
                                                    Clothing
                                                </h4>
                                            </div>
                                            </div>
                                            <div className="otherdetails">
                                            <span><h3>This is My PRoduct</h3></span>
                                            <span><h5>By:Shayan Mutahir</h5></span>
                                            <button className="shop-btn">Shop Now</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 hidden-xs">
                                        <div className="ecomshopcard">
                                            <div className="ecommerce-card" >
                                                <img alt='' src='./images/ecommerce/images (1).jpg' />
                                            </div>
                                            <div className="">
                                            <div className="pricing">
                                                <h4 style={{ margin: "0", color: "#337AB7" }}>5000$</h4>
                                            </div>
                                            <div className="category">
                                                <h4>
                                                    Clothing
                                                </h4>
                                            </div>
                                            </div>
                                            <div className="otherdetails">
                                            <span><h3>This is My PRoduct</h3></span>
                                            <span><h5>By:Shayan Mutahir</h5></span>
                                            <button className="shop-btn">Shop Now</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 hidden-sm hidden-xs">
                                        <div className="ecomshopcard">
                                            <div className="ecommerce-card" >
                                                <img alt='' src='./images/ecommerce/images (4).jpg' />
                                            </div>
                                            <div className="">
                                            <div className="pricing">
                                                <h4 style={{ margin: "0", color: "#337AB7" }}>5000$</h4>
                                            </div>
                                            <div className="category">
                                                <h4>
                                                    Clothing
                                                </h4>
                                            </div>
                                            </div>
                                            <div className="otherdetails">
                                            <span><h3>This is My PRoduct</h3></span>
                                            <span><h5>By:Shayan Mutahir</h5></span>
                                            <button className="shop-btn">Shop Now</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="ecomshopcard">
                                            <div className="ecommerce-card" >
                                                <img alt='' src='./images/ecommerce/images (5).jpg' />
                                            </div>
                                            <div className="">
                                            <div className="pricing">
                                                <h4 style={{ margin: "0", color: "#337AB7" }}>5000$</h4>
                                            </div>
                                            <div className="category">
                                                <h4>
                                                    Clothing
                                                </h4>
                                            </div>
                                            </div>
                                            <div className="otherdetails">
                                            <span><h3>This is My PRoduct</h3></span>
                                            <span><h5>By:Shayan Mutahir</h5></span>
                                            <button className="shop-btn">Shop Now</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 hidden-xs">
                                        <div className="ecomshopcard">
                                            <div className="ecommerce-card" >
                                                <img alt='' src='./images/ecommerce/images (3).jpg' />
                                            </div>
                                            <div className="">
                                            <div className="pricing">
                                                <h4 style={{ margin: "0", color: "#337AB7" }}>5000$</h4>
                                            </div>
                                            <div className="category">
                                                <h4>
                                                    Clothing
                                                </h4>
                                            </div>
                                            </div>
                                            <div className="otherdetails">
                                            <span><h3>This is My PRoduct</h3></span>
                                            <span><h5>By:Shayan Mutahir</h5></span>
                                            <button className="shop-btn">Shop Now</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 hidden-sm hidden-xs">
                                        <div className="ecomshopcard">
                                            <div className="ecommerce-card" >
                                                <img alt='' src='./images/ecommerce/images (8).jpg' />
                                            </div>
                                            <div className="">
                                            <div className="pricing">
                                                <h4 style={{ margin: "0", color: "#337AB7" }}>5000$</h4>
                                            </div>
                                            <div className="category">
                                                <h4>
                                                    Clothing
                                                </h4>
                                            </div>
                                            </div>
                                            <div className="otherdetails">
                                            <span><h3>This is My PRoduct</h3></span>
                                            <span><h5>By:Shayan Mutahir</h5></span>
                                            <button className="shop-btn">Shop Now</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <a class="left carousel-control" href="#carousel-reviews" role="button" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a class="right carousel-control" href="#carousel-reviews" role="button" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default productCarousel;