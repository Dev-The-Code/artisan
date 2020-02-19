import React, { Component } from 'react';
import './stories.css';
import EcommerceProducts from './ecomerceproductdata';
import { HttpUtils } from '../../Services/HttpUtils';



class ArtisanStories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profilesData: [],

        }
    }

    componentDidMount() {
        this.profilesData()
    }

    profilesData = async () => {
        let req = await HttpUtils.get('getprofiles')
        let profileUsersDataWithShops = [];
        let userShopsData;
        let userShops;
        if (req) {
            if (req.code === 200) {
                let profiles = req.content;
                for (var i = 0; i < profiles.length; i++) {
                    let obj = {
                        userId: profiles[i].user_id
                    }
                    let reqShopData = await HttpUtils.post('getShopById', obj)
                    if (reqShopData.code == 200) {
                        userShops = reqShopData.content;
                        userShopsData = {
                            profileData: profiles[i],
                            shopsData: userShops
                        }
                    }
                    profileUsersDataWithShops.push(userShopsData)
                }

            }
        }
        this.setState({
            profilesData: profileUsersDataWithShops
        })
    }
    render() {
        const { profilesData } = this.state;
        let profileUserCarosel;
        if (profilesData.length > 0) {
            profileUserCarosel = profilesData.map((elem, key) => {
                if (key == 0) {
                    return <div class="item active">
                        <div class="artisanstory1">
                            <div className="row" style={{ padding: "51px 20px" }}>
                                <div className="col-md-3 col-sm-3">
                                    <div className="storyheading">
                                        <h4>{elem.profileData.name}</h4>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-9">
                                    <div className="storytext">
                                        {elem.profileData.description ?
                                            <p>{elem.profileData.description}</p>
                                            :
                                            <p>This is new user and till now he didn't upload his story.
                                            </p>

                                        }
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="bannertext">
                                        {elem.profileData.imageurl ?
                                            <img src={elem.profileData.imageurl} alt="image" />
                                            :
                                            <img src="../images/images.jpg" alt="image" />
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="row" style={{ padding: "0px 20px" }}>
                                <div className="col-md-3 col-sm-3">
                                    <div className="storyheading">
                                        <h4>{elem.profileData.name} Shops</h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <EcommerceProducts shopsData={elem.shopsData} />
                            </div>
                        </div>
                    </div>
                }
                else {
                    return <div class="item">
                        <div class="artisanstory1">
                            <div className="row" style={{ padding: "51px 20px" }}>
                                <div className="col-md-3 col-sm-3">
                                    <div className="storyheading">
                                        <h4>{elem.profileData.name}</h4>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-9">
                                    <div className="storytext">
                                        {elem.profileData.description ?
                                            <p>{elem.profileData.description}</p>
                                            :
                                            <p>This is new user and till now he didn't upload his story.
                                            </p>

                                        }
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="bannertext">
                                        {elem.profileData.imageurl ?
                                            <img src={elem.profileData.imageurl} alt="image" />
                                            :
                                            <img src="../images/images.jpg" alt="image" />
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="row" style={{ padding: "0px 20px" }}>
                                <div className="col-md-3 col-sm-3">
                                    <div className="storyheading">
                                        <h4>{elem.profileData.name} Shops</h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <EcommerceProducts shopsData={elem.shopsData} />
                            </div>
                        </div>
                    </div>
                }
            })
        }
        return (
            <div className="container" style={{ backgroundColor: "white", borderRadius: "5px", width: "99%", marginTop: "75px" }}>
                <div className="row">
                    <div class="col-md-12">
                        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">

                                {profileUserCarosel}
                                {/* <div class="item">
                                    <div class="artisanstory1">
                                        <div className="row" style={{ padding: "51px 20px" }}>
                                            <div className="col-md-3 col-sm-3">
                                                <div className="storyheading">
                                                    <h4>Andrea</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-sm-9">
                                                <div className="storytext">
                                                    <p>Andrea Francesco de' Cioni, was an Italian painter, sculptor, and goldsmith who was
                                                        a master of an important workshop in Florence. He apparently became known as Verrocchio after the
                                                         surname of his master, a goldsmith. Few paintings are
                                            attributed to him with certainty, but a number of important painters were trained at his workshop. </p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-6">
                                                <div className="bannertext">
                                                    <img src="../images/homepage/painter-image.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row" style={{ padding: "0px 20px" }}>
                                            <div className="col-md-3 col-sm-3">
                                                <div className="storyheading">
                                                    <h4>Andrea Products</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <EcommerceProducts />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span></a><a class="right carousel-control"
                                    href="#carousel-example-generic" data-slide="next"><span class="glyphicon glyphicon-chevron-right">
                                </span></a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ArtisanStories;