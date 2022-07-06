import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import '../style.css';


export default function Login({ setToken }) {
  const [userID, setUserID] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
		console.log("I am here")
		event.preventDefault()

		const response = await fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userID,
				password,
			}),
		})

		const data = await response.json()
		console.log(data)
		if (data.message === "Login Successfull") {
			localStorage.setItem('user',data.user)
			alert('Login successful')
			window.location.href = '/profile'
		} else {
			alert('Please check your UserName and password')
		}
	}

  return(
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form onSubmit={loginUser}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserID(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" onClick={loginUser}>Login</button>
        </div>
      </form>
    </div>
  )
}