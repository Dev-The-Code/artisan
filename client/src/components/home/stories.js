import React, { Component } from 'react';
import './stories.css';
import SecondfoldCard from './secondfold_card';
import EcommerceProducts from './ecomerceproductdata';
import {HttpUtils} from '../../Services/HttpUtils';



class ArtisanStories extends Component{
    constructor(props){
        super(props)
        this.state={
            shopsData:[],
            content:[],
        }
    }
    
    componentDidMount(){
        this.shopss()
    }
    shopss =async()=>{
        let reqe = await HttpUtils.post('getShops');
        let content=[]
        console.log(content, 'reqest')
    }
    render(){
       
        return(
            <div className="container" style={{backgroundColor:"white", borderRadius:"5px", width:"99%", marginTop:"75px"}}>
                <div className="row">
                <div class="col-md-12">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="item active">
                        <div class="artisanstory1">
                            <div className="row" style={{padding:"51px 20px"}}>
                                <div className="col-md-3 col-sm-3">
                                    <div className="storyheading">
                                        <h4>Andrea di Michele</h4>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-9">
                                    <div className="storytext"> 
                                        <p>Andrea di Michele di Francesco de' Cioni, was an Italian painter, sculptor, and goldsmith who was 
                                            a master of an important workshop in Florence. He apparently became known as Verrocchio after the
                                             surname of his master, a goldsmith. Few paintings are 
                                            attributed to him with certainty, but a number of important painters were trained at his workshop. </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="bannertext">
                                        <img src="../images/sculpture.jpg" alt=""/>
                                    </div>
                                </div>              
                            </div>
                                
                            <div className="row" style={{padding:"0px 20px"}}>
                                <div className="col-md-3 col-sm-3">
                                        <div className="storyheading">
                                            <h4>Andrea di Michele Products</h4>
                                        </div>
                                </div>
                            </div>
                            <div>
                                <EcommerceProducts/>
                            </div>
                        </div>             
                    </div>
                    <div class="item">
                    <div class="artisanstory1">
                            <div className="row" style={{padding:"51px 20px"}}>
                                <div className="col-md-3 col-sm-3">
                                    <div className="storyheading">
                                        <h4>Michele</h4>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-9">
                                    <div className="storytext"> 
                                        <p>Andrea di Michele di Francesco de' Cioni, was an Italian painter, sculptor, and goldsmith who was 
                                            a master of an important workshop in Florence. He apparently became known as Verrocchio after the
                                             surname of his master, a goldsmith. Few paintings are 
                                            attributed to him with certainty, but a number of important painters were trained at his workshop. </p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="bannertext">
                                        <img src="../images/homepage/weaver-image.jpg" alt=""/>
                                    </div>
                                </div>              
                            </div>
                                
                            <div className="row" style={{padding:"0px 20px"}}>
                                <div className="col-md-3 col-sm-3">
                                        <div className="storyheading">
                                            <h4>Michele Products</h4>
                                        </div>
                                </div>
                            </div>
                            <div>
                                <EcommerceProducts/>
                            </div>
                        </div>   
                    </div>
                    <div class="item">


























                    <div class="artisanstory1">
                            <div className="row" style={{padding:"51px 20px"}}>
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
                                        <img src="../images/homepage/painter-image.jpg" alt=""/>
                                    </div>
                                </div>              
                            </div>
                                
                            <div className="row" style={{padding:"0px 20px"}}>
                                <div className="col-md-3 col-sm-3">
                                        <div className="storyheading">
                                            <h4>Andrea Products</h4>
                                        </div>
                                </div>
                            </div>
                            <div>
                                <EcommerceProducts/>
                            </div>
                        </div>   
                    </div>
                </div>
                <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span></a><a class="right carousel-control"
                        href="#carousel-example-generic" data-slide="next"><span class="glyphicon glyphicon-chevron-right">
                        </span></a>
            </div>
            {/* <div class="main-text hidden-xs">
                <div class="col-md-12 text-center">
                    <h1>
                        Static Headline And Content</h1>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>
                    <div class="">
                        <a class="btn btn-clear btn-sm btn-min-block" href="http://www.jquery2dotnet.com/">Login</a><a class="btn btn-clear btn-sm btn-min-block"
                            href="http://www.jquery2dotnet.com/">Registration</a></div>
                </div>
            </div> */}
        </div>
                </div>
            </div>

        )
    }
}

export default ArtisanStories;