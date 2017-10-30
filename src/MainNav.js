import React, { Component } from 'react';

class MainNav extends React.Component {
  render(){
    return (
      <div className="main-nav-wrapper">
        <ul className="main-nav-list">
          <li>About</li>
          <li>Recipes</li>
          <li>Blog</li>
          <li>Delis</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default MainNav;
