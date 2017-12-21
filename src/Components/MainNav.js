import React, { Component } from 'react';

class MainNav extends React.Component {
  render(){
    return (
      <div className="main-nav-wrapper">
        <ul className="main-nav-list">
          <li className="user-nav-list-item clickable">About</li>
          <li className="user-nav-list-item clickable">Recipes</li>
          <li className="user-nav-list-item clickable">Blog</li>
          <li className="user-nav-list-item clickable list-item-logo">Deliciously Ella</li>
          <li className="user-nav-list-item clickable">Delis</li>
          <li className="user-nav-list-item clickable">Shop</li>
          <li className="user-nav-list-item clickable">Contact</li>
        </ul>
      </div>
    )
  }
}

export default MainNav;
