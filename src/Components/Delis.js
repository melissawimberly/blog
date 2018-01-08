import React, { Component } from 'react';
const locations = require('../data').locations;

class Delis extends React.Component {

  getLocations = () => {
    // const backgroundStyle = {
    //   background: `url(${shoppingCards[activeCardIndex].image_source})`,
    // };

    return locations.map((location, index) => {
      return (
        <div className="deli-card" key={`${location}-${index}`} /*style={backgroundStyle}*/>
          <div className="deli-text-box">
            <h1 className="deli-title">{location.title}</h1>
            <h4 className="deli-see-more-text">See More</h4>
          </div>
        </div>
      )
    })
  }

  render(){
    return (
      <div className="deli-locations-wrapper">
        { this.getLocations() }
      </div>
    )
  }
}

export default Delis;
