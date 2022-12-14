import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { BASE_URL } from '../services/api'

export default function NewRecipe() {
  let navigate = useNavigate()
  let initialRecipeValues = {
    userId: 1,
    recipeName: '',
    imageUrl: '',
    directions: ''
  }
  const [newRecipeValues, setNewRecipeValues] = useState(initialRecipeValues)

  const handleRecipeChange = (e) => {
    setNewRecipeValues({ ...newRecipeValues, [e.target.name]: e.target.value })
  }

  const handleRecipeSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/recipes`, newRecipeValues)
    setNewRecipeValues(initialRecipeValues)
    navigate('/mypantry')
  }
  return (
    <div className="create-recipe-page">
      <form onSubmit={handleRecipeSubmit}>
        <div className="create-input-field">
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            onChange={handleRecipeChange}
            name="recipeName"
            type="text"
            value={newRecipeValues.recipeName}
            required
          />
        </div>
        <div className="create-input-field">
          <label htmlFor="image url">Image Url</label>
          <input
            onChange={handleRecipeChange}
            name="imageUrl"
            type="text"
            value={newRecipeValues.imageUrl}
            required
          />
        </div>

        <div className="create-input-field">
          <label htmlFor="directions">Directions</label>
          <input
            onChange={handleRecipeChange}
            type="text"
            name="directions"
            value={newRecipeValues.directions}
            required
          />
        </div>
        <button>Create Recipe</button>
      </form>
    </div>
  )
}
