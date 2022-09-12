import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UpdateRecipe from './UpdateRecipe'

export default function MyPantry() {
  const navigate = useNavigate()
  const [favoriteMeals, setFavoriteMeals] = useState()
  const [myIngredients, setMyIngredients] = useState()
  const [visible, setVisible] = useState(false)

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

  const navigateNewRecipe = () => {
    navigate('/newrecipe')
  }
  const showEditRecipe = () => {
    setVisible(!visible)
  }

  const deleteRecipe = async (id) => {
    let res = await axios.delete(`http://localhost:3001/recipes/${id}`)
    navigate('/mypantry')
  }

  return favoriteMeals && myIngredients ? (
    <div>
      <button onClick={navigateNewRecipe}>New Recipe</button>
      <button>New Ingredient</button>
      <h1>My Favorite Meals</h1>
      {favoriteMeals.map((meal) => (
        <div key={meal.name}>
          <h2>{meal.recipeName}</h2>
          <img src={meal.imageUrl} className="recipe-image" />
          <p>{meal.directions}</p>
          <button onClick={() => deleteRecipe(meal.id)}>Delete Recipe</button>
          <button onClick={showEditRecipe}>Edit Recipe</button>
          <div style={visible ? { display: 'block' } : { display: 'none' }}>
            <UpdateRecipe recipe={meal} setVisible={setVisible} />
          </div>
        </div>
      ))}
      <h1>My Ingredients</h1>
      {myIngredients.map((ingredient) => (
        <div key={ingredient.name}>
          <h2>{ingredient.name}</h2>
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}
