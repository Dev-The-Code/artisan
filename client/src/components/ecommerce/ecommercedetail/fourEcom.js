import React, { Component } from 'react';
import './fourEcom.css';
import { Checkbox, Input, Col, Row, Button, Cascader, } from 'antd';


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



class FourEcom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minPrice: '',
      maxPrice: '',
      sizesOfProductWithCategory: [],
      colorsOfProductsWithCategory: []

    }
  }

  onChangeCategory = (values) => {
    let sizesWithCategorys = [];
    let colorsWithCategory;
    for (var i = 0; i < sizesOfProducts.length; i++) {
      if (values[0] == sizesOfProducts[i].value) {
        let value = sizesOfProducts[i].children
        for (var j = 0; j < value.length; j++) {
          if (values[1] == value[j].value) {
            let sizes = value[j].children;
            for (var k = 0; k < sizes.length; k++) {
              if (values[2] == sizes[k].label) {
                let sizesWithCategory = sizes[k].value
                let lengthOfTheArray = sizesWithCategory.length;
                for (var l = 0; l < sizesWithCategory.length; l++) {
                  if (sizesWithCategory[l] == "Add Variation") {
                    if (lengthOfTheArray == 1) {
                      sizesWithCategory = []

                    }
                  }
                  else {
                    sizesWithCategorys.push(sizesWithCategory[l])
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
      sizesOfProductWithCategory: sizesWithCategorys,
      colorsOfProductsWithCategory: colorsWithCategory
    })
    this.props.onChange(values)
  }

  render() {
    const { minPrice, maxPrice, sizesOfProductWithCategory, colorsOfProductsWithCategory } = this.state;
    const { color, location, brandName, serachProductMinToMaxPrice, priceRangeNotGiven } = this.props;
    return (
      <div>
        <div className="" style={{ padding: "15px" }}>
          <h4 style={{ fontWeight: '700' }}>Related Categories</h4>
          {/* <div style={{ marginTop: "0", marginLeft: "38px" }}> */}
          <Cascader
            // value={categoryofProduct}
            style={{ width: '33%' }} options={categories}
            onChange={this.onChangeCategory}
            placeholder="Please select category" />
          {/* </div> */}
          {/* {categories && categories.map((elem, key) => {
            return (
              <div className="">
                <ol onClick={onChange.bind(this, 'categories', elem)}> {elem}

                </ol>
              </div>
            )
          })} */}
        </div>
        {colorsOfProductsWithCategory && colorsOfProductsWithCategory.length > 0 &&
          <div>
            <hr className="filterdivider" />
            <div className="" style={{ display: "grid", padding: "15px" }}>
              <h4 style={{ fontWeight: '700' }}>Color Family</h4>
              <Checkbox.Group style={{ width: '100%' }}
              // onChange={onChangeCheckBoxes}
              >

                <div className="" style={{ display: "grid" }}>
                  {colorsOfProductsWithCategory && colorsOfProductsWithCategory.map((elem, key) => {
                    return (
                      <Row style={{ display: "grid" }}>
                        <Col span={8}>
                          <Checkbox value={elem} >{elem}</Checkbox>
                        </Col>
                      </Row>
                    )
                  })}
                </div>
                {/* )
            })} */}
              </Checkbox.Group>
            </div>
          </div>
        }
        {sizesOfProductWithCategory && sizesOfProductWithCategory.length > 0 &&
          <div>
            <hr className="filterdivider" />
            <div className="" style={{ display: "grid", padding: "15px" }}>
              <h4 style={{ fontWeight: '700' }}>Size</h4>
              <Checkbox.Group style={{ width: '100%' }}
              // onChange={onChangeCheckBoxes}
              >

                <div className="" style={{ display: "grid" }}>
                  {sizesOfProductWithCategory && sizesOfProductWithCategory.map((elem, key) => {
                    return (
                      <Row style={{ display: "grid" }}>
                        <Col span={8}>
                          <Checkbox value={elem} >{elem}</Checkbox>
                        </Col>
                      </Row>
                    )
                  })}
                </div>

              </Checkbox.Group>
            </div>
          </div>
        }
        <hr className="filterdivider" />
        <div className="" style={{ padding: "15px" }}>
          <h4 style={{ fontWeight: '700' }}>Price</h4>
          <div size="large" style={{ marginLeft: '10px' }}>
            <Row gutter={8}>
              <Col span={8}>
                <Input
                  placeholder="Min"
                  onChange={e => this.setState({ minPrice: e.target.value })}
                />
              </Col>
              <Col span={8}>
                <Input
                  // defaultValue="Max" 
                  placeholder="Max"
                  onChange={e => this.setState({ maxPrice: e.target.value })}
                />
              </Col>
              <Col>
                <Button type="primary" icon="caret-right"
                // onClick={this.props.serachProductMinToMaxPrice.bind(this, minPrice, maxPrice)} 
                />
              </Col>
            </Row>
          </div>
          {priceRangeNotGiven ? <div>
            <p>Please Enter Min & Max Price</p>
          </div> : null}
        </div>
        <hr className="filterdivider" />
        {/* <div>
          <h4 style={{ fontWeight: '700' }}>Rating</h4>
          <div style={{ marginLeft: "15px", display: 'grid' }}>
            <Radio> <Rate style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={4.5} /></Radio>
            <Radio> <Rate style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={4} /></Radio>
            <Radio> <Rate style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={3.5} /></Radio>
            <Radio> <Rate style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={3} /></Radio>
            <Radio> <Rate style={{ paddingBottom: '20px', marginTop: "-20px", fontFamily: 'Source Sans Pro, sans-serif' }} allowHalf value={2} /></Radio>
          </div>
        </div> */}

      </div>
    )
  }
}

export default FourEcom;