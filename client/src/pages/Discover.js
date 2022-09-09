import axios from 'axios'
import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'

//EXTERNAL_MEAL_API_BASE_URL= https://api.edamam.com/api/recipes/v2
//https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=92b738b0&app_key=69817bebee2a425a8a0f5dd7d1699690&ingr=5-8

export default function Discover() {
  const [mealsByIngredient, setMealsByIngredient] = useState()
  const [selectedIngredient, setSelectedIngredient] =
    useState(`sliced%20turkey`)
  const [mealId, setMealId] = useState()

  const discoverRecipesByIngredient = async () => {
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${selectedIngredient}&app_id=92b738b0&app_key=69817bebee2a425a8a0f5dd7d1699690`
    )
    console.log(res.data.hits)
    setMealsByIngredient(res.data.hits)
  }

  useEffect(() => {
    discoverRecipesByIngredient()
  }, [selectedIngredient])

  const getMealId = (uri) => {
    let i = uri.length
    while (i > 0) {
      if (uri.charAt(i) === '_') {
        console.log(uri.substring(i + 1))
        setMealId(uri.substring(i + 1))
        break
      }
    }
  }

  return mealsByIngredient ? (
    <div>
      <h1>Discover Recipes</h1>
      <div className="discover-recipe-list">
        {mealsByIngredient.map((recipe) => (
          <div
            key={recipe.recipe.label}
            className="discover-meal-card"
            onClick={() => getMealId(recipe.recipe.uri)}
          >
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} className="discover-image" />
            <button>Add to favorites</button>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}
