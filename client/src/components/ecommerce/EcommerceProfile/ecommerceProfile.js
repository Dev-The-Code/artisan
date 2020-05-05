import React, { Component } from 'react';
import HeaderMenu from '../../header/headermenu';
import Footer from '../../footer/footer';
import './ecommerceProfile.css';
import { Redirect } from "react-router-dom";
import { isTablet } from 'react-device-detect';
import { Tabs } from 'antd';
import ProfileHome from './profileHome';
import ProfileProducts from './profileProducts';
import { HttpUtils } from "../../../Services/HttpUtils";

const { TabPane } = Tabs;

let filterSubCategoryName = [];
let filterColorFamily = [];
let filterSizes = [];
// let brandNameArr = [];
// let locationArr = [];
// let colorArr = [];

class EcomProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: '',
      shopId: '',
      shopEdit: false,
      addProduct: false,
      profileId: '',
      userId: '',
      addProductObj: {},
      allProducts: [],
      categories: [],
      color: [],
      location: [],
      brandName: [],
      filteredData: [],
      filterDataNotFound: false,
      filterDataShow: false,
      categoriesName: [],
      priceRangeNotGiven: false,
      oderList: false
    }
  }

  componentDidMount() {
    this.shops();
  }

  shops = async () => {
    let shopId = this.props.location.pathname.slice(18)
    let shopData = this.props.location.state;
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      this.setState({
        profileId: userData.profileId,
        userId: userData._id
      })
    }
    if (shopData) {
      this.setState({
        shopData: shopData,
        shopId: shopId,
      })

      this.getShopData(shopId)
    }

    else {
      let obj = {
        shopId: shopId
      }
      let reqShopData = await HttpUtils.post('getSpecificShopById', obj)

      if (reqShopData.code == 200) {
        this.setState({
          shopData: reqShopData.content[0],
          shopId: shopId,
        })
        this.getShopData(shopId)
      }
    }
  }

  getShopData = async (shopId) => {
    const { allProducts } = this.state;
    let obj = {
      shopIdForProduct: shopId
    }
    let reqShopData = await HttpUtils.post('getShopProducts', obj)
    console.log(reqShopData, 'reqShopData')
    if (reqShopData.code == 200) {
      let allProducts = reqShopData.content;
      this.setState({
        allProducts: allProducts,
        // categories: categoriesArr,
        // color: colorArr,
        // location: locationArr,
      })
    }
    if (allProducts.length > 0) {
      this.calculateRatingOfShop()
    }
  }

  calculateRatingOfShop = async () => {
    const { allProducts, shopId } = this.state;

    let numberOfProduct = 0;
    let totalPercantageOfShop = 0;
    let finalPercantageOfShop = 0;

    for (var i = 0; i < allProducts.length; i++) {
      if (allProducts[i].percantageOfProduct != undefined) {
        numberOfProduct = numberOfProduct + 1;
        totalPercantageOfShop = totalPercantageOfShop + allProducts[i].percantageOfProduct;
        finalPercantageOfShop = totalPercantageOfShop / numberOfProduct;
      }
    }

    finalPercantageOfShop = Math.round(finalPercantageOfShop);

    let obj = {
      objectId: shopId,
      percantageOfShop: finalPercantageOfShop,
    }

    let shopData = await HttpUtils.post('postshop', obj)
    this.setState({
      shopData: shopData.content[0]
    })
  }

  oderList = () => {
    this.setState({
      oderList: true
    })
  }

  editShop = () => {
    this.setState({
      shopEdit: true
    })
  }

  addProductOnShop = () => {
    const { shopId, shopData } = this.state;
    let addProductObj = {
      shopId: shopId,
      shopTitle: shopData.shopTitle
    }
    this.setState({
      addProduct: true,
      addProductObj: addProductObj
    })
  }



  //Collect the filtraion keys and values in seprate array for filtration
  onChange = (value) => {
    let categoryValue = [];
    categoryValue.push(value[2]);
    this.setState({
      categoryProduct: value,
    })
    filterSubCategoryName = categoryValue

    this.filterKeysGet()

    // let filterKey = [];
    // if (value.length == 0) {
    //   if (key == 'brand name') {
    //     brandNameArr = [];
    //   }
    //   else if (key == 'location') {
    //     locationArr = [];

    //   }
    //   else if (key == 'color') {
    //     colorArr = [];
    //   }
    // }
    //add filter values in the seprate arrays
    // if (key == 'categories') {
    //   categoriesArr = [];
    //   categoriesArr.push(value)
    // }
    // else if (key == 'brand name') {
    //   brandNameArr = [];
    //   for (var i = 0; i < value.length; i++) {
    //     brandNameArr.push(value[i])
    //   }
    // }
    // else if (key == 'location') {
    //   locationArr = [];
    //   for (var i = 0; i < value.length; i++) {
    //     locationArr.push(value[i])
    //   }
    // }
    // else if (key == 'color') {
    //   colorArr = [];
    //   for (var i = 0; i < value.length; i++) {
    //     colorArr.push(value[i])
    //   }
    // }


    // //keys of the filter in array
    // if (categoriesArr.length > 0) {
    //   filterKey.push('categories')
    // }
    // if (brandNameArr.length > 0) {
    //   filterKey.push('brand name')
    // }
    // if (colorArr.length > 0) {
    //   filterKey.push('color')
    // }
    // if (locationArr.length > 0) {
    //   filterKey.push('location')
    // }
    //call the function
    // this.pushFilterArrayData(filterKey)
  }
  
  filterKeysGet = () => {
    let categoryofProduct = [];
    let colorsofProduct = [];
    let sizesofProducts = [];
    let filterKeys = [];

    if (filterSubCategoryName) {
      if (filterSubCategoryName.length > 0) {
        filterKeys.push('category')
      }
      for (var i = 0; i < filterSubCategoryName.length; i++) {
        categoryofProduct.push(filterSubCategoryName[i])
      }
    }
    if (filterColorFamily) {
      if (filterColorFamily.length > 0) {
        filterKeys.push('color')
      }
      for (var i = 0; i < filterColorFamily.length; i++) {
        colorsofProduct.push(filterColorFamily[i])
      }
    }
    if (filterSizes) {
      if (filterSizes.length > 0) {
        filterKeys.push('sizes')
      }
      for (var i = 0; i < filterSizes.length; i++) {
        sizesofProducts.push(filterSizes[i])
      }
    }

    this.setState({
      categoryofProduct: categoryofProduct,
      colorsofProduct: colorsofProduct,
      sizesofProducts: sizesofProducts
    })

    this.filterProductsData(filterKeys)
  }

  filterProductsData = (filterKeys) => {
    if (filterKeys.length == 1) {
      this.filterDataWithOneKey(filterKeys);
    }
    else if (filterKeys.length == 2) {
      this.filterDataWithTwoKeys(filterKeys);
    }
    else if (filterKeys.length == 3) {
      this.filterDataWithThreeKeys(filterKeys);
    }
  }

  filterDataWithOneKey = (filterKeys) => {
    const { allProducts } = this.state;
    // console.log(filterKeys , 'filterKeys')
    let data;
    for (var i = 0; i < filterKeys.length; i++) {
      if (filterKeys[i] == 'category') {
        data = allProducts.filter((elem) => {
          return elem.categories[2] && filterSubCategoryName.includes(elem.categories[2])
        })
        // console.log(data ,'data')
      }
      else if (filterKeys[i] == 'color') {
        data = allProducts.filter((elem) => {
          return elem.color[0] && filterColorFamily.includes(elem.color[0]) ||
            elem.color[1] && filterColorFamily.includes(elem.color[1]) ||
            elem.color[2] && filterColorFamily.includes(elem.color[2]) ||
            elem.color[3] && filterColorFamily.includes(elem.color[3]) ||
            elem.color[4] && filterColorFamily.includes(elem.color[4]) ||
            elem.color[5] && filterColorFamily.includes(elem.color[5]) ||
            elem.color[6] && filterColorFamily.includes(elem.color[6]) ||
            elem.color[7] && filterColorFamily.includes(elem.color[7]) ||
            elem.color[8] && filterColorFamily.includes(elem.color[8]) ||
            elem.color[9] && filterColorFamily.includes(elem.color[9]) ||
            elem.color[10] && filterColorFamily.includes(elem.color[10]) ||
            elem.color[11] && filterColorFamily.includes(elem.color[11]) ||
            elem.color[12] && filterColorFamily.includes(elem.color[12]) ||
            elem.color[13] && filterColorFamily.includes(elem.color[13]) ||
            elem.color[14] && filterColorFamily.includes(elem.color[14]) ||
            elem.color[15] && filterColorFamily.includes(elem.color[15]) ||
            elem.color[16] && filterColorFamily.includes(elem.color[16]) ||
            elem.color[17] && filterColorFamily.includes(elem.color[17]) ||
            elem.color[18] && filterColorFamily.includes(elem.color[18]) ||
            elem.color[19] && filterColorFamily.includes(elem.color[19]) ||
            elem.color[20] && filterColorFamily.includes(elem.color[20]) ||
            elem.color[21] && filterColorFamily.includes(elem.color[21]) ||
            elem.color[22] && filterColorFamily.includes(elem.color[22]) ||
            elem.color[23] && filterColorFamily.includes(elem.color[23]) ||
            elem.color[24] && filterColorFamily.includes(elem.color[24]) ||
            elem.color[25] && filterColorFamily.includes(elem.color[25]) ||
            elem.color[26] && filterColorFamily.includes(elem.color[26]) ||
            elem.color[27] && filterColorFamily.includes(elem.color[27]) ||
            elem.color[28] && filterColorFamily.includes(elem.color[28]) ||
            elem.color[28] && filterColorFamily.includes(elem.color[29]) ||
            elem.color[28] && filterColorFamily.includes(elem.color[30]) ||
            elem.color[28] && filterColorFamily.includes(elem.color[31]) ||
            elem.color[28] && filterColorFamily.includes(elem.color[32]) ||
            elem.color[28] && filterColorFamily.includes(elem.color[33]) ||
            elem.color[28] && filterColorFamily.includes(elem.color[34]) ||
            elem.color[28] && filterColorFamily.includes(elem.color[35])
        })
      }
      else if (filterKeys[i] == 'sizes') {
        data = allProducts.filter((elem) => {
          return elem.sizes[0] && filterSizes.includes(elem.sizes[0]) ||
              elem.sizes[1] && filterSizes.includes(elem.sizes[1]) ||
              elem.sizes[2] && filterSizes.includes(elem.sizes[2]) ||
              elem.sizes[3] && filterSizes.includes(elem.sizes[3]) ||
              elem.sizes[4] && filterSizes.includes(elem.sizes[4]) ||
              elem.sizes[5] && filterSizes.includes(elem.sizes[5]) ||
              elem.sizes[6] && filterSizes.includes(elem.sizes[6]) ||
              elem.sizes[7] && filterSizes.includes(elem.sizes[7]) ||
              elem.sizes[8] && filterSizes.includes(elem.sizes[8]) ||
              elem.sizes[9] && filterSizes.includes(elem.sizes[9]) ||
              elem.sizes[10] && filterSizes.includes(elem.sizes[10]) ||
              elem.sizes[11] && filterSizes.includes(elem.sizes[11]) ||
              elem.sizes[12] && filterSizes.includes(elem.sizes[12]) ||
              elem.sizes[13] && filterSizes.includes(elem.sizes[13]) ||
              elem.sizes[14] && filterSizes.includes(elem.sizes[14]) ||
              elem.sizes[15] && filterSizes.includes(elem.sizes[15]) ||
              elem.sizes[16] && filterSizes.includes(elem.sizes[16]) ||
              elem.sizes[17] && filterSizes.includes(elem.sizes[17]) ||
              elem.sizes[18] && filterSizes.includes(elem.sizes[18]) ||
              elem.sizes[19] && filterSizes.includes(elem.sizes[19]) ||
              elem.sizes[20] && filterSizes.includes(elem.sizes[20]) ||
              elem.sizes[21] && filterSizes.includes(elem.sizes[21]) ||
              elem.sizes[22] && filterSizes.includes(elem.sizes[22]) ||
              elem.sizes[23] && filterSizes.includes(elem.sizes[23]) ||
              elem.sizes[24] && filterSizes.includes(elem.sizes[24]) ||
              elem.sizes[25] && filterSizes.includes(elem.sizes[25]) 
        })
      }
    }

    if (data.length == 0) {
      this.setState({
        notFoundFilterData: true,
        filteredData: data,
        showRecord: false
      })
    }
    else {
      this.setState({
        notFoundFilterData: false,
        filteredData: data,
        showRecord: false
      })
    }
  }


  // removeCategories = (key) => {
  //   if (key == 'categories') {
  //     categoriesArr = [];
  //     let arr = [];
  //     this.onChange("categoriess", arr)
  //   }
  // }



  // pushFilterArrayData = (filterKeysArr) => {


  //   //calls difrent function for diffrent with the filtaraion keys
  //   if (filterKeysArr.length == 1) {
  //     this.filterProductWithOneValue(filterKeysArr)
  //   }
  //   else if (filterKeysArr.length == 2) {
  //     this.filterProductWithTwoValue(filterKeysArr)

  //   }
  //   else if (filterKeysArr.length == 3) {
  //     this.filterProductWithThreeValue(filterKeysArr)

  //   }
  //   else if (filterKeysArr.length == 4) {
  //     this.filterProductWithFourValue(filterKeysArr)
  //   }
  //   else {
  //     let arr = [];
  //     this.setTheStateForFiltredValues(arr)
  //   }
  // }



  //filter by any one of the key
 
 
  // filterProductWithOneValue = (filterKeysArr) => {
  //   const { allProducts } = this.state;
  //   let filterFinalDataArr = [];

  //   if (filterKeysArr[0] == 'categories') {

  //     for (var i = 0; i < allProducts.length; i++) {
  //       if (allProducts[i].category[1].toLowerCase() == categoriesArr[0].toLowerCase()) {
  //         filterFinalDataArr.push(allProducts[i])
  //       }
  //     }
  //   }
  //   else if (filterKeysArr[0] == 'brand name') {
  //     for (var i = 0; i < brandNameArr.length; i++) {
  //       for (var j = 0; j < allProducts.length; j++) {
  //         if (allProducts[j].brandName.toLowerCase() == brandNameArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(allProducts[j])
  //         }
  //       }
  //     }
  //   }
  //   else if (filterKeysArr[0] == 'location') {
  //     for (var i = 0; i < locationArr.length; i++) {
  //       for (var j = 0; j < allProducts.length; j++) {
  //         if (allProducts[j].country.toLowerCase() == locationArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(allProducts[j])
  //         }
  //       }
  //     }
  //   }
  //   else if (filterKeysArr[0] == 'color') {
  //     for (var i = 0; i < colorArr.length; i++) {
  //       for (var j = 0; j < allProducts.length; j++) {
  //         if (allProducts[j].color.toLowerCase() == colorArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(allProducts[j])
  //         }
  //       }
  //     }
  //   }
  //   this.setTheStateForFiltredValues(filterFinalDataArr)

  // }

  // //filter by any two of the key
  // filterProductWithTwoValue = (filterKeysArr) => {
  //   const { allProducts } = this.state;
  //   let arr = [];
  //   let filterFinalDataArr = [];
  //   if (filterKeysArr[0] == 'categories' && filterKeysArr[1] == 'brand name') {

  //     for (var i = 0; i < allProducts.length; i++) {
  //       if (allProducts[i].category[1].toLowerCase() == categoriesArr[0].toLowerCase()) {
  //         arr.push(allProducts[i])
  //       }
  //     }
  //     for (var i = 0; i < brandNameArr.length; i++) {
  //       for (var j = 0; j < arr.length; j++) {
  //         if (arr[j].brandName.toLowerCase() == brandNameArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(arr[j])
  //         }
  //       }
  //     }

  //   }
  //   else if (filterKeysArr[0] == 'categories' && filterKeysArr[1] == 'color') {

  //     for (var i = 0; i < allProducts.length; i++) {
  //       if (allProducts[i].category[1].toLowerCase() == categoriesArr[0].toLowerCase()) {
  //         arr.push(allProducts[i])
  //       }
  //     }
  //     for (var i = 0; i < colorArr.length; i++) {
  //       for (var j = 0; j < arr.length; j++) {
  //         if (arr[j].color.toLowerCase() == colorArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(arr[j])
  //         }
  //       }
  //     }

  //   }
  //   else if (filterKeysArr[0] == 'categories' && filterKeysArr[1] == 'location') {

  //     for (var i = 0; i < allProducts.length; i++) {
  //       if (allProducts[i].category[1].toLowerCase() == categoriesArr[0].toLowerCase()) {
  //         arr.push(allProducts[i])
  //       }
  //     }
  //     for (var i = 0; i < locationArr.length; i++) {
  //       for (var j = 0; j < arr.length; j++) {
  //         if (arr[j].country.toLowerCase() == locationArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(arr[j])
  //         }
  //       }
  //     }

  //   }
  //   else if (filterKeysArr[0] == 'brand name' && filterKeysArr[1] == 'color') {

  //     for (var i = 0; i < brandNameArr.length; i++) {
  //       for (var j = 0; j < allProducts.length; j++) {
  //         if (allProducts[j].brandName.toLowerCase() == brandNameArr[i].toLowerCase()) {
  //           arr.push(allProducts[j])
  //         }
  //       }
  //     }
  //     for (var i = 0; i < colorArr.length; i++) {
  //       for (var j = 0; j < arr.length; j++) {
  //         if (arr[j].color.toLowerCase() == colorArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(arr[j])
  //         }
  //       }
  //     }

  //   }
  //   else if (filterKeysArr[0] == 'brand name' && filterKeysArr[1] == 'location') {

  //     for (var i = 0; i < brandNameArr.length; i++) {
  //       for (var j = 0; j < allProducts.length; j++) {
  //         if (allProducts[j].brandName.toLowerCase() == brandNameArr[i].toLowerCase()) {
  //           arr.push(allProducts[j])
  //         }
  //       }
  //     }
  //     for (var i = 0; i < locationArr.length; i++) {
  //       for (var j = 0; j < arr.length; j++) {
  //         if (arr[j].country.toLowerCase() == locationArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(arr[j])
  //         }
  //       }
  //     }

  //   }
  //   else if (filterKeysArr[0] == 'color' && filterKeysArr[1] == 'location') {

  //     for (var i = 0; i < colorArr.length; i++) {
  //       for (var j = 0; j < allProducts.length; j++) {
  //         if (allProducts[j].color.toLowerCase() == colorArr[i].toLowerCase()) {
  //           arr.push(allProducts[j])
  //         }
  //       }
  //     }
  //     for (var i = 0; i < locationArr.length; i++) {
  //       for (var j = 0; j < arr.length; j++) {
  //         if (arr[j].country.toLowerCase() == locationArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(arr[j])
  //         }
  //       }
  //     }

  //   }

  //   this.setTheStateForFiltredValues(filterFinalDataArr)

  // }

  // //filter by any three of the key
  // filterProductWithThreeValue = (filterKeysArr) => {
  //   const { allProducts } = this.state;
  //   let arr1 = [];
  //   let arr2 = [];
  //   let filterFinalDataArr = [];

  //   if (filterKeysArr[0] == "categories" && filterKeysArr[1] == "brand name" && filterKeysArr[2] == "color") {

  //     for (var i = 0; i < allProducts.length; i++) {
  //       if (allProducts[i].category[1].toLowerCase() == categoriesArr[0].toLowerCase()) {
  //         arr1.push(allProducts[i])
  //       }
  //     }
  //     for (var i = 0; i < brandNameArr.length; i++) {
  //       for (var j = 0; j < arr1.length; j++) {
  //         if (arr1[j].brandName.toLowerCase() == brandNameArr[i].toLowerCase()) {
  //           arr2.push(arr1[j])
  //         }
  //       }
  //     }
  //     for (var i = 0; i < colorArr.length; i++) {
  //       for (var j = 0; j < arr2.length; j++) {
  //         if (arr2[j].color.toLowerCase() == colorArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(arr2[j]);
  //         }
  //       }
  //     }

  //   }
  //   else if (filterKeysArr[0] == "categories" && filterKeysArr[1] == "color" && filterKeysArr[2] == "location") {

  //     for (var i = 0; i < allProducts.length; i++) {
  //       if (allProducts[i].category[1].toLowerCase() == categoriesArr[0].toLowerCase()) {
  //         arr1.push(allProducts[i])
  //       }
  //     }
  //     for (var i = 0; i < colorArr.length; i++) {
  //       for (var j = 0; j < arr1.length; j++) {
  //         if (arr1[j].color.toLowerCase() == colorArr[i].toLowerCase()) {
  //           arr2.push(arr1[j]);
  //         }
  //       }
  //     }
  //     for (var i = 0; i < locationArr.length; i++) {
  //       for (var j = 0; j < arr2.length; j++) {
  //         if (arr2[j].country.toLowerCase() == locationArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(arr2[j])
  //         }
  //       }
  //     }

  //   }
  //   else if (filterKeysArr[0] == "categories" && filterKeysArr[1] == "brand name" && filterKeysArr[2] == "location") {

  //     for (var i = 0; i < allProducts.length; i++) {
  //       if (allProducts[i].category[1].toLowerCase() == categoriesArr[0].toLowerCase()) {
  //         arr1.push(allProducts[i])
  //       }
  //     }
  //     for (var i = 0; i < brandNameArr.length; i++) {
  //       for (var j = 0; j < arr1.length; j++) {
  //         if (arr1[j].brandName.toLowerCase() == brandNameArr[i].toLowerCase()) {
  //           arr2.push(arr1[j])
  //         }
  //       }
  //     }
  //     for (var i = 0; i < locationArr.length; i++) {
  //       for (var j = 0; j < arr2.length; j++) {
  //         if (arr2[j].country.toLowerCase() == locationArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(arr2[j])
  //         }
  //       }
  //     }

  //   }
  //   else if (filterKeysArr[0] == "brand name" && filterKeysArr[1] == "color" && filterKeysArr[2] == "location") {
  //     for (var i = 0; i < brandNameArr.length; i++) {
  //       for (var j = 0; j < allProducts.length; j++) {
  //         if (allProducts[j].brandName.toLowerCase() == brandNameArr[i].toLowerCase()) {
  //           arr1.push(allProducts[j])
  //         }
  //       }
  //     }
  //     for (var i = 0; i < colorArr.length; i++) {
  //       for (var j = 0; j < arr1.length; j++) {
  //         if (arr1[j].color.toLowerCase() == colorArr[i].toLowerCase()) {

  //           arr2.push(arr1[j]);
  //         }
  //       }
  //     }
  //     for (var i = 0; i < locationArr.length; i++) {
  //       for (var j = 0; j < arr2.length; j++) {
  //         if (arr2[j].country.toLowerCase() == locationArr[i].toLowerCase()) {
  //           filterFinalDataArr.push(arr2[j])
  //         }
  //       }
  //     }
  //   }

  //   this.setTheStateForFiltredValues(filterFinalDataArr)

  // }

  // //filter by any four of the key
  // filterProductWithFourValue = (filterKeysArr) => {
  //   const { allProducts } = this.state;

  //   let arr1 = [];
  //   let arr2 = [];
  //   let arr3 = [];
  //   let filterFinalDataArr = [];

  //   for (var i = 0; i < allProducts.length; i++) {
  //     if (allProducts[i].category[1].toLowerCase() == categoriesArr[0].toLowerCase()) {
  //       arr1.push(allProducts[i])
  //     }
  //   }
  //   for (var i = 0; i < brandNameArr.length; i++) {
  //     for (var j = 0; j < arr1.length; j++) {
  //       if (arr1[j].brandName.toLowerCase() == brandNameArr[i].toLowerCase()) {
  //         arr2.push(arr1[j])
  //       }
  //     }
  //   }
  //   for (var i = 0; i < colorArr.length; i++) {
  //     for (var j = 0; j < arr2.length; j++) {
  //       if (arr2[j].color.toLowerCase() == colorArr[i].toLowerCase()) {
  //         arr3.push(arr2[j]);
  //       }
  //     }
  //   }
  //   for (var i = 0; i < locationArr.length; i++) {
  //     for (var j = 0; j < arr3.length; j++) {
  //       if (arr3[j].country.toLowerCase() == locationArr[i].toLowerCase()) {
  //         filterFinalDataArr.push(arr3[j])
  //       }
  //     }
  //   }

  //   this.setTheStateForFiltredValues(filterFinalDataArr)
  // }

  // setTheStateForFiltredValues = (filterFinalDataArr) => {
  //   if (filterFinalDataArr.length > 0) {
  //     this.setState({
  //       filteredData: filterFinalDataArr,
  //       filterDataShow: true,
  //       filterDataNotFound: false,
  //       categoriesName: categoriesArr
  //     })
  //   }
  //   else {
  //     this.setState({
  //       filteredData: filterFinalDataArr,
  //       filterDataNotFound: true,
  //       filterDataShow: true,
  //       categoriesName: categoriesArr
  //     })
  //   }

  //   if (categoriesArr.length == 0 && brandNameArr.length == 0 &&
  //     locationArr.length == 0 && colorArr.length == 0) {
  //     this.setState({
  //       filterDataShow: false,
  //       filterDataNotFound: false,
  //     })
  //   }
  // }

  // serachProductMinToMaxPrice = (minPrice, maxPrice) => {
  //   const { allProducts, filteredData } = this.state;
  //   let rangePriceFilterData = []
  //   if (minPrice == '' || maxPrice == '') {
  //     this.setState({
  //       priceRangeNotGiven: true
  //     })
  //   }
  //   else {
  //     if (filteredData.length > 0) {
  //       for (var i = 0; i < filteredData.length; i++) {
  //         if (filteredData[i].price >= minPrice && filteredData[i].price <= maxPrice) {
  //           rangePriceFilterData.push(filteredData[i])
  //         }
  //       }
  //     }
  //     else {
  //       for (var i = 0; i < allProducts.length; i++) {
  //         if (allProducts[i].price >= minPrice && allProducts[i].price <= maxPrice) {
  //           rangePriceFilterData.push(allProducts[i])
  //         }
  //       }
  //     }
  //     this.setState({
  //       priceRangeNotGiven: false,
  //       filteredData: rangePriceFilterData,
  //       filterDataShow: true,
  //       filterDataNotFound: false,
  //       categoriesName: categoriesArr
  //     })
  //   }
  // }

  render() {
    const { shopData, shopEdit, addProduct, profileId, addProductObj, allProducts, categories, color, location, brandName,
      filteredData, filterDataNotFound, filterDataShow, categoriesName, priceRangeNotGiven, oderList, shopId } = this.state;

    if (shopEdit) {
      return (
        <Redirect to={{ pathname: '/shopForm', state: shopData }} />
      )
    } else if (addProduct) {
      return (
        <Redirect to={{ pathname: '/Forms_Ecommerce', state: addProductObj }} />
      )
    }
    else if (oderList) {
      return (
        <Redirect to={{ pathname: `/oderList/${shopId}`, state: shopId }} />
      )
    }
    return (
      <div>
        <HeaderMenu />
        <div className="row jobdetail-page" style={{ marginTop: "100px" }}>
        </div>
        {shopData &&
          <div className>
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-6 col-sm-7">
                  <div className="row" style={{ padding: '0px' }}>
                    <div className="col-md-12">
                      <div className="col-md-2 col-sm-3 col-xs-3">
                        <div className="" style={{ borderRadius: '50px black' }}>
                          <img alt='' src={shopData.shopLogo} style={{ borderRadius: '50px !important' }} />
                        </div>
                      </div>
                      <div className="col-md-10 col-sm-9 col-xs-9">
                        <h2 style={isTablet ? { margin: "0", fontSize: '27px' } : { margin: '0', fontSize: '36px' }}>{shopData.shopTitle}</h2>
                        {shopData.percantageOfShop != undefined ?
                          <p>{`${shopData.percantageOfShop}% postive seller ratings`}</p>
                          :
                          <p>New Seller postive seller ratings</p>}
                      </div>
                    </div>
                  </div>
                </div>
                {shopData.profileId == profileId &&
                  <div className="col-md-6 col-sm-5">
                    <div className="col-md-3 col-sm-6 col-xs-6">
                      <div className="buttontoleft">
                        <button type="button" className="btn btn-sm btn-editprofile" style={{ width: "100%" }}
                          onClick={this.oderList}>
                          {/* Edit Home */}
                          <div className="font-style fontClolor">
                            Order List
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                      <div className="buttontoleft">
                        <button type="button" className="btn btn-sm btn-editprofile" style={{ width: "100%" }}
                          onClick={this.editShop}>
                          {/* Edit Home */}
                          <div className="font-style fontClolor">
                            Edit Home
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-6 col-xs-6">
                      <div className="buttontoleft">
                        <button type="button" className="btn btn-sm btn-editprofile" style={{ width: "100%" }}
                          onClick={this.addProductOnShop}>
                          {/* Add Product */}
                          <div className="font-style fontClolor">
                            Publish Your Product
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        }
        <div className="container" style={{ width: '98%' }}>
          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-md-12">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Home" key="1">
                  {
                    shopData && <ProfileHome shopData={shopData} allProducts={allProducts} />
                  }
                </TabPane>
                <TabPane tab="All Products" key="2">
                  <ProfileProducts allProducts={allProducts} categories={categories} color={color}
                    location={location} brandName={brandName} onChange={this.onChange} filteredData={filteredData}
                    filterDataNotFound={filterDataNotFound} filterDataShow={filterDataShow}
                    categoriesName={categoriesName} removeCategories={this.removeCategories}
                    serachProductMinToMaxPrice={this.serachProductMinToMaxPrice}
                    priceRangeNotGiven={priceRangeNotGiven} />
                </TabPane>
                <TabPane tab="Profile" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default EcomProfile;