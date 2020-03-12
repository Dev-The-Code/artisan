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
      title: 'Shop Name',
      dataIndex: 'shopName',
      key: 'shopName',
    },
    {
      title: 'Seller ID',
      dataIndex: 'sellerId',
      key: 'sellerId',
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
      title: 'Shop View',
      dataIndex: 'shopView',
      key: 'shopView',

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
      shopName: 'Sony Experia mark II with so many features',
      sellerId: 'clmj100012',
      rate: '5 stars',
      totalnoOFOrder: '5',
      shopView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '2',
      sr: '2',
      shopName: 'Sony Experia mark II with so many features',
      sellerId: 'dewp19003',
      rate: '4 stars',
      totalnoOFOrder: '3',
      shopView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '3',
      sr: '3',
      shopName: 'Sony Experia mark II with so many features',
      sellerId: 'fulib90003',
      rate: '5 stars',
      totalnoOFOrder: '19',
      shopView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '4',
      sr: '4',
      shopName: 'Sony Experia mark II with so many features',
      sellerId: 'dewp19003',
      rate: '2.5 Stars',
      totalnoOFOrder: '3',
      shopView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '5',
      sr: '5',
      shopName: 'Sony Experia mark II with so many features',
      sellerId: 'clmj100012',
      rate: '3 stars',
      totalnoOFOrder: '5',
      shopView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '6',
      sr: '6',
      shopName: 'Sony Experia mark II with so many features',
      sellerId: 'dhekib48003',
      rate: ['cool', 'teacher'],
      totalnoOFOrder: '19',
      shopView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
    {
      key: '7',
      sr: '7',
      shopName: 'Sony Experia mark II with so many features',
      sellerId: 'fjepss87003',
      rate: ['loser'],
      totalnoOFOrder: '3',
      shopView: '200 Views',
      stock: '15 Products',
      featured: <Checkbox onChange={onChange}></Checkbox>,
      
    },
  ];
class FeaturedShops extends Component{
    render(){
        return(
            <div className="">
                <HeaderMenu/>
                <div style={{marginTop:"110px"}}>
                    <h2 style={{textAlign:"center"}}>Featured Shops</h2>

                    <div className="container" style={{width:"40%", marginBottom:"15px", marginTop:"15px"}}>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    </div>
                    <Table columns={columns} dataSource={data} />
                </div>
                <Footer/>
            </div>

        )
    }
}

export default FeaturedShops;