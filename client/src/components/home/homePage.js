import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../footer/footer';
import { Carousel,Icon } from 'antd';
import Burgermenu from '../header/burgermenu';
//import {HttpUtils} from "../../Services/HttpUtils";
import { connect } from 'react-redux';
import BannerHome from './bannerHome';
import SliderHome from './sliderHome';
import {HttpUtils} from "../../Services/HttpUtils";
import CarouselHome from './carouselHome';
import SecondfoldCard from './secondfold_card';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import './homePage.css';
import HomeBanner from './homebanner';
import HeaderMenu from '../header/headermenu';
import ThirdFold from './thirdfold';
import EcommerceProducts from './ecomerceproductdata';
import ArtisanStories from './stories';


class HomePage extends Component{
  constructor(props) {
      super(props);
      this.state = {
        productsData: '',
        roomRenting:[],
        buySell:[],
        jobPortal:[],
        event:[]
      };
      
  }

  async componentDidMount() {
    let res = await HttpUtils.get('getYourProduct');
    console.log(res , 'homepage')
    let featureData = [];
    if (res) {
      if (res.code == 200) {
        if (res.content.length >= 4) {
          for (var i = 0; i < 4; i++) {
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
//   componentDidMount(){
//       this.marketplace();
//   }

//   async marketplace(){
//       let req = await HttpUtils.get('marketplace');
//       if(req && req.code && req.code == 200){
//           let res = await HttpUtils.get('getreviews'),
//           business = [],
//           roomRenting = [];
//           if(res && res.code && res.code == 200) {
//               business = this.addingStarProp(req.business, res.content);
//               roomRenting = this.addingStarProp(req.roomrentsdata, res.content);
//           }
//           this.setState({
//               business,
//               buySell:req.busell,
//               roomRenting,
//               jobPortal:req.jobPortalData,
//               event:req.eventPortalData
//           })
//       }
//   }

//   addingStarProp(arrforLoop, rateArr){
//       return arrforLoop && arrforLoop.map((elem) => {
//           let rate = 0,
//               len = 0;
//           rateArr && rateArr.map((el) => {
//               if(elem._id == el.objid){
//                   rate += el.star ? +el.star : 0;
//                   len++
//               }
//           })
//           let star = rate / len;
//           if(rate > 0 && len > 0){
//               return {...elem, ...{star: star.toFixed(1)}};
//           }
//           return {...elem, ...{star: 0}};
//       });
//   }

  render(){
    const { business, roomRenting, buySell, jobPortal, event } = this.state

    return(
      <div className="">

                  <HeaderMenu/>

          <HomeBanner/>
            <div>
                <SecondfoldCard/>
                <ThirdFold/>
                <ArtisanStories/>
                <div className="productsheading" style={{marginTop:"50px"}}>
                    <h2>Artisan Featured Products</h2>
                    <EcommerceProducts/>
                </div>
                
         
            </div>
          <div className="container" style={isMobile && !isTablet ? {width: '100%', marginTop:'0'} : {width:"80%", marginTop:'70px'}}>
          </div>
          <Footer/>
      </div>
    )
  }
}

export default HomePage;
