import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { BASE_URL } from '../services/api'

export default function NewIngredient() {
  let navigate = useNavigate()
  let initialIngredientValues = {
    userId: 1,
    name: '',
    units: '',
  }
  const [newIngredientValues, setNewIngredientValues] = useState(initialIngredientValues)

  const handleIngredientChange = (e) => {
    setNewIngredientValues({ ...newIngredientValues, [e.target.name]: e.target.value })
  }

  const handleIngredientSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/ingredients`, newIngredientValues)
    setNewIngredientValues(initialIngredientValues)
    navigate('/mypantry')
  }
  return (
    <div className="createpostpage">
      <form className="createpost" onSubmit={handleIngredientSubmit}>
        <div>
          <label htmlFor="name">Ingredient Name</label>
          <input
            onChange={handleIngredientChange}
            name="name"
            type="text"
            value={newIngredientValues.name}
            required
          />
        </div>
        <div>
          <label htmlFor="units">Units</label>
          <input
            onChange={handleIngredientChange}
            name="units"
            type="text"
            value={newIngredientValues.units}
            required
          />
        </div>
        <button>Create Ingredient</button>
      </form>
    </div>
  )
}
