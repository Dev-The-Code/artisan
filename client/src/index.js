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
import ShopForm2 from './components/ecommerce/shops/ShopForm2'
import EcomProile from './components/ecommerce/EcommerceProfile/ecommerceProfile';
import OrderList from './components/ecommerce/shops/orderList';
import AdminScreen from './components/admin/adminScreen';

import { PrivateRoute } from './components/signin_seperate';


//css
import './app.css';
import HomePage from './components/home/homePage';

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
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/sigin" component={Signin}></Route>
        <Route exact path="/reset/:token" component={ResetPassword} />

        {/*==========Admin Screens==============*/}

        <Route path="/Admin" component={AdminScreen}> </Route>

        {/*============Ecommerce=============*/}
        <Route path="/explore_Market" component={EcommerceMarket}></Route>
        <Route path="/detail_ecommercedetail" component={EcomDetail}></Route>
        <Route path="/products_GridStyle" component={GridProducts}></Route>
        <Route path="/products_DetailStyle/:value" component={EproductDetails}></Route>
        <Route path="/Forms_Ecommerce" component={EcomForms}></Route>
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

      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
