const recipes = [
  {
    name: 'raspberry_chocolate_chip_cookies',
    title: 'Raspberry Chocolate Chip Cookies',
    short_desc: 'Best bloody poridge ever',
    long_desc: 'My best thing ever!',
    prep_time: '25M',
    total_time: '25M',
    difficulty_level: 'easy',
    image_source: 'https://i0.wp.com/s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/12/17093523/d-e1513587728310.jpg?zoom=2&fit=1797%2C1797&ssl=1'
  },
  {
    name: 'energy_balls_cacao_pb',
    title: 'Cacao and Raspberry Peanut Butter Energy Balls',
    short_desc: 'Best bloody poridge ever',
    long_desc: 'My best thing ever!',
    prep_time: '25M',
    total_time: '25M',
    difficulty_level: 'easy',
    image_source: 'https://i2.wp.com/s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/12/08103531/c-e1512737447592.jpg?zoom=2&fit=1802%2C1802&ssl=1'
  },
  {
    name: 'alexandras_spiced_roasted_squash_with_crispy_kale_wild_mushroom_and_tahini_dressing',
    title: 'Alexandras Spiced Roasted Squash with Crispy Kale, Wild Mushrroms and Tahini Dressing',
    short_desc: 'Best bloody poridge ever',
    long_desc: 'My best thing ever!',
    prep_time: '25M',
    total_time: '25M',
    difficulty_level: 'easy',
    image_source: 'https://i2.wp.com/s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/11/21145721/e-4-e1511276414297.jpg?zoom=2&fit=1783%2C1783&ssl=1'
  },
  {
    name: 'almond_pesto_sprouts',
    title: 'Almond Pesto Sprouts',
    short_desc: 'Best bloody poridge ever',
    long_desc: 'My best thing ever!',
    prep_time: '25M',
    total_time: '25M',
    difficulty_level: 'easy',
    image_source: 'https://i2.wp.com/s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/11/16170023/c4-e1510936047143.jpg?zoom=2&fit=1802%2C1802&ssl=1'
  },
  {
    name: 'roses_shredded_sprout_cranberry_and_vegan_bacon_salad',
    title: 'Roses Shredded Sprout Cranberry and Vegan Bacon Salad',
    short_desc: 'Best bloody poridge ever',
    long_desc: 'My best thing ever!',
    prep_time: '25M',
    total_time: '25M',
    difficulty_level: 'easy',
    image_source: 'https://i1.wp.com/s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/11/16125818/g-e1510938503222.jpg?zoom=2&fit=1800%2C1800&ssl=1'
  },
  {
    name: 'smoky_vegan_bacon',
    title: 'Smoky Vegan Bacon!',
    short_desc: 'Best bloody poridge ever',
    long_desc: 'My best thing ever!',
    prep_time: '25M',
    total_time: '25M',
    difficulty_level: 'easy',
    image_source: 'https://i0.wp.com/s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/11/16125337/a3-2-e1510936253570.jpg?zoom=2&fit=1788%2C1788&ssl=1'
  },
  {
    name: 'poridge',
    title: 'Pear Porridge',
    short_desc: 'Best bloody poridge ever',
    long_desc: 'My best thing ever!',
    image_source: 'https://i0.wp.com/s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/12/17093523/d-e1513587728310.jpg?zoom=2&fit=1797%2C1797&ssl=1'
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
    image_source: 'https://i2.wp.com/s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/06/13105905/43A5299.jpg?fit=1400%2C584&ssl=1',
    title: 'Shop Our Energy Balls',
    desc: 'Our Energy Balls are a delicious on-the-go snack, made from simple, natural ingredients.',
    button_text: 'Shop our range!'
  },
  {
    name: 'delis',
    image_source: 'https://i0.wp.com/s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/06/13105913/DeliciouslyElla-Website-banner-R1-2.jpg?fit=1400%2C584&ssl=1',
    title: 'Come see us at the delis',
    desc: 'Weve just launced a delicious new menu and cant wait to hear what you think!',
    button_text: 'Check out our menus!'
  },
  {
    name: 'energy_balls_recipe',
    image_source: 'https://i0.wp.com/s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/06/13105919/DELICIOUSLY_ELLA_ENERGY_BALLS_49.jpg?fit=1400%2C584&ssl=1',
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
    desc: 'The Kitchen Counter Locale',
    button_text: 'The Kitchen Counter',
    link: 'www.blah.com'
  },
  {
    name: 'weighhouse_st',
    title: 'Weighhouse Street',
    img: 'weighhouse_st',
    desc: 'The Weighhouse Locale',
    button_text: 'Weighhouse Street',
    link: 'www.blah.com'
  },
  {
    name: 'seymour_place',
    title: 'Seymour Place',
    img: 'seymour_place',
    desc: 'The Seymour Place Locale',
    button_text: 'Seymour Place',
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
