import React, { Component } from 'react';
import HeaderMenu from '../header/headermenu';
import Footer from '../footer/footer';
import { Table, Tag, Checkbox, Switch, Input,  } from 'antd';


function onChange(checked) {
  console.log(`switch to ${checked}`);
}


const { Search } = Input;
const columns = [
    {
      title: 'SR.No',
      dataIndex: 'sr',
      key: 'sr',
      
    },
    {
      title: 'Product Name',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku',
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: 'Total no of Order',
      dataIndex: 'totalnoOFOrder',
      key: 'totalnoOFOrder',

    },
    {
      title: 'Product View',
      dataIndex: 'productView',
      key: 'productView',

    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',

    },
    {
      title: 'Featured',
      dataIndex: 'featured',
      key: 'featured',

    },
  ];
  
  const data = [
    {
      key: '1',
      sr: '1',
      product: 'Sony Experia mark II with so many features',
      sku: 'clmj100012',
      rate: '5 stars',
      totalnoOFOrder: '5',
      productView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '2',
      sr: '2',
      product: 'Sony Experia mark II with so many features',
      sku: 'dewp19003',
      rate: '4 stars',
      totalnoOFOrder: '3',
      productView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '3',
      sr: '3',
      product: 'Sony Experia mark II with so many features',
      sku: 'fulib90003',
      rate: '5 stars',
      totalnoOFOrder: '19',
      productView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '4',
      sr: '4',
      product: 'Sony Experia mark II with so many features',
      sku: 'dewp19003',
      rate: '2.5 Stars',
      totalnoOFOrder: '3',
      productView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '5',
      sr: '5',
      product: 'Sony Experia mark II with so many features',
      sku: 'clmj100012',
      rate: '3 stars',
      totalnoOFOrder: '5',
      productView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '6',
      sr: '6',
      product: 'Sony Experia mark II with so many features',
      sku: 'dhekib48003',
      rate: ['cool', 'teacher'],
      totalnoOFOrder: '19',
      productView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '7',
      sr: '7',
      product: 'Sony Experia mark II with so many features',
      sku: 'fjepss87003',
      rate: ['loser'],
      totalnoOFOrder: '3',
      productView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
  ];
class FeaturedProduct extends Component{
    render(){
        return(
            <div className="">
              <HeaderMenu/>
              <div style={{marginTop:"110px"}}>
                <h2 style={{textAlign:"center"}}>Featured Product</h2>
                <div className="container">
                    <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                </div>
                <Table columns={columns} dataSource={data} />
              </div>
              <Footer/>
            </div>

        )
    }
}

export default FeaturedProduct;