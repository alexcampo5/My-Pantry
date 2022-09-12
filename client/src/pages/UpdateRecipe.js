import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function UpdateRecipe(props) {
  const navigate = useNavigate()
  let initialRecipeValues = {
    recipeName: props.recipe.recipeName,
    imageUrl: props.recipe.imageUrl,
    directions: props.recipe.directions
  }

  const [updatedRecipe, setUpdatedRecipe] = useState(initialRecipeValues)

  const handleRecipeChange = (e) => {
    setUpdatedRecipe({ ...updatedRecipe, [e.target.name]: e.target.value })
  }

  const handleRecipeUpdate = async (e) => {
    e.preventDefault()
    let res = await axios.put(
      `http://localhost:3001/recipes/${props.recipe.id}`,
      updatedRecipe
    )
    console.log(props.recipe.id)
    console.log(res)
    setUpdatedRecipe(initialRecipeValues)
    props.setVisible(false)
    navigate('/mypantry')
  }
  return (
    <div className="updatepostpage">
      <form className="updatepost" onSubmit={handleRecipeUpdate}>
        <div>
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            onChange={handleRecipeChange}
            name="recipeName"
            type="text"
            value={updatedRecipe.recipeName}
            required
          />
        </div>
        <div>
          <label htmlFor="image url">Image Url</label>
          <input
            onChange={handleRecipeChange}
            name="imageUrl"
            type="text"
            value={updatedRecipe.imageUrl}
            required
          />
        </div>

        <div>
          <label htmlFor="directions">Directions</label>
          <input
            onChange={handleRecipeChange}
            type="text"
            name="directions"
            value={updatedRecipe.directions}
            required
          />
        </div>
        <button>Update Post</button>
      </form>
    </div>
  )
}
