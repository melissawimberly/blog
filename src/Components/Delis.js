import React, { Component } from 'react';
const locations = require('../data').locations;

class Delis extends React.Component {
  getLocations = () => {
    return locations.map((location, index) => {
      return (
        <div className="location-wrapper" key={`${location}-${index}`}>
          <div className="location-text-box">
            <div className="location-title">{location.title}</div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="deli-locations-wrapper">
        {this.getLocations()}
      </div>
    )
  }
}

export default Delis;
