import React, { Component } from 'react';

class UserNav extends React.Component {
  render(){
    return (
      <div className="user-nav-wrapper">
        <ul className="user-nav-list">
          <li>Account</li>
          <li>Basket</li>
        </ul>
      </div>
    )
  }
}

export default UserNav;
