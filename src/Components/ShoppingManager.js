import React, { Component } from 'react';
const shoppingCards = require('../data').shopping;

class ShoppingManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeCardIndex: 0,
      carouselCardCount: 3
    }
  }

  getNextCard = () => {
    return(e) => {
      let { activeCardIndex } = this.state;
      this.setState({ activeCardIndex: activeCardIndex < 2 ? (activeCardIndex + 1) : 0 })
    }
  };

  getPreviousCard = () => {
    return(e) => {
      let { activeCardIndex, carouselCardCount } = this.state;
      this.setState({ activeCardIndex: !!activeCardIndex ? (activeCardIndex - 1) : (carouselCardCount - 1) })
    }
  };



  render(){
    let { activeCardIndex } = this.state;
    const shoppingBoxStyle = {
      background: `url(${shoppingCards[activeCardIndex].image_source})`,
      height: '385px',
      zIndex: '1'
    };

    return (
      <div className="shopping-manager-wrapper">
        <div
          className="shopping-card"
          key={`${activeCardIndex}-shopping-card`}
          style={shoppingBoxStyle}>
          <div className="carousel-arrow-forward clickable" onClick={this.getNextCard()}>
            <span className="glyphicon glyphicon-chevron-right"></span>
          </div>
          <div className="shopping-card-box">
            <h2 className="box-title">{shoppingCards[activeCardIndex].title}</h2>
            <p className="box-description">{shoppingCards[activeCardIndex].desc}</p>
            <button className="action-button">{shoppingCards[activeCardIndex].button_text}</button>
          </div>
          <div className="carousel-arrow-backward clickable" onClick={this.getPreviousCard()}>
            <span className="glyphicon glyphicon-chevron-left"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default ShoppingManager;
