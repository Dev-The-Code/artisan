import React, { Component } from 'react';
import { Link } from "react-router-dom";
import App from "../../App";
import Footer from '../footer/footer'
import Burgermenu from '../header/burgermenu';
import Slider from '../header/Slider';
import {HttpUtils} from "../../Services/HttpUtils";
import { connect } from 'react-redux';
import Form from '../form/mainpayment';
import NewsTab from './newsTab';
import BussinesCard from '../business/bussinessCard';

class Home1 extends Component{
    constructor(props) {
        super(props)
        this.state = {
            blogs: {}
        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.getAllBlogs()
    }

    async getAllBlogs(){
        const { dispatch, data } = this.props;
        this.setState({blogs: data !== undefined && data})
        let req = await HttpUtils.get('getblog');
        let blogData = req;
        dispatch({type: 'BLOGDATA', blogData})
        this.setState({blogs: req})
    }

    render(){
        const { blogs } = this.state;

        return(
            <div>
                <App/>
                <div className="row">
                    <div className="col-md-12">

                      <h4 style={{color:'black',marginLeft:'15px',fontSize:'22px',fontWeight:'bold',marginTop: '13px', fontFamily:'crimson'}}>Find what you need…</h4>
                      {/*<span><Form/></span>*/}
                    </div>
                </div>
                <div className="row" style={{marginTop:'-23px'}}>
                    <div className="col-md-12">
                        <div className="col-md-3 col-sm-4">
                            <div className="card outset" style={{boxShadow:'none',border: '1px solid rgba(128, 128, 128, 0.56)',background: 'white'}}>
                                <div className="card-body space tag1">
                                    <Link to={`/market_roommates`} style={{color: 'black'}}>
                                        <img alt='' src="./images/Rent room stockholm.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b className="tag1"> Room Renting</b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="card outset" style={{boxShadow:'none',border: '1px solid rgba(128, 128, 128, 0.56)',background: 'white'}}>
                                <div className="card-body space tag1">
                                    <Link to={`/market_business`} style={{color: 'black'}}>
                                        <img alt='' src="./images/busioness-listing.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b className="tag1"> Business Listing</b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="card outset" style={{boxShadow:'none',border: '1px solid rgba(128, 128, 128, 0.56)',background: 'white'}}>
                                <div className="card-body space tag1">
                                    <Link to={`/market_classified`} style={{color: 'black'}}>
                                        <img alt='' src="./images/Where to Buy Hero Image.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b className="tag1"> Buy & Sell </b>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4">
                            <div className="card outset" style={{boxShadow:'none',border: '1px solid rgba(128, 128, 128, 0.56)',background: 'white'}}>
                                <div className="card-body space tag1">
                                    <Link to={`/market_jobPortal`} style={{color: 'black'}}>
                                    <img alt='' src="./images/bg.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b style={{paddingLeft:'9px'}}>Jobs</b></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4" style={{marginTop:'30px'}}>
                            <div className="card outset" style={{boxShadow:'none',border: '1px solid rgba(128, 128, 128, 0.56)',background: 'white'}}>
                                <div className="card-body space tag1">
                                    <Link to={`/market_eventPortal`} style={{color: 'black'}}>
                                    <img alt='' src="./images/bg.jpg" height="82" width="95" style={{marginLeft: "-5px",marginTop: "-5px",marginBottom: "-5px"}} /><b style={{paddingLeft:'9px'}}>Events</b></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="col-md-4">
                            <br/>
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                        <div className="col-md-1" style={{marginTop: "25px"}}>
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                    </div>
                </div>
                <div className="row"> <br/></div>
                <div className="row" style={{marginTop:'-76px'}}>
                    <div className="col-md-5">
                        <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[0]}}>
                            <img alt='' src={blogs.blog && blogs.blog[0].main[0].image[0]} width="100%" height="350" />
                        </Link>
                        <h4> </h4>
                        {/*<h4 className="tag" style={{backgroundColor: "#008080",textAlign:"center"}}><b>Loram Ipsum </b></h4>*/}
                        <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[0]}}><h4><b>{blogs.blog && blogs.blog[0].main[0].maintitle}</b></h4></Link>
                        <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[0]}}><p style={{color:'gray'}}>{blogs.blog && blogs.blog[0].main[0].description.substring(0, 150) + " ..."}</p></Link>
                        <p style={{paddingTop: "21px"}}><b><span style={{marginRight: "67px"}}>By Simran</span>    <span>01.10.2018</span></b></p>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-5">
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[1]}}>
                                <img alt='' src={blogs.blog && blogs.blog[1].main[0].image[0]} width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-7" style={{paddingLeft: '15px'}}>
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[1]}}><h5><b>{blogs.blog && blogs.blog[1].mainheading}</b></h5></Link>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px",color:'Black'}}>By Shania</span>    <span style={{color:'black'}}>02.10.2018</span> <br/><br/></p>
                        </div>
                        <div className="col-md-5">
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[2]}}>
                                <img alt='' src={blogs.blog && blogs.blog[2].main[0].image[0]} width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-7" style={{paddingLeft: '15px'}}>
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[2]}}><h5><b>{blogs.blog && blogs.blog[2].mainheading}</b></h5></Link>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px"}}>By Simran</span>    <span>3.10.2018</span> <br/><br/></p>
                        </div>
                        <div className="col-md-5">
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[3]}}>
                                <img alt='' src={blogs.blog && blogs.blog[3].main[0].image[0]} width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-7" style={{paddingLeft: '15px'}}>
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[3]}}><h5><b>{blogs.blog && blogs.blog[3].mainheading}</b></h5></Link>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px"}}>By Shania</span>    <span>4.10.2018</span> <br/><br/></p>
                        </div>
                        <div className="col-md-5">
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[4]}}>
                                <img alt='' src={blogs.blog && blogs.blog[4].main[0].image[0]} width="130" height="120" />
                            </Link>
                        </div>
                        <div className="col-md-7" style={{paddingLeft: '15px'}}>
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[4]}}><h5><b>{blogs.blog && blogs.blog[4].mainheading}</b></h5></Link>
                            <p style={{paddingTop: "21px"}}><span style={{marginRight: "67px"}}>By Shania</span>    <span>5.10.2018</span> <br/><br/></p>
                        </div>
                    </div>
                    <div className="col-md-3" style={{marginTop:'-34px'}}>
                        <NewsTab />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="col-md-4">
                            <br/>
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                        <div className="col-md-1" style={{marginTop: "25px"}}>
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <br/>
                        <h4><b>Popular</b></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-8">
                            <div className="col-md-6">
                                <div className="col-md-4">
                                <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[5]}}>
                                    <img alt='' src={blogs.blog && blogs.blog[5].main[0].image[0]} width="120" height="110" />
                                </Link>
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '15px'}}>
                                    <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[5]}}><h5><b>{blogs.blog && blogs.blog[5].mainheading}</b></h5></Link>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Shania</span>    <span>5.10.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[6]}}>
                                        <img alt='' src={blogs.blog && blogs.blog[6].main[0].image[0]} width="120" height="110" />
                                        </Link>
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '15px'}}>
                                    <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[6]}}><h5><b>{blogs.blog && blogs.blog[6].mainheading}</b></h5></Link>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Shania</span>    <span>6.10.2018</span> <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[7]}}>
                                    <img alt='' src={blogs.blog && blogs.blog[7].main[0].image[0]} width="120" height="110" />
                                </Link>
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '15px'}}>
                                    <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[7]}}><h5><b>{blogs.blog && blogs.blog[7].mainheading}</b></h5></Link>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Simran</span>    <span>7.10.2018</span> <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[8]}}>
                                        <img alt='' src={blogs.blog && blogs.blog[8].main[0].image[0]} width="120" height="110" />
                                    </Link>
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '15px'}}>
                                    <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[8]}}><h5><b>{blogs.blog && blogs.blog[8].mainheading}</b></h5></Link>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Simran</span>    <span>8.10.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                    <Link to={{pathname:`/detail_blog`, state: blogs.blog && blogs.blog[9]}}>
                                    <img alt='' src={blogs.blog && blogs.blog[9].main[0].image[0]} width="120" height="110" />
                                    </Link>
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '15px'}}>
                                    <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[9]}}><h5><b>{blogs.blog && blogs.blog[9].mainheading} </b></h5></Link>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Shania</span>    <span>10.10.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="col-md-4">
                                <Link to={{pathname:`/detail_blog`, state: blogs.blog && blogs.blog[10]}}>
                                    <img alt='' src={blogs.blog && blogs.blog[10].main[0].image[0]} width="120" height="110" />
                                </Link>
                                </div>
                                <div className="col-md-8" style={{paddingLeft: '15px'}}>
                                    <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[10]}}><h5><b>{blogs.blog && blogs.blog[10].mainheading}</b></h5></Link>
                                    <br/>
                                    <p><span style={{marginRight: "67px"}}>By Simran</span>    <span>12.10.2018</span>  <br/><br/></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-3">
                            <Link to={{pathname:`/detail_blog`, state: blogs.blog && blogs.blog[11]}}><img alt='' src={blogs.blog && blogs.blog[11].main[0].image[0]} width="300" height="150" /></Link>
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[11]}}><h5 style={{marginTop:'10px'}}><b>{blogs.blog && blogs.blog[11].mainheading}</b></h5></Link>
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[12]}}><img alt='' src={blogs.blog && blogs.blog[12].main[0].image[0]} width="300" height="150" /></Link>
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[13]}}><h5 style={{marginTop:'10px'}}><b>{blogs.blog && blogs.blog[13].mainheading}</b></h5></Link>
                        </div>
                    </div>
                </div>
                <BussinesCard/>

                <div className="row">
                    <div className="col-md-10">
                        <div className="col-md-4">
                            <br/>
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                        <div className="col-md-1" style={{marginTop: "25px"}}>
                            <h3><b>Blog</b></h3>
                        </div>
                        <div className="col-md-5">
                            <br/>
                            <hr style={{border: '1px solid #80808080'}} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-8">
                            <div className="col-md-4">
                                <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[14]}}>
                                <img alt='' src={blogs.blog && blogs.blog[14].main[0].image[0]} width="250px" height="250" />
                                </Link>
                                <Link to={{pathname:`/detail_blog`,state: blogs.blog && blogs.blog[14]}}><h5><br/><b>{blogs.blog && blogs.blog[14].mainheading}</b></h5></Link>
                                <p>By Simran    15.10.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                                <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[15]}}><img alt='' src={blogs.blog && blogs.blog[15].main[0].image[0]} width="250px" height="250" /></Link>
                                <Link to={{pathname:`/detail_blog`,state: blogs.blog && blogs.blog[15]}}><h5><br/><b>{blogs.blog && blogs.blog[15].mainheading}</b></h5></Link>
                                <p>By Shania    16.10.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                               <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[16]}}> <img alt='' src={blogs.blog && blogs.blog[16].main[0].image[0]} width="250px" height="250" /></Link>
                                <Link to={{pathname:`/detail_blog`,state: blogs.blog && blogs.blog[16]}}><h5><br/><b>{blogs.blog && blogs.blog[16].mainheading}</b></h5></Link>
                                <p>By Simran    16.10.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                               <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[17]}}> <img alt='' src={blogs.blog && blogs.blog[17].main[0].image[0]} width="250px" height="250" /></Link>
                                <Link to={{pathname:`/detail_blog`,state: blogs.blog && blogs.blog[17]}}><h5><br/><b>{blogs.blog && blogs.blog[17].mainheading}</b></h5></Link>
                                <p>By shania    17.10.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                               <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[18]}}> <img alt='' src={blogs.blog && blogs.blog[18].main[0].image[0]} width="250px" height="250" /></Link>
                                <Link to={{pathname:`/detail_blog`,state: blogs.blog && blogs.blog[18]}}><h5><br/><b>{blogs.blog && blogs.blog[18].mainheading}</b></h5></Link>
                                <p>By Simran    18.10.2018 <br/><br/></p>
                            </div>
                            <div className="col-md-4">
                               <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[19]}}> <img alt='' src={blogs.blog && blogs.blog[19].main[0].image[0]} width="250px" height="250" /></Link>
                                <Link to={{pathname:`/detail_blog`,state: blogs.blog && blogs.blog[19]}}><h5><br/><b>{blogs.blog && blogs.blog[19].mainheading}</b></h5></Link>
                                <p>By Shania    18.10.2018 <br/></p>
                            </div>
                        </div>
                        <div className="col-md-1">
                        </div>
                        <div className="col-md-3">
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[21]}}><img alt='' src={blogs.blog && blogs.blog[21].main[0].image[0]} width="300" height="150" /></Link>
                            <Link to={{pathname:`/detail_blog`,state: blogs.blog && blogs.blog[21]}}><h5 style={{marginTop:'10px'}}><b>{blogs.blog && blogs.blog[21].mainheading}</b></h5></Link>
                            <Link to={{pathname: `/detail_blog`, state: blogs.blog && blogs.blog[20]}}><img alt='' src={blogs.blog && blogs.blog[20].main[0].image[0]} width="300" height="150" /></Link>
                            <Link to={{pathname:`/detail_blog`,state: blogs.blog && blogs.blog[20]}}><h5 style={{marginTop:'10px'}}><b>{blogs.blog && blogs.blog[20].mainheading}</b></h5></Link>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        data: state.blogData
    })
}

export default connect(mapStateToProps)(Home1);
