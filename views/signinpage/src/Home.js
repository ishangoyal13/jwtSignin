import { useState } from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'


const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials : 'include',
        body: JSON.stringify({
          "email": email,
          "password": password
        }),
      }
      const response = await fetch(
        'http://localhost:8000/signin',
        requestOptions
      )

      if (response.status === 200 && response.ok === true) {
        navigate("/welcome")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group text-left mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="form-group text-left mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={e => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="d-grid gap-2 text-left mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handleUserLogin(e)}
            >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Home;