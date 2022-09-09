import axios from 'axios'
import { useState, useEffect } from 'react'
import RecipeCard from '../components/RecipeCard'
import { useNavigate } from 'react-router-dom'

export default function Discover() {
  const navigate = useNavigate()
  const [mealsByIngredient, setMealsByIngredient] = useState()
  const [selectedIngredient, setSelectedIngredient] = useState()
  const [searchValues, setSearchValues] = useState('')

  const discoverRecipesByIngredient = async () => {
    selectedIngredient.replace(' ', '%20')
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
        return uri.substring(i + 1)
        break
      }
      i--
    }
  }

  const mealDetailsNav = (uri) => {
    let id = getMealId(uri)
    navigate(`/discover/${id}`)
  }

  const handleSearchChange = (e) => {
    setSearchValues(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSelectedIngredient(null)
    setSelectedIngredient(searchValues)
    setSearchValues('')
  }

  return mealsByIngredient ? (
    <div>
      <h1>Discover Recipes</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="discover search"
          value={searchValues}
          placeholder="Search recipes"
          onChange={handleSearchChange}
          className="search"
        />
        <button>Search</button>
      </form>
      <div className="discover-recipe-list">
        {mealsByIngredient.map((recipe) => (
          <div
            key={recipe.recipe.uri}
            className="discover-meal-card"
            onClick={() => mealDetailsNav(recipe.recipe.uri)}
          >
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} className="discover-image" />
            <button>Add to favorites</button>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="discover search"
        value={searchValues}
        placeholder="Search recipes"
        onChange={handleSearchChange}
      />
      <button>Search</button>
    </form>
  )
}
