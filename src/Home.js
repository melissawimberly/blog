import React, { Component } from 'react';
import UserNav from './UserNav';
import MainNav from './MainNav';
import RecipesManager from './RecipesManager';

class Home extends React.Component  {
  RECIPES =
      [
        'poridge': {
          title: 'Porridge',
          short_desc: 'Best bloody poridge ever',
          long_desc: 'My best thing ever!',
        },
        'soup': {
          title: 'Soup',
          short_desc: 'Autumnal Soup',
          long_desc: 'Great Soup'
        }
      ]

  render() {
    return(
      <div className="home-container-wrapper">
        <UserNav />
        <MainNav />
        <RecipesManager recipes={this.RECIPES}/>
      </div>
    )
  }
}

export default Home;
