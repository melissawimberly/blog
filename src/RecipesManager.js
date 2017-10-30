import React, { Component } from 'react';
import SingleRecipe from './SingleRecipe';

class RecipesManager extends React.Component {
  getRecipes = () => {
    let { recipes } = this.props;
    console.log({poridgeObj: recipes.poridge});
    return recipes.map((recipe, index) => {
      return <SingleRecipe key={index} recipe={recipe}/>
    })
  }
  render(){
    return (
      <div className="recipes-manager-wrapper">
        { this.getRecipes() }
      </div>
    )
  }
}

export default RecipesManager;
