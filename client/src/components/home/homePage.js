import React, { Component } from 'react';
import Footer from '../footer/footer';
import { isMobile, isTablet } from 'react-device-detect';
import './homePage.css';
import HomeBanner from './homebanner';
import HeaderMenu from '../header/headermenu';
import ArtisanStories from './stories';
import ProductCarousel from './productCarousel';
import { HttpUtils } from "../../Services/HttpUtils";
import moment from 'moment'
import HomeCarouselProduct from './carouselHomeProduct';
import CarouselHomeShop from './carouselHomeShop';
import SecondfoldCard from './secondfold_card';
import ThirdFold from './thirdfold';
import EcommerceProducts from './ecomerceproductdata';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeksProduct: [],
      weekShops: []
    };

  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    let weeksProduct = [];
    let weekShops = [];

    let res = await HttpUtils.get('getYourProduct');
    let data = res.content;
    let resposeShop = await HttpUtils.get('getShops');
    let resposeShopData = resposeShop.content;
    if (data) {
      let dayCount = 7;
      var toDate = new Date();
      for (var i = dayCount; i = dayCount; i--) {
        var sevenDaysAgo = moment().subtract(dayCount, 'days').toDate()
        var dayOfMonthAgo = sevenDaysAgo.getDate();
        var monthNoOfYear = sevenDaysAgo.getMonth() + 1;
        var yearNo = sevenDaysAgo.getFullYear();
        dayCount--;
        for (var j = 0; j < data.length; j++) {
          if (dayOfMonthAgo == data[j].dayOfMonth && monthNoOfYear == data[j].monthNo &&
            yearNo == data[j].yearCount) {
            weeksProduct.push(data[j])
          }
        }
        for (var k = 0; k < resposeShopData.length; k++) {
          if (dayOfMonthAgo == resposeShopData[k].dayOfMonth && monthNoOfYear == resposeShopData[k].monthNo &&
            yearNo == resposeShopData[k].yearCount) {
            weekShops.push(resposeShopData[k])
          }
        }
      }
    }
    this.setState({
      weeksProduct: weeksProduct,
      weekShops: weekShops
    })
  }

  render() {
    const { weeksProduct, weekShops } = this.state;
    return (
      <div className="">
        <HeaderMenu />
        <HomeBanner />
        <div>
          {/* <SecondfoldCard /> */}
          {/* <ThirdFold /> */}
          <div className="container" style={isMobile && !isTablet ?
            { width: '100%', marginTop: '0' } :
            { width: "80%", marginTop: '70px' }}>
            <h3>Best Selling Product</h3>
            <ProductCarousel />

          </div>
          <div className="container" style={isMobile && !isTablet ? { width: '100%', marginTop: '0' } : { width: "80%", marginTop: '70px' }}>
            <h3>Best Sellers</h3>
            <ProductCarousel />
          </div>


          <ArtisanStories />

          {/* <div className="productsheading" style={{ marginTop: "50px" }}>
            <h2>Artisan Featured Products</h2>
            <EcommerceProducts />
          </div> */}
          <div className="container" style={isMobile && !isTablet ? { width: '100%', marginTop: '0' } : { width: "80%", marginTop: '70px' }}>
            <h3>New Products</h3>
            <HomeCarouselProduct data={weeksProduct} />
          </div>
        </div>

        <div className="container" style={isMobile && !isTablet ? { width: '100%', marginTop: '0' } : { width: "80%", marginTop: '70px' }}>
          <h3>New Sellers</h3>
          <CarouselHomeShop data={weekShops} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default HomePage;
