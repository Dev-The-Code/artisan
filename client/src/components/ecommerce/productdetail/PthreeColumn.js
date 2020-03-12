import React, { Component } from 'react';
import { InputNumber, Icon } from 'antd';
import { Redirect } from "react-router-dom";
import './PthreeColumn.css';
import ProductReviews from './ProductReviews';
// import ProductInformation from './ProductInformation';
// import RelatedInformation from './relatedInformation';


class
  PthreeColumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isData: true,
      data: {},
      images: [],
      imgUrl: '',
      count: 0,
      // commentData: [],
      editProduct: false,
      dataDescription: '',
      hideDescriptionbtn: true,
      disscount: '',
      priceProduct: '',
      salePriceProduct: '',
      sizes: [],
      previousPrice: ''
    }
  }

  componentDidMount() {

    window.scrollTo(0, 0);
    let data = this.props.data;
    if (data != undefined) {
      this.setState({
        data: data,
        images: data.images,
        imgUrl: data.images[0],
        dataDescription: data.description.slice(0, 150)
      })
      this.discountCalculate(data)
      this.getSizes(data)
    }

  }

  //seprate price sale price & disscount
  discountCalculate = (data) => {
    if (data) {
      if (data.salePrice.number > 0) {
        let diccountNo = data.price.number - data.salePrice.number;
        let disscount = diccountNo / data.price.number * 100;
        this.setState({
          disscount: disscount,
          salePriceProduct: data.salePrice.number + data.salePrice.currency,
          priceProduct: data.price.number + data.price.currency,
          previousPrice: data.price.number + data.price.currency
        })
      }
      else {
        this.setState({
          salePriceProduct: '',
          priceProduct: data.price.number + data.price.currency,
          previousPrice: data.price.number + data.price.currency

        })
      }
    }
  }

  getSizes = (data) => {
    let sizes = []
    // console.log(data.variationPrices.length, 'data')
    if (data) {
      if (data.sizes.length > 0 && data.variationPrices.length == 0 && data.width == undefined) {
        let size = data.sizes;
        for (var i = 0; i < size.length; i++) {
          if (size[i] != 'Add Variation') {
            let obj = {
              price: 0,
              size: size[i]
            }
            sizes.push(obj)
          }
        }
        this.setState({
          sizes: sizes
        })
      }
      else if (data.sizes.length > 0 && data.variationPrices.length == 0 && data.width != undefined) {
        let size = data.sizes;
        for (var i = 0; i < size.length; i++) {
          if (size[i] != 'Add Variation') {
            let obj = {
              price: 0,
              size: size[i]
            }
            sizes.push(obj)
          }
        }
        let sizeWihWidth = data.width + " " + data.widthUnit + " X " + data.height + " " + data.heightUnit;
        let obj = {
          price: 0,
          size: sizeWihWidth
        }
        sizes.push(obj)
        this.setState({
          sizes: sizes
        })
      }
      else if (data.sizes.length == 0 && data.variationPrices.length == 0 && data.width != undefined) {
        let sizeWihWidth = data.width + " " + data.widthUnit + " X " + data.height + " " + data.heightUnit;
        let obj = {
          price: 0,
          size: sizeWihWidth
        }
        sizes.push(obj)
        this.setState({
          sizes: sizes
        })
      }
      else if (data.sizes.length == 0 && data.width == undefined && data.variationPrices.length > 0) {
        let variations = data.variationPrices;
        for (var i = 0; i < variations.length; i++) {
          if (variations[i].firstVariUnit == "Height") {
            let variationsizes = variations[i].firstVariValueUnit + " " + variations[i].firstVariValue +
              " X " + variations[i].secondVariValueUnit + " " + variations[i].secondVariValue;
            let obj = {
              price: variations[i].price,
              size: variationsizes
            }
            sizes.push(obj)
          }
          else if (variations[i].firstVariUnit == "Width") {
            let variationsizes = variations[i].secondVariValueUnit + " " + variations[i].secondVariValue +
              " X " + variations[i].firstVariValueUnit + " " + variations[i].firstVariValueUnit;
            let obj = {
              price: variations[i].price,
              size: variationsizes
            }
            sizes.push(obj)
          }
        }
        this.setState({
          sizes: sizes
        })
      }
      else if (data.sizes.length > 0 && data.variationPrices.length > 0 && data.width == undefined) {
        let size = data.sizes;
        let variations = data.variationPrices;
        for (var i = 0; i < size.length; i++) {
          if (size[i] != 'Add Variation') {
            let obj = {
              price: 0,
              size: size[i]
            }
            sizes.push(obj)
          }
        }
        for (var i = 0; i < variations.length; i++) {
          console.log(variations[i])
          if (variations[i].firstVariUnit == "Height") {
            let variationsizes = variations[i].firstVariValueUnit + " " + variations[i].firstVariValue +
              " X " + variations[i].secondVariValueUnit + " " + variations[i].secondVariValue;
            let obj = {
              price: variations[i].price,
              size: variationsizes
            }
            sizes.push(obj)
          }
          else if (variations[i].firstVariUnit == "Width") {
            let variationsizes = variations[i].secondVariValueUnit + " " + variations[i].secondVariValue +
              " X " + variations[i].firstVariValueUnit + " " + variations[i].firstVariValueUnit;
            let obj = {
              price: variations[i].price,
              size: variationsizes
            }
            sizes.push(obj)
            // sizes.push(variationsizes)
          }
        }
        this.setState({
          sizes: sizes
        })
      }
    }
  }

  renderImagesinLi = (img) => {
    this.setState({
      imgUrl: img
    })
  }

  onChange = (value) => {
    this.setState({
      count: value
    })
  }

  addTocart = () => {
    const { count } = this.state;
    let user = JSON.parse(localStorage.getItem('user'));
    if (user === undefined) {
    }
    else {
      this.props.shoppingCartCount(count)
    }
  }

  onGoEditProduct() {
    this.setState({
      editProduct: true
    })
  }


  showDescription = () => {
    const { data } = this.state;
    this.setState({ dataDescription: data.description, hideDescriptionbtn: false })
  }

  lessDescription = () => {
    const { data } = this.state;
    this.setState({ dataDescription: data.description.slice(0, 150), hideDescriptionbtn: true })

  }

  handleChangeSelectColor = (values) => {
    console.log(values.target.value, 'values')
  }

  handleChangeSelectSizes = (values) => {
    const { sizes , previousPrice} = this.state;
    let price = sizes[values.target.value].price;
    let size = sizes[values.target.value].size;
    let priceWithCurrencey = price + ' pkr';


    if (price > 0) {
      this.setState({
        priceProduct: priceWithCurrencey,
        selectedSizes: size
      })
    }
    else {
      this.setState({
        selectedSizes: size,
        priceProduct: previousPrice
      })
    }

  }
  render() {
    const { dataDescription, data, count, editProduct, disscount, salePriceProduct, priceProduct,
      sizes } = this.state;
    const { profileId } = this.props;
    if (editProduct) {
      return (
        <Redirect to={{ pathname: `/Forms_Ecommerce`, state: data }} />
      )
    }
    return (
      <div class="container" style={{ width: "80%", padding: "0px" }}>
        <div class="card-three-column">
          <div class="row" style={{ padding: "15px" }}>
            <div class="col-md-6" style={{ padding: "0" }}>
              <div className="row">
                <div className="col-md-2" style={{ padding: "0" }}>
                  <ul class="preview-thumbnail nav nav-tabs">
                    {this.state.images.map(img => <li onClick={() => this.renderImagesinLi(img)}><a ><img src={img} /></a></li>)}
                  </ul>
                </div>
                <div className="col-md-10">
                  <div className="preview">
                    <div class="preview-pic tab-content">
                      <div class="tab-pane active" id="pic-1"><img src={this.state.imgUrl} /></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            <div className="col-md-6">
              <div className="new-card">
                <div className="produc-features">
                  <div className="row">
                    <div className="col-md-10">
                      <h4>{data.product}</h4>
                    </div>
                    <div className="col-md-2">
                      {data.profileId == profileId ? <Icon
                        type="edit" size={26}
                        style={{ marginLeft: '10%', cursor: 'pointer' }}
                        onClick={() => { this.onGoEditProduct() }}
                      >
                      </Icon>
                        : null}
                    </div>
                  </div>
                  <div>
                    {salePriceProduct != '' ?
                      <div>
                        <span>
                          <h3 style={{ color: "rgb(217, 166, 126)" }}>
                            {salePriceProduct}
                          </h3>
                        </span>
                        <span style={{ color: "	#808080", marginRight: "15px" }}>
                          <s>{priceProduct}</s>
                        </span>
                        {disscount != '' ?
                          <span>{disscount}%</span>
                          : null
                        }
                      </div>
                      :
                      <span>
                        {priceProduct != '' &&
                          <h3 style={{ color: "rgb(217, 166, 126)" }}>
                            {priceProduct}
                          </h3>
                        }
                      </span>
                    }
                  </div>
                </div>
                <div className="color-field">
                  <div className="row">
                    <div className="col-md-4" style={{ paddingRight: "0" }}>
                      <span>Colors</span>
                      <select onChange={this.handleChangeSelectColor}>
                        <option value=''> Select Color </option>
                        {data.color && data.color.map(time => {
                          return (
                            <option value={time}> {time} </option>
                          )
                        })}
                      </select>
                    </div>
                    <div className="col-md-4" style={{ paddingRight: "0" }}>
                      <span>Sizes</span>
                      {/* <DropdownButton
                        title={this.state.selectedFacilityName}
                        onSelect={this.onSelectFacility}
                        id="snap" >
                        {
                          this.state.facilities.map(facility => (
                            <MenuItem
                              key={facility.facilityId}
                              // eventKey={[facility.facilityId, facility.name]}
                              value={facility.facilityId}
                            > {facility.name} - {facility.facilityId}{" "}
                            </MenuItem>
                          ))
                        }
                      </DropdownButton> */}
                      <select
                        // multiple
                        // style={{ width: 200 }}
                        placeholder="Select a person"
                        // optionFilterProp="children"
                        onChange={this.handleChangeSelectSizes}>
                        <option value=''> Select Size </option>
                        {/* {Object.entries(sizes).map(([key, value]) => (
                          // console.log(key, 'key', value, 'value')
                          // console.log(key , 'key')

                          <option value={value}>{value.size}</option>
                        ))} */}
                        {sizes && sizes.map((time, key) => {
                          return (
                            <option key={key} value={key}> {time.size} </option>
                          )
                        })}
                      </select>
                    </div>
                    {/* <div className="col-md-10">
                      <div style={{ marginBottom: "60px" }}>
                        {/* <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span> 
                      </div>
                    </div> */}
                    <div className="col-md-4"></div>
                  </div>
                </div>
                <div>
                  <span>Qty:</span>
                  <span>
                    <InputNumber min={0} max={10} defaultValue={0} onChange={this.onChange} />
                  </span>
                </div>
                <div className="row center_global row">
                  <button style={{ textAlign: 'center', width: "90%", marginTop: "20px" }} className="btn button_custom"
                    onClick={() => this.props.shoppingCartCount(count)}
                    onClick={this.addTocart}
                  >Add to cart</button>
                </div>
              </div>



              <div className="new-card">
                <div className="produc-features">
                  <span style={{ display: 'inline-flex' }}>
                    <Icon type="unordered-list" style={{ marginRight: "5px" }} />
                    <h5>Product Features</h5>
                  </span>
                  <p>{data.productFeature} </p>
                  <div className="row">
                    <div className="col-md-6">
                      {/* <p>Color:
                        <strong>{data.color}</strong>
                      </p> */}
                      {/* <p>Sizes:
                        <strong>{data.sizes}</strong>
                      </p> */}
                      <p>Quantity:
                        <strong>{data.quantity}</strong>
                      </p>
                    </div>
                    <div className="col-md-6">

                      <p>Material Type:
                        <strong>{data.materialType}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="new-card">
                    <div className="produc-features">
                      <span style={{ display: 'inline-flex' }}>
                        <Icon type="unordered-list" style={{ marginRight: "5px" }} />
                        <h5>Desciption</h5>
                      </span>
                      <p>
                        {dataDescription}
                      </p>
                    </div>
                    {this.state.hideDescriptionbtn ?
                      <button onClick={this.showDescription}>see more</button>
                      :
                      <button onClick={this.lessDescription}>see less</button>
                    }
                  </div>

                </div>
              </div>


            </div>
          </div>

          {/* rating inputs */}

          {/* {data &&
            <ProductReviews shopId={this.props.shopId} productId={this.props.productId}
            />} */}

        </div>

        {/* <h3 class=""
                  >{data.product}</h3>
                  <Link to={{
                    pathname: `/EcommerceProfile/${data.shopId}`,
                    // state: data.shopId
                  }}>
                    <div className="" >
                      <p>
                        {`By ${data.shopName}`}
                      </p>
                    </div>
                  </Link>
                  <h3>{'$' + data.price} & Free Shipping</h3> */}




        {/* <ul className="margins">
                      <p>Description: {data.description}</p>
                    </ul>  */}

        {/* <div>
                    <h4 className="margin"> From The Manufacturer </h4>
                    <h5>{data.manufacturer} <br />{data.manufacturerPart}</h5>
                    <p>Warranty Description: {data.warrantyDescription}</p>
                  </div> */}


        {/* <h2>Product Features</h2>
                  <p>{data.productFeature} </p> */}
        {/* {data.sizes && data.sizes.map((elem , key)=>{
                    return(<p class="vote">Size: <strong>{elem}</strong></p>)

                  })} */}


        {/* <div className="new-card" style={{marginTop:"20px"}}>
                  <div className="product-manufacturer">
                    <h2>Manufacturer </h2>
                    <h5>{data.manufacturer} <br />{data.manufacturerPart}</h5>
                    <h4>Warranty Desciption</h4>
                    <p>{data.warrantyDescription}</p>
                  </div>
              </div> */}


        {/* <div className="row">
                <div class="details col-md-7">
                  <h3 class="product-title"
                  >{data.product}</h3>
                  <Link to={{
                    pathname: `/EcommerceProfile/${data.shopId}`,
                    // state: data.shopId
                  }}>
                    <div className="sellerstorecard" >
                      <p>
                        {`By ${data.shopName}`}
                      </p>
                    </div>
                  </Link>
                  <h3>{'$' + data.price} & Free Shipping</h3>
                  <p class="vote">Size: <strong>{data.size}</strong></p>
                  <div style={{ marginTop: "20px" }}>
                    <p>Product Feature: {data.productFeature} </p>
                    <ul className="margins">
                      <p>Description: {data.description}</p>
                    </ul>
                  </div>
                  <div>
                    <h4 className="margin"> From The Manufacturer </h4>
                    <h5>{data.manufacturer} <br />{data.manufacturerPart}</h5>
                    <p>Warranty Description: {data.warrantyDescription}</p>
                  </div>
                </div>
                {data.profileId == profileId ? <Icon
                  type="edit" size={26}
                  style={{ marginLeft: '10%', cursor: 'pointer' }}
                  onClick={() => { this.onGoEditProduct() }}
                >
                </Icon>
                  : null}
                <div className="col-md-5">
                  <p style={{ marginBottom: "0px" }}> Share: Email, Facebook, Twitter, Pinterest </p>
                  <div className="ecartbox">
                    <span>
                      <h4>{'$' + data.price} </h4>
                      <h4> & Free Shipping </h4>
                    </span>
                    <span>
                      <h4 className="efontcolor"> In Stock </h4>
                      <p> Ships from and sold by PakJazba.com </p>
                    </span>
                    <div>
                      <span>Qty:</span>
                      <span> <InputNumber min={0} max={10} defaultValue={1} onChange={this.onChange} /></span>
                    </div>
                    
                  </div>
                </div>
              </div> 
            
            


              <ProductFaq /> */}
      </div>

    )
  }
}
export default PthreeColumn;
