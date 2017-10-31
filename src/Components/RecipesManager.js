import React, { Component } from 'react';
import SingleRecipe from './SingleRecipe';
const recipes = require('../data').recipes;

class RecipesManager extends React.Component {

  getRecipes = () => {
    let recipeLimit = 6;
    return recipes.slice(0,recipeLimit).map((recipe, index) => {
      return <SingleRecipe key={index} recipe={recipe}/>
    })
  }
  render(){
    return (
      <div className="recipes-manager-wrapper">
        { this.getRecipes() }
        <div className="more-action-buttons-wrapper">
          <button>Read More News</button>
          <button>Read More Recipes</button>
        </div>
      </div>
    )
  }
}

export default RecipesManager;
