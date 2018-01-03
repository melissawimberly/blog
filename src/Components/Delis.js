import React, { Component } from 'react';
const locations = require('../data').locations;

class Delis extends React.Component {

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

  // getLocations = () => {
  //   return locations.map((location, index) => {
  //     return (
  //       <div className="location-wrapper" key={`${location}-${index}`}>
  //         <div className="location-text-box">
  //           <div className="location-title">{location.title}</div>
  //         </div>
  //       </div>
  //     )
  //   })
  // }
  render(){
    let { activeCardIndex } = this.state;
    const deliBoxStyle = {
      // background: `url(${shoppingCards[activeCardIndex].image_source})`,
      height: '385px',
      zIndex: '1'
    };
    
    return (
      <div className="deli-locations-wrapper">
        <div
          className="deli-card"
          key={`${activeCardIndex}-deli-card`}
          style={deliBoxStyle}>
          <div className="carousel-arrow-forward" onClick={this.getNextCard()}>
            <span className="glyphicon glyphicon-chevron-right"></span>
          </div>
          <div className="deli-card-box">
            <h2 className="box-title">{locations[activeCardIndex].title}</h2>
            <p className="box-description">{locations[activeCardIndex].desc}</p>
            <button className="action-button">{locations[activeCardIndex].button_text}</button>
          </div>
          <div className="carousel-arrow-backward" onClick={this.getPreviousCard()}>
            <span className="glyphicon glyphicon-chevron-left"></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Delis;
