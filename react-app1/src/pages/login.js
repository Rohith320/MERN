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
	<div className='login-wrapper'>
		<fieldset title='Please login'>
			<form>
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
			</form>
		</fieldset>
		</div>
//   <div>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

//   <body class="text-center">

// <main class="form-signin">
//   <form>
//     <h1>Student Result Management System</h1>
//     <h1 class="h3 mb-3 fw-normal">LOGIN</h1>

//     <div class="form-floating">
//       <input type="text" class="form-control" id="floatingInput" placeholder="XYZ101"/>
//       <label for="floatingInput">User ID</label>
//     </div>
//     <div class="form-floating">
//       <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
//       <label for="floatingPassword">Password</label>
//     </div>

//     <div class="checkbox mb-3">
//       <label>
//         <input type="checkbox" value="remember-me"/> Remember me
//       </label>
//     </div>
//     <button class="w-100 btn btn-lg btn-primary" type="submit">Confirm</button>
//     <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
//   </form>
// </main>



// </body>
//   </div>
  )
}