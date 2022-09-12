import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

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
    let res = await axios.post(`http://localhost:3001/recipes`, newRecipeValues)
    setNewRecipeValues(initialRecipeValues)
    navigate('/mypantry')
  }
  return (
    <div className="createpostpage">
      <form className="createpost" onSubmit={handleRecipeSubmit}>
        <div>
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            onChange={handleRecipeChange}
            name="recipeName"
            type="text"
            value={newRecipeValues.recipeName}
            required
          />
        </div>
        <div>
          <label htmlFor="image url">Image Url</label>
          <input
            onChange={handleRecipeChange}
            name="imageUrl"
            type="text"
            value={newRecipeValues.imageUrl}
            required
          />
        </div>

        <div>
          <label htmlFor="directions">Directions</label>
          <input
            onChange={handleRecipeChange}
            type="text"
            name="directions"
            value={newRecipeValues.directions}
            required
          />
        </div>
        <button>Create Post</button>
      </form>
    </div>
  )
}
