import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';
import Favicon from 'react-favicon';

//component
import DetailBlog from './components/home/detail_blog';
import Privacy from './components/home/privacyPolicy';
import TermOfServices from './components/home/termsofservices';
import Signin from './components/signin_seperate/signin';
import ResetPassword from './components/signin_seperate/resetPassword';
import ProfileMain from './components/profile/profileMainpage';
import ProfileUser from './components/user_profile/profileUser';
import EcommerceMarket from './components/ecommerce/ecommerceMarket';
import EcomDetail from './components/ecommerce/ecommercedetail/ecommercedetailpage';
import GridProducts from './components/ecommerce/ecommercedetail/GridProducts';
import EproductDetails from './components/ecommerce/productdetail/EproductDetails';
import EcomForms from './components/ecommerce/EcomForms/EcomForms';
import AddProduct from './components/ecommerce/addProduct/addProduct';
import CheckOutPage from './components/ecommerce/checkOutPage';
import ShopForm from './components/ecommerce/shops/ShopForm'
import EcomProile from './components/ecommerce/EcommerceProfile/ecommerceProfile';
import OrderList from './components/ecommerce/shops/orderList';

import { PrivateRoute } from './components/signin_seperate';


// import HomePage from './components/home/homePage';
// import Postbusiness from './components/business/postBusiness';
// import JobPortal from './components/job_portal/postJob';
// import EventPortal from './components/events/eventPortal';
// import Postroommates from './components/roomrenting/postRoommates';
// import Postbuysell from './components/buy_sell/postBuysell';
// import DetailBuySell from './components/buy_sell/detail_buySell';
// import FilterBuySell from './components/buy_sell/filterBuySell';
// import DetailBusiness from './components/business/detail_business';
// import Roomrentingtwocontentarea from "./components/roomrenting/roomrenting2contentarea";
// import DetailRoommates from './components/roomrenting/detail_roomRent';
// import MarketBusiness from './components/business/marketBusiness';
// import MarketClassified from './components/buy_sell/marketClassified';
// import MarketRoommates from './components/roomrenting/MarketRoommates';
// import JobClassified from './components/job_portal/jobClassified';
// import MarketEvent from './components/events/marketEvent';
// import ApplyJob from './components/job_portal/applyJob';
// import JobDetail from './components/job_portal/jobDetail';
// import TicketDetail from './components/events/event_listing/TicketDetail';
// import BuyerDetail from './components/events/event_listing/BuyerDetail';
// import EventDetail from './components/events/EventDetail';
// import SeatMap from './components/events/Maps/index';

// import EntertainmentHome from './components/entertainment/entertainmenthome/EntertainmentHome';
// import EntCategory from './components/entertainment/entertainmentPages/EntCategory';
// import EntMusic from './components/entertainment/entertainmentPages/EntMusic';
// import MusicBrowse from './components/entertainment/EntDetailpages/MusicBrowse';
// import VideoBox from './components/entertainment/EntDetailpages/VideoBox';
// import UploadVideo from './components/entertainment/entertainmentPages/uploadVideo';


//css
import './app.css';

const initialState = {
  text: '',
  data: {},
  otherData: {},
  blogData: {},
  route: false
}

function reducer(state = initialState, action) {

  switch (action.type) {
    case 'SEARCHON':
      return { ...state, text: action.inputValue }
    case 'SEARCHOF':
      return { ...state, text: initialState.text }
    case 'FACEBOOKSIGNUP':
      return { ...state, data: action.data }
    case 'ANOTHERDATA':
      return { ...state, otherData: action.otherData }
    case 'BLOGDATA':
      return { ...state, blogData: action.blogData }
    case 'GOROUTE':
      return { ...state, route: action.route }
    default:
      return state;
  }
}

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <BrowserRouter>
      <div>
        <Favicon url="https://res.cloudinary.com/dxk0bmtei/image/upload/v1534159021/pakjazba_f3orb0.png" />
        <Route exact path="/" component={EcommerceMarket}></Route>
        <Route path="/sigin" component={Signin}></Route>
        <Route exact path="/reset/:token" component={ResetPassword} />


        {/*============Ecommerce=============*/}
        {/* <Route path="/market_ecommerceMarket" component={EcommerceMarket}></Route> */}
        <Route path="/detail_ecommercedetail" component={EcomDetail}></Route>
        <Route path="/products_GridStyle" component={GridProducts}></Route>
        <Route path="/products_DetailStyle/:value" component={EproductDetails}></Route>
        <Route path="/Forms_Ecommerce" component={EcomForms}></Route>
        <Route path="/Forms_addproduct" component={AddProduct}></Route>
        <Route path="/checkOutProduct" component={CheckOutPage}></Route>
        <PrivateRoute path="/shopForm" component={ShopForm}></PrivateRoute>
        <Route path="/EcommerceProfile/:value" component={EcomProile}></Route>
        <Route path="/oderList/:value" component={OrderList}></Route>

        {/*============Ecommerce=============*/}



        <Route path="/profile_user/:value" component={ProfileUser}></Route>
        <Route path="/profile_userDetail" component={ProfileUser}></Route>
        <Route path="/user_profile" component={ProfileMain}></Route>

        <Route path="/detail_blog" component={DetailBlog}></Route>
        <Route path="/privacypolicy" component={Privacy}></Route>
        <Route path="/termofservice" component={TermOfServices}></Route>

        {/* ============Room Renting============= */}
        {/* <PrivateRoute path="/postad_Roommates" component={Postroommates}></PrivateRoute>
        <Route path="/filter_roomRent" component={Roomrentingtwocontentarea}></Route>
        <Route path="/market_roommates" component={MarketRoommates}></Route>
        <Route path="/detail_roomRent" component={DetailRoommates}></Route> */}
        {/*============Room Renting End=============*/}

        {/*============Bussiness=============*/}
        {/* <PrivateRoute path="/postad_business" component={Postbusiness}></PrivateRoute>
        <Route path="/detail_business" component={DetailBusiness}></Route>
        <Route path="/market_business" component={MarketBusiness}></Route> */}
        {/*============Bussiness End=============*/}

        {/*============Buy And Sell start=============*/}
        {/* <PrivateRoute path="/postad_buysell" component={Postbuysell}></PrivateRoute>
        <Route path="/market_classified" component={MarketClassified}></Route>
        <Route path="/Buyer_Detailpage" component={BuyerDetail}></Route>
        <Route path="/detail_buySell" component={DetailBuySell}></Route>
        <Route path="/filter_buySell" component={FilterBuySell}></Route> */}
        {/*============Buy and Sell End=============*/}


        {/*============Job=============*/}
        {/* <PrivateRoute path="/postad_jobPortal" component={JobPortal}></PrivateRoute>
        <Route path="/market_jobPortal" component={JobClassified}></Route>
        <Route path="/detail_jobPortal" component={JobDetail}></Route>
        <Route path="/apply_forJob" component={ApplyJob}></Route> */}
        {/*============Job End=============*/}


        {/*============Events Start=============*/}
        {/* <PrivateRoute path="/postad_eventPortal" component={EventPortal}></PrivateRoute>
        <Route path="/market_eventPortal" component={MarketEvent}></Route>
        <Route path="/detail_eventPortal/:value" component={EventDetail}></Route>
        <Route path="/Ticket_eventPortals" component={TicketDetail}></Route>
        <Route path="/seat_map" component={SeatMap}></Route> */}
        {/*============Events Start=============*/}




        {/*=============Entertainment====================*/}
        {/* <Route path="/entertainment_Home" component={EntertainmentHome}></Route>
        <Route path="/entertainment_Category/:value" component={EntCategory}></Route>
        <Route path="/entertainment_music" component={EntMusic}></Route>
        <Route path="/entertainment_detail/:value" component={VideoBox}></Route>
        <Route path="/music_detail" component={MusicBrowse}></Route>
        <Route path="/UploadVideo" component={UploadVideo}></Route> */}
        {/*===============Entertainement end===============================*/}


        {/*<Route path="/detail_roomRent" component={DetailRoommates}></Route>
					<Route path="/market_business" component={MarketBusiness}></Route>
					<Route path="/market_classified" component={MarketClassified}></Route>
					<Route path="/market_roommates" component={MarketRoommates}></Route>
    				<Route path="/market_jobPortal" component={JobClassified}></Route>
			      	<Route path="/market_eventPortal" component={MarketEvent}></Route>
			        <Route path="/detail_eventPortal/:value" component={EventDetail}></Route>
			        <Route path="/Ticket_eventPortals" component={TicketDetail}></Route>
				    <Route path="/Buyer_Detailpage" component={BuyerDetail}></Route>
				    <Route path="/market_ecommerceMarket" component={EcommerceMarket}></Route>
				    <Route path="/detail_ecommercedetail" component={EcomDetail}></Route>*/}
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
