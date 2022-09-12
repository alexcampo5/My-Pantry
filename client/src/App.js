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

function App() {
  const [user, setUser] = useState(null)
  const [useEffectToggler, setUseEffectToggler] = useState(false)

  const getUserData = async () => {
    const res = await axios.get(`http://localhost:3001/users/`)
    setUser(res.data)
    setUseEffectToggler(true)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return user ? (
    <div className="App">
      <h1>MyPantry</h1>
      <Routes>
        <Route path="/mypantry" element={<MyPantry />} />
        <Route path="/discover" element={<Discover />} />
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
