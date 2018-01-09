import React, { Component } from 'react';
import UserNav from './UserNav';
import MainNav from './MainNav';
import RecipesManager from './RecipesManager';
import ShoppingManager from './ShoppingManager';
import Delis from './Delis';
import Books from './Books';
import NewsletterBanner  from './NewsletterBanner';
import Footer  from './Footer';


class Home extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'recipe'
    }
  }

  getPageBody = () => {
    console.log('getting tab');
  }

  render() {
    return(
      <div className="home-container-wrapper">
        {/* <UserNav /> */}
        {/* <MainNav /> */}
        <RecipesManager />
        <ShoppingManager />
        <Delis />
        <Books />
        <NewsletterBanner />
        <Footer />
      </div>
    )
  }
}

export default Home;
