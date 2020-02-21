import React, { Component } from 'react';
import Eshopcard from '../ecommerce/EcomShopcard';
import ShopFilterTab from './shops/shopFilterTab';
import EcommerceFiler from './ecommerce-filte';
import ShopCards from './shops/shopsCards';
import { HttpUtils } from "../../Services/HttpUtils";
import { Tabs } from 'antd';
const { TabPane } = Tabs;


let filterSubCategoryName = [];
let filterColorFamily = [];
let filterSizes = [];

let filterShopCategory = [];
let filterShopLocation = [];

class Ecomtabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      productsData: [],
      colorsProduct: [],
      sizesProduct: [],
      filteredData: [],
      notFoundFilterData: false,
      showRecord: true,
      categoryProduct: [],
      categoryofProduct: [],
      colorsofProduct: [],
      sizesofProducts: [],

      shopsData: [],
      locationCitiesShops: [],
      shopCategory: [],
      shopLocation: [],
      showRecordShop: true,
      notFoundFilterDataShop: false,
      filteredDataShop: [],
      keysOfTabs: '2'
    }
  }

  // all proucts data & all Shops
  componentWillMount() {
    let data = this.props.data
    if (data) {
      this.setState({
        keysOfTabs: data.keyOfTab,
      })
    }
  }
  async componentDidMount() {

    let res = await HttpUtils.get('getYourProduct');
    if (res) {
      if (res.code == 200) {
        let colorsOfProducts = [];
        let sizesOfProducts = [];
        let products = res.content;
        for (var i = 0; i < products.length; i++) {
          let size = products[i].sizes;
          // const colors = products[i].color.charAt(0).toUpperCase() + products[i].color.substring(1);
          // if (colorsOfProducts.indexOf(colors) == -1) {
          //   colorsOfProducts.push(colors)
          // }
          for (var j = 0; j < size.length; j++) {
            const sizesOfTheProducts = size[j].charAt(0).toUpperCase() + size[j].substring(1);
            if (sizesOfProducts.indexOf(sizesOfTheProducts) == -1) {
              sizesOfProducts.push(sizesOfTheProducts)
            }
          }

        }
        this.setState({
          productsData: products,
          colorsProduct: colorsOfProducts,
          sizesProduct: sizesOfProducts,
        })
      }
    }
    this.getShops()

  }

  getShops = async () => {
    // get all shops & location of shops
    let shops = await HttpUtils.get('getShops');
    let locationCitiesShops = []
    if (shops) {
      if (shops.code == 200) {
        let shopsData = shops.content
        for (var i = 0; i < shopsData.length; i++) {
          const cities = shopsData[i].shopCity[0].charAt(0).toUpperCase() + shopsData[i].shopCity[0].substring(1);
          if (locationCitiesShops.indexOf(cities) == -1) {
            locationCitiesShops.push(cities)
          }
        }
        this.setState({
          shopsData: shops.content,
          locationCitiesShops: locationCitiesShops
        })
      }
      let data = this.props.data
      if (data) {
        this.setState({
          shopCategory: data.category
        })
        filterShopCategory = data.category
        this.filterKeysGetShops()
      }
    }
  }

  // onChange of products filter
  onChange = (value) => {
    let categoryValue = [];
    categoryValue.push(value[2]);
    this.setState({
      categoryProduct: value,
    })
    filterSubCategoryName = categoryValue
    this.filterKeysGet()
  }

  /*Color Filteration*/
  onChangeCheckBoxes = (value) => {
    filterColorFamily = value;
    this.filterKeysGet();
  }

  onChangeSizes = (value) => {
    filterSizes = value;
    this.filterKeysGet();
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
    const { productsData } = this.state;
    let data;
    for (var i = 0; i < filterKeys.length; i++) {
      if (filterKeys[i] == 'category') {
        data = productsData.filter((elem) => {
          return elem.categories[2] && filterSubCategoryName.includes(elem.categories[2])
        })
      }
      else if (filterKeys[i] == 'color') {
        data = productsData.filter((elem) => {
          return elem.color && filterColorFamily.includes(elem.color)
        })
      }
      else if (filterKeys[i] == 'sizes') {
        data = productsData.filter((elem) => {
          return elem.sizes[0] && filterSizes.includes(elem.sizes[0]) ||
            elem.sizes[1] && filterSizes.includes(elem.sizes[1]) ||
            elem.sizes[2] && filterSizes.includes(elem.sizes[2]) ||
            elem.sizes[3] && filterSizes.includes(elem.sizes[3]) ||
            elem.sizes[4] && filterSizes.includes(elem.sizes[4])
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


  filterDataWithTwoKeys = (filterKeys) => {
    const { productsData } = this.state;
    let data1;
    let filteredData;

    for (var i = 0; i < filterKeys.length; i++) {
      if (i == 0) {
        if (filterKeys[i] == 'category') {
          data1 = productsData.filter((elem) => {
            return elem.categories[2] && filterSubCategoryName.includes(elem.categories[2])
          })
        }
        else if (filterKeys[i] == 'color') {
          data1 = productsData.filter((elem) => {
            return elem.color && filterColorFamily.includes(elem.color)
          })
        }
        else if (filterKeys[i] == 'sizes') {
          data1 = productsData.filter((elem) => {
            return elem.sizes[0] && filterSizes.includes(elem.sizes[0]) ||
              elem.sizes[1] && filterSizes.includes(elem.sizes[1]) ||
              elem.sizes[2] && filterSizes.includes(elem.sizes[2]) ||
              elem.sizes[3] && filterSizes.includes(elem.sizes[3]) ||
              elem.sizes[4] && filterSizes.includes(elem.sizes[4])
          })
        }
      }
      if (i == 1) {
        if (filterKeys[i] == 'category') {
          filteredData = data1.filter((elem) => {
            return elem.categories[2] && filterSubCategoryName.includes(elem.categories[2])
          })
        }
        else if (filterKeys[i] == 'color') {
          filteredData = data1.filter((elem) => {
            return elem.color && filterColorFamily.includes(elem.color)
          })
        }
        else if (filterKeys[i] == 'sizes') {
          filteredData = data1.filter((elem) => {
            return elem.sizes[0] && filterSizes.includes(elem.sizes[0]) ||
              elem.sizes[1] && filterSizes.includes(elem.sizes[1]) ||
              elem.sizes[2] && filterSizes.includes(elem.sizes[2]) ||
              elem.sizes[3] && filterSizes.includes(elem.sizes[3]) ||
              elem.sizes[4] && filterSizes.includes(elem.sizes[4])
          })
        }
      }
    }

    if (filteredData.length == 0) {
      this.setState({
        notFoundFilterData: true,
        filteredData: filteredData,
        showRecord: false
      })
    }
    else {
      this.setState({
        notFoundFilterData: false,
        filteredData: filteredData,
        showRecord: false

      })
    }
  }


  filterDataWithThreeKeys = (filterKeys) => {
    const { productsData } = this.state
    let data1;
    let data2;
    let filteredData;

    for (var i = 0; i < filterKeys.length; i++) {
      if (i == 0) {
        if (filterKeys[i] == 'category') {
          data1 = productsData.filter((elem) => {
            return elem.categories[2] && filterSubCategoryName.includes(elem.categories[2])
          })
        }
        else if (filterKeys[i] == 'color') {
          data1 = productsData.filter((elem) => {
            return elem.color && filterColorFamily.includes(elem.color)
          })
        }
        else if (filterKeys[i] == 'sizes') {
          data1 = productsData.filter((elem) => {
            return elem.sizes[0] && filterSizes.includes(elem.sizes[0]) ||
              elem.sizes[1] && filterSizes.includes(elem.sizes[1]) ||
              elem.sizes[2] && filterSizes.includes(elem.sizes[2]) ||
              elem.sizes[3] && filterSizes.includes(elem.sizes[3]) ||
              elem.sizes[4] && filterSizes.includes(elem.sizes[4])
          })
        }
      }
      if (i == 1) {
        if (filterKeys[i] == 'category') {
          data2 = data1.filter((elem) => {
            return elem.categories[2] && filterSubCategoryName.includes(elem.categories[2])
          })
        }
        else if (filterKeys[i] == 'color') {
          data2 = data1.filter((elem) => {
            return elem.color && filterColorFamily.includes(elem.color)
          })
        }
        else if (filterKeys[i] == 'sizes') {
          data2 = data1.filter((elem) => {
            return elem.sizes[0] && filterSizes.includes(elem.sizes[0]) ||
              elem.sizes[1] && filterSizes.includes(elem.sizes[1]) ||
              elem.sizes[2] && filterSizes.includes(elem.sizes[2]) ||
              elem.sizes[3] && filterSizes.includes(elem.sizes[3]) ||
              elem.sizes[4] && filterSizes.includes(elem.sizes[4])
          })
        }
      }
      if (i == 2) {
        if (filterKeys[i] == 'category') {
          filteredData = data2.filter((elem) => {
            return elem.categories[2] && filterSubCategoryName.includes(elem.categories[2])
          })
        }
        else if (filterKeys[i] == 'color') {
          filteredData = data2.filter((elem) => {
            return elem.color && filterColorFamily.includes(elem.color)
          })
        }
        else if (filterKeys[i] == 'sizes') {
          filteredData = data2.filter((elem) => {
            return elem.sizes[0] && filterSizes.includes(elem.sizes[0]) ||
              elem.sizes[1] && filterSizes.includes(elem.sizes[1]) ||
              elem.sizes[2] && filterSizes.includes(elem.sizes[2]) ||
              elem.sizes[3] && filterSizes.includes(elem.sizes[3]) ||
              elem.sizes[4] && filterSizes.includes(elem.sizes[4])
          })
        }
      }
    }

    if (filteredData.length == 0) {
      this.setState({
        notFoundFilterData: true,
        filteredData: filteredData,
        showRecord: false
      })
    }
    else {
      this.setState({
        notFoundFilterData: false,
        filteredData: filteredData,
        showRecord: false

      })
    }
  }

  removeValue = (param, value) => {
    let arr = [];
    if (param == "category") {
      filterSubCategoryName = arr
      this.setState({
        categoryProduct: arr
      })
    }
    else if (param == "color") {
      let arr1 = [];
      for (var i = 0; i < filterColorFamily.length; i++) {
        if (filterColorFamily[i] != value) {
          arr1.push(filterColorFamily[i])
        }
      }
      filterColorFamily = arr1
    }
    else if (param == "sizes") {
      let arr1 = [];
      for (var i = 0; i < filterSizes.length; i++) {
        if (filterSizes[i] != value) {
          arr1.push(filterSizes[i])
        }
      }
      filterSizes = arr1
    }
    this.filterKeysGet();
    if (filterSubCategoryName.length == 0 && filterColorFamily.length == 0 && filterSizes.length == 0) {
      this.setState({
        showRecord: true,
        notFoundFilterData: false,
        filteredData: [],
      })
    }
    else {
      this.filterKeysGet();
    }

  }

  showAllProducts = () => {
    filterSubCategoryName = [];
    filterColorFamily = [];
    filterSizes = [];
    this.setState({
      showRecord: true,
      notFoundFilterData: false,
      categoryProduct: [],
    })
    this.filterKeysGet();

  }

  onChangeShop = (value) => {
    this.setState({
      shopCategory: value
    })
    filterShopCategory = value;
    this.filterKeysGetShops()

  }

  onChangeShopLocation = (value) => {
    filterShopLocation = value;
    this.filterKeysGetShops()
  }

  filterKeysGetShops = () => {
    console.log(filterShopCategory , 'filterKeysGetShops')
    let categoryOfShop = [];
    let locationOfShop = [];
    let filterKeys = [];

    if (filterShopCategory) {
      if (filterShopCategory.length > 0) {
        filterKeys.push('categoryShop')
      }
      for (var i = 0; i < filterShopCategory.length; i++) {
        categoryOfShop.push(filterShopCategory[i])
      }
    }
    if (filterShopLocation) {
      if (filterShopLocation.length > 0) {
        filterKeys.push('locationShop')
      }
      for (var i = 0; i < filterShopLocation.length; i++) {
        locationOfShop.push(filterShopLocation[i])
      }
    }
    this.setState({
      shopCategory: categoryOfShop,
      shopLocation: locationOfShop,
    })

    this.filterShopsData(filterKeys)

  }

  filterShopsData = (filterKeys) => {
    if (filterKeys.length == 1) {
      this.filterShopWithOneKey(filterKeys);
    }
    else if (filterKeys.length == 2) {
      this.filterShopWithTwoKeys(filterKeys);
    }
  }

  filterShopWithOneKey = (filterKeys) => {
    const { shopsData } = this.state;
    let data;
    for (var i = 0; i < filterKeys.length; i++) {
      if (filterKeys[i] == 'categoryShop') {
        data = shopsData.filter((elem) => {
          return elem.shopCategories[0] && filterShopCategory.includes(elem.shopCategories[0])
        })
      }
      else if (filterKeys[i] == 'locationShop') {
        data = shopsData.filter((elem) => {
          return elem.shopCity[0] && filterShopLocation.includes(elem.shopCity[0])
        })
      }
    }
    if (data.length == 0) {
      this.setState({
        notFoundFilterDataShop: true,
        filteredDataShop: data,
        showRecordShop: false
      })
    }
    else {
      this.setState({
        notFoundFilterDataShop: false,
        filteredDataShop: data,
        showRecordShop: false
      })
    }
  }

  filterShopWithTwoKeys = (filterKeys) => {
    const { shopsData } = this.state;
    let data1;
    let filteredData;

    for (var i = 0; i < filterKeys.length; i++) {
      if (i == 0) {
        if (filterKeys[i] == 'categoryShop') {
          data1 = shopsData.filter((elem) => {
            return elem.shopCategories[0] && filterShopCategory.includes(elem.shopCategories[0])
          })
        }
        else if (filterKeys[i] == 'locationShop') {
          data1 = shopsData.filter((elem) => {
            return elem.shopCity && filterShopLocation.includes(elem.shopCity)
          })
        }
      }
      if (i == 1) {
        if (filterKeys[i] == 'categoryShop') {
          filteredData = data1.filter((elem) => {
            return elem.shopCategories[0] && filterShopCategory.includes(elem.shopCategories[0])
          })
        }
        else if (filterKeys[i] == 'locationShop') {
          filteredData = data1.filter((elem) => {
            return elem.shopCity[0] && filterShopLocation.includes(elem.shopCity[0])
          })
        }
      }
    }

    if (filteredData.length == 0) {
      this.setState({
        notFoundFilterDataShop: true,
        filteredDataShop: filteredData,
        showRecordShop: false
      })
    }
    else {
      this.setState({
        notFoundFilterDataShop: false,
        filteredDataShop: filteredData,
        showRecordShop: false
      })
    }
  }

  removeValuesShops = (param, value) => {
    let arr = [];
    if (param == "categoryShop") {
      filterShopCategory = arr
      this.setState({
        shopCategory: arr
      })
    }
    else if (param == "locationShop") {
      let arr1 = [];
      for (var i = 0; i < filterShopLocation.length; i++) {
        if (filterShopLocation[i] != value) {
          arr1.push(filterShopLocation[i])
        }
      }
      filterShopLocation = arr1
    }
    this.filterKeysGetShops();
    if (filterShopCategory.length == 0 && filterShopLocation.length == 0) {
      this.setState({
        showRecordShop: true,
        notFoundFilterDataShop: false,
        filteredDataShop: [],
      })
    }
    else {
      this.filterKeysGetShops();
    }
  }

  showAllShops = () => {
    filterShopCategory = [];
    filterShopLocation = [];
    this.setState({
      showRecordShop: true,
      notFoundFilterDataShop: false,
      filteredDataShop: [],
    })
    this.filterKeysGetShops();
  }

  render() {
    const { productsData, filteredData, colorsProduct, sizesProduct, notFoundFilterData, showRecord,
      categoryofProduct, categoryProduct, colorsofProduct, sizesofProducts,
      shopsData, filteredDataShop, locationCitiesShops, shopCategory, shopLocation,
      showRecordShop, notFoundFilterDataShop, keysOfTabs } = this.state;

    return (
      <div className="">
        <Tabs defaultActiveKey={keysOfTabs} style={{ textAlign: "center" }}>
          <TabPane tab="What you are looking for?" disabled key="1">
            <div>
            </div>
          </TabPane>
          <TabPane tab="All Products" key="2">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-3" style={{ backgroundColor: "white", marginTop: "-1.4vw" }}>
                  <Tabs defaultActiveKey="1" style={{ textAlign: "left" }}>
                    <TabPane tab="Filters" key="1">
                      <EcommerceFiler
                        categoryProduct={categoryProduct} colorsofProduct={colorsofProduct}
                        sizesofProducts={sizesofProducts}
                        onChange={this.onChange} onChangeCheckBoxes={this.onChangeCheckBoxes}
                        onChangeSizes={this.onChangeSizes} />
                    </TabPane>
                  </Tabs>
                </div>
                <div className="col-md-9">
                  {/* {noRecordFound && <span style={{ textAlign: "center" }}><h1>Not found....</h1></span>}
                  {noRecordFound && <span style={{ textAlign: "center" }}><h5>you can find your search by type</h5></span>}
                  {noRecordFound && <div className="col-md-12" style={{ textAlign: "center" }}><button type="button" className="btn2 btn2-success" onClick={this.onAddMore}>Go Back</button></div>}
                  {recordFound ? */}
                  <Eshopcard productsData={productsData} filteredData={filteredData} notFoundFilterData={notFoundFilterData}
                    categoryofProduct={categoryofProduct} colorsofProduct={colorsofProduct} sizesofProducts={sizesofProducts}
                    showRecord={showRecord} removeValue={this.removeValue} showAllProducts={this.showAllProducts} />
                  {/* : null} */}
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Shops" key="3">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-3" style={{ backgroundColor: "white", marginTop: "-1.4vw" }}>
                  <Tabs defaultActiveKey="1" style={{ textAlign: "left" }}>
                    <TabPane tab="Filters" key="1">
                      <ShopFilterTab locationCitiesShops={locationCitiesShops}
                        onChangeShop={this.onChangeShop} onChangeShopLocation={this.onChangeShopLocation}
                        shopCategory={shopCategory} shopLocation={shopLocation} />
                    </TabPane>
                  </Tabs>
                </div>
                <div className="col-md-9">
                  <ShopCards shopsData={shopsData} filteredDataShop={filteredDataShop}
                    shopCategory={shopCategory} shopLocation={shopLocation}
                    removeValuesShops={this.removeValuesShops} showAllShops={this.showAllShops}
                    showRecordShop={showRecordShop} notFoundFilterDataShop={notFoundFilterDataShop} />
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Ecomtabs;