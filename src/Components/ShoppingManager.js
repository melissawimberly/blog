import React, { Component } from 'react';
const shoppingCards = require('../data').shopping;

class ShoppingManager extends React.Component {

  getActiveCard = () => {
    return shoppingCards.map((card, index) => {
      return (
        <div className="shopping-card" key={`${index}-shopping-card`}>
          <div className="shopping-card-box">
            <div className="box-title">{card.title}</div>
            <div className="box-description">{card.desc}</div>
            <button className="box-button">{card.button_text}</button>
          </div>
        </div>
      )
    })
  };


  render(){
    return (
      <div className="shopping-manager-wrapper">
        SHOPPING SECTION
        { this.getActiveCard() }
      </div>
    )
  }
}

export default ShoppingManager;
