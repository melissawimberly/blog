import React, { Component } from 'react';

class SingleRecipe extends React.Component {
  render(){
    let { recipe } = this.props;
    let { title, short_desc, long_desc, image_source } = recipe;

    return (
      <div className="recipe-wrapper clickable" key={`${title}-recipe`}>
        <div className="recipe-image-wrap">
          <img className="recipe-image" src={image_source} />
        </div>
        <div className="recipe-title">{title}</div>
      </div>
    )
  }
}

export default SingleRecipe;
