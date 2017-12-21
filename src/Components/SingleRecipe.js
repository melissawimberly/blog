import React, { Component } from 'react';

class SingleRecipe extends React.Component {
  render(){
    let { recipe } = this.props;
    // let recipe = Object.values(this.props.recipe)[0];
    let { title, short_desc, long_desc } = recipe;

    return (
      <div className="recipe-wrapper" key={`${title}-recipe`}>
        <div className="recipe-title">{title}</div>
        <div className="recipe-short-desc">{short_desc}</div>
        <div className="recipe-long-desc">{long_desc}</div>
      </div>
    )
  }
}

export default SingleRecipe;
