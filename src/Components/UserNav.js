import React, { Component } from 'react';

class UserNav extends React.Component {
  render(){
    return (
      <div className="user-nav-wrapper">
        <ul className="user-nav-list">
          <li className="user-nav-list-item list-item-account clickable">Account</li>
          <li className="user-nav-list-item list-item-basket clickable">Basket</li>
        </ul>
      </div>
    )
  }
}

export default UserNav;
