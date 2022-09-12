import axios from 'axios'
import { useState, useEffect } from 'react'

export default function MyPantry() {
  const [favoriteMeals, setFavoriteMeals] = useState()
  const [myIngredients, setMyIngredients] = useState()

  const getFavoriteRecipes = async () => {
    const res = await axios.get(`http://localhost:3001/recipes/`)
    console.log(res.data)
    setFavoriteMeals(res.data)
  }

  const getIngredients = async () => {
    const res = await axios.get(`http://localhost:3001/ingredients/`)
    console.log(res.data)
    setMyIngredients(res.data)
  }

  useEffect(() => {
    getFavoriteRecipes()
    getIngredients()
  }, [])

  return favoriteMeals ? (
    <div>
      <h1>My Pantry</h1>
      <h1>My Favorite Meals</h1>
      {favoriteMeals.map((meal) => (
        <div>
          <h2>{meal.recipeName}</h2>
          <img src={meal.imageUrl} className="recipe-image" />
          <p>{meal.directions}</p>
        </div>
      ))}
      <h1>My Ingredients</h1>
      {myIngredients.map((ingredient) => (
        <div>
          <h2>{ingredient.name}</h2>
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}
