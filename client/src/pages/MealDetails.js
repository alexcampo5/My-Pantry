import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function MealDetails() {
  let { mealId } = useParams()
  const [mealInfo, setMealInfo] = useState()

  const getMealDetails = async () => {
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2/${mealId}?type=public&app_id=92b738b0&app_key=69817bebee2a425a8a0f5dd7d1699690`
    )
    console.log(res.data)
    setMealInfo(res.data)
  }

  useEffect(() => {
    getMealDetails()
  }, [])

  return mealInfo ? (
    <div className="meal-info">
      <h1>{mealInfo.recipe.label}</h1>
      <img src={mealInfo.recipe.image} className />
      <h3>Ingredients</h3>
      {mealInfo.recipe.ingredientLines.map((line) => (
        <p key={line}>{line}</p>
      ))}
      <a href={mealInfo.recipe.url} target="_blank">
        <button>See full recipe</button>
      </a>
    </div>
  ) : (
    <h1>Loading Meal Info...</h1>
  )
}
