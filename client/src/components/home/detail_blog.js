import React, { Component } from 'react';
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import Footer from '../footer/footer'
import {HttpUtils} from "../../Services/HttpUtils";
import moment from 'moment';
import NewsTab from './newsTab';
import AsyncStorage from "@callstack/async-storage/lib/index";

class DetailBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            review: [],
            userId : '',
            profileId: '',
            userImg: '',
            data: {}
        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
        let data = this.props.location.state;
        this.setState({data})
        this.getAllBlogs()
        this.handleLocalStorage()
        this.getAllReviews(data)
    }

    handleLocalStorage = () =>{
        AsyncStorage.getItem('user')
            .then((obj) => {
                let userObj = JSON.parse(obj)
                if(!!userObj) {
                    // this.getprofileData(userObj.profileId, userObj._id)
                    this.setState({
                        userId: userObj._id,
                        profileId: userObj.profileId,
                        userImg: userObj.userImage,
                        userName: userObj.name
                    })
                }
            })
    }
    
    async getAllReviews(data){
        var res = await HttpUtils.get('getBlogReviews');
        let review = []
        if(res.code === 200 && res.content){
            review = res.content.filter((elem) => elem.objId === data._id);
        }
        this.setState({review});
    }

    async getAllBlogs(){
        let req = await HttpUtils.get('getblog');
        this.setState({blogs: req})
    }

    changeVal(e){
        this.setState({comment: e.target.value})
    }

    async publishComment(){
        let { review, comment, userImg, userName, userId, data } = this.state;
        let obj = {
            written: moment().format('LL'),
            user: userName,
            comm: this.state.comment,
            userImg,
            objId: data._id,
            userId
        }
        let req = await HttpUtils.post('addBlogReviews', obj)
        if(req.code === 200){
            review.push(obj)
            this.getAllReviews(data);
            this.setState({review, comment: ''})
        }
    }

    render(){
        const { review, data, userId } = this.state;
        let bckImage = data.mainimage && !!data.mainimage.length ? (data.mainimage && data.mainimage) : (data.main && data.main[0].image[0]);

        return (
            <div>
                <div className ="" style={{"backgroundImage": 'url('+bckImage+')', backgroundSize: '1500px 500px', height: "370px", marginTop: "104px", marginLeft:"-66px"}}>
                    <div className="background-image">
                        <Burgermenu/>
                    </div>
                </div>
                <div className='row' style={{marginTop:'-11px'}}>
                    <div style={{marginTop: '20px'}} className="col-md-9 col-sm-12 col-xs-12">
                    {data.main && data.main.map((elem) => {
                        return (
                            <div className="row">
                                <h3><b>{elem.subtitle ? elem.subtitle : elem.maintitle}</b></h3>
                                <div className="col-md-6">
                                    <p>{elem.description}</p>
                                </div>
                                <div className="col-md-6">
                                    <img src={elem.image[0]} width="350" height="200"/>
                                </div>
                            </div>
                        )
                    })}
                        {/*<div className="col-md-12">
                            <br/>
                            <div className="b-head">
                                <h3><b>" Loram Ipsum Koram Poram, Loram Ipsum Koram Poram, Loram Ipsum Koram Poram "</b>
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <br/> <br/>
                            <h4>Loram Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram
                                Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum
                                Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam. Loram
                                Ipsum Koram Posam Loram Ipsum Koram Posam. </h4>
                        </div>*/}
                        {/*<div className="col-md-12">
                            <br/> <br/>
                            <div className="col-md-2">
                                <img src="../images/images.jpg" className="img-circle" width="100" height="100"/>
                            </div>
                            <div className="col-md-10">
                                <p>Written By</p>
                                <h3>Hills Estate</h3>
                                <hr/>
                                <p>Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam
                                    Loram Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam. Loram Ipsum
                                    Koram Posam Loram Ipsum Koram Posam.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <br/> <br/>
                            <div className="col-md-2">
                                <img src="../images/images.jpg" className="img-circle" width="100" height="100"/>
                            </div>
                            <div className="col-md-10">
                                <h3>Hills Estate</h3>
                                <p>14.09.2018</p>
                                <p>Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam
                                    Loram Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam. Loram Ipsum
                                    Koram Posam Loram Ipsum Koram Posam.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <br/>
                            <hr/>
                        </div>
                        <div className="col-md-12">
                            <br/> <br/>
                            <div className="col-md-2">
                                <img src="../images/images.jpg" className="img-circle" width="100" height="100"/>
                            </div>
                            <div className="col-md-10">
                                <h3>Hills Estate</h3>
                                <p>14.09.2018</p>
                                <p>Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam
                                    Loram Ipsum Koram Posam Loram Ipsum Koram Posam Loram Ipsum Koram Posam. Loram Ipsum
                                    Koram Posam Loram Ipsum Koram Posam.</p>
                            </div>
                        </div>*/}
                        <hr/>
                        {review && review.map((elem) => {
                            return(
                                <div className="col-md-12">
                                    <br/> <br/>
                                    <div className="col-md-2">
                                        <img src={elem.userImg ? elem.userImg : "../images/images.jpg"} className="img-circle" width="100" height="100"/>
                                    </div>
                                    <div className="col-md-10">
                                        <h3>{elem.user}</h3>
                                        <p>{elem.written}</p>
                                        <p>{elem.comm}</p>
                                        <hr/>
                                    </div>
                                </div>
                            )
                        })}
                        {userId && <div className="col-md-12">
                            <br/><br/>
                            <div className="col-md-4">
                                <hr/>
                            </div>
                            <div className="col-md-3 text-center"><h4><b>Leave A Reply</b></h4></div>
                            <div className="col-md-5">
                                <hr/>
                            </div>
                        </div>}
                        {userId && <div className="col-md-12">
                            <div style={{border:'1px solid gray'}}>
                                <div className="card-body space tag1 bspace">
                                    <br/><br/>
                                    <textarea cols="80" rows="5" value={this.state.comment} placeholder="Enter Your Comment..." onChange={this.changeVal.bind(this)} style={{marginLeft: "21px",paddingLeft: "13px",width:'95%'}}> </textarea>
                                    <br/><br/>
                                    <button className="btn" onClick={this.publishComment.bind(this)} style={{marginLeft: "21px",backgroundColor:"#008080",color: "white"}}>Publish</button>
                                    <br/><br/>
                                </div>
                            </div>
                        </div>}
                        <div className="col-md-12">
                            <br/><br/>
                            <div className="col-md-4">
                                <hr/>
                            </div>
                            <div className="col-md-3 text-center"><h4><b>More Blog</b></h4></div>
                            <div className="col-md-5">
                                <hr/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="col-md-4">
                                <img src="./images/shutterstock_536667610.jpg" width="250px" height="200"/>
                                <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate 13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img src="./images/blog1.jpg" width="250px" height="200"/>
                                <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate 13.09.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <img src="./images/black.jpg" width="250px" height="200"/>
                                <h5><b>Loram Ipsum, Loram Ipsum, Loram Ipsum </b></h5>
                                <p>By Hills Estate 13.09.2018 <br/><br/></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-xs-12">
                        <NewsTab />
                        <br/><br/>
                        <h3><b>Popular</b></h3>
                        <br/><br/><br/>
                        <img src="./images/shutterstock_536667610.jpg" width="300" height="250"/>
                        <br/><br/><br/>
                        <img src="./images/blog1.jpg" width="300" height="250"/>
                        <br/><br/><br/>
                        <img src="./images/black.jpg" width="300" height="250"/>
                        <br/><br/>
                        <h3><b> MostPopular</b></h3>
                        <br/><br/><br/>
                        <img src="./images/black.jpg" width="300" height="250"/>
                        <br/><br/><br/>
                        <img src="./images/shutterstock_536667610.jpg" width="300" height="250"/>
                        <br/><br/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default (DetailBlog);