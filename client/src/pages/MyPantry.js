import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NewIngredient from '../components/NewIngredient'
import UpdateRecipe from './UpdateRecipe'
import trashIcon from '../assets/trash.png'
import searchIcon from '../assets/search.png'
import { BASE_URL } from '../services/api'

export default function MyPantry(props) {
  const navigate = useNavigate()
  const [favoriteMeals, setFavoriteMeals] = useState()
  const [myIngredients, setMyIngredients] = useState()
  const [visible, setVisible] = useState(false)

  const getFavoriteRecipes = async () => {
    const res = await axios.get(`${BASE_URL}/recipes/`)
    console.log(res.data)
    setFavoriteMeals(res.data)
  }

  const getIngredients = async () => {
    const res = await axios.get(`${BASE_URL}/ingredients/`)
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
    await axios.delete(`${BASE_URL}/recipes/${id}`)
    navigate('/mypantry')
  }

  const deleteIngredient = async (id) => {
    await axios.delete(`${BASE_URL}/ingredients/${id}`)
    navigate('/mypantry')
  }

  const searchMealsByIngredient = async (ingredient) => {
    props.setSelectedIngredient(ingredient)
    navigate('/discover')
  }

  const navigateNewIngredient = () => {
    setVisible(!visible)
  }

  return favoriteMeals && myIngredients ? (
    <div className="my-pantry-page">
      <div className="my-pantry-button-container">
        <button onClick={navigateNewRecipe}>New Recipe</button>
        <button onClick={navigateNewIngredient}>New Ingredient</button>
      </div>
      <div className="ingredient-container">
        <h1>My Ingredients</h1>
        {myIngredients.map((ingredient) => (
          <div
            key={ingredient.name}
            className="individual-ingredient-container"
          >
            <h2>{ingredient.name}</h2>
            <div className="trash-search-container">
              <img
                src={trashIcon}
                className="trash-icon"
                onClick={() => deleteIngredient(ingredient.id)}
                alt="delete"
              />
              <img
                src={searchIcon}
                className="trash-icon"
                onClick={() => searchMealsByIngredient(ingredient.name)}
                alt="search"
              />
            </div>
          </div>
        ))}
        <div style={visible ? { display: 'block' } : { display: 'none' }}>
          <NewIngredient />
        </div>
      </div>
      <div className="favorite-meal-container">
        <h1>My Favorite Meals</h1>
        {favoriteMeals.map((meal) => (
          <div key={meal.name}>
            <h2>{meal.recipeName}</h2>
            <img src={meal.imageUrl} className="recipe-image" alt="recipe" />
            {meal.directions.substring(0, 4) === 'http' ? (
              <a href={meal.directions} target="_blank">
                <button>See details</button>
              </a>
            ) : (
              <p>{meal.directions}</p>
            )}
            <button onClick={() => deleteRecipe(meal.id)}>Delete Recipe</button>
            <button onClick={showEditRecipe}>Edit Recipe</button>
            <div style={visible ? { display: 'block' } : { display: 'none' }}>
              <UpdateRecipe recipe={meal} setVisible={setVisible} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}
