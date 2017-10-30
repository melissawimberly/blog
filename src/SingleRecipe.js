import React, { Component } from 'react';

class RecipesManager extends React.Component {
  render(){
    let { title, short_desc, long_desc } = this.props.recipe;
    console.log({missy: this.props.recipe});
    return (
      <div className="recipe-wrapper">
          <div className="recipe-title">{title}</div>
          <div className="recipe-short-desc">{short_desc}</div>
          <div className="recipe-long-desc">{long_desc}</div>
      </div>
    )
  }
}

export default RecipesManager;
