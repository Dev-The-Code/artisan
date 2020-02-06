import React, { Component } from 'react';
import Eshopcard from '../ecommerce/EcomShopcard';
import {HttpUtils} from "../../Services/HttpUtils";
import FourEcom from './ecommercedetail/fourEcom';
import ProductCategories from './productCategories';
import { Tabs } from 'antd';
import EcommerceFiler from './ecommerce-filte';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }


let filterSubCategoryName = [];
let filterColorFamily = [];
let filterSizes=[];

class Ecomtabs extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: false,
            productsData: [],
            featureData: '',
            allData: true,
            ecomSerchValue: '',
            featuredCategories: true,
            noRecordFound: false,
            recordFound: true,
            loader: true,
            searchBy: '',
            checkRadioBtn: false,
            filteredData: [],
            notFoundFilterData: false,
            sizes:[],

            categoryofProduct: [],
            categoryProduct: [],
            color: [],
            colorsofProduct: [],
            sizesofProducts: [],

        }
    }
    
    async componentDidMount() {
        let res = await HttpUtils.get('getYourProduct');
        let featureData = [];
        if (res) {
          if (res.code == 200) {
            if (res.content.length >= 7) {
              for (var i = 0; i < 7; i++) {
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

      
      searcProduct = (e) => {
        const { allData } = this.state;
        this.setState({
          ecomSerchValue: e.target.value
        })
        if (e.target.value == '') {
          this.setState({
            productsData: allData,
            featuredCategories: true,
            noRecordFound: false,
            recordFound: true
          })
        }
      }

      searchProduct = async (e) => {
        const { ecomSerchValue, allData, searchBy } = this.state;
        e.preventDefault();
        let data;
        let res = await HttpUtils.get('getYourProduct');
        if (res) {
          if (res.code = 200) {
            data = res.content;
          }
        }
        let ecomSearchValue = ecomSerchValue.toLowerCase();
        let ecommreceFilterData = [];
        if (searchBy != '') {
          if (ecomSerchValue != '') {
            for (let i in data) {
              if (searchBy == 'product') {
                if (ecomSearchValue == data[i].product.toLowerCase()) {
                  ecommreceFilterData.push(data[i])
                }
              }
              else if (searchBy == 'shop') {
                if (ecomSearchValue == data[i].shopName.toLowerCase()) {
                  ecommreceFilterData.push(data[i])
                }
              }
            }
            if (ecommreceFilterData.length == 0) {
                this.setState({
                  recordFound: false,
                  noRecordFound: true,
                  featuredCategories: false,
                })
            }
            else {
                this.setState({
                  productsData: ecommreceFilterData,
                  featuredCategories: false,
                  recordFound: true,
                  noRecordFound: false,
                })
              }
            }
          }
          else {
            this.setState({
              checkRadioBtn: true
            })
          }
        }
        onAddMore = () => {
            const { allData } = this.state;
            this.setState({
              productsData: allData,
              featuredCategories: true,
              recordFound: true,
              noRecordFound: false
            })
          }

          onChange = e => {
            this.setState({
              searchBy: e.target.value,
              checkRadioBtn: false
            });
          };
           
         
         /*Color Filteration*/
          onChangeCheckBoxes = (value) => {
            this.setState({
                color: value
            })

            filterColorFamily = value;
            this.filterKeysGet();


        }


        onChangeSizes = (value) =>{
          this.setState({
            sizes: value
          })

          filterSizes = value;
          this.filterKeysGet();
          console.log(value, "sizes")
          
        }

          onChange = (value) => {
            let categoryValue = [];
            categoryValue.push(value[2]);
            // console.log(value, "get products value")
            this.setState({
                categoryProduct: categoryValue,
            })
            filterSubCategoryName = categoryValue
            this.filterKeysGet()
            // console.log(filterSubCategoryName, "categoryvalue")
        }

        filterKeysGet = () => {
            console.log("Get Products")
            let categoryofProduct = [];
            let colorsofProduct = [];
            let sizesofProducts =[];
            let filterKeys = [];

        if (filterSubCategoryName.length > 0) {
            filterKeys.push('category')
        }
        if (filterColorFamily.length > 0) {
          filterKeys.push('color')
        }
        if (filterSizes.length > 0) {
          filterKeys.push('sizes')
        }
        for (var i = 0; i < filterSubCategoryName.length; i++) {
            categoryofProduct.push(filterSubCategoryName[i])
        }
        for (var i = 0; i < filterColorFamily.length; i++) {
          colorsofProduct.push(filterColorFamily[i])
        }
        for (var i = 0; i < filterSizes.length; i++) {
          sizesofProducts.push(filterSizes[i])
        }
        this.setState({
            categoryofProduct: categoryofProduct,
            colorsofProduct: colorsofProduct,
            sizesofProducts: sizesofProducts
        })

        this.filterProductsData(filterKeys)
    }
       
    filterProductsData = (filterKeys) => {
        console.log("Get Products 2")
        if (filterKeys.length == 1) {
            this.filterDataWithOneKey(filterKeys);
        }
        else if (filterKeys.length == 2) {
          this.filterDataWithTwoKeys(filterKeys);
      }
      else if (filterKeys.length == 3) {
          this.filterDataWithThreeKeys(filterKeys);
      }
      else if (filterKeys.length == 4) {
          this.filterDataWithFourKeys(filterKeys)
      }
    }
    filterDataWithOneKey = (filterKeys) => {
        const { productsData } = this.state;
        let data;
        
        console.log(productsData, "get products values 2")
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
                return elem.sizes && filterSizes.includes(elem.sizes)
              })
            }
        }
        console.log(data, "Products data")
        if (data.length == 0) {
            this.setState({
                notFoundFilterData: true,
                filteredData: data,
                allData: false
            })
        }
        else {
            this.setState({
                notFoundFilterData: false,
                filteredData: data,
                allData: false
            })
        }
    }

    filterDataWithTwoKeys = (filterKeys) => {
      console.log("Filer data for two keys")
      const {productsData} = this.state;
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
                return elem.sizes && filterSizes.includes(elem.sizes)
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
              return elem.sizes && filterSizes.includes(elem.sizes)
            })
          }
          }
      } 
        if (filteredData.length == 0) {
          this.setState({
              notFoundFilterData: true,
              filteredData: filteredData,
              allData: false
          })
        }
        else {
            this.setState({
                notFoundFilterData: false,
                filteredData: filteredData,
                allData: false

            })
        }
    }

    filterDataWithTwoKeys = (filterKeys) => {
      console.log("Filer data for two keys")
      const {productsData} = this.state;
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
                return elem.sizes && filterSizes.includes(elem.sizes)
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
              return elem.sizes && filterSizes.includes(elem.sizes)
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
                return elem.sizes && filterSizes.includes(elem.sizes)
              })
            }
            }
      } 
        if (filteredData.length == 0) {
          this.setState({
              notFoundFilterData: true,
              filteredData: filteredData,
              allData: false
          })
        }
        else {
            this.setState({
                notFoundFilterData: false,
                filteredData: filteredData,
                allData: false

            })
        }
    }

    removeValue=(param, value) =>{
      let arr = [];
      if (param == "category") {
          filterSubCategoryName = arr
      }
      else if (param == "color") {
          filterColorFamily = arr
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
            billboardFilterdData: [],
            categoryProduct: [],
            statusValue: ''
        })
        this.filterKeysGet();
    
    }

    mainCategoryFilter = (param) => {
      const { productsData, filteredData } = this.state;
      let rangeValues = [];

      if (filteredData.length > 0) {
          for (var i = 0; i < filteredData.length; i++) {
              if (filteredData[i].category.toLowerCase() == param.toLowerCase()) {
                  rangeValues.push(filteredData[i])
              }
          }
          if (rangeValues.length == 0) {
              this.setState({
                  notFoundFilterData: true,
                  filteredData: rangeValues,
                  showRecord: false

              })
          }
          else {
              this.setState({
                  notFoundFilterData: false,
                  filteredData: rangeValues,
                  showRecord: false
              })
          }
      }
      else {
          for (var i = 0; i < productsData.length; i++) {
              if (productsData[i].category.toLowerCase() == param.toLowerCase()) {
                  rangeValues.push(productsData[i])
              }
          }

          if (rangeValues.length == 0) {
              this.setState({
                  notFoundFilterData: true,
                  filteredData: rangeValues,
                  showRecord: false
              })
          }
          else {
              this.setState({
                  notFoundFilterData: false,
                  filteredData: rangeValues,
                  showRecord: false
              })
          }
      }
  }


    render(){
        const { productsData, featureData, featuredCategories, noRecordFound, recordFound, loader, categoryofProduct, filteredData, notFoundFilterData, showAllProducts, allData, colorsofProduct } = this.state;
        return(
            <div className="">
                <Tabs defaultActiveKey="2" onChange={callback} style={{textAlign:"center"}}>
                    <TabPane tab="What you are looking for?" disabled key="1">
                        <div>

                        </div>
                    </TabPane>
                    <TabPane tab="All Products" key="2">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-3" style={{backgroundColor:"white", marginTop:"-1.4vw"}}>
                                    <Tabs defaultActiveKey="1" onChange={callback} style={{textAlign:"left"}}>
                                        <TabPane tab="Filters" key="1">
                                            <EcommerceFiler onChange={this.onChange} categoryofProduct={categoryofProduct} colorsofProduct={colorsofProduct} onChangeCheckBoxes={this.onChangeCheckBoxes} onChangeSizes={this.onChangeSizes}/>
                                        </TabPane>
                                        {/* <TabPane tab="Categories" key="2">
                                           <ProductCategories/>
                                        </TabPane> */}
                                    </Tabs>
                                </div>
                                <div className="col-md-9">
                                  {noRecordFound && <span style={{ textAlign: "center" }}><h1>Not found....</h1></span>}
                                  {noRecordFound && <span style={{ textAlign: "center" }}><h5>you can find your search by type</h5></span>}
                                  {noRecordFound && <div className="col-md-12" style={{ textAlign: "center" }}><button type="button" className="btn2 btn2-success" onClick={this.onAddMore}>Go Back</button></div>}
                                  {recordFound ?
                                     <Eshopcard productsData={productsData}filteredData={filteredData} notFoundFilterData={notFoundFilterData} categoryofProduct={categoryofProduct}
                                     colorsofProduct={colorsofProduct} allData={allData} removeValue={this.removeValue} />
                                    : null}   
                                </div>
                            </div>
                        </div>    
                    </TabPane>
                    {/* <TabPane tab="Shops" key="3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-3" style={{backgroundColor:"white", marginTop:"-1.4vw"}}>
                                    <Tabs defaultActiveKey="1" onChange={callback} style={{textAlign:"left"}}>
                                        <TabPane tab="Filters" key="1">
                                            <FourEcom/>
                                        </TabPane>
                                        <TabPane tab="Categories" key="2">
                                             <ProductCategories/>
                                        </TabPane>
                                    </Tabs>
                                </div>
                                <div className="col-md-9">
                                     <Eshopcard productsData={productsData}/>
                                </div>
                            </div>
                        </div>
                    </TabPane> */}
                </Tabs>
            </div>
        )
    }
}

export default Ecomtabs;