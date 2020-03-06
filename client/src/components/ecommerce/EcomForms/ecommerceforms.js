import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import superagent from "superagent";
import sha1 from "sha1";
import './ecomform.css';
import { HttpUtils } from "../../../Services/HttpUtils";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Cascader,
  notification,
  Button,
  Upload,
  Icon,
  Checkbox,
  Row,
  Col,
  Modal,
  Spin,
  Table,
} from 'antd';
import './ecommreceform.css'

const { Option } = Select;
const { TextArea } = Input;

//category of the product
const categories = [
  {
    value: 'Clothing',
    label: 'Clothing',
    children: [{
      value: 'Mens',
      label: 'Mens',
      children: [{
        value: 'Jackets',
        label: 'Jackets',
      }, {
        value: 'Jumpers',
        label: 'Jumpers',
      }, {
        value: 'Costumes',
        label: 'Costumes',
      }],
    }, {
      value: 'Womens',
      label: 'Womens',
      children: [{
        value: 'Dresses',
        label: 'Dresses',
      }, {
        value: 'Tops',
        label: 'Tops',
      }, {
        value: 'Skirts',
        label: 'Skirts',
      }, {
        label: 'Jackets & Coats',
        value: 'Jackets & Coats',
      }, {
        label: 'Trousers & Pants',
        value: 'Trousers & Pants',
      }, {
        value: 'Jumpers',
        label: 'Jumpers',
      }, {
        value: 'Costumes',
        label: 'Costumes',
      }],
    }]

  },
  {
    value: 'Shoes',
    label: 'Shoes',
    children: [{
      value: 'Mens',
      label: 'Mens',
      children: [{
        value: 'Sneakers & Athletic Shoes',
        label: 'Sneakers & Athletic Shoes',
      }, {
        value: 'Boots',
        label: 'Boots',
      }, {
        value: 'Sandals',
        label: 'Sandals',
      }, {
        value: 'Slippers',
        label: 'Slippers',
      }, {
        value: 'Loafers & Slip Ons',
        label: 'Loafers & Slip Ons',
      }, {
        value: 'Oxfords & Wingtips',
        label: 'Oxfords & Wingtips',
      }],
    }, {
      value: 'Womens',
      label: 'Womens',
      children: [{
        value: 'Sandals',
        label: 'Sandals',
      }, {
        value: 'Boots',
        label: 'Boots',
      }, {
        value: 'Sneakers & Athletic Shoes',
        label: 'Sneakers & Athletic Shoes',
      }, {
        value: 'Slip Ons',
        label: 'Slip Ons',
      }, {
        value: 'Pumps',
        label: 'Pumps',
      }, {
        value: 'Slippers',
        label: 'Slippers',
      }, {
        value: 'Clogs & Mules',
        label: 'Clogs & Mules',
      }, {
        value: 'Oxfords & Tie Shoes',
        label: 'Oxfords & Tie Shoes',
      }, {
        label: 'Costume Shows',
        value: 'Costume Shows',
      }],
    }]
  },
  {
    value: 'Bags & Purses',
    label: 'Bags & Purses',
    children: [{
      value: 'Handbags',
      label: 'Handbags',
      children: [{
        value: 'Shoulder bags',
        label: 'Shoulder bags',
      }, {
        value: 'Clutches & Evening Bags',
        label: 'Clutches & Evening Bags',
      }, {
        value: 'Crossbody Bags',
        label: 'Crossbody Bags',
      }, {
        value: 'Top HandleBags',
        label: 'Top HandleBags',
      }]
    }, {
      value: 'Wallets & Money Clips',
      label: 'Wallets & Money Clips',
      children: [{
        value: 'Wallets',
        label: 'Wallets',
      }, {
        value: 'Business Card Cases',
        label: 'Business Card Cases',
      }, {
        value: 'Money Clips',
        label: 'Money Clips',
      }]
    }, {
      value: 'Electronic Cases',
      label: 'Electronic Cases',
      children: [{
        value: 'Phone Cases',
        label: 'Phone Cases',
      }, {
        value: 'Laptop Sleeves',
        label: 'Laptop Sleeves',
      }, {
        value: 'Tablet & E-Reader Cases',
        label: 'Tablet & E-Reader Cases',
      }, {
        value: 'Camera Bags',
        label: 'Camera Bags',
      }]
    }]
  },
  {
    value: 'Jwellery',
    label: 'Jwellery',
    children: [{
      value: 'Body Jwellery',
      label: 'Body Jwellery',
      children: [{
        value: 'Hair Jwellery',
        label: 'Hair Jwellery',
      }, {
        value: 'Anklets',
        label: 'Anklets',
      }, {
        value: 'Nose Rings & Studs',
        label: 'Nose Rings & Studs',
      }, {
        value: 'Gauge & Plug Earring',
        label: 'Gauge & Plug Earring',
      }, {
        value: 'Toe Rings',
        label: 'Toe Rings',
      }]
    }, {
      value: 'Bracelets',
      label: 'Bracelets',
      children: [{
        value: 'Woven & Braided Bracelets',
        label: 'Woven & Braided Bracelets',
      }, {
        value: 'Beaded Bracelets',
        label: 'Beaded Bracelets',
      }, {
        value: 'Charm Bracelets',
        label: 'Charm Bracelets',
      }, {
        value: 'Cuff Bracelets',
        label: 'Cuff Bracelets',
      }]
    }, {
      value: 'Earring',
      label: 'Earring',
      children: [{
        value: 'Ear Jackets & Climber',
        label: 'Ear Jackets & Climber',
      }, {
        value: 'Dangle & Drop Earrings',
        label: 'Dangle & Drop Earrings',
      }, {
        value: 'Stud Earrings',
        label: 'Stud Earrings',
      }, {
        value: 'Hoop Earrings',
        label: 'Hoop Earrings',
      }, {
        value: 'Clip-On Earrings',
        label: 'Clip-On Earrings',
      }, {
        value: 'Chandelier Earrings',
        label: 'Chandelier Earrings',
      }, {
        value: 'Screw Back Earrings',
        label: 'Screw Back Earrings',
      }]
    }, {
      value: 'Necklaces',
      label: 'Necklaces',
      children: [{
        value: 'Pendants',
        label: 'Pendants',
      }, {
        value: 'Beaded Necklaces',
        label: 'Beaded Necklaces',
      }, {
        value: 'Charm Necklaces',
        label: 'Charm Necklaces',
      }, {
        value: 'Chokers',
        label: 'Chokers',
      }, {
        value: 'Crystal Necklaces',
        label: 'Crystal Necklaces',
      }, {
        value: 'Chains',
        label: 'Chains',
      }, {
        value: 'Monogram & Name Necklaces',
        label: 'Monogram & Name Necklaces',
      }, {
        value: 'Lockets',
        label: 'Lockets',
      }, {
        value: 'Bib Necklaces',
        label: 'Bib Necklaces'
      }]
    }, {
      value: 'Rings',
      label: 'Rings',
      children: [{
        value: 'Wedding & Engagement',
        label: 'Wedding & Engagement',
      }, {
        value: 'Signet Rings',
        label: 'Signet Rings',
      }, {
        value: 'Statement Rings',
        label: 'Statement Rings',
      }, {
        value: 'Bands',
        label: 'Bands',
      }, {
        value: 'Solitaire Rings',
        label: 'Solitaire Rings',
      }, {
        value: 'Stackable Rings',
        label: 'Stackable Rings',
      }, {
        value: 'Multi-Stone Rings',
        label: 'Multi-Stone Rings',
      }, {
        value: 'Midi Rings',
        label: 'Midi Rings',
      }, {
        value: 'Triplet & Double Rings',
        label: 'Triplet & Double Rings',
      }]
    }]
  }, {
    value: 'Decor',
    label: 'Decor',
    children: [{
      value: 'Wall Decor',
      label: 'Wall Decor',
      children: [{
        value: 'Wall Hangings',
        label: 'Wall Hangings',
      }, {
        value: 'Wall Decals & Murals',
        label: 'Wall Decals & Murals',
      }, {
        value: 'Wallpapers',
        label: 'Wallpapers',
      }, {
        value: 'Wall Stencils',
        label: 'Wall Stencils',
      }]
    }, {
      value: 'Decorative Cushions',
      label: 'Decorative Cushions',
      children: [{
        value: 'Cushions',
        label: 'Cushions',
      }]
    }, {
      value: 'Picture Frames',
      label: 'Picture Frames',
      children: [{
        value: 'Frames',
        label: 'Frames',
      }]
    }, {
      value: 'Candles & Holders',
      label: 'Candles & Holders',
      children: [{
        value: 'Candles',
        label: 'Candles',
      }, {
        value: 'Candle Holders',
        label: 'Candle Holders',
      }, {
        value: 'Wax Melts',
        label: 'Wax Melts',
      }, {
        value: 'Incense',
        label: 'Incense',
      }]
    }]
  }, {
    value: 'Pets',
    label: 'Pets',
    children: [{
      value: 'Collars & Leashes',
      label: 'Collars & Leashes',
      children: [{
        value: 'Pet Collars & Jwellery',
        label: 'Pet Collars & Jwellery',
      }, {
        value: 'Pet ID Tags',
        label: 'Pet ID Tags',
      }, {
        value: 'Pet Leashes',
        label: 'Pet Leashes',
      }, {
        value: 'Pet Harnesses & Backpacks',
        label: 'Pet Harnesses & Backpacks',
      }]
    }, {
      value: 'Furniture',
      label: 'Furniture',
      children: [{
        value: 'Pet Beds & Cots',
        label: 'Pet Beds & Cots',
      }, {
        value: 'Pet Hammocks',
        label: 'Pet Hammocks',
      }, {
        value: 'Play Furniture',
        label: 'Play Furniture',
      }, {
        value: 'Pet Steps',
        label: 'Pet Steps',
      }]
    }, {
      value: 'Colting & Shoes',
      label: 'Colting & Shoes',
      children: [{
        value: 'Pet Jackets',
        label: 'Pet Jackets',
      }, {
        value: 'Pet Tops',
        label: 'Pet Tops',
      }, {
        value: 'Pet Dresses',
        label: 'Pet Dresses',
      }, {
        value: 'Pet Hat & Wigs',
        label: 'Pet Hat & Wigs',
      }, {
        value: 'Pet Booties',
        label: 'Pet Booties',
      }, {
        value: 'Pet Shoes',
        label: 'Pet Shoes',
      }, {
        value: 'Pet Neckwear',
        label: 'Pet Neckwear',
      }, {
        value: 'Pet Bows and Bells',
        label: 'Pet Bows and Bells',
      }]
    }, {
      value: 'Carriers & House',
      label: 'Carriers & House',
      children: [{
        value: 'Pet Houses',
        label: 'Pet Houses',
      }, {
        value: 'Aquariums & Tank Decor',
        label: 'Aquariums & Tank Decor',
      }, {
        value: 'Nests & Bags',
        label: 'Nests & Bags',
      }, {
        value: 'Pet Slings',
        label: 'Pet Slings',
      }, {
        value: 'Bird Cages',
        label: 'Bird Cages',
      }, {
        value: 'Pet Totes',
        label: 'Pet Totes',
      }, {
        value: 'Pet Crates & Kennels',
        label: 'Pet Crates & Kennels',
      }, {
        value: 'Coops',
        label: 'Coops',
      }]
    }]
  }, {
    value: 'Furniture',
    label: 'Furniture',
    children: [{
      value: 'Living Room',
      label: 'Living Room',
      children: [{
        value: 'Drawer Pulls & Knobs',
        label: 'Drawer Pulls & Knobs',
      }, {
        value: 'Coffee & End Tables',
        label: 'Coffee & End Tables',
      }, {
        value: 'Chairs & Ottomans',
        label: 'Chairs & Ottomans',
      }, {
        value: 'Floor Cushions',
        label: 'Floor Cushions',
      }]
    }, {
      value: 'Dinning Room',
      label: 'Dinning Room',
      children: [{
        value: 'Kitchen & Dinning Tables',
        label: 'Kitchen & Dinning Tables',
      }, {
        value: 'Dining Chairs',
        label: 'Dining Chairs',
      }, {
        value: 'Stools & Banquettes',
        label: 'Stools & Banquettes',
      }, {
        value: 'Buffets & China Cabinets',
        label: 'Buffets & China Cabinets',
      }]
    }, {
      value: 'Bedroom',
      label: 'Bedroom',
      children: [{
        value: 'Dressers & Armoires',
        label: 'Dressers & Armoires',
      }, {
        value: 'Vanities & Nightstands',
        label: 'Vanities & Nightstands',
      }, {
        value: 'Beds & Headboards',
        label: 'Beds & Headboards',
      }, {
        value: 'Steps & Stools',
        label: 'Steps & Stools',
      }]
    }, {
      value: 'Kids Furniture',
      label: 'Kids Furniture',
      children: [{
        value: 'Desks, Tables & Chairs',
        label: 'Desks, Tables & Chairs',
      }, {
        value: 'Bean Bag Chairs',
        label: 'Bean Bag Chairs',
      }, {
        value: 'Steps & Stools',
        label: 'Steps & Stools',
      }, {
        value: 'Toddlers Beds',
        label: 'Toddlers Beds',
      }]
    }]
  }];

// sizes with of the product
const sizesOfProducts = [
  {
    value: 'Clothing',
    label: 'Clothing',
    children: [{
      value: 'Mens',
      label: 'Mens',
      children: [{
        label: 'Jackets',
        value: ['Xtra Small', 'Small', "Medium", 'Large', 'Xtra Large'],
      }, {
        label: 'Jumpers',
        value: ['Xtra Small', 'Small', "Medium", 'Large', 'Xtra Large'],
      }, {
        label: 'Costumes',
        value: ['Xtra Small', 'Small', "Medium", 'Large', 'Xtra Large'],
      }],
    }, {
      value: 'Womens',
      label: 'Womens',
      children: [{
        label: 'Dresses',
        value: ['Xtra Small', 'Small', "Medium", 'Large', 'Xtra Large', "Xtra Xtra Large"],
      }, {
        label: 'Tops',
        value: ['Xtra Small', 'Small', "Medium", 'Large', 'Xtra Large'],
      }, {
        label: 'Skirts',
        value: ['Xtra Small', 'Small', "Medium", 'Large', 'Xtra Large'],
      }, {
        label: 'Jackets & Coats',
        value: ['Xtra Small', 'Small', "Medium", 'Large', 'Xtra Large'],
      }, {
        label: 'Trousers & Pants',
        value: ['28', '30', "32", '34', '36'],
      }, {
        label: 'Jumpers',
        value: ['32', '34', "36", '38', '40', '42', '44', '46'],
      }, {
        label: 'Costumes',
        value: ['Xtra Small', 'Small', "Medium", 'Large', 'Xtra Large'],
      }],
    }]

  },
  {
    value: 'Shoes',
    label: 'Shoes',
    children: [{
      value: 'Mens',
      label: 'Mens',
      children: [{
        label: 'Sneakers & Athletic Shoes',
        value: ['39', '40', '41', "42", '43', '44', '45', '46'],
      }, {
        label: 'Boots',
        value: ['39', '40', '41', "42", '43', '44', '45', '46'],
      }, {
        label: 'Sandals',
        value: ['39', '40', '41', "42", '43', '44', '45', '46'],
      }, {
        label: 'Slippers',
        value: ['39', '40', '41', "42", '43', '44', '45', '46'],
      }, {
        label: 'Loafers & Slip Ons',
        value: ['39', '40', '41', "42", '43', '44', '45', '46'],
      }, {
        label: 'Oxfords & Wingtips',
        value: ['39', '40', '41', "42", '43', '44', '45', '46'],
      }],
    }, {
      value: 'Womens',
      label: 'Womens',
      children: [{
        label: 'Sandals',
        value: ['35', '36', '37', '38', '39', '40', '41', "42"],
      }, {
        label: 'Boots',
        value: ['35', '36', '37', '38', '39', '40', '41', "42"],
      }, {
        label: 'Sneakers & Athletic Shoes',
        value: ['35', '36', '37', '38', '39', '40', '41', "42"],
      }, {
        label: 'Slip Ons',
        value: ['35', '36', '37', '38', '39', '40', '41', "42"],
      }, {
        label: 'Pumps',
        value: ['35', '36', '37', '38', '39', '40', '41', "42"],
      }, {
        label: 'Slippers',
        value: ['35', '36', '37', '38', '39', '40', '41', "42"],
      }, {
        label: 'Clogs & Mules',
        value: ['35', '36', '37', '38', '39', '40', '41', "42"],
      }, {
        label: 'Oxfords & Tie Shoes',
        value: ['35', '36', '37', '38', '39', '40', '41', "42"],
      }, {
        label: 'Costume Shows',
        value: ['35', '36', '37', '38', '39', '40', '41', "42"],
      }],
    }]
  },
  {
    value: 'Bags & Purses',
    label: 'Bags & Purses',
    children: [{
      label: 'Handbags',
      value: 'Handbags',
      children: [{
        label: 'Shoulder bags',
        value: [],
      }, {
        label: 'Clutches & Evening Bags',
        value: [],
      }, {
        label: 'Crossbody Bags',
        value: [],
      }, {
        label: 'Top HandleBags',
        value: [],
      }]
    }, {
      label: 'Wallets & Money Clips',
      value: 'Wallets & Money Clips',
      children: [{
        label: 'Wallets',
        value: [],
      }, {
        label: 'Business Card Cases',
        value: [],
      }, {
        label: 'Money Clips',
        value: [],
      }]
    }, {
      label: 'Electronic Cases',
      value: 'Electronic Cases',
      children: [{
        label: 'Phone Cases',
        value: [],
      }, {
        label: 'Laptop Sleeves',
        value: [],
      }, {
        label: 'Tablet & E-Reader Cases',
        value: [],
      }, {
        label: 'Camera Bags',
        value: [],
      }]
    }]
  },
  {
    value: 'Jwellery',
    label: 'Jwellery',
    children: [{
      value: 'Body Jwellery',
      label: 'Body Jwellery',
      children: [{
        label: 'Hair Jwellery',
        value: ['Add Variation', 'Universal', '6mm', '8mm', '10mm']
      }, {
        label: 'Anklets',
        value: ['Add Variation', 'Universal', '6mm', '8mm', '10mm']
      }, {
        label: 'Nose Rings & Studs',
        value: ['Add Variation', '6mm', 'Universal']
      }, {
        label: 'Gauge & Plug Earring',
        value: ['Add Variation', '6mm', '8mm', '10mm']
      }, {
        label: 'Toe Rings',
        value: ['Add Variation', 'Adjustable']
      }]
    }, {
      value: 'Bracelets',
      label: 'Bracelets',
      children: [{
        label: 'Woven & Braided Bracelets',
        value: ['Add Variation', 'One Size', 'N/a', 'Small', 'Medium', "Large", , '10 CM', '12 CM', '14 CM',
          '15 CM', '16 CM', '17 CM', '18 CM', '19 CM', '20 CM', '22 CM', '24 CM', '10 MM', '60 MM', '65 MM', '70 MM'],
      }, {
        label: 'Beaded Bracelets',
        value: ['Add Variation', 'One Size', 'N/a', 'Small', 'Medium', "Large", , '10 CM', '12 CM', '14 CM',
          '15 CM', '16 CM', '17 CM', '18 CM', '19 CM', '20 CM', '22 CM', '24 CM', '10 MM', '60 MM', '65 MM', '70 MM']
      }, {
        label: 'Charm Bracelets',
        value: ['Add Variation', 'One Size', 'N/a', 'Small', 'Medium', "Large", , '10 CM', '12 CM', '14 CM',
          '15 CM', '16 CM', '17 CM', '18 CM', '19 CM', '20 CM', '22 CM', '24 CM', '10 MM', '60 MM', '65 MM', '70 MM']
      }, {
        label: 'Cuff Bracelets',
        value: ['Add Variation', 'One Size', 'N/a', 'Small', 'Medium', "Large", , '10 CM', '12 CM', '14 CM',
          '15 CM', '16 CM', '17 CM', '18 CM', '19 CM', '20 CM', '22 CM', '24 CM', '10 MM', '60 MM', '65 MM', '70 MM']
      }]
    }, {
      value: 'Earring',
      label: 'Earring',
      children: [{
        label: 'Ear Jackets & Climber',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', '2 MM', '3 MM', '5 MM', '6 MM', '8 MM', '10 MM', '12 MM', '15 MM',
          '20 MM', '25 MM', '30 MM', '40 MM', '50 MM', '55 MM', '60 MM', '65 MM', '70 MM', '100 MM']
      }, {
        label: 'Dangle & Drop Earrings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', '2 MM', '3 MM', '5 MM', '6 MM', '8 MM', '10 MM', '12 MM', '15 MM',
          '20 MM', '25 MM', '30 MM', '40 MM', '50 MM', '55 MM', '60 MM', '65 MM', '70 MM', '100 MM']
      }, {
        label: 'Stud Earrings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', '2 MM', '3 MM', '5 MM', '6 MM', '8 MM', '10 MM', '12 MM', '15 MM',
          '20 MM', '25 MM', '30 MM', '40 MM', '50 MM', '55 MM', '60 MM', '65 MM', '70 MM', '100 MM']
      }, {
        label: 'Hoop Earrings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', '2 MM', '3 MM', '5 MM', '6 MM', '8 MM', '10 MM', '12 MM', '15 MM',
          '20 MM', '25 MM', '30 MM', '40 MM', '50 MM', '55 MM', '60 MM', '65 MM', '70 MM', '100 MM']
      }, {
        label: 'Clip-On Earrings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', '2 MM', '3 MM', '5 MM', '6 MM', '8 MM', '10 MM', '12 MM', '15 MM',
          '20 MM', '25 MM', '30 MM', '40 MM', '50 MM', '55 MM', '60 MM', '65 MM', '70 MM', '100 MM']
      }, {
        label: 'Chandelier Earrings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', '2 MM', '3 MM', '5 MM', '6 MM', '8 MM', '10 MM', '12 MM', '15 MM',
          '20 MM', '25 MM', '30 MM', '40 MM', '50 MM', '55 MM', '60 MM', '65 MM', '70 MM', '100 MM']
      }, {
        label: 'Screw Back Earrings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', '2 MM', '3 MM', '5 MM', '6 MM', '8 MM', '10 MM', '12 MM', '15 MM',
          '20 MM', '25 MM', '30 MM', '40 MM', '50 MM', '55 MM', '60 MM', '65 MM', '70 MM', '100 MM']
      }]
    }, {
      value: 'Necklaces',
      label: 'Necklaces',
      children: [{
        label: 'Pendants',
        value: ['Add Variation', 'One Size', '6 MM', '8 MM', '10 MM', '12 MM', '25 MM', '30 MM', '700 MM', '800 MM', '40 CM',
          '41 CM', '42 CM', '43 CM', '44 CM', '45 CM', '46 CM', '47 CM', '48 CM', '49 CM', '50 CM', '55 CM', '60 CM',
          '65 CM', '70 CM', '80 CM']
      }, {
        label: 'Beaded Necklaces',
        value: ['Add Variation', 'One Size', '6 MM', '8 MM', '10 MM', '12 MM', '25 MM', '30 MM', '700 MM', '800 MM', '40 CM',
          '41 CM', '42 CM', '43 CM', '44 CM', '45 CM', '46 CM', '47 CM', '48 CM', '49 CM', '50 CM', '55 CM', '60 CM',
          '65 CM', '70 CM', '80 CM']
      }, {
        label: 'Charm Necklaces',
        value: ['Add Variation', 'One Size', '6 MM', '8 MM', '10 MM', '12 MM', '25 MM', '30 MM', '700 MM', '800 MM', '40 CM',
          '41 CM', '42 CM', '43 CM', '44 CM', '45 CM', '46 CM', '47 CM', '48 CM', '49 CM', '50 CM', '55 CM', '60 CM',
          '65 CM', '70 CM', '80 CM']
      }, {
        label: 'Chokers',
        value: ['Add Variation', 'One Size', '6 MM', '8 MM', '10 MM', '12 MM', '25 MM', '30 MM', '700 MM', '800 MM', '40 CM',
          '41 CM', '42 CM', '43 CM', '44 CM', '45 CM', '46 CM', '47 CM', '48 CM', '49 CM', '50 CM', '55 CM', '60 CM',
          '65 CM', '70 CM', '80 CM']
      }, {
        label: 'Crystal Necklaces',
        value: ['Add Variation', 'One Size', '6 MM', '8 MM', '10 MM', '12 MM', '25 MM', '30 MM', '700 MM', '800 MM', '40 CM',
          '41 CM', '42 CM', '43 CM', '44 CM', '45 CM', '46 CM', '47 CM', '48 CM', '49 CM', '50 CM', '55 CM', '60 CM',
          '65 CM', '70 CM', '80 CM']
      }, {
        label: 'Chains',
        value: ['Add Variation', 'One Size', '6 MM', '8 MM', '10 MM', '12 MM', '25 MM', '30 MM', '700 MM', '800 MM', '40 CM',
          '41 CM', '42 CM', '43 CM', '44 CM', '45 CM', '46 CM', '47 CM', '48 CM', '49 CM', '50 CM', '55 CM', '60 CM',
          '65 CM', '70 CM', '80 CM']
      }, {
        label: 'Monogram & Name Necklaces',
        value: ['Add Variation', 'One Size', '6 MM', '8 MM', '10 MM', '12 MM', '25 MM', '30 MM', '700 MM', '800 MM', '40 CM',
          '41 CM', '42 CM', '43 CM', '44 CM', '45 CM', '46 CM', '47 CM', '48 CM', '49 CM', '50 CM', '55 CM', '60 CM',
          '65 CM', '70 CM', '80 CM']
      }, {
        label: 'Lockets',
        value: ['Add Variation', 'One Size', '6 MM', '8 MM', '10 MM', '12 MM', '25 MM', '30 MM', '700 MM', '800 MM', '40 CM',
          '41 CM', '42 CM', '43 CM', '44 CM', '45 CM', '46 CM', '47 CM', '48 CM', '49 CM', '50 CM', '55 CM', '60 CM',
          '65 CM', '70 CM', '80 CM']
      }, {
        label: 'Bib Necklaces',
        value: ['Add Variation', 'One Size', '6 MM', '8 MM', '10 MM', '12 MM', '25 MM', '30 MM', '700 MM', '800 MM', '40 CM',
          '41 CM', '42 CM', '43 CM', '44 CM', '45 CM', '46 CM', '47 CM', '48 CM', '49 CM', '50 CM', '55 CM', '60 CM',
          '65 CM', '70 CM', '80 CM']
      }]
    }, {
      value: 'Rings',
      label: 'Rings',
      children: [{
        label: 'Wedding & Engagement',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', 'Small', 'Medium', 'Large',
          '5', '6', '7', '8', '9', '10', '11', '12', '16', '17', '18', '19', '20', '21', '22', '16 MM', '17 MM', '18 MM'],
      }, {
        label: 'Signet Rings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', 'Small', 'Medium', 'Large',
          '5', '6', '7', '8', '9', '10', '11', '12', '16', '17', '18', '19', '20', '21', '22', '16 MM', '17 MM', '18 MM']
      }, {
        label: 'Statement Rings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', 'Small', 'Medium', 'Large',
          '5', '6', '7', '8', '9', '10', '11', '12', '16', '17', '18', '19', '20', '21', '22', '16 MM', '17 MM', '18 MM']
      }, {
        label: 'Bands',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', 'Small', 'Medium', 'Large',
          '5', '6', '7', '8', '9', '10', '11', '12', '16', '17', '18', '19', '20', '21', '22', '16 MM', '17 MM', '18 MM']
      }, {
        label: 'Solitaire Rings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', 'Small', 'Medium', 'Large',
          '5', '6', '7', '8', '9', '10', '11', '12', '16', '17', '18', '19', '20', '21', '22', '16 MM', '17 MM', '18 MM']
      }, {
        label: 'Stackable Rings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', 'Small', 'Medium', 'Large',
          '5', '6', '7', '8', '9', '10', '11', '12', '16', '17', '18', '19', '20', '21', '22', '16 MM', '17 MM', '18 MM']
      }, {
        label: 'Multi-Stone Rings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', 'Small', 'Medium', 'Large',
          '5', '6', '7', '8', '9', '10', '11', '12', '16', '17', '18', '19', '20', '21', '22', '16 MM', '17 MM', '18 MM']
      }, {
        label: 'Midi Rings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', 'Small', 'Medium', 'Large',
          '5', '6', '7', '8', '9', '10', '11', '12', '16', '17', '18', '19', '20', '21', '22', '16 MM', '17 MM', '18 MM']
      }, {
        label: 'Triplet & Double Rings',
        value: ['Add Variation', 'One Size', 'Adjustable', 'N/a', 'Small', 'Medium', 'Large',
          '5', '6', '7', '8', '9', '10', '11', '12', '16', '17', '18', '19', '20', '21', '22', '16 MM', '17 MM', '18 MM']
      }]
    }]
  }, {
    value: 'Decor',
    label: 'Decor',
    children: [{
      label: 'Wall Decor',
      value: 'Wall Decor',
      children: [{
        label: 'Wall Hangings',
        value: ['Add Variation']
      }, {
        label: 'Wall Decals & Murals',
        value: ['Add Variation']
      }, {
        label: 'Wallpapers',
        value: ['Add Variation']
      }, {
        label: 'Wall Stencils',
        value: ['Add Variation']
      }]
    }, {
      value: 'Decorative Cushions',
      label: 'Decorative Cushions',
      children: [{
        label: 'Cushions',
        value: ['Add Variation'],
      }]
    }, {
      value: 'Picture Frames',
      label: 'Picture Frames',
      children: [{
        label: 'Frames',
        value: ['Add Variation'],
      }]
    }, {
      value: 'Candles & Holders',
      label: 'Candles & Holders',
      children: [{
        label: 'Candles',
        value: ['Add Variation'],
      }, {
        label: 'Candle Holders',
        value: ['Add Variation'],
      }, {
        label: 'Wax Melts',
        value: ['Add Variation'],
      }, {
        label: 'Incense',
        value: ['Add Variation'],
      }]
    }]
  }, {
    value: 'Pets',
    label: 'Pets',
// <<<<<<< HEAD
//     value: []
//   },
//   {
//     label: 'Drawer Pulls & Knobs',
//     value: [],
//   },
//   {
    
//   }
// ]
    children: [{
      value: 'Collars & Leashes',
      label: 'Collars & Leashes',
      children: [{
        label: 'Pet Collars & Jwellery',
        value: ['Add Variation']
      }, {
        label: 'Pet ID Tags',
        value: ['Add Variation']
      }, {
        label: 'Pet Leashes',
        value: ['Add Variation']
      }, {
        label: 'Pet Harnesses & Backpacks',
        value: ['Add Variation']
      }]
    }, {
      value: 'Furniture',
      label: 'Furniture',
      children: [{
        label: 'Pet Beds & Cots',
        value: ['Add Variation', 'Small', 'Medium', 'Large', 'Extra Large'],
      }, {
        label: 'Pet Hammocks',
        value: ['Add Variation', 'Small', 'Medium', 'Large', 'Extra Large'],
      }, {
        label: 'Play Furniture',
        value: ['Add Variation', 'Small', 'Medium', 'Large', 'Extra Large'],
      }, {
        label: 'Pet Steps',
        value: ['Add Variation', 'Small', 'Medium', 'Large', 'Extra Large'],
      }]
    }, {
      value: 'Colting & Shoes',
      label: 'Colting & Shoes',
      children: [{
        label: 'Pet Jackets',
        value: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'Big']
      }, {
        label: 'Pet Tops',
        value: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'Big']
      }, {
        label: 'Pet Dresses',
        value: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'Big']
      }, {
        label: 'Pet Hat & Wigs',
        value: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'Big']
      }, {
        label: 'Pet Booties',
        value: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'Big']
      }, {
        label: 'Pet Shoes',
        value: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'Big']
      }, {
        label: 'Pet Neckwear',
        value: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'Big']
      }, {
        label: 'Pet Bows and Bells',
        value: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', 'Big']
      }]
    }, {
      value: 'Carriers & House',
      label: 'Carriers & House',
      children: [{
        label: 'Pet Houses',
        value: ['Add Variation'],
      }, {
        label: 'Aquariums & Tank Decor',
        value: ['Add Variation'],
      }, {
        label: 'Nests & Bags',
        value: ['Add Variation'],
      }, {
        label: 'Pet Slings',
        value: ['Add Variation'],
      }, {
        label: 'Bird Cages',
        value: ['Add Variation'],
      }, {
        label: 'Pet Totes',
        value: ['Add Variation'],
      }, {
        label: 'Pet Crates & Kennels',
        value: ['Add Variation'],
      }, {
        label: 'Coops',
        value: ['Add Variation'],
      }]
    }]
  }, {
    value: 'Furniture',
    label: 'Furniture',
    children: [{
      value: 'Living Room',
      label: 'Living Room',
      children: [{
        label: 'Drawer Pulls & Knobs',
        value: ['Add Variation'],
      }, {
        label: 'Coffee & End Tables',
        value: ['Add Variation'],
      }, {
        label: 'Chairs & Ottomans',
        value: ['Add Variation'],
      }, {
        label: 'Floor Cushions',
        value: ['Add Variation'],
      }]
    }, {
      value: 'Dinning Room',
      label: 'Dinning Room',
      children: [{
        label: 'Kitchen & Dinning Tables',
        value: ['Add Variation'],
      }, {
        label: 'Dining Chairs',
        value: ['Add Variation'],
      }, {
        label: 'Stools & Banquettes',
        value: ['Add Variation'],
      }, {
        label: 'Buffets & China Cabinets',
        value: ['Add Variation'],
      }]
    }, {
      value: 'Bedroom',
      label: 'Bedroom',
      children: [{
        label: 'Dressers & Armoires',
        value: ['Add Variation'],
      }, {
        label: 'Vanities & Nightstands',
        value: ['Add Variation'],
      }, {
        label: 'Beds & Headboards',
        value: ['Add Variation', 'One size', '2 Persons', '3 Person', '4 Person', 'Extra Single',
          'Single', 'Double', 'Super King', 'King', 'Queen'],
      }, {
        label: 'Steps & Stools',
        value: ['Add Variation'],
      }]
    }, {
      value: 'Kids Furniture',
      label: 'Kids Furniture',
      children: [{
        label: 'Desks, Tables & Chairs',
        value: ['Add Variation'],
      }, {
        label: 'Bean Bag Chairs',
        value: ['Add Variation'],
      }, {
        label: 'Steps & Stools',
        value: ['Add Variation'],
      }, {
        label: 'Toddlers Beds',
        value: ['Add Variation', 'Toddler'],
      }]
    }]
  }];

// colors with of the product

const colorsOfProducts = [
  {
    value: 'Clothing',
    label: 'Clothing',
    children: [{
      value: 'Mens',
      label: 'Mens',
      children: [{
        label: 'Jackets',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Coffe',],
      }, {
        label: 'Jumpers',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Coffe',],
      }, {
        label: 'Costumes',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Coffe',],
      }],
    }, {
      value: 'Womens',
      label: 'Womens',
      children: [{
        label: 'Dresses',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Coffe',],
      }, {
        label: 'Tops',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Coffe',],
      }, {
        label: 'Skirts',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Coffe',],
      }, {
        label: 'Jackets & Coats',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Coffe',],
      }, {
        label: 'Trousers & Pants',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Coffe',],
      }, {
        label: 'Jumpers',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Coffe',],
      }, {
        label: 'Costumes',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Coffe',],
      }],
    }]
  },
  {
    value: 'Shoes',
    label: 'Shoes',
    children: [{
      value: 'Mens',
      label: 'Mens',
      children: [{
        label: 'Sneakers & Athletic Shoes',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Boots',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Sandals',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Slippers',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Loafers & Slip Ons',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Oxfords & Wingtips',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }],
    }, {
      value: 'Womens',
      label: 'Womens',
      children: [{
        label: 'Sandals',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Boots',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Sneakers & Athletic Shoes',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Slip Ons',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Pumps',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Slippers',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Clogs & Mules',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Oxfords & Tie Shoes',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }, {
        label: 'Costume Shows',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Pink', 'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown",]
      }],
    }]
  },
  {
    value: 'Bags & Purses',
    label: 'Bags & Purses',
    children: [{
      value: 'Handbags',
      label: 'Handbags',
      children: [{
        label: 'Shoulder bags',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
      }, {
        label: 'Clutches & Evening Bags',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
      }, {
        label: 'Crossbody Bags',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
      }, {
        label: 'Top HandleBags',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
      }]
    }, {
      value: 'Wallets & Money Clips',
      label: 'Wallets & Money Clips',
      children: [{
        label: 'Wallets',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
      }, {
        label: 'Business Card Cases',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
      }, {
        label: 'Money Clips',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
      }]
    }, {
      value: 'Electronic Cases',
      label: 'Electronic Cases',
      children: [{
        label: 'Phone Cases',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
      }, {
        label: 'Laptop Sleeves',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
      }, {
        label: 'Tablet & E-Reader Cases',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
      }, {
        label: 'Camera Bags',
        value: ['Yellow', 'Light Green', 'Green', ' Army Green', "Orange", 'Blue', 'Light Blue', 'Dark Blue', 'Navy Blue',
          'Black', "Multi Color", 'Kahki', 'Maroon', 'Charcoal', "Purple", 'White', 'Off White', 'Ash White',
          'Ash Grey', 'Grey', "light Grey", 'Dark Grey', 'Silver', "Magenta", 'Rose Red', 'Red', 'Beige', 'Coffe',
          'Brown', 'Camel Brown', "Chocolate Brown", 'Gold', 'Pink', 'Hot Pink', "Cream"]
      }]
    }]
  },
  {
    value: 'Jwellery',
    label: 'Jwellery',
    children: [{
      value: 'Body Jwellery',
      label: 'Body Jwellery',
      children: [{
        label: 'Hair Jwellery',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Anklets',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Nose Rings & Studs',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Gauge & Plug Earring',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Toe Rings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }]
    }, {
      value: 'Bracelets',
      label: 'Bracelets',
      children: [{
        label: 'Woven & Braided Bracelets',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Beaded Bracelets',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Charm Bracelets',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Cuff Bracelets',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }]
    }, {
      value: 'Earring',
      label: 'Earring',
      children: [{
        label: 'Ear Jackets & Climber',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Dangle & Drop Earrings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Stud Earrings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Hoop Earrings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Clip-On Earrings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Chandelier Earrings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Screw Back Earrings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }]
    }, {
      value: 'Necklaces',
      label: 'Necklaces',
      children: [{
        label: 'Pendants',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Beaded Necklaces',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Charm Necklaces',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Chokers',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Crystal Necklaces',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Chains',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Monogram & Name Necklaces',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Lockets',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Bib Necklaces',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }]
    }, {
      value: 'Rings',
      label: 'Rings',
      children: [{
        label: 'Wedding & Engagement',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Signet Rings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Statement Rings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Bands',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Solitaire Rings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Stackable Rings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Multi-Stone Rings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Midi Rings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }, {
        label: 'Triplet & Double Rings',
        value: ['Silver', 'Golden', 'Gold', "Rose Gold", "Black", "Multi Color", 'White', "Antique White", 'Off White',
          "Light Blue", 'Blue', "Rose Red", 'Red', "Pink", 'Green', "Purple", "Brown", "Yellow", "Maroon", 'Grey', 'Orange',
          'Bronze', 'Beige', "Champagen", 'Coffe', "Neutral"]
      }]
    }]
  }, {
    value: 'Decor',
    label: 'Decor',
    children: [{
      value: 'Wall Decor',
      label: 'Wall Decor',
      children: [{
        label: 'Wall Hangings',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Wall Decals & Murals',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Wallpapers',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Wall Stencils',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }, {
      value: 'Decorative Cushions',
      label: 'Decorative Cushions',
      children: [{
        label: 'Cushions',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }, {
      value: 'Picture Frames',
      label: 'Picture Frames',
      children: [{
        label: 'Frames',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }, {
      value: 'Candles & Holders',
      label: 'Candles & Holders',
      children: [{
        label: 'Candles',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Candle Holders',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Wax Melts',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Incense',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }]
  }, {
    value: 'Pets',
    label: 'Pets',
    children: [{
      value: 'Collars & Leashes',
      label: 'Collars & Leashes',
      children: [{
        label: 'Pet Collars & Jwellery',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet ID Tags',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Leashes',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Harnesses & Backpacks',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }, {
      value: 'Furniture',
      label: 'Furniture',
      children: [{
        label: 'Pet Beds & Cots',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Hammocks',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Play Furniture',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Steps',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }, {
      label: 'Colting & Shoes',
      value: 'Colting & Shoes',
      children: [{
        label: 'Pet Jackets',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Tops',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Dresses',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Hat & Wigs',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Booties',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Shoes',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Neckwear',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Bows and Bells',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }, {
      label: 'Carriers & House',
      value: 'Carriers & House',
      children: [{
        label: 'Pet Houses',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Aquariums & Tank Decor',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Nests & Bags',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Slings',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Bird Cages',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Totes',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Pet Crates & Kennels',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Coops',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }]
  }, {
    value: 'Furniture',
    label: 'Furniture',
    children: [{
      value: 'Living Room',
      label: 'Living Room',
      children: [{
        label: 'Drawer Pulls & Knobs',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Coffee & End Tables',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Chairs & Ottomans',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Floor Cushions',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }, {
      value: 'Dinning Room',
      label: 'Dinning Room',
      children: [{
        label: 'Kitchen & Dinning Tables',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Dining Chairs',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Stools & Banquettes',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Buffets & China Cabinets',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }, {
      value: 'Bedroom',
      label: 'Bedroom',
      children: [{
        label: 'Dressers & Armoires',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Vanities & Nightstands',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Beds & Headboards',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Steps & Stools',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }, {
      label: 'Kids Furniture',
      value: 'Kids Furniture',
      children: [{
        label: 'Desks, Tables & Chairs',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Bean Bag Chairs',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Steps & Stools',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }, {
        label: 'Toddlers Beds',
        value: ['Beige', 'Black', "Blue", "Bronze", "Brown", "Clear", "Copper", "Gold", "Grey", "Green", "Orange", "Pink",
          "Purple", "Rainbow", "Red", "Rose Gold", "Silver", "White Yellow"]
      }]
    }]
  }];

let variValues = [];

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class PriceInput extends React.Component {
  handleNumberChange = e => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    this.triggerChange({ number });
  };

  handleCurrencyChange = currency => {
    this.triggerChange({ currency });
  };

  triggerChange = changedValue => {
    const { onChange, value } = this.props;
    if (onChange) {
      onChange({
        ...value,
        ...changedValue,
      });
    }
  };
  render() {
    const { size, value } = this.props;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={value.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={value.currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="pkr">PKR</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  }
}


class EcommerceForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: [],
      previewVisible: false,
      previewImage: '',
      data: "",
      btnDisabeld: false,
      mgs: '',
      loader: false,
      objectId: '',
      product: '',
      category: [],
      sizes: [],
      quantity: 0,
      price: { number: 0, currency: 'pkr' },
      salePrice: { number: 0, currency: 'pkr' },
      materialType: '',
      description: '',
      color: [],
      productData: "",
      goProductDetailPage: false,
      producId: '',
      imageList: [],
      renderSizes: [],
      renderColors: [],
      skuId: '',
      date: '',
      time: '',
      shopId: '',
      shopName: '',
      visible: false,
      showWidth: false,
      showHeight: false,
      showVariations: false,
      hide: false,
      variationTypeOne: '',
      variationTypeTwo: '',
      variationTypeOneUnit: '',
      variationTypeTwoUnit: '',
      addVariationVal: '',
      variationUnitValueOne: '',
      variationUnitValueTwo: '',
      addMultiValueOne: [],
      addMultiValueTwo: [],
      emptyInput1: false,
      emptyInput2: false,
      columns: [],
      dataForVariation: [],
      variationPrices: [],
      cheakVariValidation: false

    }
  }

  componentDidMount() {
    let data = this.props.data;

    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    let min = new Date().getMinutes();
    const sec = new Date().getSeconds();

    if (data._id != undefined) {
      this.setState({
        product: data.product,
        category: data.categories,
        sizes: data.sizes,
        price: data.price,
        salePrice: data.salePrice,
        materialType: data.materialType,
        description: data.description,
        data: data.color,
        quantity: data.quantity,
        objectId: data._id,
        data: data,
        imageList: data.images,
        shopId: data.shopId,
        shopName: data.shopName
      })
    }
    else if (data._id == undefined) {
      this.setState({
        data: data,
        shopId: data.shopId,
        shopName: data.shopTitle,
        date: year + '-' + month + '-' + date,
        time: hours + ':' + min + ':' + sec,
      })
    }
  }

  handleSubmit = e => {
    const { variationPrices, cheakVariValidation } = this.state;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        if (variationPrices && variationPrices.length > 0) {
          console.log('if condition true')
          console.log(variationPrices, 'variationPrices if condition true')
          for (var i = 0; i < variationPrices.length; i++) {
            if (variationPrices[i].Pricing == '0') {
              this.setState({
                cheakVariValidation: true
              })
            }
          }
          // if (cheakVariValidation != true) {
          //   this.setState({
          //     loader: true,
          //     btnDisabeld: true,
          //     cheakVariValidation: false
          //   })
          //   this.genrateskuid(values)
          // }
        }
        else if (cheakVariValidation != true) {
          console.log('else condition true')
          this.setState({
            loader: true,
            btnDisabeld: true,
            cheakVariValidation: false
          })
          this.genrateskuid(values)
        }
      }
    });
  }

  //select sizes & colors respectively with product category
  onChangeGetSizes = (values) => {
    let sizesWithCategory;
    let colorsWithCategory;
    for (var i = 0; i < sizesOfProducts.length; i++) {
      if (values[0] == sizesOfProducts[i].value) {
        let value = sizesOfProducts[i].children
        for (var j = 0; j < value.length; j++) {
          if (values[1] == value[j].value) {
            let sizes = value[j].children;
            for (var k = 0; k < sizes.length; k++) {
              if (values[2] == sizes[k].label) {
                sizesWithCategory = sizes[k].value
                let lengthOfTheArray = sizesWithCategory.length;
                for (var l = 0; l < sizesWithCategory.length; l++) {
                  if (sizesWithCategory[l] == "Add Variation") {
                    if (lengthOfTheArray == 1) {
                      sizesWithCategory = []
                      this.setState({
                        showWidth: true,
                        showHeight: true
                      })
                    }


                  }
                  else {
                    this.setState({
                      showWidth: false,
                      showHeight: false
                    })
                  }
                }
              }
            }
          }
        }
      }
    }

    for (var i = 0; i < colorsOfProducts.length; i++) {
      if (values[0] == colorsOfProducts[i].value) {
        let value = colorsOfProducts[i].children
        for (var j = 0; j < value.length; j++) {
          if (values[1] == value[j].value) {
            let colors = value[j].children;
            for (var k = 0; k < colors.length; k++) {
              if (values[2] == colors[k].label) {
                colorsWithCategory = colors[k].value

              }
            }
          }
        }
      }
    }
    this.setState({
      renderSizes: sizesWithCategory,
      renderColors: colorsWithCategory
    })
  }

  //user select add variation through sizes check boxes
  onChangePickSizes = (values) => {
    let variation = values.indexOf('Add Variation')
    console.log(values, 'values')
    if (variation != -1) {
      this.setState({
        showWidth: true,
        showHeight: true
      })
    }
    else if (variation == -1) {
      this.setState({
        showWidth: false,
        showHeight: false,
        showVariations: false
      })
    }
  }

  //user add the variation not for one size the product but multiple
  showVariation = () => {
    this.setState({
      showHeight: false,
      showWidth: false,
      showVariations: true
    })
  }

  //show height & width inupt & units
  showWidthHieght = () => {
    this.setState({
      showHeight: true,
      showWidth: true,
      showVariations: false
    })
  }

  //hide height & width inupt & units 
  hideInputs = () => {
    this.setState({
      showHeight: false,
      showWidth: false,
      hide: true
    })
  }

  //show height & width inupt & units 
  showInputs = () => {
    this.setState({
      showHeight: true,
      showWidth: true,
      hide: false
    })
  }

  //pick variation from modal of the variation
  onChangeVariation = (values) => {
    const { variationTypeOne } = this.state;
    if (variationTypeOne == '') {
      this.setState({
        variationTypeOne: values,
        addVariationVal: ''
      })
    }
    else {
      this.setState({
        variationTypeTwo: values,
        addVariationVal: ''
      })
    }
  }

  //delete variation 
  deleteVariOne = () => {
    this.setState({
      variationTypeOne: '',
      variationTypeOneUnit: '',
      addMultiValueOne: []
    })
  }

  deleteVariTwo = () => {
    this.setState({
      variationTypeTwo: '',
      variationTypeTwoUnit: '',
      addMultiValueTwo: []
    })
  }

  //on change variation unit
  onChangeVariationUnits = (values) => {
    const { addMultiValueOne } = this.state;
    let arr = [];

    this.setState({
      variationTypeOneUnit: values
    })
    if (addMultiValueOne) {
      if (addMultiValueOne.length > 0) {
        for (var i = 0; i < addMultiValueOne.length; i++) {
          addMultiValueOne[i].firstVariationUnit = values;
          arr.push(addMultiValueOne[i])
        }
      }
      this.setState({
        addMultiValueOne: arr
      })
    }
  }

  onChangeVariationUnitsTwo = (values) => {
    const { addMultiValueTwo } = this.state;
    let arr = [];
    this.setState({
      variationTypeTwoUnit: values
    })
    if (addMultiValueTwo) {
      if (addMultiValueTwo.length > 0) {
        for (var i = 0; i < addMultiValueTwo.length; i++) {
          addMultiValueTwo[i].secondVariationUnit = values;
          arr.push(addMultiValueTwo[i])
        }
      }
      this.setState({
        addMultiValueTwo: arr
      })
    }
  }

  //edit variation unit 
  editvariOneUnit = () => {
    this.setState({
      variationTypeOneUnit: ''
    })
  }

  editvariTwoUnit = () => {
    this.setState({
      variationTypeTwoUnit: ''
    })
  }

  //unit input value
  inputValueOne = (e) => {
    this.setState({
      variationUnitValueOne: e.target.value
    })
  }

  inputValueTwo = (e) => {
    this.setState({
      variationUnitValueTwo: e.target.value
    })
  }

  //add multiple value of the variation 1st value
  addmultipleUnitValOne = () => {
    const { addMultiValueOne, variationTypeOneUnit, variationUnitValueOne } = this.state;

    if (variationUnitValueOne != '') {
      let obj = {
        firstVariationUnitValue: variationUnitValueOne,
        firstVariationUnit: variationTypeOneUnit,
      }
      let arr = []
      arr.push(obj)
      arr = [...addMultiValueOne, ...arr]
      this.setState({
        addMultiValueOne: arr,
        variationUnitValueOne: '',
        emptyInput1: false
      })
    }
    else {
      this.setState({
        emptyInput1: true
      })
    }
  }

  //add multiple value of the variation 2nd value
  addmultipleUnitValTwo = () => {
    const { addMultiValueTwo, variationTypeTwoUnit, variationUnitValueTwo } = this.state;
    if (variationUnitValueTwo != '') {
      let obj = {
        secondVariationUnitValue: variationUnitValueTwo,
        secondVariationUnit: variationTypeTwoUnit,
      }
      let arr = []
      arr.push(obj)
      arr = [...addMultiValueTwo, ...arr]
      this.setState({
        addMultiValueTwo: arr,
        variationUnitValueTwo: '',
        emptyInput2: false
      })
    }
    else {
      this.setState({
        emptyInput2: true
      })
    }
  }

  // remove first variations value from vari 
  removeFirstVariVal = (val) => {
    const { addMultiValueOne } = this.state;
    let arrVal = []
    for (var i = 0; i < addMultiValueOne.length; i++) {
      if (addMultiValueOne[i].firstVariationUnitValue != val.firstVariationUnitValue) {
        arrVal.push(addMultiValueOne[i])
      }
    }
    this.setState({
      addMultiValueOne: arrVal
    })
  }

  // remove second variations value from vari 
  removeSecondVariVal = (val) => {
    const { addMultiValueTwo } = this.state;
    let arrVal = []
    for (var i = 0; i < addMultiValueTwo.length; i++) {
      if (addMultiValueTwo[i].secondVariationUnitValue != val.secondVariationUnitValue) {
        arrVal.push(addMultiValueTwo[i])
      }
    }
    this.setState({
      addMultiValueTwo: arrVal
    })
  }

  //variation price get 
  onChangeVariationPrice = (key, firstVariUnit, firstVariValue, secondVariUnit, secondVariValue, priceValue) => {

    // creating obj of the variation values
    let obj = {
      key: key,
      firstVariUnit: firstVariUnit,
      firstVariValue: firstVariValue,
      secondVariUnit: secondVariUnit,
      secondVariValue: secondVariValue,
      price: priceValue.target.value
    }
    variValues[key] = obj;

    this.setState({
      variationPrices: variValues

    })
  }
  /*Modal Open*/
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    const { variationTypeOne, addMultiValueOne, variationTypeTwo, addMultiValueTwo } = this.state;
    let columns = []
    let obj1 = {
      title: variationTypeOne,
      dataIndex: variationTypeOne,
    }
    columns.push(obj1)
    let obj2 = {
      title: variationTypeTwo,
      dataIndex: variationTypeTwo,
    }
    columns.push(obj2)
    let obj3 = {
      title: "Pricing",
      dataIndex: "Pricing",
    }
    columns.push(obj3)

    let key = 0;
    let arr = [];
    let key1 = 0;
    let arr1 = []
    for (var i = 0; i < addMultiValueOne.length; i++) {
      for (var j = 0; j < addMultiValueTwo.length; j++) {
        let obj = {
          key: key,
          [variationTypeOne]: addMultiValueOne[i].firstVariationUnitValue,
          [variationTypeTwo]: addMultiValueTwo[j].secondVariationUnitValue,
          Pricing: <Input prefix="Rs. " onChange={this.onChangeVariationPrice.bind(this, key,
            variationTypeOne, addMultiValueOne[i].firstVariationUnitValue,
            variationTypeTwo, addMultiValueTwo[j].secondVariationUnitValue)} />,
        }
        key++
        arr.push(obj)
      }
    }
    for (var k = 0; k < addMultiValueOne.length; k++) {
      for (var l = 0; l < addMultiValueTwo.length; l++) {
        let obj = {
          key1: key1,
          [variationTypeOne]: addMultiValueOne[k].firstVariationUnitValue,
          [variationTypeTwo]: addMultiValueTwo[l].secondVariationUnitValue,
          Pricing: "0"
        }
        key1++
        arr1.push(obj)
      }
    }

    this.setState({
      visible: false,
      columns: columns,
      dataForVariation: arr,
      variationPrices: arr1
    });

  };

  handleCancelModal = e => {
    this.setState({
      visible: false,
    });
  };
  /*Modal End*/


  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      return callback();
    }
    callback('Price must greater than zero!');
  };

  validateNumber(rule, value, callback) {
    if (isNaN(value)) {
      callback('Please type Numbers');
    } else {
      callback()
    }
  }


  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  deleteImage(e) {
    let { imageList } = this.state;
    imageList = imageList.filter((elem) => elem !== e)
    this.setState({ imageList: imageList })
  }

  //genrate SKU Of the product
  genrateskuid = async (values) => {
    const { skuId } = this.state;
    if (skuId == '') {
      let res = await HttpUtils.get('getYourProduct');
      let sku;
      if (res) {
        let totalProducts = res.content.length + 1000;
        let productWord = values.product.slice(0, 2).toLowerCase();
        let categoryWord = values.categories[0].slice(0, 2) + values.categories[1].slice(0, 2) + values.categories[2].slice(0, 2);
        sku = categoryWord + productWord + totalProducts;
        this.setState({
          skuId: sku
        })
      }
    }
    this.funcForUpload(values)
  }

  //upload all images of cloudnary
  async funcForUpload(values, key) {
    const { fileList } = this.state;
    Promise.all(fileList.map((val) => {
      return this.uploadFile(val).then((result) => {
        return result.body.url
      })
    })).then((results) => {
      this.postData(values, results, key)
    })
  }


  //--------------function for cloudnary url ---------------//
  uploadFile = (files) => {
    const image = files.originFileObj
    const cloudName = 'dxk0bmtei'
    const url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload'
    const timestamp = Date.now() / 1000
    const uploadPreset = 'toh6r3p2'
    const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'U8W4mHcSxhKNRJ2_nT5Oz36T6BI'
    const signature = sha1(paramsStr)
    const params = {
      'api_key': '878178936665133',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    }
    return new Promise((res, rej) => {
      let uploadRequest = superagent.post(url)
      uploadRequest.attach('file', image)
      Object.keys(params).forEach((key) => {
        uploadRequest.field(key, params[key])
      })

      uploadRequest.end((err, resp) => {
        err ? rej(err) : res(resp);
      })
    })
  }

  //-----------------cloudnary function end ------------------//

  //post data on api
  async postData(values, response, key) {
    const { shopId, shopName, objectId, imageList, skuId, date, time, variationPrices } = this.state;

    var user = JSON.parse(localStorage.getItem('user'));
    console.log(values, 'values')

    let objOfProduct = {
      product: values.product,
      categories: values.categories,
      sizes: values.sizes,
      quantity: values.quantity,
      price: values.price,
      salePrice: values.salePrice,
      materialType: values.materialType,
      description: values.description,
      color: values.color,
      width: values.width,
      widthUnit: values.widthUnit,
      height: values.height,
      heightUnit: values.heightUnit,
      variationPrices: variationPrices,
      images: [...imageList, ...response],
      shopId: shopId,
      shopName: shopName,
      user_Id: user._id,
      profileId: user.profileId,
      objectId: objectId,
      productSKU: skuId,
      date: date,
      time: time
    }
    let responseEcommreceData = await HttpUtils.post('postYourProduct', objOfProduct)
    console.log(objOfProduct, 'objOfProduct')
    console.log(responseEcommreceData, 'responseEcommreceData')

    // if (responseEcommreceData.code == 200) {
    //   if (objectId == '') {
    //     this.setState({
    //       loader: false,
    //       btnDisabeld: false,
    //       mgs: responseEcommreceData.mgs,
    //       productData: responseEcommreceData.content,
    //       producId: responseEcommreceData.content._id,
    //       goProductDetailPage: true
    //     })

    //   }
    //   else {
    //     this.setState({
    //       loader: false,
    //       btnDisabeld: false,
    //       mgs: responseEcommreceData.mgs,
    //       productData: responseEcommreceData.content[0],
    //       producId: responseEcommreceData.content[0]._id,
    //       goProductDetailPage: true
    //     })
    //   }
    //   let msg = 'Your product is saved successfully.'
    //   this.openNotification(msg)
    // }
    // else {
    //   this.setState({
    //     loader: false,
    //     btnDisabeld: false,
    //     mgs: responseEcommreceData.mgs,
    //     goProductDetailPage: false,
    //   })
    // }
    // let msg = 'Your product is not submit successfully.'
    // this.openNotification(msg)
  }

  //open notification
  openNotification(msg) {
    notification.open({
      message: 'Success ',
      description: msg
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const { previewVisible, previewImage, fileList, btnDisabeld, mgs, loader, product, category, sizes, quantity, salePrice,
      price, materialType, description, color, productData, goProductDetailPage, producId, imageList, renderSizes, renderColors,
      showWidth, showHeight, showVariations, hide, variationTypeOne, variationTypeOneUnit, variationTypeTwo, addVariationVal,
      variationTypeTwoUnit, variationUnitValueOne, variationUnitValueTwo, addMultiValueOne, addMultiValueTwo, emptyInput1, emptyInput2,
      columns, dataForVariation, cheakVariValidation } = this.state;
    if (goProductDetailPage) {
      return (
        <Redirect to={{ pathname: `/products_DetailStyle/${producId}`, state: productData }} />
      )
    }
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const uploadedImages = (
      <div style={{ height: '100%' }}>
        {imageList && imageList.map((elem) => {
          return (
            <div className='insideDiv'>
              <a>
                <img alt='img1' src={elem} style={{ height: '100%' }} />
                <span>
                  <a><Icon title='Preview file' onClick={() =>
                    this.handlePreview(elem)} type="eye" theme="outlined"
                    style={{
                      zIndex: 10, transition: 'all .3s', fontSize: '16px',
                      width: '30px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'
                    }} />
                  </a>
                  <Icon title='Remove file' type='delete'
                    onClick={this.deleteImage.bind(this, elem)}
                    style={{
                      zIndex: 10, transition: 'all .3s', fontSize: '16px',
                      width: '30px', color: 'rgba(255, 255, 255, 0.85)', margin: '0 4px'
                    }} />
                </span>
              </a>
            </div>
          )
        })}
      </div>
    )

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

    return (
      <div>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          {/*Product Name*/}
          <Form.Item label="Product Name">
            {getFieldDecorator('product', {
              initialValue: product,
              rules: [{
                required: true,
                message: 'Please enter your product Title!',
                whitespace: true
              }],
            })(<Input />)}
          </Form.Item>

          {/*Category*/}
          <Form.Item label="Select Category">
            {getFieldDecorator('categories', {
              initialValue: category,
              rules: [
                {
                  type: 'array',
                  required: true,
                  message: 'Please select your product category'
                },
              ],
            })(<Cascader options={categories} onChange={this.onChangeGetSizes} />)}
          </Form.Item>

          {/*Sizes*/}
          {renderSizes && renderSizes.length > 0 && <Form.Item label="Select Sizes">
            {getFieldDecorator('sizes', {
              initialValue: sizes,
              rules: [{
                required: true,
                message: 'Please select your sizes!',
                type: 'array'
              }],
            })(
              <Checkbox.Group style={{ width: '100%' }} onChange={this.onChangePickSizes}>
                <Row>
                  {renderSizes && renderSizes.map((elem, key) => {
                    return (
                      <Col span={8}>
                        <Checkbox value={elem}>{elem}</Checkbox>
                      </Col>
                    )
                  })}
                </Row>
              </Checkbox.Group>
            )}
          </Form.Item>
          }

          {/*Color*/}
          {renderColors && renderColors.length > 0 && <Form.Item label="Product Color">
            {getFieldDecorator('color', {
              initialValue: color,
              rules: [
                { required: true, message: 'Please select your Colors!', type: 'array' },
              ],
            })(
              <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                  {renderColors && renderColors.map((elem, key) => {
                    return (
                      <Col span={8}>
                        <Checkbox value={elem}>{elem}</Checkbox>
                      </Col>
                    )
                  })}
                </Row>
              </Checkbox.Group>
            )}
          </Form.Item>
          }

          {/*Width*/}
          {showWidth &&
            <Form.Item label="Select Width">
              {getFieldDecorator('width', {
                // initialValue: width,
                rules: [{
                  required: true,
                  message: 'Please enter product width!',
                  whitespace: true
                },
                { validator: this.validateNumber.bind(this) }],
              })(<Input placeholder="Input Width" />)}


            </Form.Item>
          }
          {showWidth &&
            <Form.Item label="Select Width Unit">
              {getFieldDecorator('widthUnit', {
                // initialValue: width,
                rules: [{
                  required: true,
                  message: 'Please enter product width Unit!',
                  whitespace: true
                }],
              })(
                <Select
                  style={{ width: '32%' }}
                  onChange={this.handleUnits}
                >
                  <Option value="Centimeter">Centimeter</Option>
                  <Option value="Feet">Feet</Option>
                  <Option value="Inches">Inches</Option>
                  <Option value="Meter">Meter</Option>
                  <Option value="Milimeter">Milimeter</Option>
                  <Option value="Yards">Yards</Option>
                </Select>
              )}
            </Form.Item>
          }

          {/*height*/}
          {showHeight &&
            <Form.Item label="Select Height">
              {getFieldDecorator('height', {
                // initialValue: height,
                rules: [{
                  whitespace: true,
                  required: true,
                  message: 'Please enter product height!',
                },
                { validator: this.validateNumber.bind(this) }]

              })(<Input placeholder="Input Height" />)}
            </Form.Item>
          }
          {showHeight &&
            <Form.Item label="Select Height Unit">
              {getFieldDecorator('heightUnit', {
                // initialValue: width,
                rules: [{
                  required: true,
                  message: 'Please enter product height Unit!',
                  whitespace: true
                }],
              })(
                <Select
                  style={{ width: '32%' }}
                  onChange={this.handleUnits}
                >
                  <Option value="Centimeter">Centimeter</Option>
                  <Option value="Feet">Feet</Option>
                  <Option value="Inches">Inches</Option>
                  <Option value="Meter">Meter</Option>
                  <Option value="Milimeter">Milimeter</Option>
                  <Option value="Yards">Yards</Option>
                </Select>
              )}
            </Form.Item>
          }
          {showWidth && showHeight &&
            < span onClick={this.showVariation}>Add Variation on the product</span>
          }
          {showWidth && showHeight &&
            <p onClick={this.hideInputs}>Hide height & width</p>
          }
          {hide &&
            <p onClick={this.showInputs}>Add height & width</p>
          }
          {showVariations &&
            < span onClick={this.showWidthHieght}>Hide Variation Show Width Height</span>
          }
          {/*Variation*/}
          {showVariations &&
            <div>
              <h4>Variations</h4>
              <p>Add available options like sizes. Buyers will choose from these during checkout.</p>
              <div>
                <Button type="primary" onClick={this.showModal}>
                  Add Variation
              </Button>
                <Modal
                  title="Add Variation"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancelModal}
                >
                  <div>List all the options you offer. Buyers will see them in the order they are here.</div>
                  {variationTypeOne && <div>
                    <span>{variationTypeOne}</span>
                    {variationTypeOneUnit && <span onClick={this.editvariOneUnit}>Edit unit</span>}
                    <span onClick={this.deleteVariOne}>Delete</span>

                    {variationTypeOneUnit == '' &&
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select Unit"
                        optionFilterProp="children"
                        onChange={this.onChangeVariationUnits}
                        filterOption={(input, option) =>
                          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="Centimeter">Centimeter</Option>
                        <Option value="Feet">Feet</Option>
                        <Option value="Inches">Inches</Option>
                        <Option value="Meter">Meter</Option>
                        <Option value="Milimeter">Milimeter</Option>
                        <Option value="Yards">Yards</Option>
                      </Select>
                    }

                    {variationTypeOneUnit != '' &&
                      <div>
                        <Input value={variationUnitValueOne} onChange={this.inputValueOne}
                          type="Number" suffix={variationTypeOneUnit}
                          className={emptyInput1 ? "error" : ''} />
                        <button onClick={this.addmultipleUnitValOne}>Add</button>
                        {addMultiValueOne && addMultiValueOne.map((elem, key) => {
                          return (<div>
                            <span>{elem.firstVariationUnitValue + " " +
                              elem.firstVariationUnit}</span>
                            <button onClick={this.removeFirstVariVal.bind(this, elem)}>X</button>
                          </div>)
                        })}
                      </div>}

                  </div>}

                  {variationTypeTwo && <div>
                    <span>{variationTypeTwo}</span>
                    {variationTypeTwoUnit && <span onClick={this.editvariTwoUnit}>Edit unit</span>}
                    <span onClick={this.deleteVariTwo}>Delete</span>

                    {variationTypeTwoUnit == '' &&
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select Unit"
                        optionFilterProp="children"
                        onChange={this.onChangeVariationUnitsTwo}
                        filterOption={(input, option) =>
                          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="Centimeter">Centimeter</Option>
                        <Option value="Feet">Feet</Option>
                        <Option value="Inches">Inches</Option>
                        <Option value="Meter">Meter</Option>
                        <Option value="Milimeter">Milimeter</Option>
                        <Option value="Yards">Yards</Option>
                      </Select>
                    }
                    {variationTypeTwoUnit != '' &&
                      <div>
                        {/* {addMultiValueOne &&} */}
                        <Input value={variationUnitValueTwo} onChange={this.inputValueTwo}
                          type="Number" suffix={variationTypeTwoUnit}
                          className={emptyInput2 ? "error" : ''} />
                        <button onClick={this.addmultipleUnitValTwo}>Add</button>
                        {addMultiValueTwo && addMultiValueTwo.map((elem, key) => {
                          return (<div>
                            <span>{elem.secondVariationUnitValue + " " +
                              elem.secondVariationUnit}</span>
                            <button onClick={this.removeSecondVariVal.bind(this, elem)}>X</button>
                          </div>)
                        })}
                      </div>
                    }

                  </div>}

                  {variationTypeOne != '' && variationTypeTwo != '' ?
                    null :
                    <div>
                      <div>Add Variation</div>
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Choose variation type"
                        optionFilterProp="children"
                        onChange={this.onChangeVariation}
                        value={addVariationVal}
                        filterOption={(input, option) =>
                          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="">Choose variation type</Option>
                        <Option value="Height">Height</Option>
                        <Option value="Width">Width</Option>
                      </Select>
                    </div>
                  }
                </Modal>
              </div>

              {/*Variation table*/}
              <Table columns={columns} dataSource={dataForVariation} />
              {cheakVariValidation && <div>Please add the prices of variations or hide variation</div>}
            </div>
          }

          {/*Quantity*/}
          <Form.Item label="Select Quantity">
            {getFieldDecorator('quantity', {
              initialValue: quantity,
              rules: [{
                required: true,
                message: 'Please Enter Quantity',
                // validator: this.validateNumber 
              }],
            })(
              <InputNumber min={0} max={5000} />
            )}

          </Form.Item>

          {/*Pricing*/}
          <Form.Item label="Price">
            {getFieldDecorator('price', {
              initialValue: price,
              rules: [{
                required: true,
                message: 'Please Enter Price',
                validator: this.checkPrice
              }],
            })(<PriceInput />)}
          </Form.Item>

          {/*Sale Pricing*/}
          <Form.Item label="Sale Price">
            {getFieldDecorator('salePrice', {
              initialValue: salePrice,
              // rules: [{ 
              //   validator: this.validateNumber 
              // }],
            })(<PriceInput />)}
          </Form.Item>

          {/*Material type*/}
          <Form.Item label="Material Type">
            {getFieldDecorator('materialType',
              {
                initialValue: materialType,
                rules: [{
                  message: 'Please enter your material type!',
                  whitespace: true
                }],
              })(<Input />)}
          </Form.Item>

          {/*Description*/}
          <Form.Item label="Description">
            {getFieldDecorator('description', {
              initialValue: description,
              rules: [{
                required: true,
                message: 'Please enter your description!',
                whitespace: true
              }],
            })(<TextArea rows={4} />)}
          </Form.Item>
          {/*Uplaod Images*/}

          <Form.Item label="upload">
            {getFieldDecorator('images', {
              rules: [{
                required: true,
                message: 'Please upload your Images!',
                whitespace: true
              }],
            })
              (
                <div className="clearfix">
                  {uploadedImages}
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                  >
                    {imageList && imageList.length + fileList.length >= 8 ? null : uploadButton}
                  </Upload>
                  <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                  </Modal>
                </div>)}
          </Form.Item>

          {/*Delivery Options*/}
          <div className="delivery-section">
                <div className="">
                  <h4><strong>Delivery</strong></h4>
                  <p> Set clear and realistic delivery expectations for shoppers by providing accurate processing time.</p>
                </div>
                <Form.Item>
                  
                </Form.Item>
          </div>


          {/*Button*/}
          {btnDisabeld ?
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button disabled type="primary" htmlType="submit">
                Submit
          </Button>
            </Form.Item>
            :
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          }

          <div className="col-md-12">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              {mgs != "" && <p style={{ marginTop: '20px', fontWeight: 'bold', color: 'red' }}>{mgs}</p>}
            </div>
            <div className="col-md-4"></div>
          </div>
          {loader && <div style={{ textAlign: 'center', marginLeft: '-100px', marginBottom: '15px' }}>
            <Spin indicator={antIcon} />
          </div>}
        </Form>
      </div >
    );
  }
}

const WrappedEcommerceForm = Form.create({ name: 'register' })(EcommerceForm);

export default WrappedEcommerceForm;


