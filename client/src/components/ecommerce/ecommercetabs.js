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

class Ecomtabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      productsData: [],
      filteredData: [],
      notFoundFilterData: false,
      showRecord: true,
      categoryProduct: [],
      categoryofProduct: [],
      colorsofProduct: [],
      sizesofProducts: [],


      shopsData: [],
      locationCitiesShops: []
    }
  }

  // all proucts data & all Shops

  async componentDidMount() {
    let res = await HttpUtils.get('getYourProduct');
    if (res) {
      if (res.code == 200) {
        this.setState({
          productsData: res.content,
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
          const cities = shopsData[i].shopCity.charAt(0).toUpperCase() + shopsData[i].shopCity.substring(1);
          if (locationCitiesShops.indexOf(cities) == -1) {
            locationCitiesShops.push(cities)
          }
        }
        this.setState({
          shopsData: shops.content,
          locationCitiesShops: locationCitiesShops
        })
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


  render() {
    const { productsData, filteredData, notFoundFilterData, showRecord,
      categoryofProduct, categoryProduct, colorsofProduct, sizesofProducts,
      shopsData, locationCitiesShops, } = this.state;
    return (
      <div className="">
        <Tabs defaultActiveKey="2" style={{ textAlign: "center" }}>
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
                    showRecord={showRecord} removeValue={this.removeValue} showAllProducts ={this.showAllProducts}/>
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
                      <ShopFilterTab locationCitiesShops={locationCitiesShops} />
                    </TabPane>
                  </Tabs>
                </div>
                <div className="col-md-9">
                  <ShopCards shopsData={shopsData} />
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