const recipes = [
  {
    name: 'poridge',
    title: 'Pear Porridge',
    short_desc: 'Best bloody poridge ever',
    long_desc: 'My best thing ever!'
  },
  {
    name: 'soup',
    title: 'White Bean Soup',
    short_desc: 'Autumnal Soup',
    long_desc: 'Great Soup'
  },
  {
    name: 'pecan_granola',
    title: 'Maple Pecan Granola',
    short_desc: 'Great Granola',
    long_desc: 'Granola for any occasion'
  },
  {
    name: 'black_bean_burger',
    title: 'Black Bean Burg',
    short_desc: 'Summer Griller',
    long_desc: 'Grill up these, and they are sure to delight'
  },
  {
    name: 'sweet_potato_chips',
    title: 'Sweet Potato Chips',
    short_desc: 'Best Sweet Potato Chips',
    long_desc: 'Pair these with the Black Bean Burger'
  },
  {
    name: 'guacamole',
    title: 'Original Guacamole',
    short_desc: 'Guac It Out',
    long_desc: 'This guac is so good, you could charge extra for it!'
  }
];

const shopping = [
  {
    name: 'energy_balls_shop',
    img: 'energyballs',
    title: 'Shop Our Energy Balls',
    desc: 'Our Energy Balls are a delicious on-the-go snack, made from simple, natural ingredients.',
    button_text: 'Shop our range!'
  },
  {
    name: 'delis',
    img: 'delis',
    title: 'Come see us at the delis',
    desc: 'Weve just launced a delicious new menu and cant wait to hear what you think!',
    button_text: 'Check out our menus!'
  },
  {
    name: 'energy_balls_recipe',
    img: 'ballrecipe',
    title: 'Try making our energy balls at home',
    desc: 'Our Energy Balls could not be easier to make. Click below for our recipes.',
    button_text: 'Recipes'
  }
];

const locations = [
  {
    name: 'kitchen_counter',
    title: 'The Kitchen Counter',
    img: 'kitchen_counter',
    link: 'www.blah.com'
  },
  {
    name: 'weighhouse_st',
    title: 'Weighhouse Street',
    img: 'weighhouse_st',
    link: 'www.blah.com'
  },
  {
    name: 'seymour_place',
    title: 'Seymour Place',
    img: 'seymour_place',
    link: 'www.blah.com'
  }
]

const books = [
  {
    name: 'with_friends',
    type: 'book',
    title: 'Deliciously Ella With Friends',
    available_countries: ['UK', 'US'],
  },
  {
    name: 'everyday',
    type: 'book',
    title: 'Deliciously Ella Everyday',
    available_countries: ['UK', 'US', 'CA'],
  },
  {
    name: 'deliciously app',
    type: 'app',
    title: 'Deliciously Ella',
    available_software: ['iOS', 'Android']
  }

]

module.exports = {
    recipes: recipes,
    shopping: shopping,
    locations: locations,
    books: books
};
