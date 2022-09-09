import { Link } from "react-router-dom"

export default function NavBar () {
  return (
    <div className="navbar">
      <Link to='/mypantry'>My Pantry</Link>
      <Link to='/discover'>Discover Recipes</Link>
      <Link to='/planner'>Weekly Planner</Link>
    </div>
  )
}