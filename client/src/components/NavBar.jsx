import { Link } from "react-router-dom"
import pantry from '../assets/kitchen-cabinet.png'
import discover from '../assets/search.png'
import planner from '../assets/planner.png'

export default function NavBar () {
  return (
    <div className="navbar">
      <Link to='/mypantry'><img src={pantry} className='nav-icon'/></Link>
      <Link to='/discover'><img src={discover} className='nav-icon'/></Link>
      <Link to='/planner'><img src={planner} className='nav-icon'/></Link>
    </div>
  )
}