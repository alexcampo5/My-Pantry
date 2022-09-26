import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../services/api'

export default function Login(props) {
  const navigate = useNavigate()
  const [users, setUsers] = useState()
  const [userLoginValues, setUserLoginValues] = useState()

  const handleLoginChange = (e) => {
    setUserLoginValues({ ...userLoginValues, [e.target.name]: e.target.value })
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    // let properUser = users.find((user) => {
    //   user.username === userLoginValues.username &&
    //     user.passwordDigest === userLoginValues.passwordDigest
    // })
    // props.loginId(properUser.id)
    navigate('/mypantry')
  }

  const getAllUsers = async () => {
    let res = await axios.get(`${BASE_URL}/users`)
    setUsers(res.data)
  }

  console.log(users)
  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <div className="login">
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleLoginChange}
            name="username"
            type="text"
            value={userLoginValues.username}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleLoginChange}
            name="passwordDigest"
            type="password"
            value={userLoginValues.passwordDigest}
            required
          />
        </div>
        <button>Log in</button>
      </form>
    </div>
  )
}
