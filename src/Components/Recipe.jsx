import React from 'react'
import recipe from "./recipe.css"
export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];

export default function () {
  return (
    <>
     
        
         
        {recipes.map((recipes,index ) => (
          <ul>
          <li>Name: {recipes.name}</li>
          <li className='in'>{recipes.ingredients}</li> 
          <li >{recipes.ingredients[0]}</li> 
          <li >{recipes.ingredients[1]}</li>
          <li >{recipes.ingredients[2]}</li>
          <li >{recipes.ingredients[3]}</li>
          <li >{recipes.ingredients[4]}</li>
          </ul>

        ))}
    </>
  )}

