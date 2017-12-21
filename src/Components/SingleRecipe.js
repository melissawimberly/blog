import React, { Component } from 'react';

class SingleRecipe extends React.Component {

  showHoverDetails = () => {
    return(e) => {

    }
  }

  render(){
    let { recipe } = this.props;
    let { title, short_desc, long_desc, difficulty_level, total_time, prep_time, image_source } = recipe;

    return (
      <div className="recipe-wrapper clickable" key={`${title}-recipe`}>
        <div className="recipe-image-wrap" onMouseOver={this.showHoverDetails()}>
          <img className="recipe-image" src={image_source} />
          <div className="hover-image-text-wrapper">
            <p className="hover-image-textr">Prep: {prep_time}</p>
            <p className="hover-image-textr">Total: {total_time}</p>
            <p className="hover-image-textr">Difficulty: {difficulty_level}</p>
          </div>
        </div>
        <div className="recipe-title">{title}</div>
      </div>
    )
  }
}

export default SingleRecipe;
