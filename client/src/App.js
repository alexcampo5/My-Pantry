import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import MyPantry from './pages/MyPantry'
import Discover from './pages/Discover'
import Planner from './pages/Planner'
import MealDetails from './pages/MealDetails'
import NewPost from './pages/NewRecipe'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BASE_URL } from './services/api'

function App() {
  const [user, setUser] = useState(null)
  const [userIdLogin, setUserIdLogin] = useState(null)
  const [selectedIngredient, setSelectedIngredient] = useState()
  const [mealsByIngredient, setMealsByIngredient] = useState()

  const getUserData = async () => {
    //const res = await axios.get(`${BASE_URL}/users/${userIdLogin}`)
    console.log(BASE_URL)
    const res = await axios.get(`${BASE_URL}/users/`)
    setUser(res.data)
  }

  const discoverRecipesByIngredient = async () => {
    selectedIngredient.replace(' ', '%20')
    const res = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${selectedIngredient}&app_id=92b738b0&app_key=69817bebee2a425a8a0f5dd7d1699690`
    )
    console.log(res.data.hits)
    setMealsByIngredient(res.data.hits)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return user ? (
    <div className="App">
      <h1 className="title">MyPantry</h1>
      <Routes>
        <Route
          path="/login"
          element={<Login loginId={setUserIdLogin} userIdLogin={userIdLogin} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/mypantry"
          element={<MyPantry setSelectedIngredient={setSelectedIngredient} />}
        />
        <Route
          path="/discover"
          element={
            <Discover
              selectedIngredient={selectedIngredient}
              setSelectedIngredient={setSelectedIngredient}
              mealsByIngredient={mealsByIngredient}
              setMealsByIngredient={setMealsByIngredient}
              discoverRecipesByIngredient={discoverRecipesByIngredient}
            />
          }
        />
        <Route path="/discover/:mealId" element={<MealDetails />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/newrecipe" element={<NewPost />} />
      </Routes>
      <NavBar />
    </div>
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  )
}

export default App
